export interface DigitalServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'social' | 'ads' | 'content' | 'web' | 'seo' | 'ai';
  categoryLabel: string;
  description: string;
  offers: string[];
  disclaimer?: string;
  iconName: string;
  gradient: string;
  badge?: string;
}

export const DIGITAL_SERVICES: DigitalServiceItem[] = [
  {
    id: 'social-media-management',
    number: '01',
    title: 'Social Media Management',
    tagline: 'Make Your Brand Impossible to Ignore',
    category: 'social',
    categoryLabel: 'Brand & Social',
    description:
      'We manage your social media presence with creative content, strategic planning, and consistent engagement. From building brand awareness to growing an active community, we turn your social media platforms into powerful business assets.',
    offers: [
      'Social Media Strategy & Planning',
      'Account Management',
      'Creative Post & Reel Design',
      'Content Scheduling & Publishing',
      'Community Management',
      'Audience Growth & Engagement',
      'Performance Tracking & Reporting',
    ],
    iconName: 'Share2',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    badge: 'High Engagement',
  },
  {
    id: 'ad-campaign-management',
    number: '02',
    title: 'Ad Campaign Management',
    tagline: 'Turn Clicks Into Customers.',
    category: 'ads',
    categoryLabel: 'Paid Media',
    description:
      'We create and manage performance-driven advertising campaigns that reach your ideal audience and generate quality leads, sales, and business opportunities. Every campaign is strategically optimized to maximize your advertising investment.',
    offers: [
      'Campaign Strategy & Planning',
      'Audience Research & Targeting',
      'Lead Generation Campaigns',
      'Conversion & Sales Campaigns',
      'Retargeting Strategies',
      'Budget Optimization',
      'Campaign Performance Analysis',
    ],
    iconName: 'Target',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    badge: 'High ROAS',
  },
  {
    id: 'content-marketing',
    number: '03',
    title: 'Content Marketing',
    tagline: 'Content That Connects. Stories That Convert.',
    category: 'content',
    categoryLabel: 'Creative & Stories',
    description:
      'Great content builds trust, creates connections, and drives action. We develop engaging content strategies that communicate your brand message, attract your target audience, and establish your business as an industry leader.',
    offers: [
      'Content Strategy & Planning',
      'Social Media Content Creation',
      'Reels & Video Production',
      'Brand Storytelling',
      'Promotional & Advertising Creatives',
      'Copywriting & Caption Writing',
      'Creative Campaign Development',
    ],
    iconName: 'Sparkles',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badge: 'Authority Building',
  },
  {
    id: 'ecommerce-web-design',
    number: '04',
    title: 'E-commerce & Web Design',
    tagline: 'Your Digital Storefront. Designed to Perform.',
    category: 'web',
    categoryLabel: 'Engineering & Web',
    description:
      'We design and develop visually appealing, user-friendly, and high-performing websites that transform visitors into customers. Whether you need a business website or a complete e-commerce platform, we build digital experiences that support your business goals.',
    offers: [
      'Business Website Development',
      'E-commerce Website Development',
      'UI/UX Design',
      'Responsive Website Design',
      'Landing Page Development',
      'Payment Gateway Integration',
      'Website Maintenance & Optimization',
    ],
    iconName: 'Globe',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    badge: 'Sub-Second Speed',
  },
  {
    id: 'seo-search-engine-optimization',
    number: '05',
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Get Found. Get Noticed. Grow Organically.',
    category: 'seo',
    categoryLabel: 'Search & Visibility',
    description:
      "Make your business easier to discover online. Our SEO strategies improve your website's search visibility, attract relevant organic traffic, and help your brand reach customers actively searching for your products and services.",
    offers: [
      'On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Keyword Research',
      'Website SEO Audits',
      'Local SEO Optimization',
      'Content & Search Optimization',
    ],
    iconName: 'Search',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badge: 'Sustainable Organic Traffic',
  },
  {
    id: 'linkedin-ads',
    number: '06',
    title: 'LinkedIn Ads',
    tagline: 'Reach Decision-Makers. Generate Business Opportunities.',
    category: 'ads',
    categoryLabel: 'B2B Growth',
    description:
      'Connect your brand with professionals, business owners, and industry leaders. Our LinkedIn advertising strategies help B2B businesses generate qualified leads, build professional awareness, and reach the right decision-makers.',
    offers: [
      'LinkedIn Campaign Strategy',
      'Professional Audience Targeting',
      'B2B Lead Generation',
      'Sponsored Content Ads',
      'Lead Form Campaigns',
      'Retargeting Campaigns',
      'Performance Optimization',
    ],
    iconName: 'Linkedin',
    gradient: 'from-blue-600/20 via-indigo-500/10 to-transparent',
    badge: 'B2B Qualified Leads',
  },
  {
    id: 'chatgpt-ads-ai-advertising',
    number: '07',
    title: 'ChatGPT Ads & AI Advertising',
    tagline: 'Be Ready for the Next Era of Advertising.',
    category: 'ai',
    categoryLabel: 'Next-Gen AI',
    description:
      'AI is transforming how people discover information, explore solutions, and interact with brands. We help businesses prepare for emerging AI-powered advertising opportunities and build strategies for the next generation of digital customer discovery.',
    offers: [
      'AI Advertising Strategy',
      'AI Search Visibility Planning',
      'Brand Discovery Optimization',
      'AI-Assisted Content Strategy',
      'Campaign Research & Planning',
      'Emerging AI Advertising Opportunities',
    ],
    disclaimer: "Note: ChatGPT advertising availability and campaign access depend on OpenAI's advertising platform and eligibility.",
    iconName: 'Bot',
    gradient: 'from-emerald-400/20 via-teal-600/10 to-transparent',
    badge: 'Next-Gen Frontier',
  },
  {
    id: 'google-ads',
    number: '08',
    title: 'Google Ads',
    tagline: 'Be There When Your Customers Are Searching.',
    category: 'ads',
    categoryLabel: 'Search & Intent',
    description:
      'Reach potential customers at the exact moment they are looking for your products or services. We create targeted Google Ads campaigns designed to increase visibility, drive qualified traffic, generate leads, and boost sales.',
    offers: [
      'Google Search Ads',
      'Google Display Ads',
      'Performance Max Campaigns',
      'Shopping Ads',
      'Keyword Research & Targeting',
      'Conversion Tracking',
      'Campaign Optimization',
    ],
    iconName: 'Zap',
    gradient: 'from-amber-400/20 via-yellow-500/10 to-transparent',
    badge: 'High Intent Clicks',
  },
  {
    id: 'youtube-ads',
    number: '09',
    title: 'YouTube Ads',
    tagline: 'Turn Every View Into an Opportunity.',
    category: 'ads',
    categoryLabel: 'Video Advertising',
    description:
      'Capture attention through powerful video advertising. We create and manage YouTube advertising campaigns that help your brand reach the right audience, communicate your message, and build stronger brand recognition.',
    offers: [
      'YouTube Video Ad Campaigns',
      'Audience Targeting',
      'Skippable & Non-Skippable Ads',
      'Video Campaign Strategy',
      'Brand Awareness Campaigns',
      'Remarketing Ads',
      'Campaign Performance Analysis',
    ],
    iconName: 'PlayCircle',
    gradient: 'from-red-500/20 via-rose-500/10 to-transparent',
    badge: 'Visual Storytelling',
  },
  {
    id: 'influencer-marketing',
    number: '10',
    title: 'Influencer Marketing',
    tagline: 'Real People. Real Influence. Real Brand Impact.',
    category: 'social',
    categoryLabel: 'Creator Collaborations',
    description:
      'Build trust and expand your brand reach through authentic creator collaborations. We connect businesses with relevant influencers and content creators to create impactful campaigns that engage audiences and influence purchasing decisions.',
    offers: [
      'Influencer Discovery & Research',
      'Creator Collaboration',
      'Campaign Planning & Execution',
      'Influencer Content Production',
      'Brand Promotion Campaigns',
      'Campaign Monitoring',
      'Performance & ROI Tracking',
    ],
    iconName: 'Users',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    badge: 'Authentic Reach',
  },
];

export const WHY_CHOOSE_PYROW = {
  headline: 'Why Choose PYROW?',
  subheadline: "More Than Marketing. We're Your Growth Partner.",
  description:
    'We combine creativity, technology, and data-driven strategies to help businesses move forward in the digital world.',
  pillars: [
    {
      title: 'Strategy-First Approach',
      description: 'Every campaign starts with a clear objective and a focused growth strategy.',
      iconName: 'Compass',
      gradient: 'from-violet-500 to-indigo-500',
    },
    {
      title: 'Creative Excellence',
      description: 'Fresh ideas and impactful creatives that make your brand stand out.',
      iconName: 'Palette',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Performance-Driven Results',
      description: 'We focus on measurable outcomes, continuous optimization, and sustainable growth.',
      iconName: 'TrendingUp',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Technology & Innovation',
      description: 'We leverage modern tools, automation, and emerging technologies to create smarter solutions.',
      iconName: 'Cpu',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ],
};

export const SERVICES_CTA_CONTENT = {
  headline: 'Ready to Take Your Brand to the Next Level?',
  paragraph1: "Your business deserves more than ordinary marketing. Let's build something extraordinary together.",
  paragraph2: "Let's turn your vision into growth.",
  tagline: 'PYROW – Ignite Your Digital Growth.',
  button1: 'Start Your Project',
  button2: 'Contact Us',
};
