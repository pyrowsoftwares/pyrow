import { createClient } from '@supabase/supabase-js';
import { sendEnquiryConfirmationEmail } from './hostingerMail';

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

  // 1. Persist to Supabase without .select() to prevent anon RLS permission errors
  try {
    const { error } = await supabase.from('email_logs').insert([newEntry]);
    if (!error) {
      return newEntry;
    }
  } catch (err) {
    // Graceful fallback to client storage ledger
  }

  // 2. Persist to localStorage ledger so admin always has complete tracking
  try {
    if (typeof window !== 'undefined') {
      const existing: EmailLogRecord[] = JSON.parse(localStorage.getItem('pyrow_email_logs') || '[]');
      const updated = [newEntry, ...existing].slice(0, 500);
      localStorage.setItem('pyrow_email_logs', JSON.stringify(updated));
    }
  } catch {}

  return newEntry;
}

/**
 * Retrieves full sent email history for admin tracking
 */
export async function fetchEmailLogs(): Promise<EmailLogRecord[]> {
  try {
    const { data, error } = await supabase
      .from('email_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(300);
    if (!error && data && data.length > 0) {
      return data;
    }
  } catch {}

  if (typeof window !== 'undefined') {
    try {
      return JSON.parse(localStorage.getItem('pyrow_email_logs') || '[]');
    } catch {}
  }
  return [];
}

/**
 * Deletes a single sent email log entry from Supabase and local ledger
 */
export async function deleteEmailLog(id: string): Promise<boolean> {
  try {
    await supabase.from('email_logs').delete().eq('id', id);
  } catch (err) {
    console.warn('Failed to delete email log from Supabase:', err);
  }

  try {
    if (typeof window !== 'undefined') {
      const existing: EmailLogRecord[] = JSON.parse(localStorage.getItem('pyrow_email_logs') || '[]');
      const updated = existing.filter((item) => item.id !== id);
      localStorage.setItem('pyrow_email_logs', JSON.stringify(updated));
    }
  } catch {}

  return true;
}

/**
 * Clears all sent email logs from Supabase and local storage
 */
export async function clearAllEmailLogs(): Promise<boolean> {
  try {
    await supabase.from('email_logs').delete().neq('id', 'placeholder_impossible_id');
  } catch (err) {
    console.warn('Failed to clear email logs from Supabase:', err);
  }

  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('pyrow_email_logs');
    }
  } catch {}

  return true;
}
