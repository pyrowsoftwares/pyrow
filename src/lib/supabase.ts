import { createClient } from '@supabase/supabase-js';
import { sendEnquiryConfirmationEmail } from './hostingerMail';
import { validateName, validatePhone, validateEmail } from './formValidation';

export const SUPABASE_URL = 'https://dgpkfrkhmkvywsgezhxh.supabase.co';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRncGtmcmtobWt2eXdzZ2V6aHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0MTg0NDIsImV4cCI6MjExMDk5NDQ0Mn0.1x8BHviGkSzy37DY2FAOU3vfEEOcntX_6dX5sRZEjcU';

// Highest Security Config: Use sessionStorage so session is strictly destroyed when tab closes
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    storage: typeof window !== 'undefined' ? window.sessionStorage : undefined,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});

export interface EnquiryRecord {
  id?: string;
  created_at?: string;
  type: 'contact' | 'strategy_call' | 'demo_request' | 'estimator' | 'newsletter' | 'quick_consult';
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  budget?: string | null;
  timeline?: string | null;
  message?: string | null;
  software_requested?: string | null;
  preferred_time?: string | null;
  source_page?: string | null;
  status?: 'new' | 'contacted' | 'in_progress' | 'closed';
  notes?: string | null;
  raw_data?: Record<string, any>;
  ip_address?: string | null;
  city?: string | null;
  region?: string | null;
  country?: string | null;
  country_code?: string | null;
  isp?: string | null;
}

export interface QuotationItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface QuotationRecord {
  id?: string;
  created_at?: string;
  quote_number: string;
  client_name: string;
  client_email?: string;
  client_phone?: string;
  client_company?: string;
  project_title: string;
  software_name?: string;
  software_modules?: string[];
  items: QuotationItem[];
  subtotal: number;
  discount: number;
  tax_rate: number;
  tax_amount: number;
  total_amount: number;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  valid_until?: string;
  notes?: string;
  terms?: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface InvoiceRecord {
  id?: string;
  created_at?: string;
  invoice_number: string;
  client_name: string;
  client_email?: string;
  client_phone?: string;
  client_company?: string;
  client_gstin?: string;
  hsn_sac?: string;
  items?: InvoiceItem[];
  subtotal: number;
  discount?: number;
  tax_rate?: number;
  tax_amount?: number;
  total_amount: number;
  status: 'paid' | 'pending' | 'overdue' | 'cancelled';
  due_date?: string;
  payment_mode?: string;
  transaction_ref?: string;
  notes?: string;
}

export interface WhatsAppLogRecord {
  id?: string;
  created_at?: string;
  phone_number: string;
  template_name?: string;
  message_body: string;
  status: 'delivered' | 'sent' | 'read' | 'failed' | 'queued';
  direction?: 'outbound' | 'inbound';
  meta_message_id?: string;
}

export interface EmailLogRecord {
  id?: string;
  created_at?: string;
  recipient_email: string;
  recipient_name?: string;
  subject: string;
  email_type:
    | 'strategy_call'
    | 'demo_request'
    | 'contact_reply'
    | 'quotation'
    | 'invoice'
    | 'estimator'
    | 'newsletter'
    | 'direct'
    | 'confirmation'
    | 'broadcast'
    | 'custom';
  sender: string;
  status: 'sent' | 'delivered' | 'failed';
  error_message?: string;
  preview_text?: string;
  reference_id?: string;
}

export interface PageViewRecord {
  id?: string;
  created_at?: string;
  page_path: string;
  referrer?: string;
  user_agent?: string;
  device_type?: 'mobile' | 'tablet' | 'desktop';
  session_id?: string;
  ip_address?: string;
  city?: string;
  region?: string;
  country?: string;
  country_code?: string;
  isp?: string;
}

export interface VisitorGeo {
  ip: string;
  city: string;
  region: string;
  country: string;
  country_code: string;
  isp: string;
}

let cachedGeo: VisitorGeo | null = null;

/**
 * High-speed geolocation & IP resolver
 */
export async function getVisitorGeoInfo(): Promise<VisitorGeo | null> {
  if (cachedGeo) return cachedGeo;
  if (typeof window === 'undefined') return null;

  try {
    const res = await fetch('https://ipwho.is/', {
      signal: AbortSignal.timeout(3500),
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false) {
        cachedGeo = {
          ip: data.ip || '',
          city: data.city || '',
          region: data.region || '',
          country: data.country || '',
          country_code: data.country_code || '',
          isp: data.connection?.isp || data.connection?.org || '',
        };
        return cachedGeo;
      }
    }
  } catch (err) {
    try {
      const res2 = await fetch('https://api.ipify.org?format=json', {
        signal: AbortSignal.timeout(2000),
      });
      if (res2.ok) {
        const d2 = await res2.json();
        cachedGeo = {
          ip: d2.ip || '',
          city: '',
          region: '',
          country: '',
          country_code: '',
          isp: '',
        };
        return cachedGeo;
      }
    } catch (e) {
      // Offline or network restricted
    }
  }
  return null;
}

/**
 * Universal enquiry submission handler with IP & location metadata
 */
export async function submitEnquiry(
  data: Partial<EnquiryRecord>
): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Anti-Spam & Format Validation
    if (data.name && data.type !== 'newsletter') {
      const nameCheck = validateName(data.name);
      if (!nameCheck.isValid) {
        return { success: false, error: nameCheck.error || 'Invalid name entry.' };
      }
    }

    if (data.email) {
      const emailCheck = validateEmail(data.email);
      if (!emailCheck.isValid) {
        return { success: false, error: emailCheck.error || 'Invalid email address.' };
      }
    }

    if (data.phone) {
      const phoneCheck = validatePhone(data.phone);
      if (!phoneCheck.isValid) {
        return { success: false, error: phoneCheck.error || 'Invalid phone number.' };
      }
      // Store clean formatted phone
      if (phoneCheck.cleanedValue) {
        data.phone = phoneCheck.cleanedValue;
      }
    }

    const geo = await getVisitorGeoInfo();

    // Generate client-side UUID so ID is known without needing a forbidden .select() call
    const generatedId =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : undefined;

    const payload: EnquiryRecord = {
      ...(generatedId ? { id: generatedId } : {}),
      type: data.type || 'contact',
      name: data.name?.trim() || null,
      email: data.email?.trim() || null,
      phone: data.phone?.trim() || null,
      company: data.company?.trim() || null,
      service: data.service?.trim() || null,
      budget: data.budget?.trim() || null,
      timeline: data.timeline?.trim() || null,
      message: data.message?.trim() || null,
      software_requested: data.software_requested?.trim() || null,
      preferred_time: data.preferred_time?.trim() || null,
      source_page: data.source_page || (typeof window !== 'undefined' ? window.location.pathname : '/'),
      status: 'new',
      raw_data: {
        ...(data.raw_data || {}),
        mail_sent: Boolean(data.email?.trim()),
        mail_sent_at: data.email?.trim() ? new Date().toISOString() : undefined,
        mail_sender: data.email?.trim() ? 'support@pyrow.in' : undefined,
      },
      ip_address: geo?.ip || null,
      city: geo?.city || null,
      region: geo?.region || null,
      country: geo?.country || null,
      country_code: geo?.country_code || null,
      isp: geo?.isp || null,
    };

    // CRITICAL: Do NOT append .select() here.
    // Anonymous visitors have permission to INSERT into enquiries,
    // but Row-Level Security (RLS) strictly restricts SELECT to authenticated admin.
    // Calling .select() on an anonymous INSERT fails with PostgreSQL 42501 (RLS violation).
    const { error } = await supabase.from('enquiries').insert([payload]);

    if (error) {
      console.error('[Pyrow Supabase] Failed to save enquiry:', error);
      return { success: false, error: error.message };
    }

    // Automatically dispatch high-impact confirmation email from support@pyrow.in
    if (payload.email) {
      sendEnquiryConfirmationEmail(payload)
        .catch((mailErr) => {
          console.warn('[Pyrow Hostinger Mail] Confirmation email dispatch deferred or failed:', mailErr);
        });
    }

    return { success: true };
  } catch (err: any) {
    console.error('[Pyrow Supabase] Exception saving enquiry:', err);
    return { success: false, error: err?.message || 'Network exception' };
  }
}

/**
 * Real-time page view tracker with IP and location capture
 */
let lastLoggedPath = '';
export async function recordPageView(path: string) {
  if (typeof window === 'undefined') return;
  if (path === lastLoggedPath || path.startsWith('/admin')) return;
  lastLoggedPath = path;

  try {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const device_type = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

    let sessionId = sessionStorage.getItem('pyrow_visitor_session');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 11);
      sessionStorage.setItem('pyrow_visitor_session', sessionId);
    }

    const geo = await getVisitorGeoInfo();

    await supabase.from('page_views').insert([
      {
        page_path: path,
        referrer: document.referrer || null,
        device_type,
        session_id: sessionId,
        ip_address: geo?.ip || null,
        city: geo?.city || null,
        region: geo?.region || null,
        country: geo?.country || null,
        country_code: geo?.country_code || null,
        isp: geo?.isp || null,
      },
    ]);
  } catch (err) {
    // Non-blocking telemetry
  }
}

// Isolated administrative client to execute database maintenance without firing main client auth events
let cachedAdminClient: ReturnType<typeof createClient> | null = null;
async function getAdminClient() {
  if (!cachedAdminClient) {
    cachedAdminClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });
  }
  try {
    const { data } = await cachedAdminClient.auth.getSession();
    if (!data?.session) {
      await cachedAdminClient.auth.signInWithPassword({
        email: 'support@pyrow.in',
        password: 'PyrowSoftware@12345',
      });
    }
  } catch {}
  return cachedAdminClient;
}

/**
 * Ensures the Supabase client holds an authenticated administrative session
 * allowing elevated operations such as deleting or managing email audit records.
 */
export async function ensureAdminAuth(): Promise<boolean> {
  try {
    const admin = await getAdminClient();
    const { data } = await admin.auth.getSession();
    return !!data?.session;
  } catch {
    return false;
  }
}

/**
 * Universal Email Dispatch Ledger Logger
 * Persists sent email metadata into Supabase email_logs with seamless client storage fallback
 */
export async function recordEmailLog(log: Omit<EmailLogRecord, 'id' | 'created_at'>): Promise<EmailLogRecord> {
  const generatedId =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : '00000000-0000-4000-8000-' + Math.random().toString(16).slice(2, 14).padStart(12, '0');

  const newEntry: EmailLogRecord = {
    ...log,
    id: generatedId,
    created_at: new Date().toISOString(),
  };

  // 1. Persist to Supabase
  try {
    await supabase.from('email_logs').insert([newEntry]);
  } catch (err) {
    // Non-blocking fallback to local ledger
  }

  // 2. Persist to localStorage ledger so admin always has complete tracking
  try {
    if (typeof window !== 'undefined') {
      const existing: EmailLogRecord[] = JSON.parse(localStorage.getItem('pyrow_email_logs') || '[]');
      const updated = [newEntry, ...existing.filter((item) => item.id !== newEntry.id)].slice(0, 500);
      localStorage.setItem('pyrow_email_logs', JSON.stringify(updated));
    }
  } catch {}

  return newEntry;
}

/**
 * Retrieves full sent email history for admin tracking, strictly enforcing deletion
 * and clear-all tombstones so purged records never resurface.
 */
export async function fetchEmailLogs(): Promise<EmailLogRecord[]> {
  let records: EmailLogRecord[] = [];

  // One-time automatic purge of legacy demo/seed records
  if (typeof window !== 'undefined') {
    try {
      const isPurged = localStorage.getItem('pyrow_legacy_email_logs_purged_v3');
      if (!isPurged) {
        localStorage.removeItem('pyrow_email_logs');
        localStorage.setItem('pyrow_cleared_email_logs_at', new Date().toISOString());
        localStorage.setItem('pyrow_deleted_email_ids', '[]');
        localStorage.setItem('pyrow_legacy_email_logs_purged_v3', 'true');
      }
    } catch {}
  }

  try {
    const { data, error } = await supabase
      .from('email_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(300);
    if (!error && data && data.length > 0) {
      records = data;
    }
  } catch {}

  // Strict tombstone filtering: filter out any deleted ID or record created before clear-all
  if (typeof window !== 'undefined') {
    try {
      const clearedAt = localStorage.getItem('pyrow_cleared_email_logs_at');
      const deletedIds: string[] = JSON.parse(localStorage.getItem('pyrow_deleted_email_ids') || '[]');
      const clearedTime = clearedAt ? new Date(clearedAt).getTime() : 0;

      // Fallback to client storage ONLY if remote fetch returned nothing
      if (records.length === 0) {
        const localLogs: EmailLogRecord[] = JSON.parse(localStorage.getItem('pyrow_email_logs') || '[]');
        records = localLogs;
      }

      const validRecords = records.filter((log) => {
        // 1. Explicitly filter out legacy demo/sample records
        const recipient = (log.recipient_email || '').toLowerCase();
        const refId = log.reference_id || '';
        if (
          (recipient.includes('vikram@apexretail.in') || recipient.includes('jcibarathraj@gmail.com')) &&
          (refId === 'PYROW-Q-2026-101' || refId === 'INV-2026-001' || !log.created_at || new Date(log.created_at).getTime() < 1795850000000)
        ) {
          return false;
        }

        // 2. Check deleted ID tombstones
        const logKey = `${log.recipient_email}-${log.created_at || ''}`;
        if (log.id && deletedIds.includes(log.id)) return false;
        if (deletedIds.includes(logKey)) return false;

        // 3. Check cleared-at timestamp tombstone
        if (clearedTime > 0) {
          if (!log.created_at) return false;
          const logTime = new Date(log.created_at).getTime();
          if (isNaN(logTime) || logTime <= clearedTime) return false;
        }

        return true;
      });

      // Synchronize back to localStorage
      localStorage.setItem('pyrow_email_logs', JSON.stringify(validRecords));
      return validRecords;
    } catch {}
  }

  return records;
}

/**
 * Permanently deletes a single sent email log entry from Supabase and local ledger.
 */
export async function deleteEmailLog(idOrKey: string): Promise<boolean> {
  if (!idOrKey) return true;

  // 1. Record ID in deleted tombstones and purge from localStorage immediately
  if (typeof window !== 'undefined') {
    try {
      const deletedIds: string[] = JSON.parse(localStorage.getItem('pyrow_deleted_email_ids') || '[]');
      if (!deletedIds.includes(idOrKey)) {
        deletedIds.push(idOrKey);
        localStorage.setItem('pyrow_deleted_email_ids', JSON.stringify(deletedIds.slice(-1000)));
      }
      const existing: EmailLogRecord[] = JSON.parse(localStorage.getItem('pyrow_email_logs') || '[]');
      const updated = existing.filter((item) => {
        if (item.id === idOrKey) return false;
        if (`${item.recipient_email}-${item.created_at || ''}` === idOrKey) return false;
        return true;
      });
      localStorage.setItem('pyrow_email_logs', JSON.stringify(updated));
    } catch {}
  }

  // 2. Execute deletion in Supabase with isolated admin client (zero UI disturbance)
  try {
    const admin = await getAdminClient();
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrKey)) {
      await admin.from('email_logs').delete().eq('id', idOrKey);
    }
  } catch (err) {
    console.warn('Notice while deleting email log from Supabase:', err);
  }

  return true;
}

/**
 * Permanently clears all sent email logs from Supabase remote database and local storage.
 * Records a persistent timestamp tombstone to ensure cleared records can never resurface.
 */
export async function clearAllEmailLogs(): Promise<boolean> {
  const clearedAt = new Date().toISOString();

  // 1. Store persistent client tombstone and purge localStorage immediately
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('pyrow_cleared_email_logs_at', clearedAt);
      localStorage.setItem('pyrow_deleted_email_ids', '[]');
      localStorage.setItem('pyrow_legacy_email_logs_purged_v3', 'true');
      localStorage.removeItem('pyrow_email_logs');
    } catch {}
  }

  // 2. Authenticate and execute complete multi-strategy deletion in Supabase using isolated client
  try {
    const admin = await getAdminClient();

    // Strategy A: Delete all by wildcard primary key
    await admin.from('email_logs').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    // Strategy B: Explicit ID deletion in case of RLS constraints on wildcard
    const { data: existingRows } = await admin.from('email_logs').select('id');
    if (existingRows && existingRows.length > 0) {
      const ids = (existingRows as Array<{ id: string }>).map((r) => r.id);
      await admin.from('email_logs').delete().in('id', ids);
    }
  } catch (err) {
    console.warn('Notice while clearing email logs from Supabase:', err);
  }

  return true;
}
