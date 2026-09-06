export const projectCategories = [
  {
    id: "web",
    label: "Web Design & Development",
    shortLabel: "Web Design & Development",
  },
  { id: "apps", label: "Apps", shortLabel: "Apps" },
  { id: "automation", label: "AI & Automation", shortLabel: "AI & Automation" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];

/** Images live under `public/projects/<slug>/`. Alt text is authored, never generated. */
export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fit?: "cover" | "contain";
  preserveColors?: boolean;
};

/**
 * Only `slug`, `title`, `category` and `shortDescription` are required.
 * Every optional field drives one block of the detail page: when the field is
 * absent that block is not rendered, so a project is never padded out.
 */
export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;

  shortDescription: string;
  // Two-to-three lines for the detail page's snapshot panel.
  summary?: string;
  overview?: string;

  role?: string;
  client?: string;
  year?: string;
  // "Live", "In development", "Client project" — only when genuinely known.
  status?: string;

  // Where the product actually runs, e.g. ["iOS", "Android"].
  platform?: string[];
  services?: string[];
  techStack?: string[];
  // Short functional statements for the snapshot panel, never tech names.
  capabilities?: string[];

  challenge?: string;
  solution?: string;
  features?: string[];

  liveUrl?: string;
  githubUrl?: string;
  links?: { label: string; href: string; type: "app-store" | "google-play" }[];

  thumbnail?: ProjectImage;

  // Real captures of a live site: the desktop view is the card's default and
  // the mobile view is revealed on hover. Both must exist to pair up.
  desktopImage?: ProjectImage;
  mobileImage?: ProjectImage;
};

// Array order drives the homepage gallery. Do not invent metadata.
// Each project supplies one cover at /projects/<slug>/thumbnail.webp.
export const projects: Project[] = [
  {
    slug: "lockabea",
    title: "Lockabea",
    category: "web",
    shortDescription:
      "A product-led storefront for a personal-security smartwatch.",
    summary:
      "A storefront for a lockable personal-security smartwatch, built to explain an unfamiliar product and carry visitors through to a pre-order.",
    services: [
      "Product Website Design",
      "Frontend Development",
      "Pre-Order & Lead Capture",
    ],
    techStack: ["Next.js", "React", "Vercel"],
    capabilities: [
      "Product Storytelling",
      "Spec Comparison",
      "Pre-Order Flow",
      "Lead Capture",
    ],
    status: "Live",
    overview:
      "Lockabea sells a lockable personal-security smartwatch aimed at children, students, adults and seniors, and the storefront has to explain an unfamiliar product before anyone will commit to a pre-order. The site works through that argument in order: the physical lock-and-key clasp, standalone 4G calling, live location sharing and silent SOS, followed by the full hardware specification, the CE, FCC and RoHS certifications and an FAQ for buyers who want the fine print. Everything funnels into the pre-order page and an early-access email capture.",
    features: [
      "Product-Focused Landing Experience",
      "Lock-and-Key Security Explainer",
      "Hardware Specification Tables",
      "Certification & Compliance Section",
      "Pre-Order & Early-Access Capture",
      "Expandable FAQ",
    ],
    liveUrl: "https://www.lockabea.com/",
    // Observed on the live site; nothing here is inferred.
    thumbnail: {
      src: "/projects/lockabea/thumbnail.webp",
      alt: "Lockabea project cover showing the storefront on desktop and mobile.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "onyx-barbers",
    title: "Onyx Barbers",
    category: "web",
    shortDescription:
      "An editorial barbershop website built around grooming and booking.",
    summary:
      "A dark editorial website for a Manchester barbershop, covering the brand, a priced service menu, the team and the route into online booking.",
    services: [
      "Website Design",
      "Frontend Development",
      "Booking & Contact Journey",
    ],
    techStack: ["Next.js", "React", "Vercel"],
    capabilities: [
      "Service Pricing",
      "Online Booking",
      "Gallery",
      "Enquiry Form",
    ],
    status: "Live",
    overview:
      "Onyx Barbers is a Manchester barbershop that needed its website to do the job of a shopfront: show the standard of the work, publish prices openly and get people into the booking system. The result is a dark editorial page that runs from the shop's introduction through a priced menu of eight cuts and grooming services, profiles of the four barbers and a gallery of finished work, with booking calls-to-action repeated at every scroll depth. Opening hours, the Manchester address and a contact form close the page, and booking hands off to the shop's own online booking page.",
    features: [
      "Responsive Editorial Design",
      "Priced Services Menu",
      "Online Booking Journey",
      "Barber Team Profiles",
      "Work Gallery",
      "Contact, Hours & Location",
    ],
    liveUrl: "https://onyx-barbers-two.vercel.app/",
    // Observed on the live site; nothing here is inferred.
    thumbnail: {
      src: "/projects/onyx-barbers/thumbnail.webp",
      alt: "Onyx Barbers project cover showing the website on desktop and mobile.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "bovi-access",
    title: "BOVI Access",
    category: "web",
    shortDescription:
      "A business website for rope access and external property maintenance.",
    summary:
      "A conversion-focused website for a commercial rope-access and external-maintenance contractor working across London and the South East.",
    services: [
      "Website Design",
      "Responsive Build",
      "SEO Setup",
      "CMS Handover",
    ],
    techStack: ["Wix Studio"],
    capabilities: [
      "Service Showcase",
      "Project Portfolio",
      "Service Areas",
      "Quote Enquiries",
    ],
    status: "Client project",
    overview:
      "BOVI Access is a commercial rope-access and external-maintenance contractor working on buildings across London and the South East, where winning work depends on reading as credible and being easy to reach. The website sets out the services, completed projects and covered service areas in a clear structure, and keeps a phone number and a Request a Quote action in the header at every scroll position. It was built on Wix Studio so the team can edit their own content after handover, with mobile optimisation and SEO setup included.",
    features: [
      "Rope Access Service Showcase",
      "Projects & Work Presentation",
      "Service Area Coverage",
      "Persistent Quote & Call CTAs",
      "Mobile-Optimised Responsive Build",
      "Client-Editable Content & SEO Setup",
    ],
    thumbnail: {
      src: "/projects/bovi-access/thumbnail.webp",
      alt: "BOVI Access project cover showing the rope-access website on desktop and mobile.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "oasis-house",
    title: "Oasis House",
    category: "web",
    shortDescription:
      "A care-focused website for children's residential services.",
    summary:
      "A website for a small children's residential home, written for two audiences at once: families, and the professionals who make placements.",
    services: [
      "Website Design",
      "Information Architecture",
      "Referral Journey Design",
    ],
    capabilities: [
      "Care Information",
      "Referral Journey",
      "Professionals Area",
      "Vacancies",
    ],
    status: "Client project",
    overview:
      "Oasis House is a small children's residential home for up to two young people aged five to seventeen, and its website has to speak to two audiences at once: families, and the local-authority professionals who make placements. The design leads with a child-centred tone — \"Somewhere a child can simply be a child\" — then separates care information for families from a referral route for professionals, with team, vacancies and contact sections held in a clear top-level navigation. A notice about the home's progress through Ofsted registration sits in the hero, so referrers see the current position before they enquire.",
    features: [
      "Child-Centred Content Structure",
      "Care & Support Information",
      "Referral & Placement Journey",
      "Professionals Information Area",
      "Team & Vacancies Sections",
      "Responsive Accessibility-Focused Design",
    ],
    thumbnail: {
      src: "/projects/oasis-house/thumbnail.webp",
      alt: "Oasis House project cover showing the children's residential care website on desktop and mobile.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "apple-clone",
    title: "Apple Clone",
    category: "web",
    shortDescription:
      "A Django e-commerce web application built as an Apple store clone.",
    summary:
      "A full-stack Apple-inspired storefront built end to end in Django, covering the complete path from browsing a category to reviewing a past order.",
    platform: ["Web"],
    services: [
      "Full-Stack Development",
      "Data Model & Database",
      "Admin Configuration",
    ],
    techStack: ["Django", "Python", "JavaScript", "SQLite"],
    capabilities: [
      "Catalogue & Search",
      "Cart & Checkout",
      "Order History",
      "Reviews & Ratings",
    ],
    status: "Learning project",
    overview:
      "An Apple-inspired storefront built end to end in Django as a full-stack learning project. It covers the whole shopping path — browsing category pages for iPhone, Mac, iPad, Watch and the rest, searching with live suggestions, building a cart, checking out and returning to an order history — on top of Django's own authentication. Customers can leave ratings and reviews, and the Django admin panel handles catalogue and order management behind the scenes.",
    features: [
      "Product Catalogue & Category Browsing",
      "Search with Suggestions",
      "Shopping Cart",
      "Checkout & Order History",
      "User Authentication",
      "Product Reviews & Ratings",
    ],
    githubUrl: "https://github.com/Hammadahmad-ux/Apple-clone-django-project",
    thumbnail: {
      src: "/projects/apple-clone/thumbnail.webp",
      alt: "The Apple store clone homepage with its product navigation and iPhone hero.",
      width: 1440,
      height: 901,
      fit: "contain",
    },
  },
  {
    slug: "tourch-reliable-rides",
    title: "Tourch — Reliable Rides",
    category: "apps",
    shortDescription:
      "A ride-hailing app with booking, live tracking and trip-sharing features.",
    summary:
      "A ride-hailing app for riders and drivers, released on both stores and operating in Houston and Dallas.",
    platform: ["iOS", "Android"],
    capabilities: [
      "Ride Booking",
      "Scheduled Rides",
      "Live Tracking",
      "Safety Center",
      "Cashless Payments",
    ],
    status: "Released on App Store & Google Play",
    overview:
      "Tourch is a ride-hailing app built around making a trip feel accounted for, currently operating in Houston and Dallas. Riders book on demand or schedule up to thirty days ahead, choose between the Tourch Go and Tourch Eco vehicle tiers, watch the driver arrive live and pay by card, while a Safety Center covers live-location sharing, a trip link for emergency contacts and a trip PIN. The app also handles booking a ride for someone else and weekly route subscriptions for a regular commute, alongside a driver side for going online, taking nearby requests and tracking earnings.",
    features: [
      "On-Demand & Scheduled Booking",
      "Live Driver Tracking",
      "Safety Center & Trip Sharing",
      "Cashless Card Payments",
      "Book for Someone Else",
      "Driver Request & Earnings Flow",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/tourch-reliable-rides/id6772714557",
        type: "app-store",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.tourchgo.rides",
        type: "google-play",
      },
    ],
    thumbnail: {
      src: "/projects/tourch-reliable-rides/thumbnail.webp",
      alt: "Tourch project cover showing the ride-hailing app booking and tracking screens.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "ssp-statify",
    title: "SSP Statify",
    category: "apps",
    shortDescription:
      "A tournament operations platform for competitive PUBG Mobile.",
    summary:
      "An esports data platform that turns competitive match activity into live statistics, player analytics and tournament insight.",
    platform: ["Web"],
    capabilities: [
      "Live Match Data",
      "Player Analytics",
      "Tournament Records",
      "Data API",
    ],
    overview:
      "SSP Statify turns competitive match activity into statistics an esports audience can actually use. The platform pulls live match data into one dashboard alongside player performance analytics and tournament insights, with browsable team, player and tournament records behind it. A public API exposes the same data for use outside the dashboard.",
    features: [
      "Live Match Data",
      "Player Performance Analytics",
      "Team & Roster Records",
      "Tournament Insights",
      "Analytics Dashboard",
      "Public Data API",
    ],
    thumbnail: {
      src: "/projects/ssp-statify/thumbnail.webp",
      alt: "SSP Statify project cover showing the esports statistics dashboard on desktop and mobile.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "cricket-analytics",
    title: "Cricket Analytics SaaS Platform",
    category: "apps",
    shortDescription:
      "A SaaS project for cricket data, performance analysis and insights.",
    summary:
      "A cricket analytics product for professional franchises, presenting match data as tactical intelligence rather than raw numbers.",
    platform: ["Web"],
    capabilities: [
      "Player Profiles",
      "Pitch & Catch Maps",
      "Scoring Zones",
      "Tactical Reports",
    ],
    overview:
      "A cricket analytics product aimed at professional franchises, framing match data as tactical intelligence rather than a table of numbers. Its analysis suite is built around individual player profiles carrying impact scores and role tags, supported by pitch maps, catch maps, wagon wheels and scoring-zone breakdowns. The public site presents the suite alongside the reporting service and a route to request a demo.",
    features: [
      "Player Performance Profiles",
      "Pitch & Catch Maps",
      "Wagon Wheel & Scoring Zones",
      "Tactical Analysis Reports",
      "Demo & Enquiry Flow",
    ],
    thumbnail: {
      src: "/projects/cricket-analytics/desktop.webp",
      alt: "The Cricket Analytics platform homepage with its tactical analysis panel.",
      width: 1037,
      height: 526,
      fit: "contain",
    },
  },
  {
    slug: "nutripak",
    title: "NutriPak",
    category: "apps",
    shortDescription:
      "A nutrition app combining Pakistani food logging and AI-assisted meal planning.",
    summary:
      "A nutrition app built around Pakistani foods, pairing meal logging and micronutrient tracking with AI-generated diet plans and nutritionist consultations.",
    platform: ["iOS", "Android", "Web admin"],
    services: [
      "Mobile App Development",
      "Backend & Cloud Setup",
      "AI Integration",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Gemini API"],
    capabilities: [
      "Local Food Database",
      "Meal Tracking",
      "Health Warnings",
      "AI Diet Plans",
      "Consultations",
    ],
    status: "In development",
    overview:
      "NutriPak is a nutrition app built for Pakistani eating habits, where generic calorie counters fall down because their food databases do not contain roti, daal or local snacks. It handles onboarding and target calculation, then meal logging with calorie, macro and micronutrient tracking, and raises food warnings tied to a user's own health conditions. On top of that sit AI-generated diet plans constrained to the local, halal-friendly food catalogue, a nutritionist consultation flow, and progress tracking for weight, activity and sleep.",
    features: [
      "Pakistani Food Database",
      "Meal Logging & Daily Summaries",
      "Macro & Micronutrient Tracking",
      "Health-Condition Food Warnings",
      "AI-Generated Diet Plans",
      "Nutritionist Consultation Flow",
    ],
    githubUrl: "https://github.com/Hammadahmad-ux/nutripak",
    thumbnail: {
      src: "/projects/nutripak/thumbnail.webp",
      alt: "NutriPak project cover showing the nutrition app home and AI diet plan screens.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "whatsapp-ai-agent",
    title: "WhatsApp AI Agent",
    category: "automation",
    shortDescription:
      "Conversational automation for WhatsApp enquiries and lead capture.",
    summary:
      "A conversational automation that answers WhatsApp enquiries instantly, qualifies the job and books it, then hands the lead to the team.",
    platform: ["WhatsApp"],
    capabilities: [
      "Instant Replies",
      "Lead Qualification",
      "Appointment Booking",
      "CRM Handoff",
      "Human Escalation",
    ],
    overview:
      "A WhatsApp automation for service businesses that lose enquiries the moment the office closes. The agent replies to an incoming message straight away, asks the questions needed to qualify the job, offers real appointment slots and confirms the booking with a reminder, then writes the lead into the CRM and notifies the team. A customer can ask for a person at any point, which hands the conversation over rather than leaving them stuck with the bot.",
    features: [
      "Automated WhatsApp Conversations",
      "Lead Qualification",
      "Appointment Booking & Reminders",
      "CRM Handoff",
      "Human Escalation",
      "Team Notifications",
    ],
    thumbnail: {
      src: "/projects/whatsapp-ai-agent/desktop.webp",
      alt: "WhatsApp AI Agent overview showing an assistant conversation and its automation workflow.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "home-services-ai-dispatcher",
    title: "Home Services AI Dispatcher",
    category: "automation",
    shortDescription:
      "A voice-agent and dispatch workflow for home-service enquiries.",
    summary:
      "An AI dispatcher for home-service businesses that answers inbound calls, qualifies the request and books the job into the schedule.",
    platform: ["Web dashboard", "Voice"],
    techStack: ["Twilio", "Calendly", "Airtable", "Google Sheets", "Zapier"],
    capabilities: [
      "AI Call Handling",
      "Job Qualification",
      "Scheduling",
      "Dispatch Tracking",
      "Live Notifications",
    ],
    overview:
      "An AI dispatcher for home-service businesses, where a missed call is usually a missed job. It answers inbound calls, qualifies the request, books the work into the schedule and keeps the office side in a single dashboard covering calls, leads, jobs, customers, team and analytics. Real-time notifications push new work out as it lands, and the workflow plugs into the tools these businesses already run on, including Twilio, Calendly, Airtable, Google Sheets and Zapier.",
    features: [
      "AI Call Handling",
      "Lead Qualification",
      "Smart Job Scheduling",
      "Dispatch & Job Tracking",
      "Real-Time Notifications",
      "Existing Tool Integrations",
    ],
    thumbnail: {
      src: "/projects/home-services-ai-dispatcher/thumbnail.webp",
      alt: "Home Services AI Dispatcher project cover showing the dispatch dashboard on desktop and mobile.",
      width: 1440,
      height: 810,
    },
  },
  {
    slug: "real-estate-speed-to-lead",
    title: "Real Estate Speed-to-Lead / CRM Dashboard",
    category: "automation",
    shortDescription:
      "A CRM dashboard and response workflow for real estate leads.",
    summary:
      "A lead-management dashboard for real-estate teams, built around how fast an enquiry gets answered rather than how many arrive.",
    platform: ["Web dashboard"],
    capabilities: [
      "Multi-Channel Capture",
      "Response-Time Tracking",
      "Lead Pipeline",
      "Automated Follow-Ups",
      "Team Reporting",
    ],
    overview:
      "A lead-management dashboard for real-estate teams built around response time, on the premise that the agent who replies first usually keeps the lead. Enquiries arrive from the website, Facebook, Instagram and Zillow into a single pipeline, each one timestamped so speed-to-lead can be read as a live figure and a trend instead of a guess. From there the workflow runs capture, respond, nurture and convert, with lead assignment, automated follow-ups, tasks and calendar, property and contact records, and reporting on conversion and team performance.",
    features: [
      "Multi-Channel Lead Capture",
      "Speed-to-Lead Tracking",
      "Lead Pipeline & Assignment",
      "Automated Follow-Ups",
      "Property & Contact Records",
      "Conversion & Team Reporting",
    ],
    thumbnail: {
      src: "/projects/real-estate-speed-to-lead/desktop.webp",
      alt: "Real estate CRM overview showing the lead dashboard, speed-to-lead trend and mobile view.",
      width: 1440,
      height: 960,
      fit: "contain",
    },
  },
];

type ExternalLink = { label: string; href: string; accessibleName: string };

/** Every verified external destination a project has. Never invented. */
export function getProjectLinks(project: Project): ExternalLink[] {
  const links: ExternalLink[] = [];
  if (project.liveUrl) {
    links.push({
      label: "Visit live project",
      href: project.liveUrl,
      accessibleName: `Open the live ${project.title} site`,
    });
  }
  for (const link of project.links ?? []) {
    links.push({
      label: link.label,
      href: link.href,
      accessibleName: `Open ${project.title} on ${link.label}`,
    });
  }
  if (project.githubUrl) {
    links.push({
      label: "View source",
      href: project.githubUrl,
      accessibleName: `Open the ${project.title} repository on GitHub`,
    });
  }
  return links;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCategory(id: ProjectCategory) {
  return projectCategories.find((category) => category.id === id);
}

/** Everything except the project being viewed, in the authored order. */
export function getOtherProjects(slug: string): Project[] {
  return projects.filter((project) => project.slug !== slug);
}

/** `category` is the project filter a service row opens in Selected Work. */
type Service = {
  number: string;
  title: string;
  description: string;
  category: ProjectCategory;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Premium responsive websites and high-converting digital experiences.",
    category: "web",
  },
  {
    number: "02",
    title: "Full Stack Development",
    description: "Modern web applications built from frontend through backend.",
    category: "apps",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "AI agents, business workflows and automation systems that reduce manual work.",
    category: "automation",
  },
  {
    number: "04",
    title: "E-commerce",
    description:
      "Modern Shopify and custom e-commerce experiences built around usability and conversion.",
    category: "web",
  },
];
