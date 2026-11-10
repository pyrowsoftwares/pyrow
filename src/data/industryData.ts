export interface IndustrySolution {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: 'Enterprise ERP' | 'Commerce & Retail' | 'Healthcare' | 'Education' | 'Wellness & Lifestyle' | 'Growth Tech';
  description: string;
  badge: string;
  metrics: { label: string; value: string }[];
  pills: string[];
  mockup: {
    heroMetric: string;
    heroLabel: string;
    status: string;
    chartTitle: string;
    tableColumns: string[];
    tableRows: { col1: string; col2: string; col3: string; col4: string }[];
    highlightTag: string;
  };
  features: string[];
}

export const industrySolutions: IndustrySolution[] = [
  {
    id: 'erp',
    name: 'Unified Enterprise ERP Software',
    slug: 'erp-software',
    category: 'Enterprise ERP',
    tagline: 'Autonomous Multi-Branch Resource Planning & Global Financial Ledger',
    description: 'A cloud-native ERP ecosystem unifying multi-location supply chains, human capital management (HCM), automated tax-compliant accounting, and real-time executive business intelligence into one single pane of glass.',
    badge: 'Flagship Enterprise',
    metrics: [
      { label: 'Operational Efficiency', value: '+54%' },
      { label: 'Audit Reconciliation', value: '< 2 Hours' },
      { label: 'Multi-Branch Sync', value: 'Real-Time' },
    ],
    pills: ['Multi-Entity Ledger', 'Supply Chain Matrix', 'Automated Payroll', 'Role-Based ACL', 'SOC2 Certified'],
    mockup: {
      heroMetric: '$14.2M',
      heroLabel: 'Consolidated Global Revenue (Q4)',
      status: 'Live Sync • 12 Entities Active',
      chartTitle: 'Branch Cash Flow & Margin Velocity',
      tableColumns: ['Entity / Branch', 'Procurement', 'Inventory Value', 'Operating Margin'],
      tableRows: [
        { col1: 'Pyrow North HQ', col2: '$1,240,500', col3: '$4.1M', col4: '+28.4% ★' },
        { col1: 'EMEA Logistics Hub', col2: '$890,200', col3: '$2.8M', col4: '+31.2% ★' },
        { col1: 'APAC Fulfillment #2', col2: '$640,000', col3: '$1.9M', col4: '+26.8% ★' },
      ],
      highlightTag: 'Autonomous Audit Trail Active',
    },
    features: [
      'Multi-currency automated reconciliation across 40+ international banks',
      'End-to-end supply chain visibility with algorithmic vendor scoring',
      'Automated payroll, tax withholdings, and employee lifecycle management',
      'Sub-second query execution over billion-row transactional tables',
    ],
  },
  {
    id: 'crm',
    name: 'Predictive CRM & Sales Intelligence',
    slug: 'crm-software',
    category: 'Growth Tech',
    tagline: 'Full-Lifecycle Pipeline Automation with AI Deal Health Scoring',
    description: 'Empower your sales force with predictive AI deal scoring, automated multi-channel communication sequences, lead qualification routing, and transparent revenue forecasting that accelerates deal closing cycles.',
    badge: '3.4x Pipeline Velocity',
    metrics: [
      { label: 'Deal Close Rate', value: '+38%' },
      { label: 'Pipeline Visibility', value: '100%' },
      { label: 'Rep Admin Time', value: '-65%' },
    ],
    pills: ['AI Deal Scoring', 'Omnichannel Inbox', 'Revenue Forecasts', 'Auto-Enrichment', 'VoIP Dialer'],
    mockup: {
      heroMetric: '$6.85M',
      heroLabel: 'Weighted Active Pipeline Value',
      status: 'AI Health: 92% Win Likelihood',
      chartTitle: 'Stage Conversion Probability Flow',
      tableColumns: ['Key Account', 'Deal Stage', 'Value', 'AI Forecast'],
      tableRows: [
        { col1: 'Nexus Enterprise Corp', col2: 'Contract Review', col3: '$450,000', col4: '98% Confident' },
        { col1: 'Aether Logistics Inc', col2: 'Technical Proof', col3: '$280,000', col4: '87% Confident' },
        { col1: 'Vanguard FinTech', col2: 'Stakeholder Demo', col3: '$195,000', col4: '91% Confident' },
      ],
      highlightTag: 'Next Step: Auto-send DocuSign',
    },
    features: [
      'Automatic email & call transcription with GPT-driven action item extraction',
      'Dynamic pipeline stages customized for complex B2B enterprise procurement cycles',
      'Real-time Slack & WhatsApp alerts when high-value prospects engage with proposals',
      'Two-way calendar sync, automated follow-up sequences, and zero manual data entry',
    ],
  },
  {
    id: 'inventory',
    name: 'Multi-Warehouse Inventory & Stock System',
    slug: 'inventory-stock',
    category: 'Commerce & Retail',
    tagline: 'Predictive SKU Forecasting, Real-Time Reordering & Barcode Matrix',
    description: 'Eliminate out-of-stocks and dead inventory capital forever. A unified inventory control center supporting multi-bin warehousing, RFID/barcode scanning, dynamic supplier purchase orders, and predictive seasonal reorder triggers.',
    badge: 'Zero Dead Stock',
    metrics: [
      { label: 'Stockout Reduction', value: '99.4%' },
      { label: 'Order Picking Speed', value: '3x Faster' },
      { label: 'Warehouse Capacity', value: '+40% Utilized' },
    ],
    pills: ['Multi-Warehouse', 'Predictive Restock', 'Batch & Expiry', 'RFID / Barcode', 'Bin Management'],
    mockup: {
      heroMetric: '482,900',
      heroLabel: 'Tracked Active SKUs Across 8 Hubs',
      status: 'Live Inventory Accuracy: 99.98%',
      chartTitle: 'Turnover Velocity & Stock Health Ratio',
      tableColumns: ['SKU Category', 'Available Units', 'Reorder Threshold', 'Turnover Days'],
      tableRows: [
        { col1: 'Industrial Micro-Controllers', col2: '14,200 pcs', col3: '2,500 pcs (Optimal)', col4: '14 Days' },
        { col1: 'High-Density Batteries', col2: '8,450 pcs', col3: '1,200 pcs (Safe)', col4: '18 Days' },
        { col1: 'Optical Fiber Assemblies', col2: '32,100 pcs', col3: '5,000 pcs (Surplus)', col4: '9 Days' },
      ],
      highlightTag: 'Autonomous PO Sent to Tier-1 Vendor',
    },
    features: [
      'Multi-location stock transfers with digital chain-of-custody tracking',
      'Automated dynamic safety stock thresholds adjusted to market seasonality',
      'Batch, serial number, and expiration tracking with FIFO / LIFO allocation logic',
      'Direct API connectors to Shopify, Amazon FBA, WooCommerce, and custom ERPs',
    ],
  },
  {
    id: 'pos-billing',
    name: 'Sub-Second Cloud POS & Automated Billing',
    slug: 'billing-pos',
    category: 'Commerce & Retail',
    tagline: 'Lightning-Fast Barcode Checkout, Tax/GST Compliance & Offline Mode',
    description: 'Engineered for high-volume physical retail, chains, and enterprise distributors. Features instant thermal barcode printing, multi-tender split payments, compliant digital tax invoices, and flawless offline-sync capability during internet dropouts.',
    badge: 'Offline-First Engine',
    metrics: [
      { label: 'Checkout Latency', value: '420ms' },
      { label: 'Offline Resiliency', value: '100% Uptime' },
      { label: 'Daily Transaction Volume', value: '250k+' },
    ],
    pills: ['Sub-Second Checkout', 'GST / Tax Hardened', 'Offline-First', 'Dual-Screen POS', 'Multi-Tender'],
    mockup: {
      heroMetric: '1,842',
      heroLabel: 'Orders Processed Today (Terminal #04)',
      status: 'Status: Online • Sync Latency: 12ms',
      chartTitle: 'Peak Hour Checkout Velocity (Pacing)',
      tableColumns: ['Transaction #', 'Items', 'Tender Type', 'Invoice Status'],
      tableRows: [
        { col1: '#TXN-884920', col2: '14 Units', col3: 'Apple Pay / NFC', col4: 'Tax Invoiced ✓' },
        { col1: '#TXN-884921', col2: '3 Units', col3: 'Corporate Card', col4: 'Tax Invoiced ✓' },
        { col1: '#TXN-884922', col2: '8 Units', col3: 'Direct Wire', col4: 'Tax Invoiced ✓' },
      ],
      highlightTag: 'Instant Thermal Receipt & WhatsApp Dispatch',
    },
    features: [
      'Offline transactions stored securely and synced instantly upon reconnection',
      'Instant GST / VAT compliant invoices with QR codes and digital signatures',
      'Integrated loyalty programs, customer store credits, and gift voucher engine',
      'Employee shift cash-draw reconciliation with strict anti-fraud audit logs',
    ],
  },
  {
    id: 'crm-automation',
    name: 'Omnichannel CRM Automation & Drip Loops',
    slug: 'crm-automation',
    category: 'Growth Tech',
    tagline: 'Algorithmic Lead Nurturing Across WhatsApp, SMS, Voice & Email',
    description: 'Transform passive prospects into enthusiastic high-paying clients through hyper-personalized behavioral drip loops. Trigger automated multi-touch outreach when users browse prices, abandon forms, or view product demos.',
    badge: '4.8x Retention',
    metrics: [
      { label: 'Open Rate (WhatsApp)', value: '94%' },
      { label: 'Lead Response Time', value: '< 8s' },
      { label: 'Conversion Lift', value: '+47%' },
    ],
    pills: ['Omnichannel Loops', 'Smart Delays', 'Dynamic Variables', 'Behavioral Triggers', 'A/B Funnels'],
    mockup: {
      heroMetric: '89,400',
      heroLabel: 'Automated Drip Sequences Triggered',
      status: 'Conversion Rate: 34.6%',
      chartTitle: 'Channel Engagement Attribution Matrix',
      tableColumns: ['Workflow Trigger', 'Sequence Stage', 'Active Leads', 'Open Rate'],
      tableRows: [
        { col1: 'Pricing Page 60s Lurk', col2: 'WhatsApp Consultation Hook', col3: '1,420 Leads', col4: '96.2%' },
        { col1: 'Enterprise Demo Complete', col2: 'ROI Calculator Drip #2', col3: '840 Leads', col4: '88.5%' },
        { col1: '30-Day Inactive Revival', col2: 'Executive VIP Incentive', col3: '3,100 Leads', col4: '74.1%' },
      ],
      highlightTag: 'Smart Delay Optimization Engaged',
    },
    features: [
      'Visual drag-and-drop workflow canvas with conditional branch logic',
      'Native fallback pathways: If WhatsApp unread in 30 mins -> SMS -> Email',
      'Dynamic insertion of prospect variables, meeting links, and custom price proposals',
      'Deep webhook integration with Meta Ads, Google Ads, and custom webhooks',
    ],
  },
  {
    id: 'school-campus',
    name: 'Smart School & Campus ERP Suite',
    slug: 'school-campus',
    category: 'Education',
    tagline: 'End-to-End Academic Operations, Parent Portal & Smart RFID Gateways',
    description: 'Modernize educational institutions with unified campus management. Includes biometric & RFID student attendance, automated grade books, real-time parent mobile portals, GPS bus tracking, and integrated fee collection gateways.',
    badge: '100k+ Students Powered',
    metrics: [
      { label: 'Fee Collection Delay', value: 'Zero Days' },
      { label: 'Parent Engagement', value: '98%' },
      { label: 'Admin Overhead', value: '-60%' },
    ],
    pills: ['RFID / Biometrics', 'Parent Portal', 'Auto Gradebooks', 'Fee Gateways', 'GPS Fleet Track'],
    mockup: {
      heroMetric: '99.2%',
      heroLabel: 'Daily Campus Attendance Index',
      status: 'Smart RFID Gates: 3,420 Scans Logged',
      chartTitle: 'Fee Recovery & Academic Performance Trends',
      tableColumns: ['Grade / Cohort', 'Attendance', 'Fee Clearance', 'Portal Engagement'],
      tableRows: [
        { col1: 'Grade 12 Science (Batch A)', col2: '99.4%', col3: '100% Cleared', col4: '98.6%' },
        { col1: 'Grade 11 Engineering', col2: '98.7%', col3: '96.4% Cleared', col4: '97.1%' },
        { col1: 'Senior Campus Labs', col2: '100%', col3: '100% Cleared', col4: '99.2%' },
      ],
      highlightTag: 'Parent Instant SMS Notification Fired',
    },
    features: [
      'Instant SMS/WhatsApp alerts to parents when student passes RFID gate',
      'Automated recurring fee invoice generation with direct UPI, Credit Card & Netbanking',
      'Comprehensive examination controller: automated marks compilation and report card generation',
      'Digital library management, timetable scheduling, and teacher payroll integration',
    ],
  },
  {
    id: 'lead-management',
    name: 'Zero-Leakage Lead Management System (LMS)',
    slug: 'lead-management',
    category: 'Growth Tech',
    tagline: 'Sub-Second Lead Ingestion, Automated Attribution & Instant Rep Calls',
    description: 'Ensure not a single marketing dollar goes to waste. Ingest leads from Facebook, Google, websites, and offline portals in under 1 second, automatically assign reps based on availability and territory, and trigger instant outbound bridge calls.',
    badge: '< 1s Lead Speed',
    metrics: [
      { label: 'Lead Ingestion Speed', value: '800ms' },
      { label: 'Lead Contact Rate', value: '92%' },
      { label: 'Revenue Leakage', value: '0%' },
    ],
    pills: ['Instant Bridge Calls', 'UTM Attribution', 'Territory Routing', 'Click-to-Call', 'Fraud Blocker'],
    mockup: {
      heroMetric: '14.2s',
      heroLabel: 'Average First Rep Touch Time',
      status: 'Queue: 0 Unassigned Leads',
      chartTitle: 'Hourly Inbound Volume vs Rep Response Latency',
      tableColumns: ['Lead Name', 'Source Channel', 'Assigned Specialist', 'Response Latency'],
      tableRows: [
        { col1: 'Marcus Vance (CEO)', col2: 'Google Ads (Search)', col3: 'Senior Architect Rep', col4: '8 Seconds ⚡' },
        { col1: 'Elena Rostova', col2: 'LinkedIn Inbound', col3: 'Enterprise Lead Lead', col4: '14 Seconds ⚡' },
        { col1: 'David Sterling', col2: 'Direct Organic Web', col3: 'Solutions Engineer', col4: '11 Seconds ⚡' },
      ],
      highlightTag: 'VoIP Instant Bridge Connected',
    },
    features: [
      'Instant dual-channel phone bridge: connects sales rep and prospect within 15 seconds',
      'Full-funnel UTM and keyword attribution tracked through closed revenue',
      'Automated re-assignment if an assigned rep fails to initiate contact within 5 minutes',
      'Integrations with Meta Lead Ads, Google Lead Forms, Zapier, Webhooks, and CRMs',
    ],
  },
  {
    id: 'whatsapp-automation',
    name: 'WhatsApp Business API & AI Agents',
    slug: 'whatsapp-automation',
    category: 'Growth Tech',
    tagline: 'Official Meta Green Tick, High-Converting Broadcasts & Conversational AI',
    description: 'Leverage the world’s most engaged channel. Deploy official Meta WhatsApp Business Cloud API with conversational AI sales agents that handle inquiries, showcase product catalogs, generate payment links, and send verified bulk broadcast updates.',
    badge: '98% Message Open Rate',
    metrics: [
      { label: 'Avg Message Open Rate', value: '98.2%' },
      { label: 'Click-Through Rate', value: '45%' },
      { label: '24/7 AI Resolution', value: '82%' },
    ],
    pills: ['Meta Green Tick', 'AI Sales Bots', '1-Click UPI Links', 'Broadcast Engine', 'Shared Team Inbox'],
    mockup: {
      heroMetric: '124,500',
      heroLabel: 'Broadcast Messages Delivered Today',
      status: 'Template Status: Official Meta Approved',
      chartTitle: 'Message Read vs Conversion Funnel',
      tableColumns: ['Campaign / Message', 'Delivered', 'Read Rate', 'Revenue Generated'],
      tableRows: [
        { col1: 'VIP Flash Launch Broadcast', col2: '45,000', col3: '98.4%', col4: '$184,500 ★' },
        { col1: 'Cart Abandonment Recovery', col2: '3,800', col3: '96.8%', col4: '$42,300 ★' },
        { col1: 'Automated Renewal Drip', col2: '8,400', col3: '97.2%', col4: '$98,100 ★' },
      ],
      highlightTag: 'Official Green Tick Verified Provider',
    },
    features: [
      'Official Meta WhatsApp Business Cloud API setup with high-tier messaging limits',
      'Shared multi-agent team inbox with role permissions and canned quick-replies',
      'Native payment gateway integration allowing 1-click in-chat payments',
      'Automated transactional notifications: Order confirmations, tracking updates, and OTPs',
    ],
  },
  {
    id: 'hospital-clinic',
    name: 'Hospital & Healthcare Clinic EMR Suite',
    slug: 'hospital-clinic',
    category: 'Healthcare',
    tagline: 'Digital Health Records, Doctor Slot Scheduling & Integrated Pharmacy/Lab',
    description: 'HIPAA & NABH-ready medical operations engine. Seamlessly connects OPD/IPD patient registration, doctor consultation scheduling, electronic medical records (EMR), automated lab equipment interfacing, and pharmacy billing with zero errors.',
    badge: 'HIPAA / NABH Ready',
    metrics: [
      { label: 'Patient Wait Time', value: '-52%' },
      { label: 'Lab Report TAT', value: '3x Faster' },
      { label: 'Prescription Accuracy', value: '100%' },
    ],
    pills: ['HIPAA Compliant', 'Doctor OPD / IPD', 'Lab Interfacing', 'Pharmacy POS', 'Patient EHR Portal'],
    mockup: {
      heroMetric: '1,280',
      heroLabel: 'Outpatient Consultations Today',
      status: 'Emergency Bed Utilization: 74% (Optimal)',
      chartTitle: 'Department Patient Velocity & EMR Compliance',
      tableColumns: ['Department', 'Active OPD Queue', 'Avg Consult Time', 'EMR Synced'],
      tableRows: [
        { col1: 'Cardiology Center', col2: '34 Patients', col3: '14 Mins', col4: '100% Synced' },
        { col1: 'Neurology & Diagnostics', col2: '28 Patients', col3: '18 Mins', col4: '100% Synced' },
        { col1: 'Orthopedics & Trauma', col2: '42 Patients', col3: '12 Mins', col4: '100% Synced' },
      ],
      highlightTag: 'HL7 / FHIR Medical Data Standard Compliant',
    },
    features: [
      'Interactive digital prescription pad with automated drug-interaction warnings',
      'Direct barcode integration with lab diagnostic machines for instant report generation',
      'Automated SMS/WhatsApp appointment reminders reducing no-shows by up to 60%',
      'Complete IPD bed management, nursing charts, vitals monitoring, and discharge summaries',
    ],
  },
  {
    id: 'gym-fitness',
    name: 'Gym & Fitness Center Management Platform',
    slug: 'gym-fitness',
    category: 'Wellness & Lifestyle',
    tagline: 'Biometric Access Control, Member Recurring Billing & Trainer Schedules',
    description: 'An all-in-one management powerhouse for gyms, crossfit boxes, and health clubs. Automate turnstile biometric access upon fee payment, schedule personal training sessions, track member workout metrics, and prevent subscription churn.',
    badge: '98% On-Time Renewals',
    metrics: [
      { label: 'Member Retention', value: '+35%' },
      { label: 'Auto-Renewal Rate', value: '92%' },
      { label: 'Access Gate Latency', value: '180ms' },
    ],
    pills: ['Biometric Gates', 'Auto Recurring Fees', 'Trainer Calendars', 'Member Mobile App', 'Nutrition Plans'],
    mockup: {
      heroMetric: '2,840',
      heroLabel: 'Active Enrolled Fitness Members',
      status: 'Turnstile #1 & #2: Biometrics Online',
      chartTitle: 'Monthly Recurring Revenue (MRR) Growth',
      tableColumns: ['Plan Tier', 'Active Members', 'MRR Contribution', 'Retention Rate'],
      tableRows: [
        { col1: 'VIP Annual All-Access', col2: '940 Members', col3: '$94,000/mo', col4: '96.2%' },
        { col1: 'Executive Personal Training', col2: '410 Members', col3: '$82,000/mo', col4: '91.8%' },
        { col1: 'Standard Club Membership', col2: '1,490 Members', col3: '$89,400/mo', col4: '88.5%' },
      ],
      highlightTag: 'Biometric Turnstile Access Automatically Granted',
    },
    features: [
      'Turnstile gate locks automatically if member subscription has lapsed',
      'Automated card tokenization for hands-free recurring monthly dues collection',
      'Dedicated member mobile app for booking yoga classes and PT time slots',
      'Trainer commission calculation based on sessions completed and client ratings',
    ],
  },
  {
    id: 'salon-spa',
    name: 'Luxury Salon & Spa Booking Ecosystem',
    slug: 'salon-spa',
    category: 'Wellness & Lifestyle',
    tagline: 'Chair Booking Matrix, Stylist Commission Ledger & Client Re-Engagement',
    description: 'Elevate your salon, spa, or aesthetic clinic. Deliver a VIP booking experience with multi-stylist calendar scheduling, automated chair allocation, product retail inventory tracking, and algorithmic reminder funnels that bring clients back every 3 weeks.',
    badge: 'Zero Double-Bookings',
    metrics: [
      { label: 'Chair Utilization', value: '92%' },
      { label: 'Client Repeat Rate', value: '+48%' },
      { label: 'Retail Up-Sell', value: '+34%' },
    ],
    pills: ['Multi-Chair Calendar', 'Stylist Commissions', 'WhatsApp Reminders', 'Retail POS', 'Loyalty Engine'],
    mockup: {
      heroMetric: '94.8%',
      heroLabel: 'Weekend Chair Occupancy Rate',
      status: 'Live Booking Engine: 8 Stations Active',
      chartTitle: 'Stylist Productivity & Retail Product Upsell',
      tableColumns: ['Master Stylist', 'Appointments', 'Service Revenue', 'Client Satisfaction'],
      tableRows: [
        { col1: 'Alexander V. (Artistic Dir)', col2: '12 Bookings', col3: '$1,850', col4: '5.0 ★ (100%)' },
        { col1: 'Chloe Moreau (Colorist)', col2: '9 Bookings', col3: '$1,420', col4: '4.9 ★ (98%)' },
        { col1: 'Julian Ross (Senior Stylist)', col2: '11 Bookings', col3: '$1,290', col4: '5.0 ★ (100%)' },
      ],
      highlightTag: 'Algorithmic 21-Day Touch-Up Recall Active',
    },
    features: [
      'Visual timeline grid preventing chair overlaps and minimizing idle stylist downtime',
      'Automated WhatsApp appointment confirmations with 1-click reschedule options',
      'Automated stylist commission calculations split between services and product retail sales',
      'Client history cards detailing formula recipes, skin allergies, and favorite beverages',
    ],
  },
];

