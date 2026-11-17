import { Faq } from '../content/types';

// Visible FAQ blocks + FAQPage schema per page path. Filled from keyword research.
export const SERVICE_FAQS: Record<string, Faq[]> = {
  "/": [
    {
      q: "Who is Alpha Ahead LLC?",
      a: "Alpha Ahead LLC is a US-registered outsourcing and digital agency that provides remote staff and digital services to businesses. We supply virtual assistants, cold callers, transaction coordinators and property management support, alongside SEO, web development, digital marketing, design, video editing and IT support. Most of our team works from our office in Islamabad, Pakistan, with offices in Florida and Dubai.",
    },
    {
      q: "Where are Alpha Ahead's offices located?",
      a: "We have three offices: St. Petersburg, Florida (our US office), Dubai in the UAE, and Islamabad, Pakistan, where most of the team works. You can reach us by phone at +1 424-542-7170 in the US, +971 4 432 3080 in Dubai, or by email at info@alphaaheadllc.com. Full addresses are on our [contact page](/contact).",
    },
    {
      q: "What services does Alpha Ahead offer?",
      a: "We offer two broad groups of services: outsourced staff and digital services. Outsourced staff includes virtual assistants, personal and business assistants, cold calling, lead generation, real estate transaction coordination and virtual property management. Digital services include SEO, web development, digital marketing, graphic design, video editing and IT support; you can see everything on our [services page](/services).",
    },
    {
      q: "Do your teams work in US or UAE business hours?",
      a: "Yes, our team works US business hours (Eastern and Pacific) as well as UAE business hours. We agree on the working schedule during onboarding so your assistant or team is online when you and your clients are. If you need a split or extended schedule, tell us and we will plan coverage around it.",
    },
    {
      q: "How does onboarding work?",
      a: "Onboarding starts with a call to understand your tasks, tools, hours and goals. We then match you with team members who fit the role, share access and processes, and begin with a defined set of tasks that grows as things settle in. You keep a direct line to your team and to us throughout.",
    },
    {
      q: "How do I get started with Alpha Ahead?",
      a: "The easiest way to start is to [contact us](/contact) with a short description of what you need. Pricing depends on the service, scope and hours, so we will discuss your requirements and send you a free quote. There is no obligation to proceed after the initial conversation.",
    },
  ],

  "/virtual-assistant": [
    {
      q: "Is my data safe with an overseas virtual assistant?",
      a: "We treat confidentiality as a core part of the service, and access to your systems is limited to what each task needs. We recommend giving your assistant their own logins rather than sharing yours, and using a password manager so access can be removed at any time. If you need an NDA or want us to follow your own security policies, we can discuss that during onboarding.",
    },
    {
      q: "Can a virtual assistant work US or UAE business hours?",
      a: "Yes. Our team works US (EST and PST) and UAE business hours, so your assistant can be online at the same time as you. We confirm the schedule during onboarding and plan around time zone differences for calls and deadlines.",
    },
    {
      q: "What tasks can a real estate virtual assistant handle?",
      a: "A real estate virtual assistant typically handles admin work such as calendar and inbox management, CRM updates, listing input, follow-ups, document organization and client communication. For specialized needs we also offer [transaction coordination](/transaction-coordinator), [cold calling](/cold-calling) and [virtual property management](/property-management). We tailor the task list to how your business operates.",
    },
    {
      q: "How fast can I start with a virtual assistant?",
      a: "Start time depends on the role and the skills required. After an initial call to understand your tasks, we match you with a suitable assistant and agree on a start date. We can begin with a smaller scope so you can see how the working relationship fits before expanding.",
    },
    {
      q: "Who manages my virtual assistant?",
      a: "You direct the day-to-day work, and Alpha Ahead stays involved as your point of contact for the arrangement. If priorities change, a task needs extra support, or you want to adjust the role, you can raise it with us directly. We handle matching you with the right assistant, so you are not running the hiring process yourself.",
    },
    {
      q: "How much does a virtual assistant cost?",
      a: "The cost depends on the hours you need, the type of work and the level of experience required. Part-time, full-time and project-based arrangements are all possible. [Contact us](/contact) with your requirements for a free quote.",
    },
  ],

  "/cold-calling": [
    {
      q: "Is real estate cold calling legal?",
      a: "Cold calling is generally legal in the US when it follows the rules, including scrubbing numbers against the National Do Not Call Registry and applicable state lists and respecting calling-hour restrictions. Rules differ by state and by how calls are placed, so you should confirm your own obligations with a qualified advisor. We explain the basics in our guide on [whether real estate cold calling is legal](/blog/is-real-estate-cold-calling-legal); this is not legal advice.",
    },
    {
      q: "How much do cold calling services cost?",
      a: "Cost depends on the number of callers, hours per week, and the type of campaign you run. Short-term pushes and ongoing programs are priced differently. For an overview of what drives cost, see our [real estate cold calling cost guide](/blog/real-estate-cold-calling-cost), or [contact us](/contact) for a free quote.",
    },
    {
      q: "Who provides the calling lists and the dialer?",
      a: "This is agreed during setup. Many clients supply their own lists and dialer accounts so the data stays in their systems, and our callers work inside them. If you need help sourcing or preparing data, we can discuss that as part of the campaign.",
    },
    {
      q: "How many calls does a cold caller make per day?",
      a: "There is no fixed number, because call volume depends on the dialer used, list quality, how long conversations run, and how much qualification you want on each call. A campaign focused on careful qualification will have fewer dials than one focused on reaching as many contacts as possible. We set expectations with you once the campaign details are clear.",
    },
    {
      q: "Do you write the scripts, and are calls recorded?",
      a: "Yes, we develop and refine scripts with you to match your brand voice, target audience and qualification criteria. Whether calls are recorded depends on your dialer and on the consent laws that apply to the states you call. Leads and call notes are logged in your CRM so you can review results.",
    },
    {
      q: "Do you cold call for wholesalers, FSBOs and expired listings?",
      a: "Yes. Our real estate cold calling supports agents, investors and wholesalers reaching motivated sellers and buyers, including FSBO and expired listing campaigns. Scripts and qualification questions are adapted to each list type. We also provide B2B cold calling for companies outside real estate.",
    },
  ],

  "/personal-assistant": [
    {
      q: "What does a personal assistant from Alpha Ahead do?",
      a: "Our personal assistants handle tasks such as inbox management, scheduling and calendar management, travel planning and coordination, reminders and general admin. The aim is to take routine personal and professional tasks off your plate. We tailor the task list to your routine during onboarding.",
    },
    {
      q: "Is the personal assistant virtual or in person?",
      a: "Our personal assistant services are mainly delivered remotely by our team. Remote support covers most scheduling, communication, research and travel tasks. Tell us what you need during your first call and we will confirm what can be handled.",
    },
    {
      q: "Can I hire a personal assistant part-time?",
      a: "Yes. You can choose part-time, full-time or project-based support depending on your workload and budget. You can also adjust hours later as your needs change.",
    },
    {
      q: "How do you keep my personal information confidential?",
      a: "Confidentiality is central to the service, and your assistant only accesses what is needed for the tasks you assign. We recommend separate logins and a password manager so access can be removed at any time. If you need an NDA, we can discuss it during onboarding.",
    },
    {
      q: "What hours will my personal assistant be available?",
      a: "Our team works US (EST and PST) and UAE business hours. We agree on your assistant's schedule at the start so they are available when you need them most.",
    },
    {
      q: "How much does a personal assistant cost?",
      a: "Pricing depends on the hours you need and the tasks involved. [Contact us](/contact) with a short description of your needs and we will send a free quote.",
    },
  ],

  "/business-assistant": [
    {
      q: "What does a virtual business assistant do?",
      a: "A virtual business assistant handles routine tasks such as scheduling, inbox management, customer support and data entry. Our business assistants can also support bookkeeping tasks, lead generation and CRM management. The role is shaped around your business processes.",
    },
    {
      q: "How is a business assistant different from a general virtual assistant?",
      a: "A business assistant is focused on business operations rather than mainly personal or admin tasks. That often means more work in your CRM, sales pipeline, customer support queue or bookkeeping records. If your needs are broader or more personal, our [virtual assistant](/virtual-assistant) or [personal assistant](/personal-assistant) services may fit better.",
    },
    {
      q: "Can I start with a few hours and scale up later?",
      a: "Yes. Our packages are flexible, so you can start small and add hours or services as your business grows. You can also adjust the task list as priorities change.",
    },
    {
      q: "Which tools can a business assistant work in?",
      a: "Your assistant works in the tools your business already uses. We can work in tools such as Google Workspace, Microsoft 365, Slack and common CRMs. Let us know your stack during onboarding so we can plan access.",
    },
    {
      q: "How is my business data protected?",
      a: "Your data is handled confidentially and access is limited to what each task requires. We recommend giving your assistant individual logins rather than shared credentials so you stay in control. If you need an NDA or have internal policies to follow, we can discuss them during onboarding.",
    },
    {
      q: "How much does a virtual business assistant cost?",
      a: "Cost depends on the number of hours and the type of work involved. [Contact us](/contact) to describe your needs and get a free quote.",
    },
  ],

  "/property-management": [
    {
      q: "What does a property management virtual assistant do?",
      a: "A property management virtual assistant handles the admin side of rentals: tenant communication, lease and document organization, rent reminders and payment tracking, maintenance request coordination with vendors, and listing and marketing support for vacancies. They support the owner or manager rather than replacing them. See our list of [property management virtual assistant tasks](/blog/property-management-virtual-assistant-tasks) for more detail.",
    },
    {
      q: "Can your VA work in AppFolio, Buildium or Rent Manager?",
      a: "Yes, our assistants work inside your existing systems. We can work in tools such as AppFolio, Buildium and Rent Manager, as well as email, phone and messaging platforms. You give your assistant their own user account so you control their access.",
    },
    {
      q: "Can a virtual assistant handle after-hours tenant calls?",
      a: "We can plan coverage that includes tenant communication by phone, email and messaging outside normal hours, depending on the schedule you choose. Emergencies are logged and escalated following the instructions and vendor contacts you set. The exact hours covered are agreed during onboarding and affect pricing.",
    },
    {
      q: "Can a property management VA collect rent or screen tenants?",
      a: "A VA can assist with these tasks but does not make the decisions. They can send rent reminders, track payments and gather applicant information and documents, while approvals, screening decisions and handling funds stay with the owner or licensed property manager. This keeps responsibility where your local rules require it.",
    },
    {
      q: "Should I hire a part-time or full-time property management VA?",
      a: "It depends on your portfolio size and how much tenant and vendor contact you have. Smaller portfolios often start part-time or with occasional project help, while managers with larger portfolios may need full-time coverage. We offer flexible options, so you can start with fewer hours and increase later.",
    },
    {
      q: "Who uses virtual property management services?",
      a: "Our clients include independent landlords, real estate investors, property management companies, realtors and brokers offering rental management, and short-term rental owners. Each setup is tailored to the type of property and workload. [Contact us](/contact) for a free quote based on your portfolio.",
    },
  ],

  "/lead-generation": [
    {
      q: "How do you generate leads?",
      a: "We use a multi-channel approach that can include email campaigns, cold calling, social media outreach and research against your target criteria. Leads are qualified against the profile you define, and we can set appointments or provide warm transfers to your team. The mix of channels is chosen based on your industry and audience.",
    },
    {
      q: "Are the leads exclusive to my business?",
      a: "Leads from a campaign we run for you are delivered to you, and how the data is handled is agreed during setup. If you provide your own lists, that data stays yours and is used for your campaign. Ask us about exclusivity when we scope your campaign.",
    },
    {
      q: "Do you offer skip tracing?",
      a: "Skip tracing can be discussed as part of a real estate lead generation campaign if it fits your process. Typically our team works with the skip tracing tool or data source you already use. Tell us about your workflow and we will confirm what can be included.",
    },
    {
      q: "How long does it take to start getting appointments?",
      a: "It depends on your market, offer, data quality and the channels used. Campaigns need time to set up scripts, lists and qualification criteria, and results build as messaging is refined. We share progress through regular reporting so you can see how the pipeline is developing.",
    },
    {
      q: "How are leads delivered to my CRM?",
      a: "Qualified leads and notes can be entered directly into your CRM so your team can follow up immediately. We can work in tools such as HubSpot, Salesforce, Follow Up Boss or Podio, depending on what you use. Reporting keeps you informed about activity and results.",
    },
    {
      q: "Which businesses do you generate leads for?",
      a: "We work with real estate agencies and investors, SaaS companies and service-based businesses, among others. Our [cold calling](/cold-calling) team often supports lead generation campaigns that need phone outreach.",
    },
  ],

  "/transaction-coordinator": [
    {
      q: "What does a remote transaction coordinator do?",
      a: "A remote transaction coordinator manages the administrative side of a deal from contract to close. That includes reviewing documents for completeness, tracking deadlines, and keeping clients, lenders, inspectors and title companies informed. The agent stays responsible for advising clients and negotiating.",
    },
    {
      q: "How much does a transaction coordinator cost per file?",
      a: "Cost depends on your transaction volume, whether you represent buyers, sellers or both, and the level of support you need. Our [transaction coordinator cost guide](/blog/transaction-coordinator-cost) explains what typically drives pricing. [Contact us](/contact) for a free quote based on your volume.",
    },
    {
      q: "Can you handle contracts in my state?",
      a: "Our coordinators work with the forms, timelines and processes you use in your state. During onboarding we review your checklists and your brokerage's requirements so the file process matches your local practice. Share your state and forms with us so we can confirm the setup.",
    },
    {
      q: "Does a transaction coordinator need a real estate license?",
      a: "Requirements vary by state, and some states restrict certain activities to licensed individuals. The tasks our coordinators handle are administrative, such as document tracking, scheduling and communication, while licensed activities stay with the agent. Check your state's rules and your broker's policy; this is not legal advice.",
    },
    {
      q: "Which transaction management software do you use?",
      a: "We work in your brokerage's existing systems. We can work in tools such as Dotloop, SkySlope and DocuSign, along with email and your CRM. You give your coordinator their own access so files stay in your platform.",
    },
    {
      q: "Should I hire an in-house or outsourced transaction coordinator?",
      a: "An outsourced coordinator lets you scale support with your deal volume without adding payroll, while an in-house hire may suit very high or highly specialized volume. We compare both options in our guide on [in-house vs outsourced transaction coordinators](/blog/in-house-vs-outsourced-transaction-coordinator).",
    },
  ],

  "/seo": [
    {
      q: "What is included in your SEO services?",
      a: "Our SEO services cover keyword research, on-page SEO, technical SEO, content optimization, link building and local SEO. Each campaign is built around your business goals, market and competitors. We use white-hat methods only.",
    },
    {
      q: "How long does SEO take to show results?",
      a: "SEO is a long-term effort, and timelines depend on your site's current condition, competition and the keywords you target. Technical fixes and on-page improvements can be made early, while rankings and traffic usually build over months. We do not guarantee specific rankings, as no one controls search engine results.",
    },
    {
      q: "How will I know if SEO is working?",
      a: "We provide monthly performance reports that cover rankings, traffic and conversions in a clear format. We review results with you regularly and adjust the strategy based on performance, algorithm updates and market changes.",
    },
    {
      q: "Do you offer local SEO?",
      a: "Yes. Local SEO helps businesses appear for searches in their geographic area, such as service businesses and firms with local clients. It typically includes optimizing your business profile, local pages and citations.",
    },
    {
      q: "Can you fix SEO issues on my website?",
      a: "Yes, technical SEO is part of our service, and our [web development](/web-development) team can implement fixes that require code changes. We start by auditing your site to identify the most important issues.",
    },
    {
      q: "How much do your SEO services cost?",
      a: "Pricing depends on your goals, competition and the scope of work, and our campaigns scale from startups to larger businesses. [Contact us](/contact) for a free quote.",
    },
  ],

  "/web-development": [
    {
      q: "What kinds of websites do you build?",
      a: "We build custom business websites, eCommerce stores and web applications. Every site is responsive, mobile-friendly and built with an SEO-ready structure. We work with platforms such as WordPress, Shopify and Magento, as well as custom builds.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Timelines depend on the number of pages, features, integrations and how quickly content and feedback are provided. A simple business site moves faster than an eCommerce store or custom web application. We share a timeline with you once the scope is agreed.",
    },
    {
      q: "What is the web development process?",
      a: "We start by understanding your business, audience and goals, then move to design, development, testing and launch. You review the work at key stages so the final site reflects your brand. After launch we can continue with updates and maintenance.",
    },
    {
      q: "Will I own my website?",
      a: "Ownership of the site and its content is agreed in the project terms, and in normal practice the finished website belongs to the client. We recommend that domains and hosting accounts are registered in your name so you stay in control. Ask us during scoping if you have specific requirements.",
    },
    {
      q: "Is the website optimized for speed, security and SEO?",
      a: "Yes. We build for fast loading, follow secure coding practices and include SEO-friendly structures from the start. For ongoing growth in search, you can pair your new site with our [SEO services](/seo).",
    },
    {
      q: "How much does a website cost?",
      a: "Cost depends on the scope, features and platform. [Contact us](/contact) with your requirements and we will provide a free quote.",
    },
  ],

  "/digital-marketing": [
    {
      q: "What digital marketing services do you offer?",
      a: "Our digital marketing services include SEO, pay-per-click advertising, social media marketing and management, content marketing, email marketing, conversion rate optimization and analytics. We can run a single channel or a combined strategy.",
    },
    {
      q: "Who do you provide digital marketing for?",
      a: "We work with small and medium businesses, startups, eCommerce companies and enterprises. We also provide white-label support for agencies that need extra capacity.",
    },
    {
      q: "How do you report on campaign performance?",
      a: "We track campaign performance through analytics and provide clear reports on results. Reports are used to refine strategy over time, so you can see what is working and where budget is going.",
    },
    {
      q: "How soon will I see results from digital marketing?",
      a: "It depends on the channel. Paid advertising can start bringing traffic soon after launch, while SEO and content marketing usually build over a longer period. We set expectations for each channel during planning and do not promise specific numbers.",
    },
    {
      q: "Do I keep ownership of my ad and social media accounts?",
      a: "We recommend that ad accounts, social profiles and analytics properties are owned by your business, with our team given access to manage them. That way your data and history stay with you.",
    },
    {
      q: "How much do digital marketing services cost?",
      a: "Pricing depends on the channels, scope and management time required; ad spend is separate from management. [Contact us](/contact) for a free quote.",
    },
  ],

  "/graphic-design": [
    {
      q: "What graphic design services do you offer?",
      a: "We design logos, business cards and corporate identity kits, social media graphics, web banners, illustrations, and print materials such as brochures, flyers and packaging. Everything is designed around your brand's personality and goals.",
    },
    {
      q: "How does your unlimited graphic design service work?",
      a: "Our unlimited graphic design option lets you submit design requests on an ongoing basis and ask for revisions until the design is right. It suits startups, small businesses and marketing teams with regular design needs. The details of each plan are agreed with you up front.",
    },
    {
      q: "How many revisions do I get?",
      a: "We work with you on revisions until the design meets your needs. The revision process is agreed at the start of a project or plan so expectations are clear on both sides.",
    },
    {
      q: "What is the turnaround time for designs?",
      a: "Turnaround depends on the complexity of the design and how many requests are in progress. Simple social graphics move faster than a full brand identity. We agree timelines when you submit each request.",
    },
    {
      q: "Will I own the final designs and source files?",
      a: "Ownership and file delivery are set out in the project terms, and we provide print-ready and digital files for your use. Tell us which file formats you need, such as source files for your own team, when we scope the work.",
    },
    {
      q: "How much does graphic design cost?",
      a: "Pricing depends on whether you need a single project or ongoing design support. [Contact us](/contact) for a free quote.",
    },
  ],

  "/video-editing": [
    {
      q: "What types of videos do you edit?",
      a: "We edit social media reels and short-form videos, promotional videos, corporate presentations, and content for creators, agencies and eCommerce brands. Edits are tailored to your brand style and the platform where the video will be published.",
    },
    {
      q: "How does unlimited video editing work?",
      a: "Our unlimited video editing option is designed for clients with high-volume content needs, such as creators and brands posting regularly. You send footage on an ongoing basis and we edit to your agreed style and schedule. Plan details are agreed with you up front.",
    },
    {
      q: "What is the turnaround time for video edits?",
      a: "Turnaround depends on video length, complexity and how much footage is involved. Short social clips are quicker than long-form or corporate edits. We agree delivery timelines with you before work begins and work to meet them.",
    },
    {
      q: "How do I send footage and request revisions?",
      a: "Footage is usually shared through a cloud storage link, and revisions are requested with clear notes or timestamps. We can work in tools such as Google Drive, Dropbox and Frame.io, depending on what you prefer.",
    },
    {
      q: "Do I own the edited videos?",
      a: "Ownership is set out in the project terms, and you receive the finished videos for your own use. Footage and brand assets you provide remain yours.",
    },
    {
      q: "How much does video editing cost?",
      a: "Pricing depends on volume, video length and editing complexity. [Contact us](/contact) for a free quote.",
    },
  ],

  "/it-support": [
    {
      q: "What IT support services do you provide?",
      a: "We provide helpdesk support, proactive monitoring and maintenance, network and infrastructure management, cybersecurity solutions, and cloud support including migration and integration. Services are tailored to your business size and setup.",
    },
    {
      q: "Do you offer remote or onsite IT support?",
      a: "Most issues are handled through remote support, which allows quick response without a site visit. Onsite assistance depends on your location and needs, so discuss it with us when scoping your support.",
    },
    {
      q: "Can you help us move to the cloud?",
      a: "Yes. We help businesses plan and carry out cloud migration, integrate services, and optimize their cloud setup afterward. We can work in platforms such as Microsoft 365, Google Workspace, AWS and Azure.",
    },
    {
      q: "How do you help protect against cyber threats?",
      a: "Our cybersecurity work includes security measures tailored to your business, network protection against unauthorized access, and monitoring to detect threats early. We review your current setup to identify the most important gaps first.",
    },
    {
      q: "What size businesses do you support?",
      a: "We support small businesses, startups and larger enterprises. Support can scale as your team, systems and needs grow.",
    },
    {
      q: "How much does IT support cost?",
      a: "Pricing depends on the number of users and devices, the services included and the level of coverage you need. [Contact us](/contact) for a free quote.",
    },
  ],
};
