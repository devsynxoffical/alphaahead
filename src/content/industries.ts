import { RichLanding } from './richLandingTypes';

// Industry pages (structure plan 24 Nov 2026). Industries confirmed by the owner on 24 Nov:
// insurance agents, startups, coaches, lawyers, accountants. No invented tools, prices or results.

const RELATED_INDUSTRIES = (self: string): [string, string][] =>
  ([
    ['Virtual assistant for insurance agents', '/virtual-assistant-for-insurance-agents'],
    ['Virtual assistant for startups', '/virtual-assistant-for-startups'],
    ['Virtual assistant for coaches', '/virtual-assistant-for-coaches'],
    ['Virtual assistant for lawyers', '/virtual-assistant-for-lawyers'],
    ['Virtual assistant for accountants', '/virtual-assistant-for-accountants'],
  ] as [string, string][]).filter(([, p]) => p !== self).slice(0, 2);

export const INDUSTRY_PAGES: RichLanding[] = [
  // ---------------------------------------------------------------------------
  // Insurance agents (170/mo, KD 0)
  // ---------------------------------------------------------------------------
  {
    slug: 'virtual-assistant-for-insurance-agents',
    industry: true,
    servicePath: '/virtual-assistant',
    serviceName: 'Virtual Assistant for Insurance Agents',
    primaryKeyword: 'virtual assistant for insurance agents',
    metaTitle: 'Virtual Assistant for Insurance Agents | Alpha Ahead',
    metaDescription:
      'Virtual assistants for insurance agents: renewals, certificate requests, CRM and agency system updates, carrier portal admin and client follow-up.',
    datePublished: '2026-11-24',
    hero: {
      eyebrow: 'Insurance agency support',
      title: 'Virtual Assistants for Insurance Agents and Agencies',
      subtitle:
        'A virtual assistant takes the admin off your licensed team: renewal reminders, certificate requests, data entry in your agency management system, carrier portal tasks and client follow-up. Your licensed producers keep quoting, advising and binding; your VA keeps the paperwork moving.',
      bullets: [
        'Admin support for independent agents and agencies',
        'Works inside your CRM, agency system and email',
        'US (EST/PST) business hours',
        'Managed by a US-registered company',
      ],
      image: '/finicialservice.jpeg',
      imageAlt: 'Insurance agency assistant reviewing client policy documents',
    },
    problem: {
      title: 'Where agency time goes',
      points: [
        'Producers spend selling hours on renewals and data entry.',
        'Certificate of insurance requests pile up in the inbox.',
        'Client and policy records drift out of date.',
        'Follow-ups on missing documents and signatures slip.',
        'Carrier portal tasks eat the end of every day.',
      ],
    },
    solution: {
      title: 'A trained assistant for the non-licensed work',
      paragraphs: [
        'An insurance virtual assistant handles the service and admin tasks that do not require a license. They work from your checklists inside the systems you already use, log every action and hand anything that needs a licensed person straight to your team.',
        'Licensing rules matter here. In most states, only licensed producers may solicit, quote, advise on coverage or bind policies. We set each role up so the assistant stays on the admin side of that line; check the rules in your state and with your carriers. This is not legal advice.',
      ],
      image: '/about-team.png',
      imageAlt: 'Remote assistant team supporting an insurance agency',
    },
    features: [
      { icon: 'calendar', title: 'Renewal management', text: 'Renewal lists prepared ahead of time, reminders sent and files ready for your producer.' },
      { icon: 'file', title: 'Certificate requests', text: 'Certificate of insurance requests logged, prepared from your templates and sent for review.' },
      { icon: 'list', title: 'System updates', text: 'Client, policy and activity records kept current in your CRM or agency management system.' },
      { icon: 'chat', title: 'Client follow-up', text: 'Missing documents, signatures and payment reminders chased by email and phone.' },
      { icon: 'search', title: 'Carrier portal admin', text: 'Document downloads, status checks and endorsement paperwork handled in carrier portals you grant access to.' },
      { icon: 'shield', title: 'Licensing limits respected', text: 'No quoting, coverage advice or binding: those stay with your licensed team.' },
    ],
    tabs: {
      title: 'What an insurance VA does',
      intro: 'A typical task list, adjusted to your agency.',
      items: [
        { label: 'Service', heading: 'Client service tasks', points: ['Certificate of insurance requests', 'Policy change paperwork for producer review', 'ID card and document requests', 'Inbox triage and routing'] },
        { label: 'Renewals', heading: 'Renewal workflow', points: ['Renewal lists 60 to 90 days out', 'Reminder emails and calls', 'Collecting updated information', 'Preparing files for the producer'] },
        { label: 'Data', heading: 'Data and records', points: ['New client and policy entry', 'Activity notes and attachments', 'Duplicate and outdated record cleanup', 'Weekly activity reports'] },
        { label: 'Growth', heading: 'Sales support', points: ['Lead follow-up and appointment booking', 'Cross-sell lists from your book', 'Review requests to happy clients', 'Referral thank-you emails'] },
      ],
    },
    steps: [
      { title: 'Discovery call', text: 'List the tasks, systems and hours you need covered.' },
      { title: 'Match and access', text: 'We match an assistant and you grant individual logins with the right permissions.' },
      { title: 'Checklists', text: 'We document your renewal, certificate and service processes as checklists.' },
      { title: 'Go live and grow', text: 'Start with service tasks, then add renewals and sales support.' },
    ],
    comparison: {
      title: 'In-house CSR vs freelancer vs managed VA',
      columns: ['', 'In-house CSR', 'Freelancer', 'Alpha Ahead VA'],
      rows: [
        ['Hiring and training', 'On you', 'On you', 'Handled by us'],
        ['Supervision', 'Your office manager', 'None', 'Supervisor involved'],
        ['Cover when someone is out', 'Depends on team size', 'Rarely', 'Wider team support'],
        ['Licensed tasks (quote, bind)', 'If licensed', 'No', 'No, stays with your producers'],
        ['Contract', 'Local employment', 'Individual', 'US-registered LLC'],
      ],
    },
    audiences: [
      { title: 'Independent agents', text: 'Get admin hours back for selling and client meetings.', image: '/Services/Virtual Assistant.jpg', imageAlt: 'Independent insurance agent working with a remote assistant' },
      { title: 'Growing agencies', text: 'Add service capacity without hiring another in-house CSR.', image: '/teamwork.png', imageAlt: 'Insurance agency team meeting' },
      { title: 'Commercial lines teams', text: 'Keep certificate requests and renewals on schedule.', image: '/finicialservice.jpeg', imageAlt: 'Commercial insurance documents on a desk' },
    ],
    faqs: [
      { q: 'What can a virtual assistant do for an insurance agent?', a: 'A virtual assistant handles non-licensed admin: renewal reminders, certificate of insurance requests, data entry in your CRM or agency system, carrier portal paperwork, document collection and appointment booking. See our list of [25 tasks to delegate to an insurance virtual assistant](/blog/insurance-virtual-assistant-tasks).' },
      { q: 'Can a virtual assistant quote or bind insurance?', a: 'No. In most states only licensed producers may quote, advise on coverage or bind. Your assistant prepares information and paperwork; your licensed team makes those decisions. Check your state rules; this is not legal advice.' },
      { q: 'Which systems can the assistant work in?', a: 'Your assistant works in the CRM, agency management system, email and carrier portals you already use, with their own login. Tell us your systems on the discovery call so we can match the right person.' },
      { q: 'Is client data safe?', a: 'Your assistant uses individual logins with only the access the tasks need, ideally with two-factor authentication, and confidentiality is part of our agreement. You can remove access at any time.' },
      { q: 'How much does an insurance virtual assistant cost?', a: 'It depends on hours and tasks. [Contact us](/contact) or use the form on this page for a quote. Our [virtual assistant cost guide](/blog/virtual-assistant-cost) explains what drives pricing.' },
    ],
    related: [
      ['Virtual assistant services', '/virtual-assistant'],
      ['25 insurance VA tasks', '/blog/insurance-virtual-assistant-tasks'],
      ...RELATED_INDUSTRIES('/virtual-assistant-for-insurance-agents'),
      ['Virtual assistant cost', '/blog/virtual-assistant-cost'],
      ['All industries', '/industries'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Startups (170/mo, KD 5)
  // ---------------------------------------------------------------------------
  {
    slug: 'virtual-assistant-for-startups',
    industry: true,
    servicePath: '/virtual-assistant',
    serviceName: 'Virtual Assistant for Startups',
    primaryKeyword: 'virtual assistant for startups',
    metaTitle: 'Virtual Assistant for Startups and Entrepreneurs',
    metaDescription:
      'Virtual assistants for startups, founders and entrepreneurs: inbox and calendar, investor update prep, CRM and pipeline, recruiting and back-office tasks.',
    datePublished: '2026-11-24',
    hero: {
      eyebrow: 'Support for early-stage teams',
      title: 'Virtual Assistants for Startups and Founders',
      subtitle:
        'A startup virtual assistant takes the operational work off the founders: inbox and calendar, investor update prep, CRM upkeep, recruiting coordination and back-office tasks. You get a dedicated assistant without adding a full-time hire before you are ready.',
      bullets: [
        'Dedicated assistant for founders and small teams',
        'Works in your tools: email, Slack, CRM, docs',
        'Part-time to start, scale as you grow',
        'Managed by a US-registered company',
      ],
      image: '/Services/Software Development.jpg',
      imageAlt: 'Startup founders working with a remote assistant',
    },
    problem: {
      title: 'Founder time is the scarcest resource',
      points: [
        'Founders spend evenings on scheduling and email.',
        'Investor updates and data rooms get done last minute.',
        'CRM and pipeline data are always behind.',
        'Recruiting logistics slow down hiring.',
        'Admin and invoices pile up between sprints.',
      ],
    },
    solution: {
      title: 'An operator in your corner, not another tool',
      paragraphs: [
        'A virtual assistant joins your Slack and works your hours. They own the recurring admin so founders can focus on product, customers and fundraising, and they document every process so the work survives as the team grows.',
        'Start with a few hours a day on the founder inbox and calendar, then add pipeline, recruiting or bookkeeping support as the company grows. Our [executive virtual assistant](/business-assistant) service covers deeper founder support.',
      ],
      image: '/aheadteam.jpg',
      imageAlt: 'Alpha Ahead team supporting a startup',
    },
    features: [
      { icon: 'calendar', title: 'Founder inbox and calendar', text: 'Triage, scheduling across time zones and meeting prep.' },
      { icon: 'chart', title: 'Investor update prep', text: 'Metrics collected from your team, drafts prepared from your template, data room kept tidy.' },
      { icon: 'target', title: 'CRM and pipeline', text: 'Leads, deals and notes kept current; follow-ups scheduled.' },
      { icon: 'users', title: 'Recruiting coordination', text: 'Interview scheduling, candidate emails and pipeline tracking.' },
      { icon: 'dollar', title: 'Back-office admin', text: 'Invoices, receipts and expense reports prepared for your accountant.' },
      { icon: 'rocket', title: 'Scales with you', text: 'Add hours or a second assistant as the workload grows.' },
    ],
    tabs: {
      title: 'What a startup VA does',
      intro: 'Pick a starting point and grow from there.',
      items: [
        { label: 'Founder', heading: 'Founder support', points: ['Inbox triage and drafts', 'Calendar and travel', 'Meeting notes and follow-ups', 'Board and investor meeting logistics'] },
        { label: 'Growth', heading: 'Sales and growth', points: ['CRM and pipeline updates', 'Lead research and lists', 'Demo booking and reminders', 'Newsletter and social scheduling'] },
        { label: 'People', heading: 'Recruiting and people ops', points: ['Interview scheduling', 'Candidate communication', 'Onboarding checklists', 'Tool and account setup requests'] },
        { label: 'Back office', heading: 'Finance and admin', points: ['Invoice and receipt collection', 'Expense report preparation', 'Vendor and subscription tracking', 'Document filing'] },
      ],
    },
    steps: [
      { title: 'Discovery call', text: 'Tell us what eats founder time and which tools you use.' },
      { title: 'Match', text: 'We match an assistant who fits your stack and hours.' },
      { title: 'First-week plan', text: 'We start with five recurring tasks and document them. See our [7-day onboarding plan](/blog/onboard-virtual-assistant-7-days).' },
      { title: 'Scale', text: 'Add tasks, hours or assistants as the company grows.' },
    ],
    comparison: {
      title: 'First hire options for a startup',
      columns: ['', 'Full-time ops hire', 'Freelancer', 'Alpha Ahead VA'],
      rows: [
        ['Commitment', 'Full-time salary', 'Per task', 'Part-time or full-time'],
        ['Hiring time', 'Weeks to months', 'Days', 'Matching and onboarding'],
        ['Cover when someone is out', 'None', 'Rarely', 'Wider team support'],
        ['Process documentation', 'Depends on person', 'Rarely', 'Built into onboarding'],
        ['Contract', 'Employment', 'Individual', 'US-registered LLC'],
      ],
    },
    audiences: [
      { title: 'Pre-seed and seed founders', text: 'Get admin off your plate before your first ops hire.', image: '/Services/Virtual Assistant.jpg', imageAlt: 'Founder working on a laptop' },
      { title: 'SaaS teams', text: 'Keep CRM, demos and onboarding admin moving.', image: '/Services/Software Development.jpg', imageAlt: 'SaaS team at work' },
      { title: 'Remote-first teams', text: 'An assistant who works async across time zones.', image: '/teamwork.png', imageAlt: 'Remote team collaborating' },
    ],
    faqs: [
      { q: 'What does a virtual assistant do for a startup?', a: 'A startup VA manages founder inbox and calendar, prepares investor updates from your template, keeps the CRM current, coordinates recruiting and handles back-office admin such as invoices and expense reports.' },
      { q: 'When should a startup hire a virtual assistant?', a: 'When founders spend several hours a week on recurring admin that someone else could do from a checklist. Starting part-time is common.' },
      { q: 'Can a VA handle confidential investor information?', a: 'Yes, with the right setup: individual logins, limited permissions, two-factor authentication and confidentiality terms in our agreement. You decide what is shared.' },
      { q: 'Can I start part-time?', a: 'Yes. Many startups begin with a few hours a day and add hours or a second assistant as the team grows.' },
      { q: 'Do you work with solo entrepreneurs?', a: 'Yes. Solo entrepreneurs and one-person businesses use a virtual assistant the same way founders do: inbox, calendar, customer emails, CRM and admin, starting with a few hours a day. See our [30 executive assistant tasks](/blog/executive-assistant-tasks) for ideas on what to hand over first.' },
      { q: 'How much does a startup virtual assistant cost?', a: 'It depends on hours and tasks. [Contact us](/contact) or use the form on this page for a quote, and see our [virtual assistant cost guide](/blog/virtual-assistant-cost).' },
    ],
    related: [
      ['Virtual assistant services', '/virtual-assistant'],
      ['Executive virtual assistant', '/business-assistant'],
      ['30 executive assistant tasks', '/blog/executive-assistant-tasks'],
      ...RELATED_INDUSTRIES('/virtual-assistant-for-startups'),
      ['Virtual assistant cost', '/blog/virtual-assistant-cost'],
      ['All industries', '/industries'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Coaches (140/mo, KD 1)
  // ---------------------------------------------------------------------------
  {
    slug: 'virtual-assistant-for-coaches',
    industry: true,
    servicePath: '/virtual-assistant',
    serviceName: 'Virtual Assistant for Coaches',
    primaryKeyword: 'virtual assistant for coaches',
    metaTitle: 'Virtual Assistant for Coaches and Consultants | Alpha Ahead',
    metaDescription:
      'Virtual assistants for coaches: client scheduling, onboarding, inbox, course and community admin, invoice reminders and social scheduling.',
    datePublished: '2026-11-24',
    hero: {
      eyebrow: 'Support for coaching businesses',
      title: 'Virtual Assistants for Coaches and Consultants',
      subtitle:
        'A coaching virtual assistant runs the business side for you: booking and rescheduling sessions, client onboarding, inbox, course and community admin, invoice reminders and social scheduling. You spend your time coaching, not on admin.',
      bullets: [
        'Dedicated assistant for coaches and consultants',
        'Works in your scheduling, email and course tools',
        'US (EST/PST) or UAE business hours',
        'Managed by a US-registered company',
      ],
      image: '/Services/Online Education (E-Learning).jpg',
      imageAlt: 'Coach running an online session with admin handled by an assistant',
    },
    problem: {
      title: 'Admin that crowds out coaching',
      points: [
        'Back-and-forth emails to book and reschedule sessions.',
        'New clients wait for onboarding forms and welcome packs.',
        'Course and community questions pile up.',
        'Unpaid invoices need chasing.',
        'Social posts and newsletters go out irregularly.',
      ],
    },
    solution: {
      title: 'A behind-the-scenes assistant for your practice',
      paragraphs: [
        'Your assistant manages your calendar and client communication from your templates, keeps the client journey running from enquiry to follow-up, and keeps your programs and community organized.',
        'It works for one-to-one coaches, group programs and course creators. Start with scheduling and onboarding, then add marketing support such as social scheduling and newsletter preparation.',
      ],
      image: '/about-team.png',
      imageAlt: 'Remote assistant supporting a coaching business',
    },
    features: [
      { icon: 'calendar', title: 'Session scheduling', text: 'Bookings, reschedules, reminders and time zone handling.' },
      { icon: 'check', title: 'Client onboarding', text: 'Welcome emails, intake forms, agreements sent for signature and files set up.' },
      { icon: 'chat', title: 'Inbox and client questions', text: 'Routine questions answered from your FAQ; coaching questions passed to you.' },
      { icon: 'list', title: 'Course and community admin', text: 'Member access, content uploads and community moderation tasks.' },
      { icon: 'dollar', title: 'Invoices and reminders', text: 'Invoices sent from your billing tool and overdue reminders followed up.' },
      { icon: 'star', title: 'Content and social', text: 'Posts scheduled, newsletters prepared and testimonials requested.' },
    ],
    tabs: {
      title: 'What a coaching VA does',
      intro: 'From first enquiry to repeat client.',
      items: [
        { label: 'Enquiries', heading: 'New enquiries', points: ['Discovery call booking', 'Follow-up emails', 'CRM or spreadsheet updates', 'Proposal and agreement sending'] },
        { label: 'Clients', heading: 'Client journey', points: ['Onboarding packs and intake forms', 'Session reminders', 'Homework and resource emails', 'Renewal and check-in reminders'] },
        { label: 'Programs', heading: 'Programs and courses', points: ['Member access and support', 'Content uploads', 'Community moderation', 'Event and webinar logistics'] },
        { label: 'Marketing', heading: 'Marketing support', points: ['Social post scheduling', 'Newsletter preparation', 'Podcast or video guest outreach', 'Testimonial requests'] },
      ],
    },
    steps: [
      { title: 'Discovery call', text: 'Tell us how your practice runs and which tools you use.' },
      { title: 'Match', text: 'We match an assistant who suits your client style and hours.' },
      { title: 'Templates', text: 'We turn your emails and processes into templates and checklists.' },
      { title: 'Go live', text: 'Start with scheduling and onboarding, then add more.' },
    ],
    comparison: {
      title: 'Doing it yourself vs freelancer vs managed VA',
      columns: ['', 'Doing it yourself', 'Freelancer', 'Alpha Ahead VA'],
      rows: [
        ['Your hours on admin', 'High', 'Lower', 'Lower'],
        ['Vetting and training', 'None', 'On you', 'Handled by us'],
        ['Cover when someone is out', 'You', 'Rarely', 'Wider team support'],
        ['Consistency of client experience', 'Varies with your load', 'Varies', 'Checklists and templates'],
        ['Contract', 'n/a', 'Individual', 'US-registered LLC'],
      ],
    },
    audiences: [
      { title: 'One-to-one coaches', text: 'Life, career, business and executive coaches.', image: '/Services/Virtual Assistant.jpg', imageAlt: 'Coach on a video call' },
      { title: 'Group programs and courses', text: 'Member admin, community and launches.', image: '/Services/Online Education (E-Learning).jpg', imageAlt: 'Online course on a laptop' },
      { title: 'Consultants', text: 'Proposals, scheduling and client follow-up.', image: '/teamwork.png', imageAlt: 'Consultant meeting with a client' },
    ],
    faqs: [
      { q: 'What does a virtual assistant do for a coach?', a: 'A coaching VA books and reschedules sessions, onboards new clients, answers routine questions from your FAQ, manages course and community admin, sends invoices and reminders, and schedules social posts and newsletters.' },
      { q: 'Will the assistant talk to my clients?', a: 'Yes, for logistics and routine questions, using your templates and tone. Anything about coaching itself is passed to you.' },
      { q: 'Can the assistant manage my course or membership platform?', a: 'Yes. Your assistant works in the course, community and scheduling tools you use, with their own login, handling access, uploads and member questions.' },
      { q: 'Can I start with a few hours a week?', a: 'Yes. Most coaches start part-time with scheduling and onboarding and add marketing tasks later.' },
      { q: 'How much does a virtual assistant for coaches cost?', a: 'It depends on hours and tasks. [Contact us](/contact) or use the form on this page for a quote, and see our [virtual assistant cost guide](/blog/virtual-assistant-cost).' },
    ],
    related: [
      ['Virtual assistant services', '/virtual-assistant'],
      ['Personal virtual assistant', '/personal-assistant'],
      ...RELATED_INDUSTRIES('/virtual-assistant-for-coaches'),
      ['Virtual assistant cost', '/blog/virtual-assistant-cost'],
      ['All industries', '/industries'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Lawyers (320/mo, KD 22)
  // ---------------------------------------------------------------------------
  {
    slug: 'virtual-assistant-for-lawyers',
    industry: true,
    servicePath: '/virtual-assistant',
    serviceName: 'Virtual Assistant for Lawyers',
    primaryKeyword: 'virtual assistant for lawyers',
    metaTitle: 'Virtual Assistant for Lawyers and Law Firms | Alpha Ahead',
    metaDescription:
      'Virtual assistants for lawyers and small law firms: intake scheduling, calendar and deadline tracking, document formatting and billing support.',
    datePublished: '2026-11-24',
    hero: {
      eyebrow: 'Admin support for law practices',
      title: 'Virtual Assistants for Lawyers and Small Law Firms',
      subtitle:
        'A legal virtual assistant handles the administrative side of your practice: intake scheduling, calendars and deadline reminders, document formatting, billing support and client follow-up. Your attorneys keep all legal work and supervision; your assistant keeps the office running.',
      bullets: [
        'Admin support for solo attorneys and small firms',
        'Works in your practice management software and email',
        'Supervised by your attorneys, with confidentiality terms',
        'Managed by a US-registered company',
      ],
      image: '/about-team.png',
      imageAlt: 'Remote assistant supporting a law office',
    },
    problem: {
      title: 'Admin that takes billable hours',
      points: [
        'Attorneys answer scheduling emails between hearings.',
        'Intake calls and forms wait days for follow-up.',
        'Calendars and reminders depend on one person.',
        'Time entries and invoices are finished late.',
        'Documents need formatting and filing before they go out.',
      ],
    },
    solution: {
      title: 'Non-legal support, supervised by your firm',
      paragraphs: [
        'A legal virtual assistant does administrative work only. They do not give legal advice, sign filings or practice law. Your attorneys assign and supervise the work, as professional conduct rules require for nonlawyer assistants ([ABA Model Rule 5.3](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_5_3_responsibilities_regarding_nonlawyer_assistant/)).',
        'Confidentiality is built into the setup: individual logins with limited access, two-factor authentication, confidentiality terms in our agreement and your own policies. The ABA has addressed outsourcing support services in Formal Opinion 08-451; check your state bar guidance before you start. This is not legal advice.',
      ],
      image: '/aheadteam.jpg',
      imageAlt: 'Alpha Ahead team members at work',
    },
    features: [
      { icon: 'phone', title: 'Intake scheduling', text: 'Intake forms followed up and consultations booked into your calendar.' },
      { icon: 'calendar', title: 'Calendar and reminders', text: 'Court dates and deadlines your attorneys set are entered and reminders sent.' },
      { icon: 'file', title: 'Document formatting', text: 'Templates filled from attorney instructions, formatting, proofreading and filing.' },
      { icon: 'dollar', title: 'Billing support', text: 'Time entry reminders, invoice preparation and payment follow-up.' },
      { icon: 'chat', title: 'Client communication', text: 'Status update emails and document requests from your templates.' },
      { icon: 'shield', title: 'Confidential by design', text: 'Limited access, individual logins and confidentiality terms.' },
    ],
    tabs: {
      title: 'What a legal VA does',
      intro: 'Administrative tasks only; legal work stays with your attorneys.',
      items: [
        { label: 'Intake', heading: 'Intake and scheduling', points: ['Intake form follow-up', 'Consultation booking', 'Conflict check requests routed to your team', 'Engagement letters sent for signature'] },
        { label: 'Calendar', heading: 'Calendar and deadlines', points: ['Entering dates set by attorneys', 'Reminder emails', 'Meeting and call scheduling', 'Weekly calendar summaries'] },
        { label: 'Documents', heading: 'Documents and files', points: ['Template-based drafts for attorney review', 'Formatting and proofreading', 'Scanning, naming and filing', 'Document request emails to clients'] },
        { label: 'Billing', heading: 'Billing and admin', points: ['Time entry reminders', 'Invoice preparation for review', 'Payment follow-up', 'Vendor and subscription admin'] },
      ],
    },
    steps: [
      { title: 'Discovery call', text: 'Tell us your practice area, software and the tasks to hand over.' },
      { title: 'Confidentiality setup', text: 'Agreement, access levels and your policies agreed before any access is shared.' },
      { title: 'Checklists', text: 'Your intake, calendar and billing processes documented as checklists.' },
      { title: 'Go live under supervision', text: 'Your attorneys assign and review work from day one.' },
    ],
    comparison: {
      title: 'In-house legal assistant vs freelancer vs managed VA',
      columns: ['', 'In-house assistant', 'Freelancer', 'Alpha Ahead VA'],
      rows: [
        ['Hiring and training', 'On you', 'On you', 'Handled by us'],
        ['Supervision', 'Your attorneys', 'Your attorneys', 'Your attorneys, plus our supervisor'],
        ['Cover when someone is out', 'Depends on staff', 'Rarely', 'Wider team support'],
        ['Legal work', 'No (nonlawyer)', 'No', 'No, administrative only'],
        ['Contract', 'Local employment', 'Individual', 'US-registered LLC'],
      ],
    },
    audiences: [
      { title: 'Solo attorneys', text: 'Get intake, calendar and billing admin off your desk.', image: '/Services/Virtual Assistant.jpg', imageAlt: 'Solo attorney working at a desk' },
      { title: 'Small law firms', text: 'Add admin capacity without another in-house hire.', image: '/teamwork.png', imageAlt: 'Small law firm team meeting' },
      { title: 'Busy practice areas', text: 'High-volume intake and scheduling, handled consistently.', image: '/about-team.png', imageAlt: 'Legal support team at work' },
    ],
    faqs: [
      { q: 'What can a virtual assistant do for a lawyer?', a: 'Administrative work: intake follow-up and scheduling, entering court dates and deadlines your attorneys set, document formatting and filing, billing support and client status emails.' },
      { q: 'Can a virtual assistant give legal advice or draft legal documents on their own?', a: 'No. A VA is a nonlawyer and does not practice law. They can prepare template-based drafts and formatting under attorney instruction, and your attorneys review and are responsible for all legal work.' },
      { q: 'How is client confidentiality protected?', a: 'Individual logins with limited permissions, two-factor authentication, confidentiality terms in our agreement and your firm policies. Check your state bar guidance on outsourcing before you start.' },
      { q: 'Can the assistant work in our practice management software?', a: 'Yes. Your assistant works in the practice management, document and billing tools you already use, with their own login.' },
      { q: 'How much does a legal virtual assistant cost?', a: 'It depends on hours and tasks. [Contact us](/contact) or use the form on this page for a quote, and see our [virtual assistant cost guide](/blog/virtual-assistant-cost).' },
    ],
    related: [
      ['Virtual assistant services', '/virtual-assistant'],
      ['Executive virtual assistant', '/business-assistant'],
      ...RELATED_INDUSTRIES('/virtual-assistant-for-lawyers'),
      ['Virtual assistant cost', '/blog/virtual-assistant-cost'],
      ['All industries', '/industries'],
    ],
  },

  // ---------------------------------------------------------------------------
  // Accountants (110/mo, KD 18)
  // ---------------------------------------------------------------------------
  {
    slug: 'virtual-assistant-for-accountants',
    industry: true,
    servicePath: '/bookkeeping-virtual-assistant',
    serviceName: 'Virtual Assistant for Accountants',
    primaryKeyword: 'virtual assistant for accountants',
    metaTitle: 'Virtual Assistant for Accountants and CPA Firms',
    metaDescription:
      'Virtual assistants for accountants and CPA firms: client document collection, bookkeeping data entry, scheduling, engagement admin and tax season support.',
    datePublished: '2026-11-24',
    hero: {
      eyebrow: 'Support for accounting firms',
      title: 'Virtual Assistants for Accountants and CPA Firms',
      subtitle:
        'A virtual assistant for an accounting firm collects client documents, enters bookkeeping data, schedules meetings, sends engagement letters and keeps tax season moving. Your accountants keep review, advice and sign-off; your assistant handles the volume work around it.',
      bullets: [
        'Admin and bookkeeping support for firms of any size',
        'Works in QuickBooks Online, Xero and your practice tools',
        'Extra hands for tax season',
        'Managed by a US-registered company',
      ],
      image: '/finicialservice.jpeg',
      imageAlt: 'Assistant organizing client financial documents for an accounting firm',
    },
    problem: {
      title: 'Where firm capacity goes',
      points: [
        'Chasing clients for missing documents, again.',
        'Staff accountants spend hours on data entry.',
        'Scheduling and engagement letters fall behind in busy season.',
        'Client portals and folders get disorganized.',
        'Reviewers wait on prep work.',
      ],
    },
    solution: {
      title: 'Volume work off your accountants',
      paragraphs: [
        'Your assistant handles document collection, organization and data entry so your team spends its time on review and advice. For day-to-day client bookkeeping, our [bookkeeping virtual assistants](/bookkeeping-virtual-assistant) work in QuickBooks Online or Xero under your review.',
        'Roles are kept clear: the assistant does not sign returns, give tax advice or take responsibility for filings. Anyone who prepares or assists in preparing federal tax returns for pay needs an IRS PTIN ([IRS PTIN requirements](https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers)); we agree with you which tasks each assistant may do. This is not tax or legal advice.',
      ],
      image: '/about-team.png',
      imageAlt: 'Remote team supporting an accounting practice',
    },
    features: [
      { icon: 'file', title: 'Document collection', text: 'Organizer and document request emails, reminders and portal checks.' },
      { icon: 'list', title: 'Bookkeeping data entry', text: 'Transactions, receipts and reconciliations prepared for review.' },
      { icon: 'calendar', title: 'Scheduling', text: 'Client meetings and review calls booked and confirmed.' },
      { icon: 'check', title: 'Engagement admin', text: 'Engagement letters sent, signatures tracked and files set up.' },
      { icon: 'clock', title: 'Tax season support', text: 'Extra hours on intake, organization and status updates in busy season.' },
      { icon: 'shield', title: 'Secure access', text: 'Individual logins, limited permissions and two-factor authentication.' },
    ],
    tabs: {
      title: 'What an accounting VA does',
      intro: 'Support around your review and advisory work.',
      items: [
        { label: 'Clients', heading: 'Client admin', points: ['Document request and reminder emails', 'Portal and folder organization', 'Engagement letters and signatures', 'Status update emails'] },
        { label: 'Bookkeeping', heading: 'Bookkeeping support', points: ['Transaction categorization for review', 'Receipt matching', 'Reconciliation prep', 'Month-end checklists'] },
        { label: 'Tax season', heading: 'Busy season support', points: ['Intake tracking', 'Missing item follow-up', 'Scheduling review calls', 'Workflow status updates'] },
        { label: 'Firm admin', heading: 'Firm operations', points: ['Calendar management', 'Billing and payment reminders', 'CRM and practice tool updates', 'Marketing emails and newsletters'] },
      ],
    },
    steps: [
      { title: 'Discovery call', text: 'Tell us your services, software and where capacity is tight.' },
      { title: 'Access setup', text: 'Individual logins with the permissions each task needs.' },
      { title: 'Checklists', text: 'Your document, bookkeeping and engagement processes documented.' },
      { title: 'Go live and scale for busy season', text: 'Start steady, add hours when tax season starts.' },
    ],
    comparison: {
      title: 'Seasonal hire vs freelancer vs managed VA',
      columns: ['', 'Seasonal in-house hire', 'Freelancer', 'Alpha Ahead VA'],
      rows: [
        ['Hiring and training each season', 'On you', 'On you', 'Handled by us'],
        ['Same person next season', 'Not guaranteed', 'Not guaranteed', 'Dedicated assistant year-round'],
        ['Cover when someone is out', 'Depends on staff', 'Rarely', 'Wider team support'],
        ['Signing returns or advice', 'If credentialed', 'No', 'No, stays with your accountants'],
        ['Contract', 'Employment', 'Individual', 'US-registered LLC'],
      ],
    },
    audiences: [
      { title: 'Solo CPAs and EAs', text: 'Get document chasing and admin off your desk.', image: '/Services/Virtual Assistant.jpg', imageAlt: 'Accountant working at a laptop' },
      { title: 'Small accounting firms', text: 'Add capacity without another full-time hire.', image: '/teamwork.png', imageAlt: 'Accounting firm team meeting' },
      { title: 'Bookkeeping practices', text: 'Data entry and month-end prep for review.', image: '/finicialservice.jpeg', imageAlt: 'Financial reports on a desk' },
    ],
    faqs: [
      { q: 'What can a virtual assistant do for an accounting firm?', a: 'Client document collection and reminders, bookkeeping data entry and reconciliation prep for review, scheduling, engagement letters, portal organization and tax season status updates.' },
      { q: 'Can a virtual assistant prepare tax returns?', a: 'Return preparation and sign-off stay with your credentialed team. Anyone who prepares or assists in preparing federal returns for pay needs an IRS PTIN, so we agree with you exactly which tasks the assistant handles.' },
      { q: 'Which software can the assistant use?', a: 'QuickBooks Online and Xero for bookkeeping, plus the practice management, portal and email tools you already use, each with their own login.' },
      { q: 'Can we add hours for tax season?', a: 'Yes. Many firms keep a steady base of hours and add more during busy season.' },
      { q: 'How much does a virtual assistant for accountants cost?', a: 'It depends on hours and tasks. [Contact us](/contact) or use the form on this page for a quote, and see our [virtual assistant cost guide](/blog/virtual-assistant-cost).' },
    ],
    related: [
      ['Bookkeeping virtual assistant', '/bookkeeping-virtual-assistant'],
      ['Bookkeeping VA checklist', '/blog/bookkeeping-virtual-assistant-checklist'],
      ...RELATED_INDUSTRIES('/virtual-assistant-for-accountants'),
      ['Virtual assistant cost', '/blog/virtual-assistant-cost'],
      ['All industries', '/industries'],
    ],
  },
];
