import { INDUSTRY_PAGES } from './industries';
import { RichLanding } from './richLandingTypes';

export const RICH_LANDINGS: RichLanding[] = [
  // ---------------------------------------------------------------------------
  // Appointment setting services (keyword map P1: "appointment setting services", KD 5)
  // ---------------------------------------------------------------------------
  {
    slug: "appointment-setting",
    servicePath: "/cold-calling",
    serviceName: "Appointment Setting Services",
    primaryKeyword: "appointment setting services",
    metaTitle: "Appointment Setting Services | Dedicated B2B Setters",
    metaDescription:
      "Outsourced appointment setting services: dedicated setters who call, email and follow up with your leads, qualify them and book meetings for you.",
    datePublished: "2026-11-20",

    hero: {
      eyebrow: "Outsourced appointment setting",
      title: "Appointment Setting Services That Fill Your Sales Calendar",
      subtitle:
        "Alpha Ahead provides dedicated appointment setters who contact your leads by phone and email, qualify them against your criteria and book meetings straight into your calendar. You focus on closing; we keep the pipeline moving.",
      bullets: [
        "Dedicated setters, not a shared call center queue",
        "Work inside your CRM, dialer and calendar",
        "Calling during US (EST/PST) or UAE business hours",
        "Managed by a US-registered company",
      ],
      image: "/Coldcalling.png",
      imageAlt: "Appointment setter on a sales call with a headset",
    },

    problem: {
      title: "Why meetings don't get booked",
      points: [
        "Leads come in, but nobody calls them back fast enough.",
        "Your closers spend their day dialing instead of selling.",
        "Follow-up stops after one or two attempts.",
        "No-shows pile up because nobody confirms the meeting.",
        "CRM notes are thin, so you don't know what was said.",
      ],
    },

    solution: {
      title: "A dedicated setter who owns the first conversation",
      paragraphs: [
        "An appointment setter handles the top of your sales process: first contact, qualification and booking. Your setter calls and emails the leads you provide, asks the qualifying questions you agree on, and books qualified prospects into your team's calendar.",
        "We write or refine the call script with you, set up the qualification criteria and connect the setter to your CRM and calendar. Every call gets logged, so you can see what happened before the meeting starts.",
        "Appointment setting works for B2B services, agencies, SaaS, home services, coaching and consulting, anywhere a booked conversation is the step before a sale. Calls must follow the telemarketing rules for your market, including Do Not Call scrubbing in the US, and we build that into the process.",
      ],
      image: "/aheadteam.jpg",
      imageAlt: "Alpha Ahead appointment setting team at work",
    },

    features: [
      { icon: "phone", title: "Outbound and inbound follow-up", text: "Cold outreach to your lists and fast callbacks to new inbound leads." },
      { icon: "target", title: "Qualification you define", text: "Budget, need, timeline and authority questions agreed with you before calling starts." },
      { icon: "calendar", title: "Booked into your calendar", text: "Meetings go straight into Calendly, Google Calendar or your CRM booking link." },
      { icon: "clock", title: "Reminders and confirmations", text: "Confirmation emails and reminder calls to cut no-shows." },
      { icon: "chart", title: "Activity reporting", text: "Calls, conversations and meetings booked, reported on the schedule you choose." },
      { icon: "shield", title: "Compliance built in", text: "Do Not Call scrubbing and calling-hour rules followed for your market." },
    ],

    tabs: {
      title: "What your appointment setter does",
      intro: "A typical week, split by stage of the pipeline.",
      items: [
        {
          label: "Prospecting",
          heading: "Outbound prospecting",
          points: [
            "Calls and emails to lists you supply or approve",
            "Gatekeeper handling and decision-maker search",
            "Multi-touch follow-up sequences",
            "Notes logged in your CRM after every attempt",
          ],
        },
        {
          label: "Inbound leads",
          heading: "Speed-to-lead follow-up",
          points: [
            "Callbacks to form fills and ad leads during working hours",
            "Re-engagement of older, unworked leads",
            "Qualification against your criteria",
            "Hand-off of hot leads to your closers",
          ],
        },
        {
          label: "Booking",
          heading: "Booking and confirmation",
          points: [
            "Meetings booked into your calendar or booking link",
            "Confirmation emails with agenda and meeting link",
            "Reminder calls or messages before the meeting",
            "Rescheduling of missed meetings",
          ],
        },
        {
          label: "CRM & reporting",
          heading: "CRM management and reporting",
          points: [
            "Pipeline stages kept up to date",
            "Duplicate and dead lead cleanup",
            "Daily or weekly activity reports",
            "Script feedback from real conversations",
          ],
        },
      ],
    },

    steps: [
      { title: "Discovery call", text: "Tell us who you sell to, what a qualified lead looks like and your calendar setup." },
      { title: "Script and setup", text: "We draft the script and qualification questions with you and connect the setter to your tools." },
      { title: "Go live", text: "Your setter starts calling, logging every conversation and booking meetings." },
      { title: "Review and scale", text: "We review results with you, refine the script and add hours or setters as needed." },
    ],

    comparison: {
      title: "In-house SDR vs freelance setter vs managed appointment setting",
      columns: ["", "In-house SDR", "Freelance setter", "Alpha Ahead"],
      rows: [
        ["Hiring and training", "On you", "On you", "Handled by us"],
        ["Supervision", "Your sales manager", "None", "Supervisor involved"],
        ["Cover when someone is out", "Depends on team size", "Rarely", "Wider team support"],
        ["Works in your CRM", "Yes", "Varies", "Yes"],
        ["Contract", "Local employment", "Individual", "US-registered LLC"],
        ["Cost level", "Usually highest", "Varies widely", "Quoted per setter"],
      ],
    },

    audiences: [
      { title: "B2B services and agencies", text: "Book discovery calls with decision-makers so your team can focus on closing.", image: "/Services/Lead Gen.jpg", imageAlt: "B2B sales team reviewing booked meetings" },
      { title: "Small businesses", text: "Follow up every inbound enquiry quickly without hiring a full-time salesperson.", image: "/Services/Virtual Assistant.jpg", imageAlt: "Small business owner working with a remote assistant" },
      { title: "UAE companies", text: "Setters working UAE business hours, backed by our Dubai office.", image: "/teamwork.webp", imageAlt: "UAE business team collaborating" },
    ],

    faqs: [
      {
        q: "What are appointment setting services?",
        a: "Appointment setting services are outsourced sales support where trained setters contact your leads, qualify them and book meetings for your sales team. The setter handles first contact and scheduling; your team runs the meeting and closes.",
      },
      {
        q: "What is the difference between an appointment setter and an SDR?",
        a: "The roles overlap. An appointment setter focuses on contacting leads and booking meetings, while an SDR (sales development representative) usually also researches accounts and runs longer outbound sequences. Read our [appointment setter vs SDR guide](/blog/appointment-setter-vs-sdr) for a full comparison.",
      },
      {
        q: "Who provides the leads and the dialer?",
        a: "Most clients supply their own lists, CRM and dialer, so the data stays in their systems. If you need help building lists, our [lead generation team](/lead-generation) can support that.",
      },
      {
        q: "Which tools can your setters work in?",
        a: "Setters work in your existing tools: your CRM, dialer, calendar or booking link, and email. You give the setter their own login so everything stays in your accounts.",
      },
      {
        q: "Is outbound calling legal?",
        a: "In the US, outbound calling is allowed when it follows federal and state rules, including Do Not Call list scrubbing and calling-hour limits. Rules differ for B2B and consumer calls and by state, so confirm your own obligations with a qualified advisor. This is not legal advice.",
      },
      {
        q: "How much do appointment setting services cost?",
        a: "Pricing depends on the number of setters, hours per week and how complex your qualification is. [Contact us](/contact) or use the form on this page for a quote.",
      },
    ],

    related: [
      ["Cold calling services", "/cold-calling"],
      ["Lead generation services", "/lead-generation"],
      ["Virtual assistant services", "/virtual-assistant"],
      ["Appointment setter vs SDR", "/blog/appointment-setter-vs-sdr"],
      ["Contact us", "/contact"],
    ],
  },

  // ---------------------------------------------------------------------------
  // Bookkeeping virtual assistant (keyword map P1: "bookkeeping virtual assistant", KD 19)
  // ---------------------------------------------------------------------------
  {
    slug: "bookkeeping-virtual-assistant",
    servicePath: "/business-assistant",
    serviceName: "Bookkeeping Virtual Assistant",
    primaryKeyword: "bookkeeping virtual assistant",
    metaTitle: "Bookkeeping Virtual Assistant for Small Businesses",
    metaDescription:
      "Bookkeeping virtual assistants for small businesses: transactions, reconciliations, invoices and payables in QuickBooks Online or Xero, with secure access.",
    datePublished: "2026-11-20",

    hero: {
      eyebrow: "Remote bookkeeping support",
      title: "Bookkeeping Virtual Assistant for QuickBooks and Xero",
      subtitle:
        "A bookkeeping virtual assistant keeps your books up to date: transaction entry, bank reconciliations, invoicing, bills and receipts in QuickBooks Online or Xero. Your accountant or CPA stays responsible for tax and sign-off; your VA does the daily work that keeps the books clean.",
      bullets: [
        "Daily bookkeeping in QuickBooks Online or Xero",
        "Works under your accountant's review",
        "US (EST/PST) or UAE business hours",
        "Managed by a US-registered company",
      ],
      image: "/finicialservice.jpeg",
      imageAlt: "Bookkeeping assistant reviewing financial records",
    },

    problem: {
      title: "Signs your books need help",
      points: [
        "Bank feeds pile up unreviewed for weeks.",
        "Invoices go out late and nobody chases unpaid ones.",
        "Receipts sit in inboxes instead of attached to transactions.",
        "Month-end takes days because everything is done at once.",
        "Your accountant spends billable hours cleaning up data entry.",
      ],
    },

    solution: {
      title: "Daily bookkeeping, handled remotely",
      paragraphs: [
        "A bookkeeping VA works inside your own accounting software with their own user login. They categorize transactions, match receipts, reconcile bank and card accounts, raise invoices and enter bills, following the chart of accounts and rules your accountant sets.",
        "The work is done to a written checklist: what gets done daily, weekly and at month-end. Anything unclear is flagged for you or your accountant instead of guessed, so the books stay accurate.",
        "A bookkeeping virtual assistant is not a CPA and does not file taxes or give tax advice. The best setup pairs your VA for the day-to-day work with your accountant for review, tax and year-end.",
      ],
      image: "/about-team.webp",
      imageAlt: "Remote bookkeeping team collaborating",
    },

    features: [
      { icon: "file", title: "Transaction entry", text: "Bank and card feeds categorized against your chart of accounts." },
      { icon: "check", title: "Reconciliations", text: "Bank, card and payment accounts reconciled on a fixed schedule." },
      { icon: "dollar", title: "Invoicing and collections", text: "Invoices created and sent, overdue reminders followed up." },
      { icon: "list", title: "Bills and receipts", text: "Vendor bills entered and receipts matched to transactions." },
      { icon: "chart", title: "Month-end prep", text: "Books tidied and reports prepared for your accountant's review." },
      { icon: "shield", title: "Controlled access", text: "Your VA uses their own login with the permissions you choose." },
    ],

    tabs: {
      title: "Bookkeeping tasks by frequency",
      intro: "A typical checklist, adjusted to your business.",
      items: [
        {
          label: "Daily",
          heading: "Daily bookkeeping",
          points: [
            "Review and categorize bank and card transactions",
            "Match receipts and attach documents",
            "Enter new vendor bills",
            "Flag unusual or unclear transactions",
          ],
        },
        {
          label: "Weekly",
          heading: "Weekly tasks",
          points: [
            "Create and send customer invoices",
            "Follow up overdue invoices",
            "Prepare the bill payment list for your approval",
            "Update the cash position summary",
          ],
        },
        {
          label: "Month-end",
          heading: "Month-end close support",
          points: [
            "Reconcile bank, card and payment accounts",
            "Review accounts receivable and payable aging",
            "Prepare profit and loss and balance sheet for review",
            "Send open questions to you or your accountant",
          ],
        },
        {
          label: "Admin",
          heading: "Finance admin",
          points: [
            "Expense report collection and checks",
            "Vendor and customer record updates",
            "Payroll data preparation for your payroll provider",
            "Document filing in your shared drive",
          ],
        },
      ],
    },

    steps: [
      { title: "Discovery call", text: "Tell us your software, transaction volume and what is behind." },
      { title: "Checklist and access", text: "We agree a daily, weekly and month-end checklist and set up a user login for your VA." },
      { title: "Catch-up and routine", text: "Your VA brings the books current, then runs the routine checklist." },
      { title: "Accountant review", text: "Your accountant reviews the books at month-end; your VA handles the follow-ups." },
    ],

    comparison: {
      title: "Bookkeeping VA vs in-house bookkeeper vs doing it yourself",
      columns: ["", "Doing it yourself", "In-house bookkeeper", "Bookkeeping VA (Alpha Ahead)"],
      rows: [
        ["Your time spent", "High", "Low", "Low"],
        ["Hiring and training", "None", "On you", "Handled by us"],
        ["Cover when someone is out", "None", "Depends on team size", "Wider team support"],
        ["Works in your software", "Yes", "Yes", "Yes, with own login"],
        ["Tax filing and advice", "Your accountant", "Your accountant", "Your accountant"],
        ["Cost level", "Your hours", "Usually highest", "Quoted per assistant"],
      ],
    },

    audiences: [
      { title: "Small businesses", text: "Keep the books current without hiring a full-time bookkeeper.", image: "/Services/Virtual Assistant.jpg", imageAlt: "Small business owner working with a remote assistant" },
      { title: "Accounting firms", text: "Offload data entry and reconciliations so your team focuses on review and advice.", image: "/finicialservice.jpeg", imageAlt: "Accounting team reviewing reports" },
      { title: "Ecommerce sellers", text: "Payout, fee and refund entries matched and reconciled.", image: "/e-comerce.jpeg", imageAlt: "Ecommerce business owner packing orders" },
    ],

    faqs: [
      {
        q: "What does a bookkeeping virtual assistant do?",
        a: "A bookkeeping virtual assistant categorizes transactions, reconciles bank and card accounts, creates and sends invoices, enters bills, tracks accounts payable and receivable, and prepares the books for your accountant's month-end review.",
      },
      {
        q: "How much does a virtual bookkeeper cost?",
        a: "It depends on your transaction volume, hours and how far behind the books are. [Contact us](/contact) or use the form on this page for a quote based on your workload.",
      },
      {
        q: "Is it safe to give a VA access to QuickBooks?",
        a: "Yes, when access is set up properly. Give your VA their own user in QuickBooks Online or Xero with only the permissions the tasks need, turn on two-factor authentication, keep payment approval with you, and remove access the same day the engagement ends.",
      },
      {
        q: "Can a VA do payroll?",
        a: "A VA can collect hours, check timesheets and prepare payroll data for your payroll provider. Approving and running payroll, and payroll tax filings, should stay with you, your accountant or your payroll provider.",
      },
      {
        q: "Do I still need an accountant?",
        a: "Yes. A bookkeeping VA does the recurring data work, which makes your accountant's job faster. Tax filing, tax advice and signing off financial statements stay with your accountant or CPA. Our [bookkeeping VA checklist](/blog/bookkeeping-virtual-assistant-checklist) shows how the work is split.",
      },
    ],

    related: [
      ["Virtual business assistant", "/business-assistant"],
      ["Virtual assistant services", "/virtual-assistant"],
      ["Bookkeeping VA checklist", "/blog/bookkeeping-virtual-assistant-checklist"],
      ["Offshore virtual assistant", "/hire-virtual-assistant-pakistan"],
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
    metaTitle: "Offshore Virtual Assistant from Pakistan | Alpha Ahead",
    metaDescription:
      "Hire an offshore virtual assistant from Pakistan through a US-registered agency with its own Islamabad team: vetted, trained, supervised, US and UAE hours.",
    datePublished: "2026-11-19",

    hero: {
      eyebrow: "Managed offshore virtual assistants",
      title: "Hire an Offshore Virtual Assistant from Pakistan, Managed by a US Company",
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
        "Typical offshore virtual assistant roles from Pakistan include admin support, [appointment setters](/appointment-setting), cold callers, [bookkeeping assistants](/bookkeeping-virtual-assistant), CRM management and marketing tasks. Start with one role and add hours or assistants once the processes are working.",
      ],
      image: "/about-team.webp",
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
          label: "Executive VA",
          heading: "Executive virtual assistant",
          points: [
            "Inbox triage and calendar management for leaders",
            "Meeting prep, notes and follow-ups",
            "Travel planning and expense reports",
            "CRM and pipeline updates",
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
      { title: "Sales teams", text: "Appointment setters and cold callers who keep your calendar full.", image: "/Services/Lead Gen.jpg", imageAlt: "Sales team working with a remote appointment setter" },
      { title: "Small businesses", text: "Admin, customer support and bookkeeping support without a full-time local hire.", image: "/Services/Virtual Assistant.jpg", imageAlt: "Small business owner working with a remote assistant" },
      { title: "UAE SMEs", text: "Support during UAE business hours, backed by our Dubai office.", image: "/teamwork.webp", imageAlt: "UAE business team collaborating" },
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
        q: "How do contracts and payments work?",
        a: "You sign a service agreement with Alpha Ahead LLC, a US-registered company, and are invoiced by us, not by an individual overseas. Hours, tasks, confidentiality and notice terms are set out in the agreement before work starts.",
      },
      {
        q: "Do I manage the VA directly?",
        a: "Yes, you assign day-to-day work. A supervisor on our side supports quality, training and any issues.",
      },
    ],

    related: [
      ["Virtual assistant services", "/virtual-assistant"],
      ["Business assistant", "/business-assistant"],
      ["Pakistan vs Philippines VAs", "/blog/pakistan-vs-philippines-virtual-assistant"],
      ["Onboard a VA in 7 days", "/blog/onboard-virtual-assistant-7-days"],
      ["About Alpha Ahead", "/about"],
      ["Contact us", "/contact"],
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Virtual real estate ISA
  // ---------------------------------------------------------------------------
  ...INDUSTRY_PAGES,
];
