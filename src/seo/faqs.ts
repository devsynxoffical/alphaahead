import { Faq } from '../content/types';

// Visible FAQ blocks + FAQPage schema per page path. Filled from keyword research.
export const SERVICE_FAQS: Record<string, Faq[]> = {
  "/": [
    {
      q: "Who is Alpha Ahead LLC?",
      a: "Alpha Ahead LLC is a US-registered virtual assistant agency founded by Shehreyar Khan. We place dedicated executive assistants, virtual assistants, bookkeeping assistants, appointment setters and B2B cold callers with founders, executives and small teams in the US and UAE. Most of our team works from our office in Islamabad, Pakistan, with offices in St. Petersburg, Florida and Dubai.",
    },
    {
      q: "Where are Alpha Ahead's offices located?",
      a: "We have three offices: St. Petersburg, Florida (our US office), Dubai in the UAE, and Islamabad, Pakistan, where most of the team works. You can reach us by phone at +1 424-542-7170 in the US, +971 4 432 3080 in Dubai, or by email at info@alphaaheadllc.com. Full addresses are on our [contact page](/contact).",
    },
    {
      q: "What services does Alpha Ahead offer?",
      a: "Our core services are [executive virtual assistants](/business-assistant), [virtual assistants for small businesses](/virtual-assistant), personal assistants, [bookkeeping virtual assistants](/bookkeeping-virtual-assistant), [appointment setting](/appointment-setting), [B2B cold calling](/cold-calling) and lead generation. US real estate staffing is handled by our real estate division, [Zingo Assist](https://zingoassist.us/). Web, design and IT help is available on request; see our [other services](/other-services) and the full [services page](/services).",
    },
    {
      q: "Do your teams work in US or UAE business hours?",
      a: "Yes, our team works US business hours (Eastern and Pacific) as well as UAE business hours. We agree on the working schedule during onboarding so your assistant or team is online when you and your clients are. If you need a split or extended schedule, tell us and we will plan coverage around it.",
    },
    {
      q: "How does hiring a virtual assistant with Alpha Ahead work?",
      a: "It takes four steps: 1) a free call to list your tasks, tools and hours; 2) we match you with an assistant from our team; 3) onboarding, where we document your processes and set up access; 4) go-live with a short task list that grows as things settle in. You keep a direct line to your assistant and to us throughout.",
    },
    {
      q: "How do you keep my data secure?",
      a: "Your assistant gets individual logins with only the access each task needs, ideally with two-factor authentication, so you can see their activity and remove access at any time. Confidentiality is part of our agreement, and if you need your own NDA signed we handle that before access is shared.",
    },
    {
      q: "Do you work with real estate teams or medical practices?",
      a: "Our sister brands specialize in those fields. US real estate teams are served by [Zingo Assist](https://zingoassist.us/), and medical practices by [Alpha Medi Assist](https://alphamediassist.com/). Alpha Ahead focuses on founders, executives and small businesses in other industries.",
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
      q: "What tasks can a virtual assistant handle?",
      a: "A virtual assistant typically handles inbox and calendar management, CRM updates, data entry, research, document preparation, follow-ups and customer emails. For specialized needs we also provide [bookkeeping assistants](/bookkeeping-virtual-assistant), [executive assistants](/business-assistant) and [B2B cold calling](/cold-calling). We tailor the task list to how your business operates.",
    },
    {
      q: "How fast can I start with a virtual assistant?",
      a: "Start time depends on the role and the skills required. After an initial call to understand your tasks, we match you with a suitable assistant and agree on a start date. We can begin with a smaller scope so you can see how the working relationship fits before expanding. Our [7-day onboarding plan](/blog/onboard-virtual-assistant-7-days) shows how the first week works.",
    },
    {
      q: "Who manages my virtual assistant?",
      a: "You direct the day-to-day work, and Alpha Ahead stays involved as your point of contact for the arrangement. If priorities change, a task needs extra support, or you want to adjust the role, you can raise it with us directly. We handle matching you with the right assistant, so you are not running the hiring process yourself.",
    },
    {
      q: "Do you offer CRM management services?",
      a: "Yes. A virtual assistant can manage your CRM day to day: entering new leads and notes, merging duplicates, updating deal stages and preparing pipeline reports. They work inside your HubSpot, Salesforce, Zoho, GoHighLevel or similar account with their own login.",
    },
    {
      q: "How much does a virtual assistant cost?",
      a: "The cost depends on the hours you need, the type of work and the level of experience required. Part-time, full-time and project-based arrangements are all possible. [Contact us](/contact) with your requirements for a free quote.",
    },
  ],

  "/cold-calling": [
    {
      q: "Is cold calling legal?",
      a: "Yes, cold calling is legal in the US when it follows the rules: calling hours, Do Not Call requirements for consumer numbers, consent rules for autodialed or prerecorded calls to cell phones, honest disclosures and state laws. Our guide [Is cold calling illegal? US rules in 2026](/blog/is-cold-calling-illegal) explains each one. This is not legal advice.",
    },
    {
      q: "How much do cold calling services cost?",
      a: "Cost depends on the number of callers, hours per week, and the type of campaign you run. Short-term pushes and ongoing programs are priced differently. [Contact us](/contact) with your target market and volume for a free quote.",
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
      q: "Which industries do your B2B callers work with?",
      a: "Our callers work with B2B and service businesses such as SaaS companies, marketing agencies, insurance agencies, solar installers and home service companies. Scripts and qualification questions are built around your offer and your ideal customer.",
    },
    {
      q: "Do you cold call for real estate agents and investors?",
      a: "US real estate calling (FSBO, expired listings, motivated sellers) is handled by our real estate division, [Zingo Assist](https://zingoassist.us/). Alpha Ahead's callers focus on B2B and service-business outreach, and on [appointment setting](/appointment-setting) for sales teams.",
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
      q: "What can't a remote personal assistant do?",
      a: "A remote assistant cannot do anything that needs someone physically present, such as running errands in person, picking up packages or meeting a contractor at your home. They also should not sign documents for you or make payments without your approval. What they can do is book, order, schedule and coordinate the people who do those things.",
    },
    {
      q: "How much does a personal assistant cost?",
      a: "Pricing depends on the hours you need and the tasks involved. [Contact us](/contact) with a short description of your needs and we will send a free quote.",
    },
  ],

  "/business-assistant": [
    {
      q: "What does an executive virtual assistant do?",
      a: "An executive virtual assistant manages a founder's or executive's inbox and calendar, books travel, takes meeting notes and follows up on action items, and prepares documents for investor updates and board meetings. They can also support bookkeeping tasks and CRM upkeep. The role is shaped around how you work.",
    },
    {
      q: "Can an executive assistant help with investor and board meetings?",
      a: "Yes. Your assistant can schedule meetings, collect numbers and documents from your team, prepare decks and agendas from your templates, take notes and track follow-ups. You decide what is shared, and confidential material stays in your own accounts. See our list of [30 tasks to delegate to an executive assistant](/blog/executive-assistant-tasks).",
    },
    {
      q: "How is an executive assistant different from a general virtual assistant?",
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
      a: "Yes, technical SEO is part of our service, and our [web development](/other-services#web-development) team can implement fixes that require code changes. We start by auditing your site to identify the most important issues.",
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
      a: "Yes. We build for fast loading, follow secure coding practices and include SEO-friendly structures from the start. For ongoing growth in search, you can pair your new site with our [SEO services](/other-services#seo).",
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

// The six digital/IT pages were merged into /other-services (23 Nov 2026): keep one FAQ per service there.
const MERGED = ['/seo', '/web-development', '/digital-marketing', '/graphic-design', '/video-editing', '/it-support'];
SERVICE_FAQS['/other-services'] = MERGED.map(p => SERVICE_FAQS[p][0]);
MERGED.forEach(p => delete SERVICE_FAQS[p]);
