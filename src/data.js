/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Harshil",
  last: "",
  fullName: "Harshil",
  tagline: "High School Student • Behavioral Science, Technology & Finance",
  location: "Iselin, New Jersey, USA",
  email: "",
  phone: "",
  bio: [
    "I'm a student at John F. Kennedy Memorial High School in Iselin, New Jersey, Class of 2027. I'm interested in how people make decisions, how systems shape those decisions, and how technology can be used to solve practical problems.",
    "My experiences have taken me across behavioral science research, financial technology, emergency response, business, and competitive athletics. Together, they have given me opportunities to investigate questions, build solutions, work under pressure, and contribute to teams.",
    "Outside the classroom, I co-founded MTrade, a published financial utility app, serve as a Fire House Explorer with 400+ volunteer hours and emergency response training, compete through FBLA, and play competitive ice hockey year-round at the Travel Level A and school JV levels.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "",
  photo: "/photo.jpg",
  aboutPhoto: "/a",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research & Experience", to: "/work" },
      { label: "Academic Interests", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Service & Leadership", to: "/volunteering" },

  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Research & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "mtrade",
    role: "Co-Founder & Lead Database Architect",
    org: "MTrade — Financial Utility App",
    logo: "",
    location: "New Jersey, USA",
    dates: "2022 – Present",
    meta: "2022 – Present · New Jersey, USA ·",
    badge: "Founder",
    desc: "Co-founded MTrade, a published financial utility app, and served as its lead database architect.",
    bullets: [
      "Co-founded a published financial utility application and led its database architecture",
      "Gained hands-on experience building a technology product from concept through release",
      "Focused on structuring information so complex financial data becomes a useful tool for real users",
    ],
    tags: ["Financial Technology", "Database Architecture", "Product Development"],
    featured: true,
  },
  {
    slug: "behavioral-science-research",
    role: "Student Researcher",
    org: "Behavioral Science Research Project",
    logo: "",
    location: "New Jersey, USA",
    dates: "District STEM Competition",
    meta: "District STEM Competition · New Jersey, USA ·",
    badge: "Research",
    desc: "Conducted a behavioral science research project that earned 2nd place in a district-level STEM competition.",
    bullets: [
      "Designed and carried out a behavioral science research project investigating human behavior through structured research",
      "Developed evidence-based conclusions from the study's findings",
      "Placed 2nd in the District STEM Behavioral Science Competition",
    ],
    tags: ["Behavioral Science", "Research", "Decision-Making"],
    featured: true,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "MTrade — Financial Utility App",
    org: "Co-Founder & Lead Database Architect",
    meta: "2022 – Present",
    desc: "A published financial utility app co-founded and architected from the database layer up. The project provided hands-on experience building a technology product and thinking about how information can be structured into a useful tool for real users.",
    tags: ["Financial Technology", "Database Architecture", "Mobile/Web App"],
    featured: true,
  },
  {
    name: "Behavioral Science Research Project",
    org: "District STEM Competition",
    meta: "2nd Place",
    desc: "A behavioral science research project investigating human behavior through structured research and evidence-based conclusions. Awarded 2nd place at the district-level STEM competition.",
    tags: ["Behavioral Science", "Research", "Human Behavior"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🥈",
    title: "District STEM Behavioral Science Competition — 2nd Place",
    meta: "District Level",
    detail: "Second place for a behavioral science research project investigating human behavior through structured, evidence-based research.",
    link: "",
    featured: true,
  },
  {
    icon: "🥉",
    title: "FBLA — 3rd Place, Central New Jersey",
    meta: "Future Business Leaders of America",
    detail: "Third place in Central New Jersey, applying business concepts and communication skills in a competitive setting.",
    link: "",
    featured: true,
  },
  {
    icon: "🚀",
    title: "Published Product — MTrade",
    meta: "Financial Utility App",
    detail: "Co-founded and served as lead database architect for MTrade, a published financial utility app.",
    link: "",
    featured: true,
  },
  {
    icon: "🚒",
    title: "400+ Volunteer Hours",
    meta: "Fire House Explorers",
    detail: "Over 400 hours of service supporting local first responders since 2023.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Emergency Response Training",
    meta: "Certifications",
    detail: "FEMA IS-100C · IS-700B · IS-800D · Ohio Youth Fire/EMT Academy · Emergency CPR.",
    link: "",
    featured: true,
  },
  {
    icon: "🏒",
    title: "10+ Hours per Week — Competitive Ice Hockey",
    meta: "Travel Level A & JV",
    detail: "Year-round commitment to practices, games, conditioning, and competition since 2021.",
    link: "",
    featured: false,
  },
];

/* ---- Academic interests ---- */

export const ARTICLES = [
  {
    title: "Behavior & Decision-Making",
    outlet: "How incentives, information, uncertainty, and environments influence the choices people make",
    link: "",
  },
  {
    title: "Technology & Finance",
    outlet: "Building practical technology and exploring how data and well-designed systems make complex information more useful",
    link: "",
  },
  {
    title: "Research",
    outlet: "Using research and evidence to understand why people think and act the way they do",
    link: "",
  },
  {
    title: "Business & Organizations",
    outlet: "How organizations make decisions, allocate resources, and create value",
    link: "",
  },
];

/* ---- Service, leadership & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "400+", label: "Volunteer Hours" },
    { value: "3+", label: "Years of Service" },
    { value: "5", label: "Emergency Certifications" },
  ],
  orgs: [
    slug: "fire-house-explorer",
    role: "Explorer",
    org: "Fire House Explorers",
    logo: "",
    location: "New Jersey, USA",
    dates: "2023 – Present",
    meta: "2023 – Present · New Jersey, USA · 400+ volunteer hours",
    badge: "Service",
    desc: "Hands-on emergency response training and support for local first responders, with 400+ volunteer hours logged.",
    bullets: [
      "Completed hands-on training in fire safety, search and rescue, emergency protocols, and basic life support",
      "Supported local first responders across 400+ volunteer hours",
      "Earned FEMA IS-100C, IS-700B, IS-800D, Ohio Youth Fire/EMT Academy, and Emergency CPR credentials",
      "Gained firsthand exposure to environments where preparation, communication, and responsible decision-making are essential",
    ],
    tags: ["Emergency Response", "Service", "Training"],
    featured: true,
  ],
};

/* ---- Athletics, activities & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🏒",
    name: "Ice Hockey",
    desc: "Competitive year-round play at the Travel Level A and school JV levels since 2021, committing 10+ hours per week to practices, games, conditioning, and competition.",
  },
  {
    icon: "💼",
    name: "FBLA",
    desc: "Competed in Future Business Leaders of America, earning 3rd place in Central New Jersey by applying business concepts and communication skills in a competitive setting.",
  },
];

/* ---- Skills ---- */
/* NOTE: the source PDF does not list a skills section. The entries below are
   inferred from the described coursework, projects, and training — review and
   edit before publishing. */

export const SKILLS = [
  {
    group: "Technology",
    items: ["Database Architecture", "App Development", "Data Structuring", "Financial Technology"],
  },
  {
    group: "Research & Analysis",
    items: ["Behavioral Science Research", "Quantitative Analysis", "Evidence-Based Reasoning", "Experimental Design"],
  },
  {
    group: "Emergency Response",
    items: ["Fire Safety", "Search & Rescue", "Emergency Protocols", "Basic Life Support", "Emergency CPR"],
  },
  {
    group: "Languages",
    items: ["English", "Spanish"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "John F. Kennedy Memorial High School",
    location: "Iselin, New Jersey",
    level: "Class of 2027",
    dates: "",
    gpa: "",
    coursework: [
      "AP Biology",
      "AP Macroeconomics",
      "AP U.S. History",
      "AP English Language",
      "AP Precalculus",
      "Engineering 1 Honors",
      "Spanish 2",
    ],
  },
];

/* ---- Test scores (none listed in the source document) ---- */

export const TEST_SCORES = [];

/* ---- Looking ahead (additional export — needs a component if you want to render it) ---- */

export const LOOKING_AHEAD = [
  "I want to explore the relationship between people, technology, and decision-making while developing stronger analytical and research skills.",
  "At university, I hope to investigate these questions from multiple perspectives — through research, quantitative analysis, technology, and real-world problem-solving.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research & Experience", to: "/work" },
  { label: "Academic Interests", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Service & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
