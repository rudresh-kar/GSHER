/**
 * CelluReva™ Site Configuration
 * =============================
 * Central config for all brand data, content, and settings.
 * Change values here to update the entire website.
 */

export const siteConfig = {
  // ── Brand Identity ──────────────────────────────
  siteName: "CelluReva™",
  siteTagline: "by Dr. Biswajit Mohapatra",
  siteDescription: "Revive your health at the cellular level. CelluReva™ is a science-backed protocol integrating yoga, nutrition, sleep, and mindfulness for cellular healing and chronic disease reversal.",
  siteKeywords: "CelluReva, cellular health, cellular revival, Dr Biswajit Mohapatra, self healthcare, circadian rhythm, cellular healing protocol, GSHER",
  siteUrl: "https://www.globalselfhealthcare.org",

  // ── Contact & CTA ──────────────────────────────
  whatsappNumber: "919437042490",
  whatsappMessage: "Hello, I want to know more about CelluReva™. I'd like to book a consultation.",
  email: "info@globalselfhealthcare.org",
  phone: "+91 9437042490",
  address: "Chhend Colony, Rourkela, Odisha, India - 769015",

  // ── Social Links ───────────────────────────────
  socials: {
    facebook: "https://www.facebook.com/globalselfcare/",
    youtube: "https://www.youtube.com/@GlobalSelfHealthcareEducation",
    linkedin: "https://www.linkedin.com/company/gsher/",
    whatsapp: "https://wa.me/919437042490",
  },

  // ── Founder ────────────────────────────────────
  founder: {
    name: "Dr. Biswajit Mohapatra",
    title: "Consultant Laparoscopic Surgeon & NLP Health Motivator",
    shortBio: "After 28+ years of surgical practice, Dr. Mohapatra experienced a personal health crisis that transformed his understanding of medicine. He shifted from reactive treatment to proactive cellular health education — founding GSHER and creating the CelluReva™ protocol.",
    credentials: [
      "Consultant Laparoscopic Surgeon — 28+ Years",
      "Certified NLP Health Motivator",
      "Founder & Chairman — GSHER Trust",
      "Author — 'Hustle to Healing' & 'Care for Your Health'",
      "Guest Lecturer — NIT Rourkela",
    ],
    photoUrl: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=800,fit=crop/dWxnO74qGGcN789B/img_1063-AzGOPqQz18fqkDNL.JPG",
    photoAlt: "Dr. Biswajit Mohapatra, Creator of CelluReva™ Protocol",
  },

  // ── Six Pillars ────────────────────────────────
  pillars: [
    {
      name: "Yoga",
      icon: "fa-person-praying",
      description: "Cellular movement & adaptation through targeted asanas that stimulate repair pathways and enhance biological resilience.",
    },
    {
      name: "Therapeutic Nutrition",
      icon: "fa-seedling",
      description: "Feed your cells, not just your taste buds. Gut microbiome optimization and nutrient protocols for cellular energy.",
    },
    {
      name: "Sleep Architecture",
      icon: "fa-moon",
      description: "Restore your circadian sleep cycles. Optimize melatonin production and deep-sleep repair for cellular regeneration.",
    },
    {
      name: "Circadian Rhythm",
      icon: "fa-clock",
      description: "Align your biological master clock with natural light-dark cycles. Synchronize hormones, metabolism, and immunity.",
    },
    {
      name: "Stress Management",
      icon: "fa-brain",
      description: "The S.T.R.E.S.S. Formula — switch from fight-or-flight to rest-and-digest through breath, pause, and neural reprogramming.",
    },
    {
      name: "Mindfulness",
      icon: "fa-spa",
      description: "Cellular consciousness through meditation and awareness. Tune into your body's signals before they become symptoms.",
    },
  ],

  // ── Five Steps (How It Works) ──────────────────
  steps: [
    {
      name: "Reset",
      description: "Break free from toxic patterns. Recalibrate your circadian rhythm, detoxify cellular pathways, and create a clean biological baseline.",
      link: "#",
    },
    {
      name: "Revive",
      description: "Reawaken dormant cellular intelligence through targeted nutrition, breathwork, and movement protocols.",
      link: "#",
    },
    {
      name: "Reprogram",
      description: "Rewire neural pathways and habits. Replace disease-promoting routines with health-promoting cellular signals.",
      link: "#",
    },
    {
      name: "Restore",
      description: "Rebuild cellular architecture. Strengthen mitochondria, optimize hormonal balance, and reverse chronic damage.",
      link: "#",
    },
    {
      name: "Sustain",
      description: "Lock in your transformation. Build lifelong habits that maintain cellular vitality and prevent disease recurrence.",
      link: "#",
    },
  ],

  // ── Protocol Categories ───────────────────────
  protocolCategories: [
    { key: "all", label: "All Protocols" },
    { key: "Life Protocol", label: "Life Protocols" },
    { key: "Health Protocol", label: "Health Protocols" },
  ],

  // ── CelluReva Protocols ───────────────────────
  protocols: [
    {
      name: "CelluReva Success Protocol",
      icon: "fa-trophy",
      category: "Life Protocol",
      description: "Unlock peak performance by aligning cellular energy with goal-driven habits, mental clarity, and biohacking strategies for sustained excellence.",
      link: "#",
    },
    {
      name: "CelluReva Leadership Protocol",
      icon: "fa-chess-king",
      category: "Life Protocol",
      description: "Lead from within — build resilience, sharpen decision-making, and develop emotional intelligence at the biological level.",
      link: "#",
    },
    {
      name: "CelluReva Parenting Protocol",
      icon: "fa-hands-holding-child",
      category: "Life Protocol",
      description: "Nurture your child's cellular foundation through mindful parenting, optimized nutrition, and stress-free bonding practices.",
      link: "#",
    },
    {
      name: "Teachers Protocol",
      icon: "fa-chalkboard-user",
      category: "Life Protocol",
      description: "Empower educators with tools to manage classroom stress, sustain energy, and model healthy living for the next generation.",
      link: "#",
    },
    {
      name: "Motherhood Protocol",
      icon: "fa-heart-pulse",
      category: "Life Protocol",
      description: "Support maternal health through cellular nutrition, hormonal balance, circadian alignment, and postpartum recovery pathways.",
      link: "#",
    },
    {
      name: "Diabetes Reversal Protocol",
      icon: "fa-droplet",
      category: "Health Protocol",
      description: "A cellular approach to insulin sensitivity — reverse Type 2 diabetes through circadian realignment, nutrition, and metabolic reprogramming.",
      link: "#",
    },
    {
      name: "Cancer Support Protocol",
      icon: "fa-ribbon",
      category: "Health Protocol",
      description: "Complement medical treatment with cellular resilience — immune support, stress management, and anti-inflammatory nutrition protocols.",
      link: "#",
    },
    {
      name: "Hypertension Protocol",
      icon: "fa-heart-circle-check",
      category: "Health Protocol",
      description: "Normalize blood pressure naturally through breathwork, sodium-potassium balance, vagal tone restoration, and lifestyle architecture.",
      link: "#",
    },
  ],

  // ── Books ──────────────────────────────────────
  books: [
    {
      title: "Hustle to Healing",
      subtitle: "Live Well to Lead Well",
      description: "A leadership wake-up call from the cellular level. When relentless ambition meets biological exhaustion, what happens? This deeply human, science-rooted guide explores how burnout begins in your cells — and how true healing starts from within.",
      features: [
        "Discover the CelluReva™ framework: Reset, Revive, Reprogram, Restore",
        "How stress and ambition translate to biological exhaustion at the cellular level",
        "Actionable protocols to restore circadian balance and double your daily energy",
      ],
      imageUrl: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=450,fit=crop/dWxnO74qGGcN789B/brn00005-fkHy051JoVjOMZGZ.JPG",
      imageAlt: "Hustle to Healing Book Cover",
      buyLink: "/hustle-to-healing",
      buyText: "Explore the Book",
      isInternal: true,
    },
    {
      title: "Care for Your Health",
      subtitle: "A User Manual for Living Healthy",
      description: "A comprehensive guide to preventive healthcare, health protection, and cellular well-being. Learn how breathing, nutrition, sleep hygiene, and meditation interact with your biological systems to prevent chronic conditions.",
      features: [
        "The S.T.R.E.S.S. Formula for nervous system regulation",
        "A practical diet paradigm: 'The best diet chart is no diet chart at all'",
        "Direct biological self-care guidelines for families",
      ],
      imageUrl: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=450,fit=crop/dWxnO74qGGcN789B/care-for-your-health_3d-cover_prev_ui-YKbPDqwJ16U09lBy.png",
      imageAlt: "Care for Your Health Book Cover",
      buyLink: "https://www.amazon.in/Care-Your-Health-Manual-Healthy/dp/1645465039/",
      buyText: "Buy on Amazon",
      isInternal: false,
    },
  ],

  // ── Marquee Keywords ───────────────────────────
  marqueeKeywords: [
    "Cellular Revival",
    "Circadian Rhythm",
    "Therapeutic Nutrition",
    "Stress Formula",
    "Breathwork",
    "Mindfulness",
    "DNA Repair",
    "Biological Intelligence",
    "Sleep Architecture",
    "Neural Reprogramming",
  ],

  // ── External Links ─────────────────────────────
  externalLinks: {
    gsherHome: "https://www.globalselfhealthcare.org",
    gsherBlog: "https://www.globalselfhealthcare.org/blog",
    privacyPolicy: "https://www.globalselfhealthcare.org/privacy-policy-global-self-healthcare",
    termsConditions: "https://www.globalselfhealthcare.org/terms-and-conditions-self-healthcare",
    refundPolicy: "https://www.globalselfhealthcare.org/refund-policy-zznqgqself-healthcare-movement",
  },
};
