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
    role: 'Founder & Chief Executive Architect',
    titleBadge: 'Vision & Systems Architecture',
    bio: 'Pioneered Pyrow with a radical premise: high-end software architecture must be fused with aggressive digital growth distribution. Veteran architect with a track record of scaling high-throughput enterprise platforms and orchestrating viral market penetration.',
    quote: 'We do not build software to sit quietly in repositories. We architect digital weaponry designed to capture market dominance, out-innovate incumbents, and generate compounding enterprise value.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      github: 'https://github.com',
    },
    metrics: [
      { label: 'Enterprises Scaled', value: '80+' },
      { label: 'Architecture Reviews', value: '450+' },
      { label: 'Uptime Standard', value: '99.98%' },
    ],
  },
  {
    name: 'Vikramaditya Rao',
    role: 'Chief Technology Officer (CTO)',
    titleBadge: 'Cloud & Distributed Systems',
    bio: 'Former principal distributed systems engineer. Obsessed with sub-second database transactions, microservice fault tolerance, and zero-downtime Kubernetes orchestration across hybrid multi-cloud environments.',
    quote: 'Clean code is table stakes. True engineering excellence is predictable performance at 50,000 transactions per second during black swan market events.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    metrics: [
      { label: 'Avg API P99', value: '38ms' },
      { label: 'Patents & Papers', value: '4' },
      { label: 'System SLA', value: '99.99%' },
    ],
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Growth Engineering & AI Performance',
    titleBadge: 'Algorithmic Acquisition',
    bio: 'Growth technologist who treats digital acquisition as a science. Architect of multi-million dollar ad spend engines and conversational LLM ad pipelines delivering unprecedented customer acquisition efficiency.',
    quote: 'Vanity impressions do not pay payroll. We measure our marketing strictly on qualified pipeline value, customer lifetime value (LTV), and immediate payback periods.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
    metrics: [
      { label: 'Paid Ad Capital', value: '$40M+' },
      { label: 'Avg Client ROAS', value: '4.8x' },
      { label: 'Qualified Pipeline', value: '$120M+' },
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
    desc: 'Clicks and impressions mean nothing without bottom-line cash flow. We align our engineering and marketing milestones directly to revenue, margins, and retained enterprise value.',
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
    quote: 'The synergy of software engineering with aggressive Meta & Google ads generated over $4.2M in net new ARR within 9 months of launch. Pyrow doesn’t just build software; they engineer hyper-growth.',
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

