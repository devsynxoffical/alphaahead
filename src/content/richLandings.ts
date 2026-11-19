import { RichLanding } from './richLandingTypes';

export const RICH_LANDINGS: RichLanding[] = [
  // ---------------------------------------------------------------------------
  // 1. Cold calling for real estate investors
  // ---------------------------------------------------------------------------
  {
    slug: "cold-calling-for-real-estate-investors",
    servicePath: "/cold-calling",
    serviceName: "Cold Calling for Real Estate Investors",
    primaryKeyword: "cold calling for real estate investors",
    metaTitle: "Cold Calling for Real Estate Investors | Alpha Ahead",
    metaDescription:
      "Managed cold calling for real estate investors and wholesalers: trained callers work your lists, qualify motivated sellers and book appointments.",
    datePublished: "2026-11-19",

    hero: {
      eyebrow: "Wholesale & investor cold calling",
      title: "Cold Calling for Real Estate Investors and Wholesalers",
      subtitle:
        "Alpha Ahead provides managed cold calling for real estate investors: trained callers work the seller lists you provide, qualify motivation, timeline, condition and price, and hand warm leads to your acquisitions team.",
      bullets: [
        "US-registered company with its own calling team in Islamabad",
        "Callers work US EST and PST hours",
        "Scripts, notes and dispositions logged in your CRM",
        "Supervised team, not a solo freelancer",
      ],
      image: "/Coldcalling.png",
      imageAlt: "Cold caller on a headset calling motivated sellers for a real estate investor",
    },

    problem: {
      title: "Why investor cold calling stalls",
      points: [
        "You pulled the lists, but nobody has time to dial them consistently.",
        "Freelance callers come and go, and every new one needs retraining.",
        "Leads get passed over with no notes on motivation or price.",
        "Follow-up calls slip, so warm sellers go cold or sign with a competitor.",
        "Compliance is an afterthought until a complaint arrives.",
      ],
    },

    solution: {
      title: "A managed calling team built around your acquisitions process",
      paragraphs: [
        "We assign callers who are trained on wholesale real estate cold calling, then build your script, qualification questions and handoff rules with you before the first dial.",
        "Each conversation is logged with a disposition and notes, so your acquisitions manager sees why a seller is motivated and what they expect before calling back. A supervisor reviews calls and keeps the work consistent when someone is out.",
      ],
      image: "/cCalling.avif",
      imageAlt: "Real estate cold calling team working seller lists",
    },

    features: [
      { icon: "phone", title: "Motivated seller cold calling", text: "Callers open conversations with owners on your lists and find out whether there is a real reason to sell." },
      { icon: "target", title: "Four-point qualification", text: "Every lead is screened on motivation, timeline, property condition and asking price before handoff." },
      { icon: "calendar", title: "Appointment handoff", text: "Qualified sellers are booked or warm-transferred to your acquisitions rep, following your rules." },
      { icon: "list", title: "CRM logging", text: "Dispositions, notes and callbacks go into your CRM, and we can work in tools such as Podio, REsimpli or a spreadsheet." },
      { icon: "clock", title: "Consistent follow-up", text: "Callbacks and maybe-later leads get scheduled so nobody falls through the cracks." },
      { icon: "shield", title: "Compliance-aware callers", text: "Callers follow calling-hour rules, honor do-not-call requests and only dial lists you have scrubbed." },
    ],

    tabs: {
      title: "How we call each list type",
      intro: "You provide the list. We adapt the opener and questions to the seller's situation.",
      items: [
        {
          label: "Absentee & tired landlords",
          heading: "Absentee owners and tired landlords",
          points: [
            "Open with the property, not a pitch",
            "Ask about tenants, repairs and management headaches",
            "Confirm occupancy and lease end dates",
            "Note rent, condition and price expectations",
          ],
        },
        {
          label: "Vacant & distressed",
          heading: "Vacant and distressed properties",
          points: [
            "Confirm the owner and how long it has sat vacant",
            "Ask about repairs, code issues and holding costs",
            "Gauge timeline and flexibility on price",
            "Flag access details for a walkthrough",
          ],
        },
        {
          label: "Probate & pre-foreclosure",
          heading: "Probate and pre-foreclosure",
          points: [
            "Use a slower, respectful script for sensitive situations",
            "Identify who has authority to make decisions",
            "Note deadlines the seller mentions, without giving advice",
            "Hand off quickly when timing matters",
          ],
        },
        {
          label: "Expired & FSBO",
          heading: "Expired listings and FSBO",
          points: [
            "Acknowledge their listing experience before asking questions",
            "Ask why the property did not sell",
            "Check openness to a cash or as-is offer",
            "Respect listing agreements and stop-calling requests",
          ],
        },
      ],
    },

    steps: [
      { title: "Free discovery call", text: "Tell us your markets, list types, deal criteria and how your acquisitions team works." },
      { title: "Get matched with callers", text: "We assign callers suited to investor calling and the hours you need covered." },
      { title: "Onboarding, scripts and SOPs", text: "We set up scripts, qualification questions, CRM fields and handoff rules, then start dialing." },
      { title: "Review and scale", text: "Listen to calls, refine the script and add callers or hours as your pipeline grows." },
    ],

    comparison: {
      title: "Freelancer vs in-house vs managed team",
      columns: ["", "Fiverr freelancer", "In-house caller", "Managed team (Alpha Ahead)"],
      rows: [
        ["Setup effort", "Low, but you write the script", "High: hiring, payroll, training", "We help build scripts and SOPs"],
        ["Training", "Usually on you", "On you", "Trained and supervised by us"],
        ["Cover when someone is out", "Rarely", "Depends on your team size", "Backup from the wider team"],
        ["Quality control", "Varies by person", "You manage it", "Supervisor reviews calls"],
        ["Contract", "Marketplace terms", "Employment agreement", "Agreement with a US-registered LLC"],
        ["Best fit", "Short tests on a tight budget", "Large teams with a manager", "Investors who want steady volume without managing it"],
      ],
    },

    audiences: [
      { title: "Wholesalers", text: "Keep contracts coming with daily dialing on your seller lists and clean handoffs to dispositions.", image: "/realstate.jpeg", imageAlt: "Real estate wholesaler reviewing properties" },
      { title: "Buy-and-hold investors", text: "Find landlords and owners open to selling rentals that fit your buy box.", image: "/leadG.jpg", imageAlt: "Buy-and-hold investor reviewing seller leads" },
      { title: "Fix-and-flip teams", text: "Surface distressed and vacant properties with condition notes before you drive out.", image: "/Services/Real estate solution.jpg", imageAlt: "Fix-and-flip team discussing a renovation property" },
    ],

    faqs: [
      {
        q: "What does a real estate investor cold caller do?",
        a: "They call owners on your lists, find out whether the owner is motivated to sell, collect timeline, condition and price details, and pass qualified leads to your acquisitions team with notes in your CRM.",
      },
      {
        q: "Do you provide the seller lists?",
        a: "No. You provide the lists, such as absentee, vacant, probate or pre-foreclosure data from your list provider. We work them, log outcomes and can flag bad numbers.",
      },
      {
        q: "Who is responsible for DNC scrubbing?",
        a: "Scrubbing your list against do-not-call registries is your responsibility as the list owner. Our callers honor stop-calling requests and calling-hour rules. See our guide on [whether real estate cold calling is legal](/blog/is-real-estate-cold-calling-legal). This is not legal advice.",
      },
      {
        q: "Can your callers make offers or negotiate price?",
        a: "Callers qualify and gather information. Offers and negotiation stay with your acquisitions team unless you set a different process in writing.",
      },
      {
        q: "How much does investor cold calling cost?",
        a: "It depends on hours, number of callers and scope. Book a free call for a quote, and read our [real estate cold calling cost guide](/blog/real-estate-cold-calling-cost) for how pricing usually works.",
      },
      {
        q: "How fast can we start?",
        a: "Timing depends on your script, CRM access and list readiness. We confirm a start date on the discovery call.",
      },
    ],

    related: [
      ["Cold calling services", "/cold-calling"],
      ["Lead generation", "/lead-generation"],
      ["Is real estate cold calling legal?", "/blog/is-real-estate-cold-calling-legal"],
      ["Real estate cold calling cost", "/blog/real-estate-cold-calling-cost"],
      ["Real estate virtual assistant", "/real-estate-virtual-assistant"],
      ["Contact us", "/contact"],
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Hire a virtual assistant from Pakistan
  // ---------------------------------------------------------------------------
  {
    slug: "hire-virtual-assistant-pakistan",
    servicePath: "/virtual-assistant",
    serviceName: "Hire a Virtual Assistant from Pakistan",
    primaryKeyword: "hire virtual assistant from Pakistan",
    metaTitle: "Hire a Virtual Assistant from Pakistan | Alpha Ahead",
    metaDescription:
      "Hire a virtual assistant from Pakistan through a US-registered agency with its own Islamabad team: vetted, trained, supervised, covering US and UAE hours.",
    datePublished: "2026-11-19",

    hero: {
      eyebrow: "Managed virtual assistants from Pakistan",
      title: "Hire a Virtual Assistant from Pakistan, Managed by a US Company",
      subtitle:
        "You can hire a virtual assistant from Pakistan through Alpha Ahead, a US-registered LLC with its own team in Islamabad. We vet, train and supervise your VA, and you sign with a US company instead of a marketplace stranger.",
      bullets: [
        "US-registered LLC with offices in Florida, Dubai and Islamabad",
        "Coverage for US EST/PST and UAE business hours",
        "Vetting, training and supervision handled by us",
        "Backup cover when your assistant is out",
      ],
      image: "/aheadteam.jpg",
      imageAlt: "Alpha Ahead team members in the Islamabad office",
    },

    problem: {
      title: "Why hiring on freelance marketplaces gets hard",
      points: [
        "Hundreds of profiles, and no easy way to check real skills.",
        "Nobody covers the work when your freelancer is sick or leaves.",
        "You become the trainer, manager and quality checker.",
        "Contracts and accountability sit with an individual overseas.",
        "Time zone gaps leave tasks waiting overnight.",
      ],
    },

    solution: {
      title: "A Pakistan virtual assistant agency with a US contract",
      paragraphs: [
        "Most of our team works from our Islamabad office, and Alpha Ahead LLC is registered in the US. That means you get an offshore virtual assistant in Pakistan with a US agreement, local supervision and a team behind them.",
        "We match you with a VA for your role, document your processes as SOPs and keep a supervisor involved. Pakistan is not the right fit for every business, so we explain the trade-offs honestly before you commit.",
        "Typical managed virtual assistant Pakistan roles include admin support, real estate VAs, cold callers, transaction coordination support, bookkeeping support and marketing tasks. Start with one role and add hours or assistants once the processes are working.",
      ],
      image: "/about-team.png",
      imageAlt: "Managed virtual assistant team collaborating",
    },

    features: [
      { icon: "search", title: "Vetted before you meet them", text: "We screen for English, role skills and reliability before introducing a candidate." },
      { icon: "check", title: "Role training", text: "Your VA is trained on your SOPs and tools before taking on live work." },
      { icon: "users", title: "Backup cover", text: "If your assistant is out, the wider team can keep essential tasks moving." },
      { icon: "shield", title: "Supervised work", text: "A supervisor checks quality and helps resolve issues, so you are not managing alone." },
      { icon: "globe", title: "US and UAE hours", text: "Shifts can align with US EST, US PST or UAE business hours." },
      { icon: "file", title: "US contract", text: "You contract with Alpha Ahead LLC, a US-registered company, not an individual freelancer." },
    ],

    tabs: {
      title: "Roles you can hire from Pakistan",
      intro: "Pick a role, or combine tasks into one dedicated assistant.",
      items: [
        {
          label: "Admin VA",
          heading: "Administrative virtual assistant",
          points: [
            "Inbox and calendar management",
            "Data entry, research and document prep",
            "Customer emails and basic support",
            "Can work in tools such as Google Workspace",
          ],
        },
        {
          label: "Real estate VA",
          heading: "Real estate virtual assistant",
          points: [
            "Listing input and CRM updates",
            "Lead follow-up and appointment scheduling",
            "Transaction coordination support",
            "Property management admin tasks",
          ],
        },
        {
          label: "Cold caller",
          heading: "Cold caller and appointment setter",
          points: [
            "Outbound calls to lists you provide",
            "Lead qualification against your criteria",
            "Appointment booking and CRM notes",
            "Shifts aligned to US calling hours",
          ],
        },
        {
          label: "Bookkeeping & marketing",
          heading: "Bookkeeping support and marketing",
          points: [
            "Invoice entry, receipts and reconciliation support",
            "Social media scheduling and basic graphics",
            "Email campaign setup and list cleanup",
            "Reporting prepared for your review",
          ],
        },
      ],
    },

    steps: [
      { title: "Free discovery call", text: "Share the tasks, hours and tools you need covered." },
      { title: "Get matched", text: "We shortlist a vetted assistant from our Islamabad team for your role." },
      { title: "Onboarding and SOPs", text: "We document your processes, set up access and train your VA before go-live." },
      { title: "Scale", text: "Add hours, tasks or more assistants as your workload grows." },
    ],

    comparison: {
      title: "Freelance marketplace vs managed agency vs local hire",
      columns: ["", "Freelance marketplace", "Managed agency (Alpha Ahead)", "Local hire"],
      rows: [
        ["Vetting", "You review profiles", "Screened by us", "Your hiring process"],
        ["Training", "On you", "SOPs and role training", "On you"],
        ["Backup cover", "Rarely", "Wider team support", "Depends on staff size"],
        ["Supervision", "None", "Supervisor involved", "You or a manager"],
        ["Contract", "Marketplace terms", "US-registered LLC", "Local employment"],
        ["Cost level", "Often lowest", "Between the two", "Usually highest"],
      ],
    },

    audiences: [
      { title: "Real estate teams", text: "Real estate VAs, cold callers and TC support for agents and investors.", image: "/realstate.jpeg", imageAlt: "Real estate team working with a virtual assistant" },
      { title: "Small businesses", text: "Admin, customer support and bookkeeping support without a full-time local hire.", image: "/Services/Virtual Assistant.jpg", imageAlt: "Small business owner working with a remote assistant" },
      { title: "UAE SMEs", text: "Support during UAE business hours, backed by our Dubai office.", image: "/teamwork.png", imageAlt: "UAE business team collaborating" },
    ],

    faqs: [
      {
        q: "Is it safe to hire a virtual assistant from Pakistan?",
        a: "It can be, when you hire through a company that vets staff, controls access and signs a clear agreement. With us you contract with a US-registered LLC, and your VA works from our Islamabad team.",
      },
      {
        q: "Pakistan or the Philippines: which is better?",
        a: "Both have strong talent, and the right choice depends on your hours, roles and communication style. Read our [Pakistan vs Philippines virtual assistant comparison](/blog/pakistan-vs-philippines-virtual-assistant) for an honest breakdown.",
      },
      {
        q: "Can a Pakistan-based VA work US hours?",
        a: "Yes. We schedule shifts to cover US EST or PST hours, or UAE business hours, depending on what you need.",
      },
      {
        q: "What happens if my VA is sick or leaves?",
        a: "Backup cover from the wider team keeps essential tasks moving, and we handle finding and training a replacement if needed.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on hours, role and scope. Book a free discovery call and we will send a quote.",
      },
      {
        q: "Do I manage the VA directly?",
        a: "Yes, you assign day-to-day work. A supervisor on our side supports quality, training and any issues.",
      },
    ],

    related: [
      ["Virtual assistant services", "/virtual-assistant"],
      ["Real estate virtual assistant", "/real-estate-virtual-assistant"],
      ["Business assistant", "/business-assistant"],
      ["Pakistan vs Philippines VAs", "/blog/pakistan-vs-philippines-virtual-assistant"],
      ["About Alpha Ahead", "/about"],
      ["Contact us", "/contact"],
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Virtual real estate ISA
  // ---------------------------------------------------------------------------
  {
    slug: "real-estate-isa",
    servicePath: "/cold-calling",
    serviceName: "Virtual Real Estate ISA (Inside Sales Agent)",
    primaryKeyword: "virtual ISA for real estate",
    metaTitle: "Virtual ISA for Real Estate Agents | Alpha Ahead",
    metaDescription:
      "A virtual ISA for real estate agents and teams: fast response to online leads, buyer and seller qualification, nurture follow-up and booked appointments.",
    datePublished: "2026-11-19",

    hero: {
      eyebrow: "Outsourced real estate ISA",
      title: "Virtual ISA for Real Estate Agents and Teams",
      subtitle:
        "A virtual ISA for real estate responds to your new leads quickly, qualifies buyers and sellers, keeps nurture follow-up going and books appointments for your licensed agents. Alpha Ahead provides trained, supervised ISAs who work your hours and log everything in your CRM.",
      bullets: [
        "Fast response to new online leads during your shifts",
        "Buyer and seller qualification on your criteria",
        "Appointments handed to licensed agents",
        "Notes and next steps logged in your CRM",
      ],
      image: "/Services/Lead Gen.jpg",
      imageAlt: "Virtual real estate ISA responding to new buyer and seller leads",
    },

    problem: {
      title: "Where agent leads leak",
      points: [
        "New leads wait hours because agents are at showings.",
        "Follow-up stops after one or two attempts.",
        "Agents spend time on leads that are not ready.",
        "CRM notes are thin, so handoffs start from zero.",
        "Older leads sit untouched in the database.",
      ],
    },

    solution: {
      title: "An outsourced real estate ISA who works your pipeline",
      paragraphs: [
        "Your real estate inside sales agent contacts new leads, asks your qualification questions and books qualified buyers and sellers with the right agent. Every attempt and conversation goes into your CRM.",
        "ISAs do not negotiate, give pricing or legal advice, or act as licensed agents. State rules on unlicensed activity vary, so we set clear scripts and handoff points with you.",
        "Because the ISA works from your CRM, you can see every attempt, conversation and booked appointment. A supervisor reviews calls and keeps coverage going when your ISA is out.",
      ],
      image: "/crm.png",
      imageAlt: "CRM dashboard with ISA notes and scheduled appointments",
    },

    features: [
      { icon: "clock", title: "Speed to lead", text: "New inquiries get a call or text quickly during covered hours, while interest is high." },
      { icon: "search", title: "Buyer and seller qualification", text: "We ask about timeline, financing, motivation and location using your criteria." },
      { icon: "calendar", title: "Appointment setting", text: "Qualified leads are booked on your agents' calendars or warm-transferred." },
      { icon: "chat", title: "Nurture follow-up", text: "Scheduled calls and texts keep longer-term leads warm, within consent and compliance rules." },
      { icon: "list", title: "Clean CRM notes", text: "Each touch is logged, and we can work in tools such as Follow Up Boss or kvCORE." },
      { icon: "shield", title: "Clear licensing lines", text: "ISAs gather information and book; licensed agents advise, price and negotiate." },
    ],

    tabs: {
      title: "What your ISA does at each lead stage",
      intro: "Scripts and cadences adapt to the source and stage of each lead.",
      items: [
        {
          label: "New online leads",
          heading: "Portal and website leads",
          points: [
            "Respond quickly to portal and website inquiries",
            "Confirm the property or area they asked about",
            "Qualify timeline, financing and motivation",
            "Book a showing or call with an agent",
          ],
        },
        {
          label: "Seller leads",
          heading: "Seller and valuation leads",
          points: [
            "Follow up on home value requests",
            "Ask about timeline, reasons and next home",
            "Book a listing appointment with your agent",
            "Leave pricing opinions to the licensed agent",
          ],
        },
        {
          label: "Nurture",
          heading: "Long-term nurture",
          points: [
            "Scheduled check-ins on leads months from moving",
            "Texts only where consent rules allow",
            "Update timeline and status in the CRM",
            "Re-route leads that become active",
          ],
        },
        {
          label: "Database revival",
          heading: "Old leads and past clients",
          points: [
            "Call through aged leads in your CRM",
            "Reconnect with past clients for referrals",
            "Remove bad numbers and update contact details",
            "Flag anyone ready to talk now",
          ],
        },
      ],
    },

    steps: [
      { title: "Free discovery call", text: "Walk us through your lead sources, CRM, team structure and hours." },
      { title: "Get matched with an ISA", text: "We assign an ISA suited to your market and lead volume." },
      { title: "Onboarding, scripts and SOPs", text: "We build scripts, qualification questions, cadences and handoff rules with you." },
      { title: "Scale", text: "Review calls and notes, adjust cadences and add hours as leads grow." },
    ],

    comparison: {
      title: "AI-only responder vs in-house ISA vs virtual ISA",
      columns: ["", "AI-only responder", "In-house ISA", "Virtual ISA (Alpha Ahead)"],
      rows: [
        ["First response", "Instant, automated", "When they are on shift", "Quick, from a person, during covered hours"],
        ["Live conversations", "Limited", "Yes", "Yes"],
        ["Handles nuance", "Can misread context", "Yes", "Yes, with your scripts"],
        ["Setup and hiring", "Software setup", "Recruit, pay, train", "We match, train and supervise"],
        ["Cover when out", "Always on", "Depends on staff", "Backup from the wider team"],
        ["Best fit", "Instant text acknowledgement", "Large teams with an ISA manager", "Agents and teams wanting live follow-up without hiring"],
      ],
    },

    audiences: [
      { title: "Solo agents", text: "Stop losing new leads while you are at showings and closings.", image: "/Services/Real estate solution.jpg", imageAlt: "Solo real estate agent meeting buyers" },
      { title: "Teams", text: "Route qualified appointments to the right agent with clean notes.", image: "/teamwork.png", imageAlt: "Real estate team reviewing appointments" },
      { title: "Brokerages", text: "Add ISA coverage across agents without building an in-house department.", image: "/realstate.jpeg", imageAlt: "Real estate brokerage office" },
    ],

    faqs: [
      {
        q: "What does a real estate ISA virtual assistant do?",
        a: "They respond to new leads, qualify buyers and sellers, follow up on nurture leads and book appointments for your agents, logging every touch in your CRM.",
      },
      {
        q: "Does an ISA need a real estate license?",
        a: "Rules vary by state. Our ISAs do not negotiate, give pricing or legal advice, or perform licensed activities; they gather information and book appointments. Check your state's rules. This is not legal advice.",
      },
      {
        q: "Can the ISA text leads?",
        a: "Yes, where the lead has given consent and your process complies with applicable rules. We follow your opt-out and consent policies.",
      },
      {
        q: "Which lead sources can you work?",
        a: "Portal, website, social and open house leads, plus aged database leads. The ISA works whatever flows into your CRM.",
      },
      {
        q: "How much does a virtual ISA cost?",
        a: "It depends on hours, lead volume and scope. Book a free discovery call for a quote.",
      },
      {
        q: "How is this different from your cold calling service?",
        a: "An ISA follows up with inbound and existing leads. [Cold calling](/cold-calling) reaches owners on lists who have not contacted you.",
      },
    ],

    related: [
      ["Cold calling services", "/cold-calling"],
      ["Real estate virtual assistant", "/real-estate-virtual-assistant"],
      ["Transaction coordinator", "/transaction-coordinator"],
      ["Lead generation", "/lead-generation"],
      ["Zingo Assist case study", "/case-studies/zingo-assist"],
      ["Contact us", "/contact"],
    ],
  },
];
