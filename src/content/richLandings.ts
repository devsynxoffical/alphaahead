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
      ["Executive virtual assistant", "/business-assistant"],
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
      ["Executive virtual assistant", "/business-assistant"],
      ["Pakistan vs Philippines VAs", "/blog/pakistan-vs-philippines-virtual-assistant"],
      ["Onboard a VA in 7 days", "/blog/onboard-virtual-assistant-7-days"],
      ["About Alpha Ahead", "/about"],
      ["Contact us", "/contact"],
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Virtual real estate ISA
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Data entry virtual assistant (keyword map P2: 590/mo US, KD 28)
  // ---------------------------------------------------------------------------
  {
    slug: "data-entry-virtual-assistant",
    servicePath: "/virtual-assistant",
    serviceName: "Data Entry Virtual Assistant",
    primaryKeyword: "data entry virtual assistant",
    metaTitle: "Data Entry Virtual Assistant | Accurate, Secure, Remote",
    metaDescription:
      "A dedicated data entry virtual assistant for CRM updates, spreadsheets, order and invoice entry, data cleanup and research, on your US or UAE hours.",
    datePublished: "2026-11-27",

    hero: {
      eyebrow: "Remote data entry support",
      title: "Data Entry Virtual Assistant for Small Businesses",
      subtitle:
        "A data entry virtual assistant keeps your records complete and accurate: CRM updates, spreadsheets, orders, invoices, product listings and data cleanup, done inside your own tools. You define the rules; your assistant follows them every day and flags anything unclear instead of guessing.",
      bullets: [
        "CRM, spreadsheet and database entry",
        "Works to your written rules and checklists",
        "US (EST/PST) or UAE business hours",
        "Managed by a US-registered company",
      ],
      image: "/Services/Virtual Assistant.jpg",
      imageAlt: "Data entry virtual assistant updating records on a laptop",
    },

    problem: {
      title: "Signs you need data entry help",
      points: [
        "Leads and contacts sit in inboxes instead of your CRM.",
        "Spreadsheets have duplicates, gaps and different formats.",
        "Orders, invoices or timesheets are typed in late, in batches.",
        "Reports are wrong because the source data is out of date.",
        "Skilled staff spend hours copying data between systems.",
      ],
    },

    solution: {
      title: "Clean data, entered every day",
      paragraphs: [
        "A data entry VA works inside your own systems with their own login: your CRM, Google Sheets or Excel, accounting software, ecommerce platform or project tools. They enter new records, update existing ones and keep fields consistent with the format you set.",
        "The work runs from a written guide: which fields are required, how names and dates are formatted, what counts as a duplicate and what to do with incomplete records. Questions are logged and sent to you rather than guessed, so accuracy stays high.",
        "Data entry often grows into wider admin. The same assistant can add [CRM management](/virtual-assistant), [bookkeeping data entry](/bookkeeping-virtual-assistant) or research as your needs change.",
      ],
      image: "/about-team.webp",
      imageAlt: "Remote team reviewing a spreadsheet",
    },

    features: [
      { icon: "users", title: "CRM updates", text: "New leads, contacts, deals and notes entered and kept current." },
      { icon: "list", title: "Spreadsheets and databases", text: "Records entered, formatted and checked against your rules." },
      { icon: "file", title: "Orders and invoices", text: "Orders, invoices, bills and timesheets typed in from source documents." },
      { icon: "search", title: "Web research", text: "Company, contact and product details gathered and recorded." },
      { icon: "check", title: "Data cleanup", text: "Duplicates merged, gaps filled and formats made consistent." },
      { icon: "shield", title: "Controlled access", text: "Own login, limited permissions and two-factor authentication." },
    ],

    tabs: {
      title: "Data entry tasks by system",
      intro: "Common work, adjusted to your tools and rules.",
      items: [
        {
          label: "CRM",
          heading: "CRM data entry",
          points: [
            "Add new leads and contacts from forms, emails and events",
            "Log calls, emails and meeting notes against records",
            "Update deal stages and next steps",
            "Merge duplicates and fix missing fields",
          ],
        },
        {
          label: "Spreadsheets",
          heading: "Spreadsheets and databases",
          points: [
            "Enter data from PDFs, forms and scanned documents",
            "Standardize names, addresses, dates and phone numbers",
            "Build and update lists and trackers",
            "Check entries against source documents",
          ],
        },
        {
          label: "Finance",
          heading: "Finance and operations",
          points: [
            "Enter invoices, bills and receipts for review",
            "Record orders, refunds and stock movements",
            "Collect and enter timesheets",
            "Prepare data for reports",
          ],
        },
        {
          label: "Ecommerce",
          heading: "Ecommerce and listings",
          points: [
            "Create and update product listings",
            "Update prices, stock levels and product attributes",
            "Enter order and customer details",
            "Check listings for missing images or fields",
          ],
        },
      ],
    },

    steps: [
      { title: "Discovery call", text: "Tell us your systems, data sources, volumes and deadlines." },
      { title: "Rules and access", text: "We write a data entry guide with you and set up a login with the right permissions." },
      { title: "Pilot batch", text: "Your assistant completes a first batch that you check before full volume starts." },
      { title: "Daily routine", text: "Work runs to the guide every day, with questions logged and sent to you." },
    ],

    comparison: {
      title: "Data entry VA vs freelancer vs doing it in-house",
      columns: ["", "Doing it in-house", "Freelance marketplace", "Data entry VA (Alpha Ahead)"],
      rows: [
        ["Who does the work", "Your staff", "A different person per job", "One dedicated assistant"],
        ["Knows your rules and systems", "Yes", "Learns each time", "Yes, from a written guide"],
        ["Hiring and training", "On you", "On you", "Handled by us"],
        ["Hours", "Your hours", "Varies", "Your US or UAE hours"],
        ["Cost level", "Staff time", "Per task, varies", "Quoted per assistant"],
      ],
    },

    audiences: [
      { title: "Sales teams", text: "Keep the CRM complete so pipeline reports are accurate.", image: "/teamwork.webp", imageAlt: "Sales team reviewing a CRM dashboard" },
      { title: "Ecommerce sellers", text: "Listings, prices, stock and orders kept up to date.", image: "/e-comerce.jpeg", imageAlt: "Ecommerce business owner updating products" },
      { title: "Professional firms", text: "Client records, documents and timesheets entered on time.", image: "/finicialservice.jpeg", imageAlt: "Professional services documents on a desk" },
    ],

    faqs: [
      {
        q: "What does a data entry virtual assistant do?",
        a: "A data entry virtual assistant enters and updates information in your systems: CRM records, spreadsheets, databases, orders, invoices, product listings and timesheets. They also clean existing data by removing duplicates, filling gaps and making formats consistent.",
      },
      {
        q: "How do you keep data entry accurate?",
        a: "Accuracy comes from clear rules and checks. We agree a written guide for required fields and formats, start with a pilot batch you review, and the assistant flags anything unclear instead of guessing. Spot checks continue once the routine is running.",
      },
      {
        q: "Is my data safe with a remote assistant?",
        a: "Give your assistant their own login with only the permissions the work needs, turn on two-factor authentication and keep files in your own systems. Access can be removed in one step when the work ends. See how to set this up in our [7-day onboarding plan](/blog/onboard-virtual-assistant-7-days).",
      },
      {
        q: "Which tools can a data entry VA work in?",
        a: "Most common tools: Google Sheets and Excel, CRMs such as HubSpot, Salesforce and Zoho, QuickBooks Online and Xero, ecommerce platforms and project tools. Tell us your stack during the discovery call.",
      },
      {
        q: "Can I hire a data entry VA part-time?",
        a: "Yes. Many clients start with a few hours a day for a backlog or daily updates, then add hours or other admin tasks later.",
      },
      {
        q: "How much does a data entry virtual assistant cost?",
        a: "It depends on hours, volume and the systems involved. [Contact us](/contact) or use the form on this page for a quote, and see our [virtual assistant cost guide](/blog/virtual-assistant-cost) for market benchmarks.",
      },
    ],

    related: [
      ["Virtual assistant for small business", "/virtual-assistant"],
      ["Bookkeeping virtual assistant", "/bookkeeping-virtual-assistant"],
      ["Executive virtual assistant", "/business-assistant"],
      ["Onboard a VA in 7 days", "/blog/onboard-virtual-assistant-7-days"],
      ["Virtual assistant cost", "/blog/virtual-assistant-cost"],
      ["Contact us", "/contact"],
    ],
  },

  // ---------------------------------------------------------------------------
  // Executive virtual assistant (keyword map P1: "executive virtual assistant" 590/mo KD 21;
  // also ranks for "virtual business assistant", so that phrase stays in title, intro and an H2)
  // ---------------------------------------------------------------------------
  {
    slug: "business-assistant",
    servicePath: "/business-assistant",
    serviceName: "Executive Virtual Assistant",
    primaryKeyword: "executive virtual assistant",
    metaTitle: "Executive & Virtual Business Assistant | Alpha Ahead",
    metaDescription:
      "A dedicated executive virtual assistant for founders and executives: inbox, calendar, travel, meeting prep and follow-ups, on US or UAE hours.",
    datePublished: "2026-11-27",

    hero: {
      eyebrow: "Executive and virtual business assistants",
      title: "Executive Virtual Assistant for Founders and Executives",
      subtitle:
        "An executive virtual assistant takes your inbox, calendar, travel, meeting prep and follow-ups off your plate, so you spend your day on decisions instead of admin. Alpha Ahead provides dedicated executive and virtual business assistants who work your US (EST/PST) or UAE hours, managed by our team.",
      bullets: [
        "Inbox, calendar, travel and meeting follow-ups",
        "Investor, board and client meeting prep",
        "US (EST/PST) or UAE business hours",
        "Service agreement with a US-registered company",
      ],
      image: "/aheadteam.jpg",
      imageAlt: "Executive working with a dedicated virtual assistant",
    },

    problem: {
      title: "Signs you need an executive assistant",
      points: [
        "Your inbox decides your day instead of your priorities.",
        "Scheduling one meeting takes five emails across time zones.",
        "Follow-ups from meetings slip because nobody owns them.",
        "Travel, expenses and documents eat your evenings.",
        "Investor or board prep always happens the night before.",
      ],
    },

    solution: {
      title: "Executive assistant or virtual business assistant?",
      paragraphs: [
        "An executive virtual assistant works inside your own Google Workspace or Microsoft 365 with delegated access. They triage your inbox, run your calendar, prepare meetings, chase action items and handle travel and documents, following the rules you set in the first week.",
        "Executive assistant or virtual business assistant? An executive assistant supports one leader's time: inbox, calendar, travel and meetings. A virtual business assistant supports business operations: CRM updates, reports, customer emails and back-office tasks. For a small team, one assistant often covers both.",
        "For general admin across a team, see our [virtual assistant for small business](/virtual-assistant). For finance, see our [bookkeeping virtual assistant](/bookkeeping-virtual-assistant). For a full list of what to hand off, read [30 tasks to delegate to an executive assistant](/blog/executive-assistant-tasks).",
      ],
      image: "/about-team.webp",
      imageAlt: "Executive assistant planning a founder's week",
    },

    features: [
      { icon: "chat", title: "Inbox management", text: "Daily triage, drafts in your voice, follow-up flags and a clean inbox routine." },
      { icon: "calendar", title: "Calendar and scheduling", text: "Meetings across time zones, buffers protected, prep notes in every invite." },
      { icon: "globe", title: "Travel and logistics", text: "Flights, hotels, itineraries and travel documents checklist." },
      { icon: "check", title: "Meetings and follow-ups", text: "Agendas, notes, action items and chasing owners until done." },
      { icon: "chart", title: "Investor and board prep", text: "Numbers collected and decks and updates prepared from your templates." },
      { icon: "users", title: "CRM and business admin", text: "Pipeline updates, reports, document filing and vendor coordination." },
    ],

    tabs: {
      title: "What an executive virtual assistant handles",
      intro: "A typical split of work, shaped around how you operate.",
      items: [
        {
          label: "Inbox",
          heading: "Inbox and communication",
          points: [
            "Sort the inbox daily into act, read, delegate and archive",
            "Draft routine replies for your approval",
            "Chase replies you are waiting on",
            "Send introductions and thank-you emails from templates",
          ],
        },
        {
          label: "Calendar",
          heading: "Calendar and meetings",
          points: [
            "Schedule meetings across time zones",
            "Protect focus time and travel buffers",
            "Prepare agendas and briefing notes",
            "Take notes and send action items after meetings",
          ],
        },
        {
          label: "Travel",
          heading: "Travel and expenses",
          points: [
            "Research and book flights and hotels you approve",
            "Build itineraries with confirmations in one place",
            "Track travel documents and renewal dates",
            "Collect receipts and prepare expense reports",
          ],
        },
        {
          label: "Business",
          heading: "Business support",
          points: [
            "Update the CRM after calls and meetings",
            "Prepare investor updates and board materials from your templates",
            "Track project deadlines and send status summaries",
            "Coordinate vendors, contractors and recruiting interviews",
          ],
        },
      ],
    },

    steps: [
      { title: "Discovery call", text: "We map your week, your tools and the tasks you want off your plate." },
      { title: "Matched assistant", text: "We choose an assistant for your tools, time zone and communication style." },
      { title: "First-week onboarding", text: "Rules written down, access set up safely and daily check-ins for the first week." },
      { title: "Weekly review", text: "Priorities adjusted and new tasks added as trust builds." },
    ],

    comparison: {
      title: "Managed executive assistant vs freelancer vs in-house EA",
      columns: ["", "Freelance marketplace", "In-house EA", "Executive VA (Alpha Ahead)"],
      rows: [
        ["Who you contract with", "An individual", "Your employee", "Alpha Ahead LLC, a US-registered company"],
        ["Hiring and screening", "You do it", "You do it", "Handled by us"],
        ["Day-to-day oversight", "You manage", "You manage", "You direct the work; our team supports quality"],
        ["Hours", "Varies", "Local office hours", "Your US or UAE business hours"],
        ["Cost level", "Hourly, varies widely", "Salary, benefits and office", "Quoted per assistant"],
      ],
    },

    audiences: [
      { title: "Founders and CEOs", text: "Get your inbox, calendar and follow-ups handled so you can lead.", image: "/Services/Virtual Assistant.jpg", imageAlt: "Founder working on a laptop" },
      { title: "Partners at professional firms", text: "Client scheduling, documents and billing admin, handled consistently.", image: "/finicialservice.jpeg", imageAlt: "Professional reviewing client documents" },
      { title: "Busy executives", text: "Meetings, travel and board prep organized ahead of time.", image: "/teamwork.webp", imageAlt: "Executive team meeting" },
    ],

    faqs: [
      {
        q: "What does an executive virtual assistant do?",
        a: "An executive virtual assistant manages a founder's or executive's inbox and calendar, books travel, prepares meetings, takes notes and follows up on action items, and prepares documents for investor updates and board meetings. The role is shaped around how you work.",
      },
      {
        q: "What is the difference between an executive assistant and a virtual business assistant?",
        a: "An executive assistant supports one leader's time: inbox, calendar, travel and meetings. A virtual business assistant supports business operations: CRM updates, reports, customer emails and back-office tasks. We provide both, and one assistant can cover both for a small team.",
      },
      {
        q: "Can an executive assistant help with investor and board meetings?",
        a: "Yes. Your assistant can schedule meetings, collect numbers and documents from your team, prepare decks and agendas from your templates, take notes and track follow-ups. You decide what is shared, and confidential material stays in your own accounts. See our list of [30 tasks to delegate to an executive assistant](/blog/executive-assistant-tasks).",
      },
      {
        q: "What can't an executive virtual assistant do?",
        a: "They do not sign contracts, approve payments or make decisions on your behalf, and they do not do licensed work such as legal or tax advice. They prepare, schedule and follow up; you decide.",
      },
      {
        q: "How is my information kept confidential?",
        a: "Your assistant uses their own logins with delegated access rather than your password, two-factor authentication is switched on, and files stay in your own Google Workspace or Microsoft 365. Access can be removed in one step when the work ends. Confidentiality terms are set out in your service agreement.",
      },
      {
        q: "Can I start with a few hours and scale up later?",
        a: "Yes. You can start with part of the day on inbox and calendar, then add hours or tasks such as travel, CRM or board prep as the routine settles.",
      },
      {
        q: "How much does an executive virtual assistant cost?",
        a: "It depends on hours and the type of work. [Contact us](/contact) or use the form on this page for a quote, and see our [virtual assistant cost guide](/blog/virtual-assistant-cost) for market benchmarks.",
      },
    ],

    related: [
      ["30 executive assistant tasks", "/blog/executive-assistant-tasks"],
      ["Personal virtual assistant", "/personal-assistant"],
      ["Virtual assistant for startups", "/virtual-assistant-for-startups"],
      ["Onboard a VA in 7 days", "/blog/onboard-virtual-assistant-7-days"],
      ["Virtual assistant cost", "/blog/virtual-assistant-cost"],
      ["Contact us", "/contact"],
    ],
  },

  ...INDUSTRY_PAGES,
];
