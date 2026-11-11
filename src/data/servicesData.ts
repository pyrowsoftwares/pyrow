export interface ServiceItem {
  id: string;
  category: 'web' | 'marketing' | 'software' | 'mobile';
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  isPopular?: boolean;
  kpis: { label: string; value: string }[];
  tags: string[];
  features: string[];
}

export const servicesData: ServiceItem[] = [
  // 1. Web Development & UI/UX (Inspired by Nexus Info, Flolapo & Digitell)
  {
    id: 'web-design-dev',
    category: 'web',
    title: 'Web Development & Bespoke UI/UX',
    shortDesc: 'Ultra-responsive modern web platforms engineered for sub-second load times, corporate authority, and immersive storytelling.',
    fullDesc: 'We craft high-performance digital flagships that convert visitors into loyal clients. Combining bespoke UI/UX design with modern tech stacks (Next.js, React, Tailwind, PHP/Laravel, Node.js) ensuring 99.9% uptime, mobile-first responsiveness, and blistering speed.',
    badge: 'Popular',
    isPopular: true,
    kpis: [
      { label: 'Avg Page Load', value: '< 0.6s' },
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Conversion Lift', value: '+42%' },
    ],
    tags: ['Next.js 15', 'React', 'Tailwind CSS', 'Laravel / Node', 'Headless CMS', 'Framer Motion'],
    features: [
      'Bespoke cinematic brand design & micro-interactions (Flolapo style)',
      'Corporate websites, startup portals, and custom web applications (Nexus style)',
      'Mobile-first responsive typography and fluid viewport layouts',
      'Enterprise SSL hardening, CI/CD pipelines, and high-security deployment',
    ],
  },
  {
    id: 'ecommerce-solutions',
    category: 'web',
    title: 'High-Converting E-Commerce Solutions',
    shortDesc: 'Shopify Plus, WooCommerce & Headless commerce architectures with 1-click checkouts and zero latency.',
    fullDesc: 'Architected to handle peak flash sales effortlessly. We engineer high-velocity checkouts, seamless payment gateway integrations (UPI, Cards, NetBanking), omnichannel ERP sync, and dynamic personalizations that maximize Average Order Value.',
    badge: 'High ROAS',
    isPopular: true,
    kpis: [
      { label: 'Uptime in Flash Sales', value: '99.99%' },
      { label: 'Checkout Latency', value: '380ms' },
      { label: 'AOV Increase', value: '+28%' },
    ],
    tags: ['Shopify Plus', 'WooCommerce', 'Headless Commerce', 'Stripe / UPI', 'Magento', 'GraphQL'],
    features: [
      'Custom checkout optimizations with frictionless 1-click payment gateways',
      'Real-time automated inventory, warehouse & multi-branch stock sync',
      'AI-powered product recommendations & dynamic cross-sell bundles',
      'Mobile-optimized shopping experiences with instant product filtering',
    ],
  },
  {
    id: 'web-maintenance-devops',
    category: 'web',
    title: 'Website Maintenance & 24/7 Support',
    shortDesc: 'Round-the-clock proactive security patching, real-time monitoring, auto-scaling and guaranteed 99.99% uptime.',
    fullDesc: 'Your mission-critical web infrastructure supervised by dedicated technical architects. Zero-downtime rolling deployments, automated daily cloud backups, CMS updates, and proactive threat mitigation before vulnerabilities emerge.',
    kpis: [
      { label: 'Availability SLA', value: '99.99%' },
      { label: 'Incident Response', value: '< 15 mins' },
      { label: 'Automated Backups', value: 'Daily' },
    ],
    tags: ['Cloudflare / AWS', 'Docker', 'Kubernetes', 'Security Patching', 'Uptime SLA'],
    features: [
      '24/7 automated synthetic health checks & APM server monitoring',
      'WAF firewall configuration, SSL management, and DDoS mitigation',
      'WordPress & headless CMS core/plugin updates with zero broken links',
      'Dedicated technical helpdesk with rapid guaranteed response times',
    ],
  },
  {
    id: 'web-revamp-speed',
    category: 'web',
    title: 'Website Revamp & Speed Optimization',
    shortDesc: 'Zero-loss legacy modernizations achieving 95+ Google Core Web Vitals and instant organic SEO ranking boosts.',
    fullDesc: 'Transform sluggish, outdated corporate sites into sleek, modern web engines. We eliminate render-blocking scripts, refactor bloated assets, and rewrite critical paths to achieve pristine green Core Web Vitals with zero loss of existing rankings.',
    badge: 'Core Web Vitals',
    kpis: [
      { label: 'Google Lighthouse', value: '99/100' },
      { label: 'Bounce Rate Reduction', value: '-35%' },
      { label: 'LCP Speed', value: '0.8s' },
    ],
    tags: ['Core Web Vitals', 'Code Splitting', 'Edge Caching', 'Image WebP/AVIF', 'SEO Preserved'],
    features: [
      'Zero-downtime legacy code refactoring and modern UI/UX redesign',
      'Edge SSR & Global CDN cache optimization for sub-second speeds',
      'Asset tree-shaking, font subsetting, and critical CSS extraction',
      'Complete SEO URL structure and redirect preservation',
    ],
  },

  // 2. Digital Marketing, Branding & Growth (Inspired by Flolapo, Digicherry, Digitell & PipeRocket)
  {
    id: 'marketing-social',
    category: 'marketing',
    title: 'Brand Identity, Creative & Social Media',
    shortDesc: 'Aesthetic brand identity, packaging design, and viral short-form content engineered for market recognition.',
    fullDesc: 'Elevate your business with cinematic brand aesthetics. Inspired by high-end design studios like Flolapo, we craft distinct brand guidelines, packaging mockups, high-production video reels, and social media calendars that position your company as the category leader.',
    badge: 'Creative Studio',
    isPopular: true,
    kpis: [
      { label: 'Monthly Organic Views', value: '4.5M+' },
      { label: 'Follower Growth Rate', value: '+140%' },
      { label: 'Engagement Rate', value: '6.8%' },
    ],
    tags: ['Brand Identity', 'Packaging Design', 'Instagram Reels', 'LinkedIn B2B', 'Content Production'],
    features: [
      'Complete brand identity systems: logos, typography, color palettes & guidelines',
      'Packaging design, brand collateral, and marketing promotional assets',
      'High-impact short-form video production, motion graphics, and typography',
      'Data-backed editorial content calendars tailored to social algorithms',
    ],
  },
  {
    id: 'marketing-branding',
    category: 'marketing',
    title: 'Founder & Executive Personal Branding',
    shortDesc: 'Transforming Founders & Executives into recognized industry authorities with ghostwritten thought-leadership.',
    fullDesc: 'People buy from trusted leaders, not faceless logos. Inspired by Digicherry consulting models, we architect executive personal branding strategies that attract top-tier talent, investor backing, and inbound high-ticket enterprise clients through authoritative LinkedIn and Twitter/X storytelling.',
    badge: 'Authority Growth',
    kpis: [
      { label: 'CXO Impressions', value: '1.2M+' },
      { label: 'Inbound Inquiries', value: '4x' },
      { label: 'Keynote Invites', value: '10+' },
    ],
    tags: ['Ghostwriting', 'LinkedIn Authority', 'Executive PR', 'Keynote Decks', 'Founder Storytelling'],
    features: [
      'Strategic executive interviews distilled into high-impact thought leadership posts',
      'High-authority whitepapers, opinion pieces, and industry commentary',
      'Profile optimization for high-ticket client and investor discovery',
      'Strategic networking engagement with industry peers and Tier-1 media',
    ],
  },
  {
    id: 'marketing-content-email',
    category: 'marketing',
    title: 'Content & Automated Email Funnels',
    shortDesc: 'High-conversion lifecycle automations, VIP customer newsletters, and hyper-personalized conversion copy.',
    fullDesc: 'Build an owned audience that compounds over time. We design behavioral email sequences, abandoned cart revival funnels, and value-rich newsletters that generate steady, predictable repeat customer purchases.',
    kpis: [
      { label: 'Average Open Rate', value: '44.8%' },
      { label: 'Repeat Purchase Rate', value: '42%' },
      { label: 'Unsubscribe Rate', value: '< 0.2%' },
    ],
    tags: ['Klaviyo', 'HubSpot', 'Customer.io', 'Lifecycle Funnels', 'Dynamic Copy'],
    features: [
      'Dynamic behavioral trigger sequences (Welcome, Nurture, Win-back, VIP)',
      'A/B tested subject lines, send-time optimization, and preview text',
      'Deliverability engineering and dedicated domain warm-up',
      'Customer segmentation based on lifetime value and product interest',
    ],
  },
  {
    id: 'marketing-seo',
    category: 'marketing',
    title: 'Technical, Local & Programmatic SEO',
    shortDesc: 'Local Google Map Pack dominance, technical crawling audits, and programmatic keyword scaling.',
    fullDesc: 'We treat SEO as business growth engineering. Combining local search dominance (Google Business Profile, Map Pack) with PipeRocket-style programmatic SEO and technical crawl optimizations, we position your business at the very top of Google for high-intent search queries.',
    badge: 'Top Organic',
    isPopular: true,
    kpis: [
      { label: 'Top 3 Rankings', value: '850+' },
      { label: 'Organic Traffic Lift', value: '+310%' },
      { label: 'Domain Rating Boost', value: '+45' },
    ],
    tags: ['Google Map Pack', 'Local SEO', 'Programmatic SEO', 'Schema Markup', 'Ahrefs'],
    features: [
      'Local SEO dominance: Google Business Profile optimization & local citation networks',
      'High-intent commercial keyword clustering with topical authority mapping',
      'Programmatic landing page frameworks scaling to hundreds of keyword variations',
      'Comprehensive Core Web Vitals and crawl budget optimization',
    ],
  },
  {
    id: 'marketing-ppc',
    category: 'marketing',
    title: 'Google & Meta High-ROAS Performance Ads',
    shortDesc: 'Laser-focused paid acquisition targeting bottom-of-funnel buyers with guaranteed positive unit economics.',
    fullDesc: 'Stop burning cash on generic clicks. We build high-converting landing pages paired with precision audience targeting on Google Search, Meta Ads (Facebook/Instagram), and LinkedIn Ads to generate qualified leads and sales at predictable CAC.',
    badge: 'High ROAS',
    kpis: [
      { label: 'Average Client ROAS', value: '4.8x' },
      { label: 'Campaigns Optimized', value: '1,200+' },
      { label: 'CAC Reduction', value: '-38%' },
    ],
    tags: ['Google Search & PMax', 'Meta Advantage+', 'LinkedIn Ads', 'Custom Landers', 'CRO'],
    features: [
      'Full-funnel attribution tracking with Server-Side GTM & Conversions API',
      'Continuous creative testing with dynamic copy, hooks, and video angles',
      'Strict negative keyword hygiene and click-fraud elimination',
      'High-converting landing page experiences with tailored conversion copy',
    ],
  },
  {
    id: 'marketing-ai-ads',
    category: 'marketing',
    title: 'AI Search Optimization (AEO/GEO) & Conversational Bots',
    shortDesc: 'Optimize for AI engines (ChatGPT, Perplexity, Google AI Overviews) combined with 24/7 lead bots.',
    fullDesc: 'The frontier of digital discovery. We optimize your brand to be cited by AI search engines (Generative Engine Optimization) and integrate 24/7 conversational AI assistants into your website and WhatsApp to qualify leads in seconds.',
    badge: 'Next-Gen AI',
    kpis: [
      { label: 'Lead Response Time', value: '< 2 secs' },
      { label: 'Form Completion Lift', value: '+65%' },
      { label: '24/7 Qualification', value: '100%' },
    ],
    tags: ['ChatGPT & Perplexity AEO', 'WhatsApp AI Bot', 'LangChain', 'CRM Sync', '24/7 Sales Bot'],
    features: [
      'Generative Engine Optimization (GEO) ensuring inclusion in AI summaries',
      'Official WhatsApp Business API automation bots with instant lead scoring',
      'Direct integration with CRM systems for immediate sales team notifications',
      'Multi-language conversational support answering customer questions 24/7',
    ],
  },

  // 3. Custom Business Software & ERP Suites (Inspired by Reach360 & DotStart)
  {
    id: 'software-custom-cloud',
    category: 'software',
    title: 'Custom Business ERP & Cloud Software',
    shortDesc: 'Multi-branch ERP suites, School/Campus management, Hospital EMR, and billing & barcode POS systems.',
    fullDesc: 'Built for operational efficiency. Inspired by specialized software platforms like Reach360 and DotStart, we build cloud-native management suites: multi-warehouse inventory, School & College ERP, Hospital/Clinic EMR, and automated billing engines with real-time analytics.',
    badge: 'Enterprise Core',
    isPopular: true,
    kpis: [
      { label: 'Concurrent Users', value: '50,000+' },
      { label: 'Server Response', value: '< 45ms' },
      { label: 'Multi-Branch Sync', value: 'Real-Time' },
    ],
    tags: ['Enterprise ERP', 'Billing & POS', 'School ERP', 'Hospital EMR', 'PostgreSQL', 'Node / Go'],
    features: [
      'Unified multi-branch supply chain, inventory, and accounting ledgers',
      'Specialized ERP workflows: Schools/Colleges, Healthcare Clinics, and Salons',
      'Role-based access control (RBAC), multi-user permissions, and audit trails',
      'Automatic tax invoices, GST reconciliation, and automated reporting',
    ],
  },
  {
    id: 'software-desktop',
    category: 'software',
    title: 'Desktop Application Development & Offline POS',
    shortDesc: 'High-performance desktop software (Tauri, Electron, C++, Python) engineered for heavy local workloads and offline billing.',
    fullDesc: 'When browser sandboxes aren’t enough. We engineer blazing-fast native and hybrid desktop applications with low memory footprints, barcode scanner support, thermal printer drivers, local SQLite databases, and background cloud sync.',
    kpis: [
      { label: 'Startup Time', value: '< 0.4s' },
      { label: 'Memory Footprint', value: '< 65MB' },
      { label: 'Platform Support', value: 'Win / Mac / Linux' },
    ],
    tags: ['Tauri (Rust)', 'Electron', 'Offline-First POS', 'Barcode / Thermal Print', 'SQLite'],
    features: [
      'Cross-platform distribution for Windows, macOS, and Linux',
      'Offline-first POS billing that continues operating when internet is down',
      'Hardware integration with barcode scanners, weighing scales, and receipt printers',
      'Secure auto-update pipeline with encrypted local data storage',
    ],
  },

  // 4. Mobile & Android Engineering (Inspired by DotStart & Nexus Info)
  {
    id: 'mobile-native',
    category: 'mobile',
    title: 'Android & iOS Native Mobile Engineering',
    shortDesc: 'Pixel-perfect Swift and Kotlin engineering unlocking the maximum hardware power of Apple and Android devices.',
    fullDesc: 'When compromise is not an option. We craft bespoke native iOS (Swift / SwiftUI) and Android (Kotlin / Jetpack Compose) apps that deliver unmatched fluidity, biometric security, and deep operating system hardware integration.',
    badge: 'Native Power',
    kpis: [
      { label: 'App Frame Rate', value: '120fps' },
      { label: 'Crash-free Sessions', value: '99.95%' },
      { label: 'App Store Rating', value: '4.9 ★' },
    ],
    tags: ['SwiftUI', 'Kotlin Jetpack', 'Biometrics', 'Offline SQLite', 'Hardware APIs'],
    features: [
      'Full utilization of native iOS / Android APIs, widgets, and camera/sensors',
      'Hardware-accelerated graphics and low-latency Bluetooth/NFC capabilities',
      'Bank-grade biometric encryption, secure enclave, and keychain security',
      'Deep offline caching with Room and CoreData database architectures',
    ],
  },
  {
    id: 'mobile-flutter',
    category: 'mobile',
    title: 'Flutter Cross-Platform Mobile Engineering',
    shortDesc: 'Single-codebase velocity with true native 60fps performance across iOS, Android, and Web.',
    fullDesc: 'Cut your time-to-market in half without sacrificing quality. Our Flutter engineering team builds fluid, visually stunning mobile apps that share up to 90% of business logic while feeling completely native on both platforms.',
    badge: 'Speed to Market',
    isPopular: true,
    kpis: [
      { label: 'Development Speed', value: '2x Faster' },
      { label: 'Shared Codebase', value: '92%' },
      { label: 'Consistent 60fps', value: '100%' },
    ],
    tags: ['Flutter / Dart', 'BLoC / Provider', 'Firebase', 'REST / GraphQL', 'Push Notifications'],
    features: [
      'Pixel-perfect uniform design system across iOS and Android ecosystems',
      'State-of-the-art state management with strict architectural separation',
      'Custom native platform channels for device-specific hardware integrations',
      'Rapid iterative development cycle with continuous testing and deployment',
    ],
  },
];

