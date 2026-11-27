/**
 * Pyrow Official Hostinger Mail API Client & Professional Email Templating
 * Dispatches automated confirmations, consultation invites, and direct admin responses
 * from support@pyrow.in via Hostinger Agentic Mail API.
 */

import {
  supabase,
  EnquiryRecord,
  QuotationRecord,
  InvoiceRecord,
  recordEmailLog,
  EmailLogRecord,
} from './supabase';
import { showEmailAlert } from './sweetAlert';

export const HOSTINGER_MAIL_CONFIG = {
  apiBase: 'https://api.mail.hostinger.com/api/v1',
  mailboxResourceId: 'ACaeb000dc77e729d4db8fd4b25f51',
  senderEmail: 'support@pyrow.in',
  defaultDisplayName: 'Pyrow Software',
  // Secure: In production, API keys are strictly kept server-side in Supabase Edge Functions.
  // Optional local dev override via VITE_HOSTINGER_MAIL_TOKEN in .env.local
  apiToken: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_HOSTINGER_MAIL_TOKEN) || '',
};

export interface SendEmailOptions {
  to: string[];
  displayName?: string;
  subject: string;
  text: string;
  html: string;
  cc?: string[];
  bcc?: string[];
  emailType?: EmailLogRecord['email_type'];
}

export interface SendEmailResult {
  success: boolean;
  status?: number;
  error?: string;
}

/**
 * Universal sender using Hostinger Mail API
 */
export async function sendHostingerEmail(options: SendEmailOptions): Promise<SendEmailResult> {
  const { to, displayName, subject, text, html, cc, bcc } = options;

  if (!to || to.length === 0) {
    return { success: false, error: 'Recipient address (to) is required.' };
  }

  // Filter out empty or invalid email strings
  const validRecipients = to.map((e) => e.trim()).filter((e) => e.includes('@'));
  if (validRecipients.length === 0) {
    return { success: false, error: 'No valid recipient email address found.' };
  }

  const endpoint = `${HOSTINGER_MAIL_CONFIG.apiBase}/mailboxes/${HOSTINGER_MAIL_CONFIG.mailboxResourceId}/send`;

  const payload: Record<string, any> = {
    to: validRecipients,
    displayName: displayName || HOSTINGER_MAIL_CONFIG.defaultDisplayName,
    subject: subject.trim(),
    text: text.trim(),
    html: html.trim(),
  };

  if (cc && cc.length > 0) {
    const validCc = cc.map((e) => e.trim()).filter((e) => e.includes('@'));
    if (validCc.length > 0) payload.cc = validCc;
  }

  if (bcc && bcc.length > 0) {
    const validBcc = bcc.map((e) => e.trim()).filter((e) => e.includes('@'));
    if (validBcc.length > 0) payload.bcc = validBcc;
  }

  let result: SendEmailResult = { success: false, error: 'Unknown email error' };

  // 1. Primary Attempt: Secure Supabase Edge Function (Strictly isolates API keys server-side)
  try {
    const { data: edgeData, error: edgeError } = await supabase.functions.invoke('send-email', {
      body: payload,
    });
    if (!edgeError && (edgeData?.success || edgeData?.status === 200 || edgeData?.status === 204)) {
      result = { success: true, status: 200 };
    } else if (edgeError) {
      result = { success: false, error: edgeError.message };
    }
  } catch (edgeErr: any) {
    result = { success: false, error: edgeErr?.message || 'Edge function unreachable' };
  }

  // 2. Direct Fallback: Hostinger Mail API if local token is supplied (e.g. local development)
  if (!result.success && HOSTINGER_MAIL_CONFIG.apiToken) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HOSTINGER_MAIL_CONFIG.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 204 || res.status === 200 || res.status === 202) {
        result = { success: true, status: res.status };
      } else {
        const errorBody = await res.text();
        result = {
          success: false,
          status: res.status,
          error: `Mail delivery returned status ${res.status}: ${errorBody || res.statusText}`,
        };
      }
    } catch (err: any) {
      result = { success: false, error: err?.message || 'Network exception while dispatching email' };
    }
  }

  // 3. Automatically record to Sent Email Ledger for admin tracking
  recordEmailLog({
    recipient_email: validRecipients.join(', '),
    recipient_name: displayName || HOSTINGER_MAIL_CONFIG.defaultDisplayName,
    subject: subject.trim(),
    email_type: options.emailType || 'direct',
    sender: HOSTINGER_MAIL_CONFIG.senderEmail,
    status: result.success ? 'sent' : 'failed',
    error_message: result.error,
    preview_text: text ? text.slice(0, 160) : '',
  }).catch(() => {});

  // 4. Trigger professional SweetAlert toast bottom-right ("right side below")
  if (typeof window !== 'undefined') {
    if (result.success) {
      showEmailAlert.success(
        validRecipients.join(', '),
        `"${subject.trim()}"`
      );
    } else {
      showEmailAlert.error(
        validRecipients.join(', '),
        result.error || 'Failed to dispatch email'
      );
    }
  }

  return result;
}

/**
 * Builds a world-class, responsive, dark-mode branded HTML email
 */
export function buildPyrowEmailHtml({
  recipientName,
  headline,
  subheadline,
  primaryMessage,
  detailsList,
  callToAction,
  noteText,
}: {
  recipientName?: string;
  headline: string;
  subheadline: string;
  primaryMessage: string;
  detailsList?: { label: string; value: string }[];
  callToAction?: { label: string; url: string };
  noteText?: string;
}): string {
  const name = recipientName?.trim() || 'Valued Partner';

  const detailsRows =
    detailsList && detailsList.length > 0
      ? detailsList
          .map(
            (item) => `
          <tr>
            <td class="detail-label" style="padding: 10px 14px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #94a3b8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; width: 38%; font-weight: 500;">
              ${escapeHtml(item.label)}
            </td>
            <td class="detail-value" style="padding: 10px 14px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 600;">
              ${escapeHtml(item.value)}
            </td>
          </tr>
        `
          )
          .join('')
      : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(headline)}</title>
  <style>
    @media only screen and (max-width: 600px) {
      .email-shell { width: 100% !important; border-radius: 12px !important; margin: 0 !important; }
      .email-outer-td { padding: 12px 6px !important; }
      .content-cell { padding: 20px 16px !important; }
      .header-cell { padding: 20px 16px !important; }
      .detail-label { width: 100% !important; display: block !important; padding: 6px 12px 2px 12px !important; border-bottom: 0 !important; font-size: 11px !important; text-transform: uppercase !important; }
      .detail-value { width: 100% !important; display: block !important; padding: 2px 12px 8px 12px !important; font-size: 13px !important; }
      .logo-img { width: 105px !important; max-width: 105px !important; height: auto !important; }
      .icon-img { width: 32px !important; height: 32px !important; }
      .cta-button { width: 100% !important; display: block !important; padding: 14px 16px !important; box-sizing: border-box !important; text-align: center !important; }
      .mobile-stack { display: block !important; width: 100% !important; text-align: left !important; }
      .mobile-stack-right { display: block !important; width: 100% !important; text-align: left !important; margin-top: 10px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #06070b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #e2e8f0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #06070b; padding: 24px 8px;">
    <tr>
      <td align="center" class="email-outer-td">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="email-shell" style="max-width: 600px; background-color: #0c0e17; border: 1px solid #1e2235; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6); margin: 0 auto;">
          
          <!-- Top Accent Gradient Line -->
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%); line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td class="header-cell" style="padding: 28px 28px 20px 28px; border-bottom: 1px solid #181c2c;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td class="mobile-stack">
                    <!-- Official Pyrow Logo & Brand Mark -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 12px;">
                          <img
                            src="https://pyrow.in/assets/pyrow-icon-transparent.png"
                            alt="Pyrow Mark"
                            width="36"
                            height="36"
                            class="icon-img"
                            style="display: block; width: 36px; height: 36px; border-radius: 8px; border: 0;"
                          />
                        </td>
                        <td style="vertical-align: middle;">
                          <img
                            src="https://pyrow.in/assets/pyrow-logo-transparent.png"
                            alt="Pyrow Software"
                            width="120"
                            class="logo-img"
                            style="display: block; width: 120px; max-width: 120px; height: auto; border: 0;"
                          />
                          <div style="font-size: 9px; font-family: monospace; color: #a855f7; letter-spacing: 1px; text-transform: uppercase; margin-top: 3px;">
                            Software &bull; Cloud &bull; Scale
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" class="mobile-stack-right">
                    <span style="display: inline-block; padding: 4px 10px; border-radius: 20px; background-color: #1a1530; border: 1px solid #3b2069; color: #c084fc; font-size: 10px; font-family: monospace; font-weight: 600; text-transform: uppercase;">
                      Official SLA Dispatch
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Headline Banner -->
          <tr>
            <td class="content-cell" style="padding: 28px 28px 16px 28px;">
              <div style="font-size: 11px; font-family: monospace; color: #a855f7; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                ${escapeHtml(subheadline)}
              </div>
              <h1 style="margin: 0 0 16px 0; font-size: 21px; font-weight: 800; color: #ffffff; line-height: 1.35;">
                ${escapeHtml(headline)}
              </h1>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #cbd5e1;">
                Hello <strong style="color: #ffffff;">${escapeHtml(name)}</strong>,
              </p>
              <div style="margin: 12px 0 0 0; font-size: 14px; line-height: 1.65; color: #94a3b8;">
                ${primaryMessage}
              </div>
            </td>
          </tr>

          <!-- Structured Details Card -->
          ${
            detailsRows
              ? `
          <tr>
            <td style="padding: 6px 28px 20px 28px;" class="content-cell">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #111422; border: 1px solid #20263b; border-radius: 14px; overflow: hidden; width: 100%;">
                <tr>
                  <td colspan="2" style="padding: 12px 14px; background-color: #161a2c; border-bottom: 1px solid #242b42; font-size: 11px; font-family: monospace; font-weight: 700; color: #c084fc; text-transform: uppercase; letter-spacing: 0.8px;">
                    Request Specifications &bull; Verification Summary
                  </td>
                </tr>
                ${detailsRows}
              </table>
            </td>
          </tr>
          `
              : ''
          }

          <!-- Roadmap / Next Steps Block -->
          <tr>
            <td style="padding: 0 28px 24px 28px;" class="content-cell">
              <div style="background: linear-gradient(180deg, #121526 0%, #0e1120 100%); border: 1px solid #20263c; border-radius: 14px; padding: 18px;">
                <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 12px;">
                  What Happens Next (Standard 2–4 Hour SLA)
                </div>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td valign="top" style="width: 22px; padding-bottom: 10px; font-size: 13px; color: #a855f7; font-weight: bold;">01</td>
                    <td style="padding-bottom: 10px; font-size: 13px; line-height: 1.5; color: #cbd5e1;">
                      <strong style="color: #ffffff;">Executive Review:</strong> Our technical team examines your software specs and growth objectives.
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" style="width: 22px; padding-bottom: 10px; font-size: 13px; color: #a855f7; font-weight: bold;">02</td>
                    <td style="padding-bottom: 10px; font-size: 13px; line-height: 1.5; color: #cbd5e1;">
                      <strong style="color: #ffffff;">Direct Invitation:</strong> You will receive a direct Google Meet invite with strategic discussion points.
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" style="width: 22px; font-size: 13px; color: #a855f7; font-weight: bold;">03</td>
                    <td style="font-size: 13px; line-height: 1.5; color: #cbd5e1;">
                      <strong style="color: #ffffff;">Actionable Deliverables:</strong> In the call, we detail exact system milestones, cloud architecture, and sprint timelines.
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Call to Action Button (Optional) -->
          ${
            callToAction
              ? `
          <tr>
            <td align="center" style="padding: 0 28px 24px 28px;" class="content-cell">
              <a href="${callToAction.url}" target="_blank" class="cta-button" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #7c3aed, #6366f1); color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 13px; font-weight: 700; font-family: monospace; letter-spacing: 0.5px; box-shadow: 0 10px 20px rgba(124, 58, 237, 0.35);">
                ${escapeHtml(callToAction.label)} &rarr;
              </a>
            </td>
          </tr>
          `
              : ''
          }

          <!-- Note text if provided -->
          ${
            noteText
              ? `
          <tr>
            <td style="padding: 0 28px 20px 28px; font-size: 12px; color: #64748b; line-height: 1.5; text-align: center;" class="content-cell">
              ${escapeHtml(noteText)}
            </td>
          </tr>
          `
              : ''
          }

          <!-- Direct Escalation & Contact Strip -->
          <tr>
            <td class="content-cell footer-strip" style="padding: 18px 28px; background-color: #080911; border-top: 1px solid #161a29;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td class="mobile-stack" style="font-size: 12px; color: #94a3b8; line-height: 1.6;">
                    Need urgent assistance or have project documents?
                    <br />
                    <span style="color: #e2e8f0;">Reply directly or write to </span>
                    <a href="mailto:support@pyrow.in" style="color: #a855f7; text-decoration: none; font-weight: 600;">support@pyrow.in</a>
                  </td>
                  <td align="right" class="mobile-stack-right" style="vertical-align: middle;">
                    <a href="https://pyrow.in" target="_blank" style="font-size: 11px; font-family: monospace; color: #cbd5e1; text-decoration: none; padding: 6px 12px; background-color: #141828; border: 1px solid #242c44; border-radius: 8px; display: inline-block;">
                      Visit pyrow.in
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Compliance & Footer -->
          <tr>
            <td class="content-cell" style="padding: 22px 28px; background-color: #05060a; border-top: 1px solid #111420; text-align: center;">
              <div style="font-size: 11px; color: #475569; line-height: 1.6; margin-bottom: 6px;">
                &copy; ${new Date().getFullYear()} Pyrow Software. All rights reserved.
                <br />
                Protected under Mutual NDA Protocols &bull; ISO 27001 &amp; SOC2 Type II Standards
              </div>
              <div style="font-size: 10px; font-family: monospace; color: #64748b;">
                Dispatched from <span style="color: #a855f7;">support@pyrow.in</span> &bull; 100% Confidential
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Dispatches an automated confirmation email for any inquiry or strategy call submission
 */
export async function sendEnquiryConfirmationEmail(
  enquiry: Partial<EnquiryRecord>
): Promise<SendEmailResult> {
  const email = enquiry.email?.trim();
  if (!email) {
    return { success: false, error: 'Enquiry has no email address' };
  }

  const name = enquiry.name?.trim() || 'Colleague';
  const type = enquiry.type || 'contact';

  let subject = 'Consultation Request Confirmed — Pyrow Architecture Team';
  let subheadline = 'Strategy Consultation Request Received';
  let headline = 'Your Strategy Session is Queued for Technical Review';
  let primaryMessage =
    'Thank you for requesting an executive consultation with Pyrow. We have safely logged your requirements and our technical engineering and growth leads are preparing tailored analysis for our discussion.';

  const detailsList: { label: string; value: string }[] = [];

  if (enquiry.service) {
    detailsList.push({ label: 'Focus / Service', value: enquiry.service });
  }
  if (enquiry.software_requested) {
    detailsList.push({ label: 'Requested Platform', value: enquiry.software_requested });
  }
  if (enquiry.company) {
    detailsList.push({ label: 'Company / Organization', value: enquiry.company });
  }
  if (enquiry.phone) {
    detailsList.push({ label: 'Contact Phone', value: enquiry.phone });
  }
  if (enquiry.preferred_time) {
    detailsList.push({ label: 'Preferred Slot', value: enquiry.preferred_time });
  }
  if (enquiry.timeline) {
    detailsList.push({ label: 'Target Launch Timeline', value: enquiry.timeline });
  }
  if (enquiry.budget) {
    detailsList.push({ label: 'Allocated Budget', value: enquiry.budget });
  }
  if (enquiry.message) {
    detailsList.push({
      label: 'Key Objectives',
      value: enquiry.message.length > 200 ? enquiry.message.slice(0, 200) + '...' : enquiry.message,
    });
  }

  // Tailor headline & copy per type
  switch (type) {
    case 'strategy_call':
      subject = '30-Min Strategy Consultation Confirmed — Pyrow Technical Architecture';
      subheadline = 'Executive Strategy Consultation';
      headline = 'Your 30-Minute Architecture & Growth Call is Confirmed';
      primaryMessage =
        'We have logged your consultation request. A lead architect will review your project parameters and send over a direct calendar invite with meeting link within 2 to 4 business hours.';
      break;

    case 'quick_consult':
      subject = 'Quick Architecture Consultation Booked — Pyrow';
      subheadline = 'Priority Engineering Advisory';
      headline = 'We Received Your Consultation Request';
      primaryMessage =
        'Thank you for booking a direct consultation. Our engineering leads will reach out shortly to align on your tech stack, system bottlenecks, and delivery schedule.';
      break;

    case 'demo_request':
      subject = `Demo Request Queued: ${enquiry.software_requested || 'Enterprise Software'} — Pyrow`;
      subheadline = 'Interactive Platform Demo';
      headline = 'Your Enterprise Demo Access is Being Prepared';
      primaryMessage =
        'Thank you for your interest in our enterprise software systems. Our solutions architect is configuring sandbox credentials and will contact you with interactive access details.';
      break;

    case 'estimator':
      subject = 'Software Cost & Architecture Estimate Received — Pyrow';
      subheadline = 'Custom Project Estimation';
      headline = 'Your Preliminary Software Scope Has Been Logged';
      primaryMessage =
        'We have received your custom project parameters. Our estimation team is verifying module costs and sprint timelines to provide you with a formalized proposal.';
      break;

    case 'newsletter':
      subject = 'Welcome to Pyrow Engineering & Growth Dispatch';
      subheadline = 'Engineering Newsletter';
      headline = 'Welcome to the Pyrow Tech Network';
      primaryMessage =
        'You are now subscribed to Pyrow technical insights, architectural case studies, performance benchmarks, and growth engineering playbooks.';
      break;

    case 'contact':
    default:
      subject = 'Inquiry Received — Pyrow Technical Architecture Team';
      subheadline = 'Client Technical Inquiry';
      headline = 'We Have Received Your Project Inquiry';
      primaryMessage =
        'Thank you for contacting Pyrow. Every inquiry is reviewed directly by our founding engineers and product leads without sales friction. We will respond with actionable next steps.';
      break;
  }

  const plainText = `
Hello ${name},

${headline}

${primaryMessage}

--- Request Details ---
${detailsList.map((d) => `${d.label}: ${d.value}`).join('\n')}

--- What Happens Next ---
1. Executive Review: Our technical founders review your requirements.
2. Calendar Invitation: You will receive a direct Google Meet invite within 2 to 4 business hours.
3. Actionable Deliverables: We prepare high-level architecture roadmaps and sprint estimates.

For immediate questions or NDA sharing, write directly to support@pyrow.in.

Best regards,
Pyrow Software Team
https://pyrow.in
support@pyrow.in
  `.trim();

  const html = buildPyrowEmailHtml({
    recipientName: name,
    headline,
    subheadline,
    primaryMessage,
    detailsList,
    callToAction: {
      label: 'Explore Pyrow Capabilities',
      url: 'https://pyrow.in',
    },
    noteText:
      'You are receiving this confirmation because an inquiry or consultation request was submitted with this email on pyrow.in.',
  });

  return sendHostingerEmail({
    to: [email],
    displayName: 'Pyrow Software',
    subject,
    text: plainText,
    html,
    bcc: ['support@pyrow.in'], // Also sends a copy to Pyrow mailbox so founders get alerted!
    emailType: (type === 'contact' ? 'contact_reply' : type) as any,
  });
}

/**
 * Dispatches an official Commercial Quotation Proposal to the client's email
 */
export async function sendQuotationEmail(quote: QuotationRecord): Promise<SendEmailResult> {
  const email = quote.client_email?.trim();
  if (!email) return { success: false, error: 'Quotation has no client email address.' };

  const name = quote.client_name?.trim() || 'Client';
  const subject = `Commercial Proposal & Quotation #${quote.quote_number} — Pyrow Software`;

  const detailsList: { label: string; value: string }[] = [
    { label: 'Quote Number', value: quote.quote_number },
    { label: 'Project Title', value: quote.project_title },
    {
      label: 'Client / Enterprise',
      value: `${quote.client_name}${quote.client_company ? ` (${quote.client_company})` : ''}`,
    },
    { label: 'Deliverables Count', value: `${(quote.items || []).length} Modules / Milestones` },
    { label: 'Total Investment', value: `₹${Number(quote.total_amount).toLocaleString('en-IN')}` },
    {
      label: 'Status / Validity',
      value: `${quote.status.toUpperCase()}${quote.valid_until ? ` (Valid until ${quote.valid_until})` : ''}`,
    },
  ];

  const itemsTableHtml = (quote.items || [])
    .map(
      (item, idx) => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #cbd5e1; font-family: monospace;">
          ${idx + 1}. ${escapeHtml(item.description)}
        </td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #cbd5e1; text-align: center; font-family: monospace;">
          ${item.quantity}
        </td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #38bdf8; text-align: right; font-weight: 600; font-family: monospace;">
          ₹${Number(item.amount).toLocaleString('en-IN')}
        </td>
      </tr>
    `
    )
    .join('');

  const primaryMessage = `
    Please find below your official commercial quotation and software deliverable breakdown for <strong>${escapeHtml(
      quote.project_title
    )}</strong>.
    Our architecture team is ready to begin sprint mobilization upon your acceptance.
    <div style="margin: 20px 0; background-color: #111422; border: 1px solid #20263b; border-radius: 12px; overflow: hidden;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <thead>
          <tr style="background-color: #161a2c; border-bottom: 1px solid #242b42;">
            <th align="left" style="padding: 10px 12px; font-size: 11px; font-family: monospace; color: #c084fc; text-transform: uppercase;">Deliverable Module</th>
            <th align="center" style="padding: 10px 12px; font-size: 11px; font-family: monospace; color: #c084fc; text-transform: uppercase; width: 45px;">Qty</th>
            <th align="right" style="padding: 10px 12px; font-size: 11px; font-family: monospace; color: #c084fc; text-transform: uppercase; width: 110px;">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${itemsTableHtml}
          <tr>
            <td colspan="2" align="right" style="padding: 10px 12px; font-size: 12px; color: #94a3b8; font-family: monospace; font-weight: 600;">Grand Total (INR):</td>
            <td align="right" style="padding: 10px 12px; font-size: 15px; color: #a855f7; font-family: monospace; font-weight: 800;">₹${Number(
              quote.total_amount
            ).toLocaleString('en-IN')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  const html = buildPyrowEmailHtml({
    recipientName: name,
    headline: `Commercial Quotation: ${quote.project_title}`,
    subheadline: `Quote Ref #${quote.quote_number}`,
    primaryMessage,
    detailsList,
    callToAction: {
      label: 'Accept & Schedule Kickoff',
      url: `mailto:support@pyrow.in?subject=Accepted:%20Quotation%20${quote.quote_number}&body=Hi%20Pyrow%20Team,%0A%0AWe%20accept%20Quotation%20${quote.quote_number}%20and%20are%20ready%20to%20proceed%20with%20project%20kickoff.`,
    },
    noteText:
      'To confirm or discuss milestone customization, reply directly to support@pyrow.in or reach our team at +91 99949 97097.',
  });

  return sendHostingerEmail({
    to: [email],
    displayName: 'Pyrow Software',
    subject,
    text: `Quotation #${quote.quote_number} for ${quote.project_title} - Total: ₹${quote.total_amount}. Reply to support@pyrow.in to proceed.`,
    html,
    bcc: ['support@pyrow.in'],
    emailType: 'quotation',
  });
}

/**
 * Dispatches an official GST Tax Invoice and receipt to the client's email
 */
export async function sendInvoiceEmail(invoice: InvoiceRecord): Promise<SendEmailResult> {
  const email = invoice.client_email?.trim();
  if (!email) return { success: false, error: 'Invoice has no client email address.' };

  const name = invoice.client_name?.trim() || 'Client';
  const isPaid = invoice.status === 'paid';
  const subject = `Tax Invoice & Receipt #${invoice.invoice_number} [${isPaid ? 'PAID' : 'DUE'}] — Pyrow Software`;

  const detailsList: { label: string; value: string }[] = [
    { label: 'Invoice Reference', value: invoice.invoice_number },
    {
      label: 'Client / Enterprise',
      value: `${invoice.client_name}${invoice.client_company ? ` (${invoice.client_company})` : ''}`,
    },
    { label: 'Payment Status', value: invoice.status.toUpperCase() },
    { label: 'Total Invoice Amount', value: `₹${Number(invoice.total_amount).toLocaleString('en-IN')}` },
    { label: 'Due Date / Terms', value: invoice.due_date ? `Due: ${invoice.due_date}` : 'Immediate on Receipt' },
  ];

  if (invoice.client_gstin) {
    detailsList.push({ label: 'Client GSTIN', value: invoice.client_gstin });
  }

  const itemsTableHtml = (invoice.items || [])
    .map(
      (item, idx) => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #cbd5e1; font-family: monospace;">
          ${idx + 1}. ${escapeHtml(item.description)}
        </td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #cbd5e1; text-align: center; font-family: monospace;">
          ${item.quantity}
        </td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1f2438; font-size: 13px; color: #10b981; text-align: right; font-weight: 600; font-family: monospace;">
          ₹${Number(item.amount).toLocaleString('en-IN')}
        </td>
      </tr>
    `
    )
    .join('');

  const primaryMessage = `
    Please find attached your official Tax Invoice and Payment Ledger record for <strong>#${escapeHtml(
      invoice.invoice_number
    )}</strong>.
    <br />
    ${
      isPaid
        ? '<span style="color: #34d399; font-weight: bold;">Status: PAYMENT RECEIVED & VERIFIED</span>'
        : '<span style="color: #fbbf24; font-weight: bold;">Status: PAYMENT PENDING</span>'
    }
    <div style="margin: 20px 0; background-color: #111422; border: 1px solid #20263b; border-radius: 12px; overflow: hidden;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <thead>
          <tr style="background-color: #161a2c; border-bottom: 1px solid #242b42;">
            <th align="left" style="padding: 10px 12px; font-size: 11px; font-family: monospace; color: #c084fc; text-transform: uppercase;">Service Item</th>
            <th align="center" style="padding: 10px 12px; font-size: 11px; font-family: monospace; color: #c084fc; text-transform: uppercase; width: 45px;">Qty</th>
            <th align="right" style="padding: 10px 12px; font-size: 11px; font-family: monospace; color: #c084fc; text-transform: uppercase; width: 110px;">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${itemsTableHtml}
          <tr>
            <td colspan="2" align="right" style="padding: 10px 12px; font-size: 12px; color: #94a3b8; font-family: monospace; font-weight: 600;">Total Amount (INR):</td>
            <td align="right" style="padding: 10px 12px; font-size: 15px; color: #10b981; font-family: monospace; font-weight: 800;">₹${Number(
              invoice.total_amount
            ).toLocaleString('en-IN')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  const html = buildPyrowEmailHtml({
    recipientName: name,
    headline: `Invoice #${invoice.invoice_number}`,
    subheadline: isPaid ? 'Official Payment Receipt' : 'Payment Invoice Due',
    primaryMessage,
    detailsList,
    callToAction: {
      label: 'Pyrow Billing Portal',
      url: 'https://pyrow.in',
    },
    noteText: 'For billing inquiries or NEFT / UPI transaction confirmations, write to support@pyrow.in.',
  });

  return sendHostingerEmail({
    to: [email],
    displayName: 'Pyrow Software',
    subject,
    text: `Invoice #${invoice.invoice_number} from Pyrow Software. Total Amount: ₹${invoice.total_amount}. Status: ${invoice.status}.`,
    html,
    bcc: ['support@pyrow.in'],
    emailType: 'invoice',
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
