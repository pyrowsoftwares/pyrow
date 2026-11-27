const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Hostinger Mail API Config (Protected in Edge Function Environment)
const HOSTINGER_MAIL_TOKEN = Deno.env.get("HOSTINGER_MAIL_TOKEN") || "";
const MAILBOX_ID = "ACaeb000dc77e729d4db8fd4b25f51";
const SENDER_EMAIL = "support@pyrow.in";

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { to, displayName, subject, text, html, cc, bcc } = await req.json();

    if (!to || !Array.isArray(to) || to.length === 0) {
      return new Response(JSON.stringify({ error: "Missing 'to' recipient address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload: Record<string, any> = {
      to,
      displayName: displayName || "Pyrow Software",
      subject: subject ? subject.trim() : "Notification from Pyrow Software",
      text: text ? text.trim() : "",
      html: html ? html.trim() : "",
    };

    if (cc && Array.isArray(cc) && cc.length > 0) payload.cc = cc;
    if (bcc && Array.isArray(bcc) && bcc.length > 0) payload.bcc = bcc;

    const hostingerRes = await fetch(
      `https://api.mail.hostinger.com/api/v1/mailboxes/${MAILBOX_ID}/send`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HOSTINGER_MAIL_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (hostingerRes.status === 204 || hostingerRes.status === 200 || hostingerRes.status === 202) {
      return new Response(JSON.stringify({ success: true, status: hostingerRes.status }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const errorBody = await hostingerRes.text();
    console.error("[Hostinger Edge Function] Hostinger API error:", hostingerRes.status, errorBody);

    return new Response(
      JSON.stringify({
        error: `Hostinger Mail returned ${hostingerRes.status}: ${errorBody || hostingerRes.statusText}`,
      }),
      {
        status: hostingerRes.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("[Hostinger Edge Function] Fatal error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
