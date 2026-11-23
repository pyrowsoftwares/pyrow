import { createClient } from '@supabase/supabase-js';

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
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  software_requested?: string;
  preferred_time?: string;
  source_page?: string;
  status?: 'new' | 'contacted' | 'in_progress' | 'closed';
  notes?: string;
  raw_data?: Record<string, any>;
  ip_address?: string;
  city?: string;
  region?: string;
  country?: string;
  country_code?: string;
  isp?: string;
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

    const payload = {
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
      raw_data: data.raw_data || {},
      ip_address: geo?.ip || null,
      city: geo?.city || null,
      region: geo?.region || null,
      country: geo?.country || null,
      country_code: geo?.country_code || null,
      isp: geo?.isp || null,
    };

    const { error } = await supabase.from('enquiries').insert([payload]);

    if (error) {
      console.error('[Pyrow Supabase] Failed to save enquiry:', error);
      return { success: false, error: error.message };
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
