
export type ExplorePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  highlights: { title: string; text: string }[];
  note?: string;
};

export const explorePages: ExplorePage[] = [
  {
    slug: "about-jattari",
    title: "About Jattari",
    eyebrow: "Explore the town",
    description: "Get to know Jattari, a town in the Aligarh district of Uttar Pradesh.",
    intro: "Jattari is part of the wider Aligarh region, with everyday life shaped by local communities, road travel, nearby settlements and regional markets. Use this guide as a starting point for understanding the area.",
    highlights: [
      { title: "Regional setting", text: "Learn about Jattari's place in Aligarh district and the surrounding region." },
      { title: "Everyday essentials", text: "Explore local services, shopping areas and practical things to consider when visiting." },
      { title: "Getting around", text: "Plan your route in advance and confirm current transport options before travelling." },
    ],
    note: "Information about opening hours, routes and services can change. Confirm important details locally before making plans.",
  },
  {
    slug: "introduction",
    title: "Introduction",
    eyebrow: "Start here",
    description: "A simple introduction to Jattari and what to explore in the area.",
    intro: "Whether you are visiting, researching the area or getting familiar with local facilities, start with the essentials: where you need to go, how you will travel and which services you may need during your visit.",
    highlights: [
      { title: "Know your destination", text: "Save the exact address or landmark before setting out." },
      { title: "Plan your journey", text: "Check your route, travel time and transport availability on the day." },
      { title: "Explore locally", text: "Leave time to discover nearby shops, food options and community spaces." },
    ],
  },
  {
    slug: "history-culture",
    title: "History & Culture",
    eyebrow: "Local identity",
    description: "Explore the local stories, traditions and community life connected with Jattari.",
    intro: "Local culture is best understood through the people who live there, their shared traditions, community gatherings and stories passed between generations. This page is a starting point for learning respectfully about the area's identity.",
    highlights: [
      { title: "Community traditions", text: "Ask local residents about seasonal celebrations and customs." },
      { title: "Regional heritage", text: "Explore the wider Aligarh region for additional historical context." },
      { title: "Listen and learn", text: "Treat personal accounts as valuable perspectives and verify historical claims where needed." },
    ],
    note: "Specific historical dates and local traditions should be verified with reliable local sources before publication.",
  },
  {
    slug: "lifestyle-markets",
    title: "Lifestyle & Markets",
    eyebrow: "Daily life",
    description: "Get an overview of everyday routines, shopping and local services.",
    intro: "Markets and everyday services are an important part of how a town works. If you are new to Jattari, use this guide to plan routine errands and identify the kinds of facilities you may want to locate during your visit.",
    highlights: [
      { title: "Daily shopping", text: "Look for local shops and vendors for everyday essentials." },
      { title: "Useful services", text: "Identify pharmacies, banking facilities and other services relevant to your needs." },
      { title: "Visit at the right time", text: "Confirm opening times and busy periods directly with individual businesses." },
    ],
  },
  {
    slug: "gallery",
    title: "Gallery",
    eyebrow: "See the area",
    description: "A visual collection of Jattari streets, places and local life.",
    intro: "Use the gallery to get a visual feel for Jattari. Add original photographs and videos of local streets, public spaces, markets and surrounding landscapes to help visitors understand the area before they arrive.",
    highlights: [
      { title: "Town views", text: "Show clear, recent images of streets and recognisable public places." },
      { title: "Local life", text: "Capture markets and everyday scenes respectfully, with permission where needed." },
      { title: "Useful captions", text: "Include a place name and capture date when known so visitors have context." },
    ],
    note: "Connect this page to your own gallery images and videos when those assets are ready.",
  },
  {
    slug: "faq",
    title: "FAQ",
    eyebrow: "Helpful answers",
    description: "Quick answers to common questions about exploring Jattari.",
    intro: "Planning a visit is easier when the basic details are clear. These general pointers can help you prepare; confirm time-sensitive information before you travel.",
    highlights: [
      { title: "Where is Jattari?", text: "Jattari is in Aligarh district, Uttar Pradesh, India." },
      { title: "How should I plan travel?", text: "Check a live map and confirm transport options for your specific destination." },
      { title: "Are business hours guaranteed?", text: "No. Contact the business directly to confirm current opening hours and availability." },
    ],
  },
  {
    slug: "contact-feedback",
    title: "Contact & Feedback",
    eyebrow: "Get in touch",
    description: "Share a correction, suggestion or useful local information for this guide.",
    intro: "Help keep this guide useful by sharing corrections, suggestions or details that visitors may need. Be specific about the place or information you are referring to so it can be reviewed accurately.",
    highlights: [
      { title: "Suggest an update", text: "Share the page name and the detail that needs correcting." },
      { title: "Recommend a place", text: "Include the place name, location and any reliable public contact details." },
      { title: "Respect privacy", text: "Do not submit private personal information about yourself or others." },
    ],
    note: "Add your existing contact form or verified contact details to this page if your project already has them.",
  },
  {
    slug: "attractions-places-to-visit",
    title: "Attractions & Places to Visit",
    eyebrow: "Plan an outing",
    description: "Plan a local outing and explore places around Jattari and the wider region.",
    intro: "If you are planning to explore, first identify the places that match your interests and confirm their exact location, access and opening arrangements. Nearby destinations may require additional travel time.",
    highlights: [
      { title: "Check the destination", text: "Verify the exact name and location before starting your journey." },
      { title: "Plan travel time", text: "Allow extra time for traffic, parking and connections." },
      { title: "Confirm access", text: "Check opening hours, entry rules and any local restrictions in advance." },
    ],
    note: "Add only verified attractions and landmarks here; do not assume a place is open or accessible without checking.",
  },
  {
    slug: "food-local-eateries",
    title: "Food & Local Eateries",
    eyebrow: "Eat local",
    description: "Find food options and plan where to stop for a meal in the area.",
    intro: "Local eateries can be a convenient way to take a break while exploring. Before visiting a specific place, check recent reviews where available and confirm current hours, menu availability and payment options.",
    highlights: [
      { title: "Choose what suits you", text: "Check menus and ask about ingredients or dietary needs before ordering." },
      { title: "Check current hours", text: "Opening times can change, especially on holidays or special occasions." },
      { title: "Share useful details", text: "A verified address and current contact number help visitors plan confidently." },
    ],
    note: "Restaurant names and recommendations should be added only after local verification.",
  },
  // {
  //   slug: "local-markets",
  //   title: "Local Markets",
  //   eyebrow: "Shop nearby",
  //   description: "A practical guide to exploring shopping areas and local vendors.",
  //   intro: "Markets are useful places to find everyday goods and learn about local commerce. Plan what you need, check the market location and remember that availability and prices can vary by vendor and day.",
  //   highlights: [
  //     { title: "Make a short list", text: "Keep your essential shopping needs together before visiting." },
  //     { title: "Confirm location", text: "Use a current map or ask locally for the right market entrance or lane." },
  //     { title: "Shop thoughtfully", text: "Compare options and confirm prices before purchasing." },
  //   ],
  // },
  {
    slug: "travel-tips",
    title: "Travel Tips",
    eyebrow: "Travel prepared",
    description: "Practical pointers for planning a smoother visit to Jattari.",
    intro: "A little preparation makes local travel easier. Save your destination, check current route conditions and keep important contact details available before you leave.",
    highlights: [
      { title: "Check the route", text: "Use a current navigation app and verify the final approach to your destination." },
      { title: "Keep essentials ready", text: "Carry a charged phone, water and any documents or items you may need." },
      { title: "Confirm before you go", text: "Call ahead for appointments, opening hours and service availability." },
    ],
  },
];

