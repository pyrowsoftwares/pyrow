export interface LeaderProfile {
  name: string;
  role: string;
  titleBadge: string;
  bio: string;
  quote: string;
  avatar: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  metrics: { label: string; value: string }[];
}

export const leadershipTeam: LeaderProfile[] = [
  {
    name: 'Barathraj S',
    role: 'Co-Founder & Head of Product',
    titleBadge: 'Product Architecture & Engineering',
    bio: 'Spearheads product vision, enterprise software engineering, and technical architecture at Pyrow. Focused on building sub-second digital platforms, scalable cloud infrastructure, and mission-critical enterprise systems that turn complex workflows into effortless digital products.',
    quote: 'A great product is not just code that runs—it is an intuitive, high-speed engine that solves real business problems and scales effortlessly.',
    avatar: 'https://res.cloudinary.com/dltti9hiw/image/upload/v1781804262/Gemini_Generated_Image_61qmy561qmy561qm_opc41j.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sbarathraj/',
      github: 'https://github.com/sbarathraj',
    },
    metrics: [
      { label: 'Products Architected', value: '50+' },
      { label: 'Architecture Reviews', value: '450+' },
      { label: 'Uptime Standard', value: '99.98%' },
    ],
  },
  {
    name: 'Vigneshwaran',
    role: 'Co-Founder & Head of Marketing',
    titleBadge: 'Growth Strategy & Performance Marketing',
    bio: 'Directs hyper-targeted customer acquisition, digital brand distribution, and revenue growth funnels at Pyrow. Specializes in turning high-performance technology into market-leading customer pipelines via Meta, Google Ads, and omnichannel organic reach.',
    quote: 'Marketing is the lifeblood of scale. When you combine world-class software with razor-sharp acquisition campaigns, exponential business growth is the only outcome.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
    metrics: [
      { label: 'Campaigns Scaled', value: '1,400+' },
      { label: 'Avg Client ROAS', value: '4.8x' },
      { label: 'Leads & Enquiries', value: '1.2M+' },
    ],
  },
];

export const pyrowPillars = [
  {
    number: '01',
    title: 'Code Without Bloat',
    desc: 'We write lean, strictly typed, performant software. No superfluous dependencies, no bloated abstractions — only clean architectures built to scale with zero tech debt.',
    glow: 'from-ember-500 to-flare-amber',
  },
  {
    number: '02',
    title: 'Design Without Fluff',
    desc: 'Aesthetics serve function. Every micro-interaction, glow highlight, and typographical choice is mathematically engineered to guide user focus and drive conversion.',
    glow: 'from-flare to-flare-gold',
  },
  {
    number: '03',
    title: 'Growth Without Vanity Metrics',
    desc: 'Clicks and impressions mean nothing without bottom-line cash flow. We align our engineering and marketing milestones directly to customer acquisition, efficiency, and retained enterprise value.',
    glow: 'from-cyber-cyan to-cyber-blue',
  },
];

export const clientTestimonials = [
  {
    quote: 'Pyrow completely re-architected our enterprise ERP and omnichannel logistics engine. What used to take our teams 4 days of manual auditing now happens automatically in 8 minutes. They are fundamentally in a league of their own.',
    author: 'Sterling Vance',
    role: 'Chief Operating Officer',
    company: 'Vanguard Industrial Global',
    stat: '+340% Operating Throughput',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'The synergy of software engineering with aggressive Meta & Google ads generated over 350,000 new verified customers within 9 months of launch. Pyrow doesn’t just build software; they engineer hyper-growth.',
    author: 'Seraphina Chen',
    role: 'VP of Digital Commerce',
    company: 'Aether Brands Network',
    stat: '5.2x Paid Ad ROAS',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'Their mobile engineering team delivered our iOS & Android apps in Flutter with zero compromises. 60fps animations, rock-solid offline sync, and flawless biometric security. Best technical partners we have ever engaged.',
    author: 'Dr. Raymond Holt',
    role: 'Medical Director & Founder',
    company: 'Apex Health Systems',
    stat: '4.9★ App Store Rating',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
];

