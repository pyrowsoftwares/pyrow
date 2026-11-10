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
  // 1. Web Development
  {
    id: 'web-design-dev',
    category: 'web',
    title: 'Web Development & UI/UX',
    shortDesc: 'Ultra-responsive modern web platforms engineered for sub-second load times and immersive brand storytelling.',
    fullDesc: 'We craft high-performance digital flagships that convert visitors into loyal enterprise clients. Combining award-winning UI/UX with modern headless stacks (Next.js, React, Tailwind) ensuring 99.9% uptime and blistering speed.',
    badge: 'Popular',
    isPopular: true,
    kpis: [
      { label: 'Avg Page Load', value: '< 0.6s' },
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Conversion Lift', value: '+42%' },
    ],
    tags: ['Next.js 15', 'React', 'Tailwind CSS', 'Framer Motion', 'Headless CMS'],
    features: [
      'Bespoke cinematic brand design & micro-interactions',
      'Fluid responsive typography and dynamic viewport layouts',
      'Headless CMS integration (Sanity, Strapi, Contentful)',
      'Enterprise security, SSL hardening, and automated CI/CD',
    ],
  },
  {
    id: 'ecommerce-solutions',
    category: 'web',
    title: 'High-Converting E-Commerce Solutions',
    shortDesc: 'Shopify Plus, Magento & Headless commerce architectures with 1-click checkouts and zero checkout latency.',
    fullDesc: 'Architected to handle multimillion-dollar peak flash sales without breaking a sweat. We engineer high-velocity checkouts, omnichannel ERP sync, and dynamic personalizations that skyrocket Average Order Value (AOV).',
    badge: 'High ROAS',
    isPopular: true,
    kpis: [
      { label: 'Uptime in Flash Sales', value: '99.99%' },
      { label: 'Checkout Latency', value: '380ms' },
      { label: 'AOV Increase', value: '+28%' },
    ],
    tags: ['Shopify Plus', 'Headless Commerce', 'Stripe', 'Magento', 'GraphQL'],
    features: [
      'Custom checkout optimizations with frictionless payment gateways',
      'Real-time automated inventory & warehouse sync',
      'AI-powered product recommendations & dynamic bundles',
      'International multi-currency & localized tax compliance',
    ],
  },
  {
    id: 'web-maintenance-devops',
    category: 'web',
    title: 'Website Maintenance & 24/7 DevOps',
    shortDesc: 'Round-the-clock proactive security patching, real-time monitoring, auto-scaling and guaranteed 99.99% uptime.',
    fullDesc: 'Your mission-critical web infrastructure supervised by dedicated DevOps architects. Zero-downtime rolling deployments, hourly cloud backups, and proactive threat mitigation before vulnerabilities emerge.',
    kpis: [
      { label: 'Availability SLA', value: '99.99%' },
      { label: 'Incident Response', value: '< 15 mins' },
      { label: 'Automated Backups', value: 'Hourly' },
    ],
    tags: ['AWS / Cloudflare', 'Docker', 'Kubernetes', 'Datadog', 'Terraform'],
    features: [
      '24/7 automated synthetic health checks & APM monitoring',
      'WAF firewall configuration and DDoS mitigation',
      'Staging environments with instantaneous blue/green rollbacks',
      'Continuous dependency vulnerability scanning',
    ],
  },
  {
    id: 'web-revamp-speed',
    category: 'web',
    title: 'Website Revamp & Speed Optimization',
    shortDesc: 'Zero-loss legacy modernizations achieving 95+ Google Core Web Vitals and instant SEO ranking boosts.',
    fullDesc: 'Transform sluggish, outdated corporate sites into sleek, modern web engines. We eliminate render-blocking scripts, refactor bloated assets, and rewrite critical paths to achieve pristine green Core Web Vitals.',
    badge: 'Core Web Vitals',
    kpis: [
      { label: 'Google Lighthouse', value: '99/100' },
      { label: 'Bounce Rate Reduction', value: '-35%' },
      { label: 'LCP Speed', value: '0.8s' },
    ],
    tags: ['Core Web Vitals', 'Code Splitting', 'Edge Caching', 'Image WebP/AVIF'],
    features: [
      'Zero-downtime legacy code refactoring and modernization',
      'Edge SSR & Global CDN cache optimization',
      'Asset tree-shaking, font subsetting, and critical CSS extraction',
      'SEO meta and redirect preservation with zero traffic loss',
    ],
  },

  // 2. Digital Marketing (Growth Engine)
  {
    id: 'marketing-social',
    category: 'marketing',
    title: 'Social Media Marketing & Management',
    shortDesc: 'Hyper-targeted viral campaigns across Instagram, LinkedIn, YouTube, and X engineered for brand dominance.',
    fullDesc: 'Stop burning budget on vanity impressions. We deploy algorithmic content funnels, high-production video reels, and community engagement loops that position your brand at the center of your industry conversation.',
    badge: 'High Viral Reach',
    isPopular: true,
    kpis: [
      { label: 'Monthly Organic Views', value: '4.5M+' },
      { label: 'Follower Growth Rate', value: '+140%' },
      { label: 'Engagement Rate', value: '6.8%' },
    ],
    tags: ['Instagram Reels', 'LinkedIn B2B', 'YouTube Shorts', 'X Viral Threads'],
    features: [
      'Data-backed editorial content calendars tailored to algorithm updates',
      'High-impact short-form video production & motion typography',
      'Active social listening, crisis management, and audience nurturing',
      'Influencer co-marketing and strategic B2B amplification',
    ],
  },
  {
    id: 'marketing-branding',
    category: 'marketing',
    title: 'Personal Branding for Founders & CXOs',
    shortDesc: 'Transforming Founders & Executives into recognized industry authorities with ghostwritten thought-leadership.',
    fullDesc: 'People buy from leaders, not faceless corporations. We architect executive personal brand strategies that attract top tier talent, investor backing, and inbound high-ticket enterprise contracts on LinkedIn and Twitter/X.',
    kpis: [
      { label: 'CXO Impressions', value: '1.2M+' },
      { label: 'Inbound Inquiries', value: '4x' },
      { label: 'Keynote Invites', value: '10+' },
    ],
    tags: ['Ghostwriting', 'LinkedIn Top Voice', 'Executive PR', 'Keynote Decks'],
    features: [
      'Bi-weekly strategic executive interviews turned into viral thought leadership',
      'High-authority whitepapers, opinion pieces, and podcast pitch kits',
      'Profile optimization for high-ticket investor & client discovery',
      'Strategic engagement with industry peers and Tier-1 journalists',
    ],
  },
  {
    id: 'marketing-content-email',
    category: 'marketing',
    title: 'Content & Automated Email Lifecycle Funnels',
    shortDesc: 'High-conversion lifecycle automations, VIP customer newsletters, and hyper-personalized conversion copy.',
    fullDesc: 'Build an owned audience that compounds over time. We design behavioral email sequences, abandoned cart revival funnels, and value-rich newsletters that generate steady, predictable monthly recurring cash flow.',
    kpis: [
      { label: 'Average Open Rate', value: '44.8%' },
      { label: 'Email Revenue Share', value: '32%' },
      { label: 'Unsubscribe Rate', value: '< 0.2%' },
    ],
    tags: ['Klaviyo', 'HubSpot', 'Customer.io', 'Segment', 'Dynamic Copy'],
    features: [
      'Dynamic behavioral trigger sequences (Welcome, Nurture, Win-back)',
      'A/B tested subject lines, send-time optimization, and preview text',
      'Deliverability engineering and dedicated domain warm-up',
      'Deep segmentation based on lifetime value and product affinity',
    ],
  },
  {
    id: 'marketing-seo',
    category: 'marketing',
    title: 'Technical & Programmatic SEO Dominance',
    shortDesc: 'Deep technical audits, semantic keyword clusters, and programmatic pages dominating organic Google search.',
    fullDesc: 'We treat SEO as software engineering. From schema markup and crawl budget optimization to programmatic page generation and authority backlink syndication, we place your business at the pinnacle of Google Page 1.',
    badge: 'Top Organic',
    isPopular: true,
    kpis: [
      { label: 'Top 3 Rankings', value: '850+' },
      { label: 'Organic Traffic Lift', value: '+310%' },
      { label: 'Domain Rating Boost', value: '+45' },
    ],
    tags: ['Programmatic SEO', 'Schema Markup', 'Ahrefs', 'Search Console', 'Entity SEO'],
    features: [
      'Comprehensive Core Web Vitals and technical crawling architecture audit',
      'High-intent commercial keyword clustering with topical authority maps',
      'Programmatic landing page frameworks scaling to thousands of keywords',
      'Tier-1 editorial outreach and PR-driven digital backlink campaigns',
    ],
  },
  {
    id: 'marketing-ppc',
    category: 'marketing',
    title: 'Google & Meta High-ROAS Performance Ads',
    shortDesc: 'Laser-focused paid acquisition targeting bottom-of-funnel buyers with guaranteed positive unit economics.',
    fullDesc: 'Stop burning cash on generic clicks. We build high-converting landing pages paired with smart bidding algorithms on Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads to generate qualified leads at predictable CAC.',
    badge: 'High ROAS',
    kpis: [
      { label: 'Average Client ROAS', value: '4.8x' },
      { label: 'Ad Spend Managed', value: '$12M+' },
      { label: 'CAC Reduction', value: '-38%' },
    ],
    tags: ['Google Search & PMax', 'Meta Advantage+', 'LinkedIn Ads', 'Custom Landers'],
    features: [
      'Full-funnel attribution tracking with Server-Side GTM & Conversions API',
      'Continuous creative testing with dynamic copy, hooks, and video angles',
      'Strict negative keyword hygiene and click-fraud elimination',
      'Dynamic landing page personalization tailored to search query terms',
    ],
  },
  {
    id: 'marketing-ai-ads',
    category: 'marketing',
    title: 'ChatGPT & AI Conversational Ad Engines',
    shortDesc: 'Next-gen conversational ads, automated 24/7 sales assistants, and LLM-driven lead qualification.',
    fullDesc: 'The frontier of digital advertising. We integrate conversational AI assistants directly into your paid ad funnels, allowing leads to chat, get custom price estimates, and book appointments in under 60 seconds.',
    badge: 'Next-Gen AI',
    kpis: [
      { label: 'Lead Response Time', value: '< 2 secs' },
      { label: 'Form Completion Lift', value: '+65%' },
      { label: '24/7 Qualification', value: '100%' },
    ],
    tags: ['OpenAI GPT-4o', 'Claude 3.5', 'WhatsApp AI Bot', 'LangChain', 'CRM Sync'],
    features: [
      'Custom LLM trained strictly on your brand guidelines and product catalogs',
      'Direct integration with WhatsApp, Messenger, and web chat widgets',
      'Instant lead qualification scoring and automatic CRM handoff',
      'Multi-language real-time conversational objection handling',
    ],
  },

  // 3. Custom Software
  {
    id: 'software-custom-cloud',
    category: 'software',
    title: 'Custom Software Development & Cloud Arch',
    shortDesc: 'Enterprise-grade cloud-native architectures, microservices, robust API ecosystems, and scalable databases.',
    fullDesc: 'Built for enterprise resilience and infinite horizontal scaling. From distributed financial backends to complex real-time event-driven systems, we engineer software that handles millions of concurrent transactions with zero lag.',
    badge: 'Enterprise Core',
    isPopular: true,
    kpis: [
      { label: 'Transactions/sec', value: '50,000+' },
      { label: 'API P99 Latency', value: '< 45ms' },
      { label: 'Zero-Downtime Rollouts', value: '100%' },
    ],
    tags: ['Node.js', 'Go', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'Microservices and modular monolith architecture designed for long-term scalability',
      'Event-driven data pipelines using Kafka, RabbitMQ, and AWS SQS',
      'Role-based access control (RBAC), SSO (SAML/OAuth2), and audit logging',
      'Comprehensive unit, integration, and load testing suites (>85% coverage)',
    ],
  },
  {
    id: 'software-desktop',
    category: 'software',
    title: 'Desktop Application Development',
    shortDesc: 'High-performance cross-platform desktop software (Electron, Tauri, C++, Python) engineered for heavy local workloads.',
    fullDesc: 'When browser sandboxes aren’t enough. We engineer blazing-fast native and hybrid desktop applications with low memory footprints, hardware acceleration, local database synchronization, and offline capability.',
    kpis: [
      { label: 'Startup Time', value: '< 0.4s' },
      { label: 'Memory Footprint', value: '< 65MB' },
      { label: 'OS Support', value: 'Win/Mac/Linux' },
    ],
    tags: ['Tauri (Rust)', 'Electron', 'C++ / Qt', 'Python / PySide', 'SQLite'],
    features: [
      'Cross-platform distribution for Windows, macOS, and Linux',
      'Hardware-accelerated rendering and multi-threaded processing',
      'Secure auto-update pipeline with cryptographic code signing',
      'Offline-first architecture with background cloud synchronization',
    ],
  },

  // 4. Mobile & Android Apps
  {
    id: 'mobile-native',
    category: 'mobile',
    title: 'Android & iOS Native Mobile Engineering',
    shortDesc: 'Pixel-perfect Swift and Kotlin engineering unlocking the maximum hardware power of Apple and Android devices.',
    fullDesc: 'When compromise is not an option. We craft bespoke native iOS (Swift / SwiftUI) and Android (Kotlin / Jetpack Compose) apps that deliver unmatched fluidity, haptic responsiveness, and deep OS hardware integration.',
    badge: 'Native Power',
    kpis: [
      { label: 'App Frame Rate', value: '120fps' },
      { label: 'Crash-free Sessions', value: '99.95%' },
      { label: 'App Store Rating', value: '4.9 ★' },
    ],
    tags: ['SwiftUI', 'Kotlin Jetpack', 'CoreML', 'Metal', 'Biometrics'],
    features: [
      'Full utilization of native iOS / Android APIs, widgets, and dynamic island',
      'Hardware-accelerated graphics and low-latency Bluetooth/NFC capabilities',
      'Bank-grade biometric encryption, secure enclave, and keychain security',
      'Deep offline caching with CoreData and Room database architectures',
    ],
  },
  {
    id: 'mobile-flutter',
    category: 'mobile',
    title: 'Flutter & Cross-Platform Mobile Engineering',
    shortDesc: 'Single-codebase velocity with true native 60fps performance across iOS, Android, and Web.',
    fullDesc: 'Cut your time-to-market in half without sacrificing quality. Our Flutter engineering team builds fluid, visually stunning mobile apps that share up to 90% of business logic while feeling completely native on both platforms.',
    badge: 'Speed to Market',
    isPopular: true,
    kpis: [
      { label: 'Development Speed', value: '2x Faster' },
      { label: 'Shared Codebase', value: '92%' },
      { label: 'Consistent 60fps', value: '100%' },
    ],
    tags: ['Flutter / Dart', 'BLoC Pattern', 'Firebase', 'GraphQL', 'REST API'],
    features: [
      'Pixel-perfect uniform design system across iOS and Android ecosystems',
      'State-of-the-art state management with strict architectural separation',
      'Custom native platform channels for device-specific hardware integrations',
      'Rapid hot-reload iterative development cycle with continuous testing',
    ],
  },
  {
    id: 'mobile-lifecycle',
    category: 'mobile',
    title: 'End-to-End App Lifecycle & ASO Growth',
    shortDesc: 'App Store Optimization (ASO), automated Fastlane CI/CD pipelines, and deep in-app behavioral analytics.',
    fullDesc: 'Building the app is only step one. We optimize your App Store and Google Play presence for maximum organic keyword discovery, set up automated deployment pipelines, and configure cohorts to maximize user retention.',
    kpis: [
      { label: 'ASO Keyword Rank', value: '#1 in Category' },
      { label: 'Install-to-Reg Rate', value: '78%' },
      { label: 'Release Cycle', value: 'Weekly CI/CD' },
    ],
    tags: ['Fastlane', 'App Store Connect', 'Google Play Console', 'Mixpanel', 'RevenueCat'],
    features: [
      'Automated App Store and Google Play deployment via Fastlane scripts',
      'Keyword indexing, creative icon A/B testing, and screenshot localization',
      'In-App purchase (IAP) & subscription infrastructure with RevenueCat',
      'Funnel drop-off analytics and predictive retention trigger campaigns',
    ],
  },
];

