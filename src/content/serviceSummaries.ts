// "At a glance" answer boxes shown near the top of each service page (AEO).
export interface ServiceSummary {
  /** 40-60 word direct answer to "What is <service>?" */
  definition: string;
  bestFor: string[];
  tasks: string[];
  /** One sentence on working hours / coverage */
  hours: string;
  /** One sentence on how to start */
  howToStart: string;
}

export const SERVICE_SUMMARIES: Record<string, ServiceSummary> = {
  "/virtual-assistant": {
    definition:
      "A dedicated virtual assistant is a remote professional who handles your recurring administrative work, such as email, scheduling, data entry, research and customer queries, as part of your team. Alpha Ahead matches you with a managed virtual assistant who learns your processes and supports you during your US or UAE business hours.",
    bestFor: [
      "Entrepreneurs and startups",
      "Small and medium businesses",
      "Busy executives and professionals",
      "Companies that need ongoing admin help",
    ],
    tasks: [
      "Sort, prioritize and draft email replies",
      "Manage appointments, meetings and time zones",
      "Enter and organize business data",
      "Compile market and competitor research",
      "Answer customer questions and FAQs",
      "Handle filing and record-keeping",
    ],
    hours:
      "Your assistant works your US (EST or PST) or UAE business hours, so tasks move forward during your working day.",
    howToStart:
      "Book a free consultation call to talk through your tasks and get matched with a dedicated assistant.",
  },
  "/cold-calling": {
    definition:
      "Real estate cold calling services are outsourced phone prospecting, where trained callers contact homeowners, buyers or business prospects to find interest and book appointments. Alpha Ahead provides callers for real estate and B2B outreach who work from scripts tailored to your brand, qualify leads against your criteria and log results in your CRM.",
    bestFor: [
      "Real estate agents and teams",
      "Real estate investors and wholesalers",
      "B2B sales teams",
      "Small businesses that need outbound prospecting",
    ],
    tasks: [
      "Call prospect lists from your target market",
      "Write and refine calling scripts",
      "Qualify leads against your criteria",
      "Book appointments on your calendar",
      "Log call notes and outcomes in your CRM",
      "Report call activity and results",
    ],
    hours:
      "Calling runs during US (EST or PST) or UAE business hours to match your market and prospects.",
    howToStart:
      "Book a free consultation call to share your market, lists and goals, and we will outline a calling plan.",
  },
  "/personal-assistant": {
    definition:
      "A remote personal assistant is a dedicated helper who manages an individual's schedule, inbox, travel and personal errands from a distance. Alpha Ahead assigns personal assistants to busy executives and professionals to keep calendars, bookings, research and day-to-day life logistics organized, with confidentiality and part-time, full-time or project-based options.",
    bestFor: [
      "Busy executives and founders",
      "Professionals balancing work and family",
      "Small business owners",
      "Families and individuals who need life admin help",
    ],
    tasks: [
      "Manage your personal and work calendar",
      "Triage your inbox and follow-ups",
      "Plan travel itineraries and bookings",
      "Coordinate events and reservations",
      "Handle personal errands and reminders",
      "Research purchases, providers and options",
    ],
    hours:
      "Your personal assistant works your US (EST or PST) or UAE business hours, keeping your day organized in your own time zone.",
    howToStart:
      "Book a free consultation call to discuss your routine and what you want off your plate.",
  },
  "/business-assistant": {
    definition:
      "A virtual business assistant is a remote back-office specialist who handles the operational tasks that keep a small business running, such as bookkeeping support, data entry, reporting and CRM upkeep. Alpha Ahead provides trained business assistants on scalable part-time or full-time plans, with your business data handled securely and confidentially.",
    bestFor: [
      "Small businesses",
      "Startups that want lean back-office support",
      "Entrepreneurs and solo founders",
      "Companies outsourcing routine operations",
    ],
    tasks: [
      "Support bookkeeping and record-keeping",
      "Enter and clean up business data",
      "Prepare routine business reports",
      "Update and maintain your CRM",
      "Answer customer emails and support requests",
      "Support lead generation research",
    ],
    hours:
      "Your business assistant works your US (EST or PST) or UAE business hours, aligned with your operating day.",
    howToStart:
      "Book a free consultation call to map out the back-office tasks you want to hand off.",
  },
  "/property-management": {
    definition:
      "A virtual property management assistant is a remote assistant who handles the administrative side of rental properties, including tenant communication, rent reminders, maintenance coordination and listing support. Alpha Ahead supplies property management assistants to landlords, investors and management companies on part-time, full-time or project-based terms.",
    bestFor: [
      "Independent landlords",
      "Real estate investors",
      "Property management companies",
      "Short-term rental owners",
    ],
    tasks: [
      "Respond to tenant inquiries and concerns",
      "Send rent reminders and track payments",
      "Log and follow up maintenance requests",
      "Coordinate repairs with your vendors",
      "Organize leases and renewal documents",
      "Advertise vacant units and list rentals",
    ],
    hours:
      "Assistants work US (EST or PST) or UAE business hours, and extended or round-the-clock tenant coverage is available on request.",
    howToStart:
      "Book a free consultation call to review your portfolio and the property tasks you want covered.",
  },
  "/lead-generation": {
    definition:
      "Outsourced lead generation is hiring an external team to find, contact and qualify potential customers for your sales pipeline. Alpha Ahead runs real estate and B2B lead generation through targeted list building, cold calling, email and social outreach, then sets appointments or passes warm leads to your team with ongoing reporting.",
    bestFor: [
      "Real estate agents and investors",
      "B2B sales teams",
      "Startups building a pipeline",
      "Small and medium businesses",
    ],
    tasks: [
      "Build and verify targeted prospect lists",
      "Run calling, email and social outreach",
      "Qualify leads against your criteria",
      "Set appointments and transfer warm leads",
      "Add qualified leads to your CRM",
      "Report on pipeline activity",
    ],
    hours:
      "Outreach runs during US (EST or PST) or UAE business hours, timed to your target market.",
    howToStart:
      "Book a free consultation call to define your ideal lead and choose a package that fits your goals.",
  },
  "/transaction-coordinator": {
    definition:
      "A remote real estate transaction coordinator is an off-site professional who manages the paperwork, deadlines and communication of a property deal from accepted contract to closing. Alpha Ahead provides transaction coordinators who review documents for completeness, track critical dates and keep clients, lenders, inspectors and title companies informed.",
    bestFor: [
      "Real estate agents",
      "Real estate teams",
      "Brokerages that want organized deal files",
      "Real estate investors",
    ],
    tasks: [
      "Open files after contract acceptance",
      "Track contingency and closing deadlines",
      "Review documents for completeness",
      "Coordinate with lenders, inspectors and title",
      "Send regular status updates to clients",
      "Prepare files for broker compliance review",
    ],
    hours:
      "Coordinators work US (EST or PST) or UAE business hours, so deal updates happen during your working day.",
    howToStart:
      "Book a free consultation call to walk through your transaction process and current deal volume.",
  },
  "/seo": {
    definition:
      "SEO services for real estate and local businesses improve how a website and Google Business Profile appear in search results for the terms local customers use. Alpha Ahead provides keyword research, on-page and technical SEO, content, white-hat link building and local SEO, with monthly reports on rankings, traffic and conversions.",
    bestFor: [
      "Realtors and brokerages",
      "Property managers",
      "Local service businesses",
      "Small and medium businesses",
    ],
    tasks: [
      "Research keywords and competitors",
      "Optimize pages, titles and content",
      "Fix technical SEO issues",
      "Improve your Google Business Profile",
      "Build quality backlinks",
      "Send monthly performance reports",
    ],
    hours:
      "Our SEO team works US (EST or PST) and UAE business hours, and you get regular updates through monthly reporting.",
    howToStart:
      "Book a free consultation call to review your website and local search goals.",
  },
  "/web-development": {
    definition:
      "Real estate and business website development is the design and build of a custom, mobile-friendly site that presents your services, listings and contact options and captures leads. Alpha Ahead builds responsive, SEO-ready websites, eCommerce and CMS sites on platforms like WordPress and Shopify, and custom web applications, with ongoing maintenance after launch.",
    bestFor: [
      "Realtors and brokerages",
      "Small and medium businesses",
      "Startups launching online",
      "Companies needing custom web apps",
    ],
    tasks: [
      "Design and build custom websites",
      "Create responsive, mobile-friendly layouts",
      "Set up WordPress or Shopify sites",
      "Add listings, lead forms and integrations",
      "Structure pages for search engines",
      "Provide updates and maintenance after launch",
    ],
    hours:
      "Our developers work US (EST or PST) and UAE business hours, keeping you updated through each project stage.",
    howToStart:
      "Book a free consultation call to discuss your project, features and timeline.",
  },
  "/digital-marketing": {
    definition:
      "Digital marketing for real estate and small businesses is the use of online channels, including search, social media, paid ads, content and email, to attract and convert customers. Alpha Ahead plans and runs these channels for you, from PPC and social media management to email campaigns, with analytics tracking to refine results.",
    bestFor: [
      "Real estate agents and brokerages",
      "Small and medium businesses",
      "eCommerce companies",
      "Agencies needing white-label support",
    ],
    tasks: [
      "Manage social media accounts and content",
      "Run Facebook and Google ad campaigns",
      "Plan and write marketing content",
      "Build email marketing campaigns",
      "Improve website conversion paths",
      "Track and report campaign performance",
    ],
    hours:
      "Our marketing team works US (EST or PST) and UAE business hours, covering campaigns in both markets.",
    howToStart:
      "Book a free consultation call to discuss your goals, audience and channels.",
  },
  "/graphic-design": {
    definition:
      "Real estate graphic design is the creation of marketing visuals such as listing flyers, social media posts, brochures and brand identity for agents and property businesses. Alpha Ahead designs print and digital graphics, logos and branding kits for real estate and small businesses, with revision rounds and print-ready files.",
    bestFor: [
      "Real estate agents and brokerages",
      "Small and medium businesses",
      "Marketing teams and agencies",
      "eCommerce brands",
    ],
    tasks: [
      "Design just-listed and open house flyers",
      "Create social media post graphics",
      "Lay out brochures and print materials",
      "Design logos and brand identity kits",
      "Produce custom illustrations",
      "Deliver print-ready files",
    ],
    hours:
      "Our designers work US (EST or PST) and UAE business hours, handling requests and revisions during your working day.",
    howToStart:
      "Book a free consultation call to share your brand, design needs and examples you like.",
  },
  "/video-editing": {
    definition:
      "Real estate video editing is turning raw property, agent or brand footage into polished listing videos, Reels, YouTube videos and ads. Alpha Ahead provides dedicated editors who cut footage, add music, captions, branded intros and graphics, and deliver files in the formats each platform needs, with review rounds before final delivery.",
    bestFor: [
      "Real estate agents and brokerages",
      "Content creators and influencers",
      "Small businesses and startups",
      "Agencies and eCommerce brands",
    ],
    tasks: [
      "Edit property listing and tour videos",
      "Cut short Reels and social clips",
      "Edit YouTube videos",
      "Add captions, music and branded intros",
      "Edit product and ad videos",
      "Export files for each platform",
    ],
    hours:
      "Our editors work US (EST or PST) and UAE business hours, with review and revisions handled during your working day.",
    howToStart:
      "Book a free consultation call to discuss your footage, video types and posting schedule.",
  },
  "/it-support": {
    definition:
      "Remote IT support and help desk for small businesses is outsourced technical support that resolves user issues, maintains systems and keeps business data secure without an in-house IT department. Alpha Ahead provides help desk support, Microsoft 365 and Google Workspace administration, network, cloud, backup and security support, plus onsite help where needed.",
    bestFor: [
      "Small businesses and offices",
      "Startups without in-house IT",
      "Growing companies moving to the cloud",
      "Teams in the US and UAE",
    ],
    tasks: [
      "Resolve help desk tickets remotely",
      "Manage Microsoft 365 and Google Workspace",
      "Set up devices and user accounts",
      "Monitor and maintain networks and systems",
      "Configure data backup and recovery",
      "Support cloud migration and security",
    ],
    hours:
      "Our IT team works US (EST or PST) and UAE business hours, and 24/7 monitoring and support are available on request.",
    howToStart:
      "Book a free consultation call to review your current setup and support needs.",
  },
};
