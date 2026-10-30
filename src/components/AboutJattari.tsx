"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const areaHighlights = [
  {
    number: "01",
    title: "Location & Geography",
    icon: "⌖",
    description:
      "Understand where Jattari is located, its surrounding settlements and its place within Aligarh district, Uttar Pradesh.",
    detail: "LOCATION",
  },
  {
    number: "02",
    title: "Road Connectivity",
    icon: "↗",
    description:
      "Learn about the Aligarh–Palwal Road, local routes and connections between nearby towns.",
    detail: "MOVEMENT",
  },
  {
    number: "03",
    title: "Everyday Lifestyle",
    icon: "⌂",
    description:
      "Explore local markets, daily shopping, community spaces and essential services.",
    detail: "DAILY LIFE",
  },
  {
    number: "04",
    title: "Education & Healthcare",
    icon: "+",
    description:
      "Research educational institutions, healthcare providers and essential services in Jattari and nearby areas.",
    detail: "FACILITIES",
  },
  {
    number: "05",
    title: "Local Businesses",
    icon: "◇",
    description:
      "Discover shops, service providers and businesses that support residents and visitors.",
    detail: "LOCAL ECONOMY",
  },
  {
    number: "06",
    title: "Property Information",
    icon: "▤",
    description:
      "Research plots, residential locations, access roads, documents and property options carefully.",
    detail: "PROPERTY",
  },
];

const exploreTopics = [
  {
    title: "Location & Surroundings",
    eyebrow: "01 / THE PLACE",
    description:
      "Get familiar with Jattari's geographical setting and nearby localities.",
    detail:
      "Start with the bigger picture. Understand Jattari's position in Aligarh district, its nearby settlements and the regional context that shapes the town.",
    icon: "⌖",
  },
  {
    title: "Connectivity & Travel",
    eyebrow: "02 / GETTING AROUND",
    description:
      "Research road routes, transport options and travel details before planning a journey.",
    detail:
      "Explore the Aligarh–Palwal Road and research the routes and transport options that connect Jattari with surrounding destinations. Always verify current travel conditions.",
    icon: "↗",
  },
  {
    title: "Markets & Daily Needs",
    eyebrow: "03 / EVERYDAY ESSENTIALS",
    description:
      "Explore shopping areas, essential services and facilities useful for everyday living.",
    detail:
      "Learn about the local shopping environment, daily essentials and service providers that contribute to everyday life in and around Jattari.",
    icon: "◇",
  },
  {
    title: "Community & Lifestyle",
    eyebrow: "04 / LOCAL CHARACTER",
    description:
      "Learn about the local environment, neighbourhood character and everyday life.",
    detail:
      "Discover the neighbourhood through its everyday surroundings, community spaces, local activities and the character of the town.",
    icon: "⌂",
  },
  {
    title: "Education & Healthcare",
    eyebrow: "05 / IMPORTANT FACILITIES",
    description:
      "Identify educational institutions and healthcare facilities, and verify their current details.",
    detail:
      "Research schools, colleges, clinics, hospitals and other essential services. Confirm their current addresses, timings and facilities before visiting.",
    icon: "+",
  },
  {
    title: "Property Research",
    eyebrow: "06 / MAKE INFORMED DECISIONS",
    description:
      "Compare locations, check ownership records and approvals, and assess suitability.",
    detail:
      "Before considering a property, examine its location, ownership documents, land-use permissions, road access, utilities and total costs.",
    icon: "▤",
  },
];

const propertyChecks = [
  {
    number: "01",
    title: "Ownership & Documents",
    description:
      "Verify ownership, title records, relevant documents and any restrictions with qualified independent help.",
  },
  {
    number: "02",
    title: "Approvals & Land Use",
    description:
      "Check applicable approvals, land-use permissions and rules with the relevant authority.",
  },
  {
    number: "03",
    title: "Access & Essential Services",
    description:
      "Visit the location and assess road access, water, electricity, drainage and nearby everyday facilities.",
  },
  {
    number: "04",
    title: "Total Cost & Independent Advice",
    description:
      "Understand the complete cost, compare options and consult an independent property lawyer before signing or paying.",
  },
];

const faqs = [
  {
    question: "Where is Jattari located?",
    answer:
      "Jattari is located in Khair tehsil of Aligarh district, Uttar Pradesh, India. The town is associated with the Aligarh–Palwal Road.",
  },
  {
    question: "What can I explore in Jattari?",
    answer:
      "You can research the town's location, road connectivity, local markets, educational institutions, healthcare services, businesses and property-related information.",
  },
  {
    question: "How can I learn about connectivity in Jattari?",
    answer:
      "Start by identifying your destination and checking current road routes, available transport options and traffic conditions. Confirm travel times using an up-to-date map before travelling.",
  },
  {
    question: "Can I find schools and healthcare facilities in Jattari?",
    answer:
      "You can research educational institutions and healthcare providers in Jattari and nearby areas. Check the latest address, contact information, opening hours and available services before visiting.",
  },
  {
    question: "What should I check before purchasing property in Jattari?",
    answer:
      "Verify ownership records, applicable land-use permissions, approvals, access, utilities, total costs and restrictions. Consult an independent property lawyer before paying or signing an agreement.",
  },
  {
    question: "Does Jattari Explorer sell properties?",
    answer:
      "Jattari Explorer provides area information and research guidance. Property availability, pricing, approvals and sales services should be confirmed separately with the relevant property owner or authorised representative.",
  },
];

const places = [
  {
    id: "jattari",
    name: "Jattari",
    category: "MAIN DESTINATION",
    x: "50%",
    y: "50%",
    image: "/images/cities/jattari.jpg",
    description:
      "Jattari is the main destination of this regional guide, located in Khair tehsil of Aligarh district, Uttar Pradesh.",
  },
  {
    id: "khair",
    name: "Khair",
    category: "NEARBY TOWN",
    x: "20%",
    y: "43%",
    image: "/images/cities/khair.jpg",
    description:
      "Khair is the tehsil town associated with Jattari. Explore the local area and nearby facilities.",
  },
  {
    id: "tappal",
    name: "Tappal",
    category: "NEARBY TOWN",
    x: "38%",
    y: "15%",
    image: "/images/cities/tappal.jpg",
    description:
      "Tappal is a nearby town connected with the Aligarh–Palwal regional road network and the Yamuna Expressway area.",
  },
  {
    id: "jewar",
    name: "Jewar",
    category: "NEARBY TOWN",
    x: "67%",
    y: "19%",
    image: "/images/cities/jewar.jpg",
    description:
      "Jewar is a nearby town in Gautam Buddha Nagar district. It is an important regional reference when exploring the area around Jattari.",
  },
  {
    id: "palwal",
    name: "Palwal",
    category: "REGIONAL CITY",
    x: "82%",
    y: "42%",
    image: "/images/cities/palwal.jpg",
    description:
      "Palwal is a regional city in Haryana and a reference point along the Aligarh–Palwal road corridor.",
  },
  {
    id: "aligarh",
    name: "Aligarh",
    category: "REGIONAL CITY",
    x: "19%",
    y: "76%",
    image: "/images/cities/aligarh.jpg",
    description:
      "Aligarh is the district headquarters of Aligarh district, where Jattari is located.",
  },
  {
    id: "greater-noida",
    name: "Greater Noida",
    category: "REGIONAL CITY",
    x: "83%",
    y: "72%",
    image: "/images/cities/greater-noida.jpg",
    description:
      "Greater Noida is a major regional urban centre in Gautam Buddha Nagar district.",
  },
  {
    id: "mathura",
    name: "Mathura",
    category: "REGIONAL CITY",
    x: "37%",
    y: "91%",
    image: "/images/cities/mathura.jpg",
    description:
      "Mathura is a regional city in Uttar Pradesh and another destination to consider when exploring the wider region.",
  },
  {
    id: "bulandshahr",
    name: "Bulandshahr",
    category: "REGIONAL CITY",
    x: "66%",
    y: "91%",
    image: "/images/cities/bulandshahr.jpg",
    description:
      "Bulandshahr is a regional city in western Uttar Pradesh, included here as a wider regional reference.",
  },
];

const sectionLabel =
  "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#B9741C]";

const sectionHeading =
  "text-3xl font-extrabold leading-tight tracking-tight text-[#172B26] sm:text-4xl lg:text-5xl";

const bodyText =
  "text-sm leading-7 text-[#64736D] sm:text-base sm:leading-8";

const revealClasses =
  "about-reveal-section translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className={sectionLabel}>
        <span className="h-1.5 w-1.5 rounded-full bg-[#D58A28]" />
        {label}
      </span>
      <h2 className={`mt-4 ${sectionHeading}`}>{title}</h2>
      <p className={`mt-4 ${bodyText}`}>{description}</p>
    </div>
  );
}

export default function AboutJattari() {
  const [activeTravel, setActiveTravel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPlace, setSelectedPlace] = useState("jattari");
  const [activeTopic, setActiveTopic] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const currentPlace =
    places.find((place) => place.id === selectedPlace) ?? places[0];

  const currentTopic = exploreTopics[activeTopic];

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".about-reveal-section"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.remove("translate-y-8", "opacity-0");
        section.classList.add("translate-y-0", "opacity-100");
      });
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-8", "opacity-0");
            entry.target.classList.add("translate-y-0", "opacity-100");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    sections.forEach((section, index) => {
      section.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
      observer.observe(section);
    });

    setRevealed(true);

    return () => observer.disconnect();
  }, []);

  const travelOptions = [
    {
      number: "01",
      title: "Road Routes",
      description:
        "Check the latest road route between your starting point and destination.",
      image: "/images/connectivity/road-routes.jpg",
      imageAlt: "Road and highway connectivity",
      caption: "EXPLORE ROAD CONNECTIONS",
    },
    {
      number: "02",
      title: "Local Transport",
      description:
        "Verify availability, timings and fares of transport services before travelling.",
      image: "/images/connectivity/local-transport.jpg",
      imageAlt: "Local public transport",
      caption: "GETTING AROUND JATTARI",
    },
    {
      number: "03",
      title: "Route Planning",
      description:
        "Compare routes and confirm the location of your destination before departure.",
      image: "/images/connectivity/route-planning.jpg",
      imageAlt: "Map and route planning",
      caption: "PLAN YOUR NEXT JOURNEY",
    },
    {
      number: "04",
      title: "Travel Timing",
      description:
        "Allow for traffic, weather and changing road conditions when planning a journey.",
      image: "/images/connectivity/travel-timing.jpg",
      imageAlt: "Travel and traffic timing",
      caption: "MAKE TIME FOR THE JOURNEY",
    },
  ];

  const selectedTravel = travelOptions[activeTravel];

  return (
    <main className="overflow-x-clip bg-[#FFF9F0] text-[#172B26]">
      {/* 01 — ABOUT HERO */}
      <section className={`${revealClasses} relative overflow-hidden bg-[#FFF9F0] text-[#06483D]`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[500px] w-[500px] rounded-full border border-[#D58A28]/20 transition-transform duration-1000 hover:scale-110"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-12 h-[360px] w-[360px] rounded-full border border-[#06483D]/10"
        />

        <div className="container-site relative py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative w-full py-10 sm:py-14">
              <div className="flex items-center justify-between border-y border-[#06483D]/20 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B9741C]">
                  Jattari Explorer / Field Notes
                </p>
                <p className="text-[10px] font-semibold tracking-widest text-[#89958E]">
                  LOCATION PROFILE — 001
                </p>
              </div>

              <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_100px_0.85fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#89958E]">
                    A closer look at
                  </p>

                  <h1 className="mt-4 text-5xl font-bold tracking-[-0.055em] text-[#06483D] transition-all duration-500 hover:tracking-[-0.025em] sm:text-6xl">
                    Jattari<span className="text-[#D58A28]">.</span>
                  </h1>

                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B9741C]">
                    Uttar Pradesh, India
                  </p>

                  <div className="mt-8 max-w-md">
                    <h2 className="text-2xl font-semibold leading-snug text-[#06483D] sm:text-3xl">
                      Discover a place through the details that define it.
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-[#64736D]">
                      Explore Jattari through its geographical setting,
                      regional connectivity, everyday facilities, local
                      surroundings and property-related information.
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-6">
                    <Link
                      href="/#explore"
                      className="group inline-flex items-center gap-3 border-b-2 border-[#D58A28] pb-2 text-sm font-bold text-[#06483D] transition-all duration-300 hover:gap-5 hover:text-[#B9741C]"
                    >
                      Explore Jattari
                      <span className="text-[#D58A28] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </Link>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 pb-2 text-sm font-semibold text-[#7B8981] transition-all duration-300 hover:gap-3 hover:text-[#B9741C]"
                    >
                      Contact us <span>→</span>
                    </Link>
                  </div>
                </div>

                <div className="hidden h-[340px] flex-col items-center justify-center border-x border-[#06483D]/15 lg:flex">
                  <span className="text-[76px] font-extralight leading-none tracking-[-0.1em] text-[#D58A28] transition-transform duration-500 hover:scale-110">
                    01
                  </span>
                  <span className="mt-5 h-20 w-px bg-[#D58A28]/60" />
                  <span className="mt-5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#89958E] [writing-mode:vertical-rl]">
                    Explore the neighbourhood
                  </span>
                </div>

                <div className="border-t border-[#06483D]/20 lg:border-t-0">
                  <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#B9741C]">
                    Inside this guide
                  </p>

                  {[
                    {
                      number: "01",
                      title: "Location & Geography",
                      detail: "Understand where Jattari is situated.",
                    },
                    {
                      number: "02",
                      title: "Regional Connectivity",
                      detail: "Explore roads and nearby destinations.",
                    },
                    {
                      number: "03",
                      title: "Everyday Facilities",
                      detail: "Discover local amenities and services.",
                    },
                    {
                      number: "04",
                      title: "Property & Development",
                      detail: "Explore real estate information.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.number}
                      style={{ transitionDelay: `${index * 80}ms` }}
                      className="group grid grid-cols-[35px_1fr] gap-4 border-b border-[#06483D]/15 py-5 transition-all duration-300 hover:translate-x-2 hover:border-[#D58A28]"
                    >
                      <span className="pt-1 text-xs font-semibold text-[#B9741C]">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-sm font-bold text-[#06483D] transition-colors group-hover:text-[#B9741C]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-6 text-[#89958E]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 border-y border-[#06483D]/20 sm:grid-cols-4">
                {[
                  ["REGION", "North India"],
                  ["STATE", "Uttar Pradesh"],
                  ["IDENTITY", "Local Town"],
                  ["GUIDE", "Jattari Explorer"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className="group border-b border-r border-[#06483D]/10 px-4 py-5 transition-colors duration-300 hover:bg-[#F3EBDD] last:border-r-0 sm:border-b-0"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#89958E]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#06483D] transition-colors group-hover:text-[#B9741C]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center">
              <div className="absolute inset-5 rounded-full border border-[#D58A28]/35 transition-transform duration-1000 hover:scale-105" />
              <div className="absolute inset-12 rounded-full border border-[#06483D]/15" />
              <div className="absolute inset-20 rounded-full border border-dashed border-[#D58A28]/40" />

              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#06483D]/10" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#06483D]/10" />

              <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-full bg-[#06483D] text-center text-white shadow-2xl shadow-[#06483D]/15 transition-transform duration-700 hover:scale-105 sm:h-56 sm:w-56">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F2AE45]">
                  Uttar Pradesh
                </span>
                <span className="mt-1 text-8xl font-black leading-none">
                  J
                </span>
                <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                  Discover Jattari
                </span>
              </div>

              <span className="absolute right-0 top-[22%] rounded-full border border-[#D58A28]/30 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#B9741C] shadow-sm transition-transform duration-300 hover:-translate-y-1">
                Explore
              </span>

              <span className="absolute bottom-[15%] left-0 rounded-full border border-[#06483D]/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#06483D] shadow-sm transition-transform duration-300 hover:translate-y-1">
                Discover
              </span>

              <span className="absolute left-[17%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-[#D58A28] motion-reduce:animate-none" />
              <span className="absolute bottom-[24%] right-[17%] h-2.5 w-2.5 animate-pulse rounded-full bg-[#0B5A49] motion-reduce:animate-none" />
            </div>
          </div>

          <div className="mt-16 grid gap-5 border-t border-[#06483D]/15 pt-7 sm:grid-cols-3">
            {[
              ["01", "Town", "Jattari"],
              ["02", "District", "Aligarh, Uttar Pradesh"],
              ["03", "Regional Road", "Aligarh–Palwal Road"],
            ].map(([number, label, value]) => (
              <div
                key={number}
                className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-2"
              >
                <span className="text-xs font-bold tracking-widest text-[#B9741C]">
                  {number}
                </span>
                <div>
                  <p className="text-xs text-[#7B8981]">{label}</p>
                  <p className="mt-1 text-sm font-bold text-[#06483D] transition-colors group-hover:text-[#B9741C]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — ABOUT JATTARI */}
      <section className={`${revealClasses} relative bg-[#F3EBDD] py-20 sm:py-28`}>
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Sticky left content */}
            <div className="h-fit lg:sticky lg:top-28 lg:self-start">
              <span className={sectionLabel}>01 / About the place</span>
              <p className="mt-6 max-w-[220px] text-sm font-semibold uppercase leading-6 tracking-[0.15em] text-[#06483D]">
                Understanding a town beyond its name.
              </p>
            </div>

            {/* Normal scrolling right content */}
            <div className="max-w-3xl min-w-0">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#172B26] transition-all duration-500 hover:tracking-normal sm:text-5xl lg:text-6xl">
                A closer look at
                <span className="block text-[#0B5A49]">Jattari.</span>
              </h2>

              <div className="mt-8 grid gap-7 sm:grid-cols-2">
                <p className={bodyText}>
                  Jattari is a town in Uttar Pradesh, situated in Aligarh
                  district. Its identity is connected with nearby settlements,
                  regional roads and the everyday activities of the local
                  community.
                </p>
                <p className={bodyText}>
                  Understanding a place involves more than knowing its name.
                  It means exploring how people travel, where essential
                  services are available and how the surrounding neighbourhood
                  fits into daily life.
                </p>
              </div>

              <div className="mt-8 border-t border-[#06483D]/20 pt-6">
                <p className="max-w-2xl text-lg font-semibold leading-8 text-[#06483D]">
                  Jattari Explorer brings these subjects together in one guide.
                  Use it as a starting point, and verify specific addresses,
                  services and travel details before making plans.
                </p>
              </div>

              <Link
                href="#location"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:gap-5 hover:text-[#B9741C]"
              >
                Explore the regional map
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — INTERACTIVE REGIONAL MAP */}
      <section
        id="location"
        className={`${revealClasses} bg-[#FFF9F0] py-20 sm:py-24`}
      >
        <div className="container-site">
          <SectionHeading
            label="02 / Location & surroundings"
            title="Jattari at the centre of its region."
            description="Explore Jattari and the nearby towns and cities. Select any location to discover its regional context."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#06483D]/15 bg-[#F3EBDD] p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0B5A49_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"
              />

              <svg
                viewBox="0 0 600 500"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path d="M300 250 C240 200 180 160 100 100" fill="none" stroke="#D58A28" strokeWidth="3" strokeDasharray="7 8" />
                <path d="M300 250 C390 180 440 140 510 90" fill="none" stroke="#0B5A49" strokeWidth="3" strokeDasharray="7 8" />
                <path d="M300 250 C410 250 480 230 550 210" fill="none" stroke="#D58A28" strokeWidth="3" strokeDasharray="7 8" />
                <path d="M300 250 C200 300 140 350 90 390" fill="none" stroke="#0B5A49" strokeWidth="3" strokeDasharray="7 8" />
                <path d="M300 250 C380 340 430 390 500 440" fill="none" stroke="#D58A28" strokeWidth="3" strokeDasharray="7 8" />
                <path d="M300 250 L300 35 M300 250 L300 470" fill="none" stroke="#0B5A49" strokeOpacity=".2" strokeWidth="2" />
              </svg>

              <div className="relative min-h-[480px] sm:min-h-[540px]">
                {places.map((place, index) => {
                  const isSelected = selectedPlace === place.id;
                  const isMain = place.id === "jattari";

                  return (
                    <button
                      key={place.id}
                      type="button"
                      onClick={() => setSelectedPlace(place.id)}
                      aria-pressed={isSelected}
                      aria-label={`Explore ${place.name}`}
                      style={{
                        left: place.x,
                        top: place.y,
                        transitionDelay: `${index * 30}ms`,
                      }}
                      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:z-20 hover:scale-110 focus-visible:scale-110 focus-visible:outline-none"
                    >
                      <span className="flex flex-col items-center">
                        <span
                          className={`relative flex items-center justify-center overflow-hidden rounded-full border-[3px] border-[#FFF9F0] shadow-lg transition-all duration-500 ${
                            isMain
                              ? "h-[76px] w-[76px] ring-4 ring-[#D58A28]/30 group-hover:ring-[#D58A28]/60 sm:h-[84px] sm:w-[84px]"
                              : isSelected
                                ? "h-16 w-16 ring-4 ring-[#D58A28]/30 sm:h-[72px] sm:w-[72px]"
                                : "h-14 w-14 group-hover:ring-4 group-hover:ring-[#D58A28]/30 sm:h-16 sm:w-16"
                          }`}
                        >
                          <Image
                            src={place.image}
                            alt={`${place.name} location`}
                            fill
                            sizes="(max-width: 640px) 56px, 84px"
                            className="object-cover transition-transform duration-700 group-hover:scale-125"
                          />

                          {isMain && (
                            <span className="absolute inset-0 rounded-full border-2 border-[#D58A28]/70" />
                          )}
                        </span>

                        <span
                          className={`mt-2 whitespace-nowrap rounded-full border px-2.5 py-1.5 text-[9px] font-extrabold shadow-sm transition-all duration-300 sm:px-3 sm:text-[11px] ${
                            isSelected
                              ? "border-[#D58A28] bg-[#06483D] text-white"
                              : isMain
                                ? "border-[#D58A28] bg-white text-[#06483D]"
                                : "border-[#06483D]/10 bg-white/95 text-[#172B26] group-hover:border-[#D58A28] group-hover:bg-[#06483D] group-hover:text-white"
                          }`}
                        >
                          {place.name}
                        </span>
                      </span>
                    </button>
                  );
                })}

                <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-32 w-32 rounded-full border border-[#D58A28]/30 transition-transform duration-1000 group-hover:scale-110 sm:h-44 sm:w-44" />
                </div>
              </div>

              <div className="relative mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#06483D]/15 pt-5">
                <span className="flex items-center gap-2 text-[10px] font-semibold text-[#53645E]">
                  <span className="h-3 w-3 rounded-full bg-[#D58A28]" />
                  Main destination
                </span>
                <span className="flex items-center gap-2 text-[10px] font-semibold text-[#53645E]">
                  <span className="h-3 w-3 rounded-full bg-[#0B5A49]" />
                  Nearby locations
                </span>
              </div>

              <p className="relative mt-4 text-center text-[10px] leading-5 text-[#64736D]">
                Illustrative regional connectivity diagram, not a scale-accurate
                navigation map. Verify exact routes and directions before travelling.
              </p>
            </div>

            <div
              key={currentPlace.id}
              className="flex flex-col justify-between rounded-[2rem] bg-[#06483D] p-7 text-white shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-3 sm:p-9"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F2AE45]">
                  Explore the region
                </span>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {currentPlace.category}
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  {currentPlace.name}
                  <span className="text-[#F2AE45]">.</span>
                </h3>

                <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base">
                  {currentPlace.description}
                </p>
              </div>

              <div className="mt-10 border-t border-white/15 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F2AE45]">
                  Explore other locations
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {places.map((place) => (
                    <button
                      key={place.id}
                      type="button"
                      onClick={() => setSelectedPlace(place.id)}
                      className={`rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                        selectedPlace === place.id
                          ? "border-[#D58A28] bg-[#D58A28] text-white shadow-md"
                          : "border-white/20 text-white/70 hover:border-[#F2AE45] hover:text-[#F2AE45]"
                      }`}
                    >
                      {place.name}
                    </button>
                  ))}
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${currentPlace.name}, Uttar Pradesh, India`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#F2AE45] transition-all duration-300 hover:gap-5"
                >
                  View selected location on Google Maps
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — CONNECTIVITY */}
      <section className={`${revealClasses} relative overflow-hidden bg-[#06483D] py-20 text-white sm:py-24`}>
        <div className="container-site">
          <div className="mb-12 max-w-3xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2AE45]">
              03 / Connectivity & Travel
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Closer to Every
              <span className="block text-[#F2AE45]">Destination.</span>
            </h2>
          </div>

          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="group relative min-h-[380px] overflow-hidden rounded-[24px] bg-[#0A5749] sm:min-h-[480px]">
              <Image
                key={selectedTravel.image}
                src={selectedTravel.image}
                alt={selectedTravel.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062E27]/90 via-[#062E27]/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                {selectedTravel.number} / 04
              </div>

              <div
                key={selectedTravel.number}
                className="absolute bottom-0 left-0 p-7 transition-all duration-500 sm:p-10"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F2AE45]">
                  {selectedTravel.caption}
                </span>

                <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  {selectedTravel.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/75">
                  {selectedTravel.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2AE45]">
                Explore travel essentials
              </p>

              <div className="border-t border-white/15">
                {travelOptions.map((item, index) => {
                  const isActive = activeTravel === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActiveTravel(index)}
                      aria-pressed={isActive}
                      className={`group grid w-full grid-cols-[48px_1fr_28px] items-center gap-4 border-b border-white/15 py-6 text-left transition-all duration-300 ${
                        isActive ? "bg-white/5 pl-3" : "hover:bg-white/5 hover:pl-3"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold tracking-widest transition-colors ${
                          isActive
                            ? "text-[#F2AE45]"
                            : "text-white/35 group-hover:text-[#F2AE45]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span>
                        <span
                          className={`block text-xl font-bold transition-colors sm:text-2xl ${
                            isActive
                              ? "text-[#F2AE45]"
                              : "text-white group-hover:text-[#F2AE45]"
                          }`}
                        >
                          {item.title}
                        </span>

                        <span className="mt-2 block text-sm leading-7 text-white/55">
                          {item.description}
                        </span>
                      </span>

                      <span
                        className={`text-xl transition-all duration-300 ${
                          isActive
                            ? "translate-x-1 text-[#F2AE45]"
                            : "text-white/35 group-hover:translate-x-1 group-hover:text-[#F2AE45]"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 text-xs leading-6 text-white/45">
                Actual journey time depends on your starting point, vehicle,
                route and traffic. Check current travel conditions before departure.
              </p>

              <Link
                href="/#location"
                className="group mt-6 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#F2AE45] transition-all duration-300 hover:gap-5"
              >
                Explore location information
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — EVERYDAY LIFE */}
      <section className={`${revealClasses} relative overflow-x-clip bg-[#F3EBDD] py-20 sm:py-28`}>
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Sticky left content */}
            <div className="relative h-fit lg:sticky lg:top-28 lg:self-start">
              <span className={sectionLabel}>04 / Everyday life</span>

              <h2 className={`mt-6 max-w-md ${sectionHeading}`}>
                A neighbourhood shaped by{" "}
                <span className="text-[#0B5A49]">everyday living.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-8 text-[#64736D]">
                Discover the local facilities, familiar services and everyday
                essentials that make Jattari an active neighbourhood.
              </p>

              <Link
                href="/#location"
                className="group mt-9 inline-flex items-center gap-3 border-b border-[#0B5A49]/30 pb-2 text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:gap-5 hover:border-[#D58A28]"
              >
                Explore Jattari location
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <div className="mt-16 hidden max-w-xs border-l-2 border-[#D58A28] pl-5 lg:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B9741C]">
                  The local perspective
                </p>
                <p className="mt-3 text-sm leading-7 text-[#64736D]">
                  Small everyday details come together to define the character
                  of a place.
                </p>
              </div>
            </div>

            {/* Normal scrolling right directory */}
            <div className="relative min-w-0">
              <div className="mb-7 flex items-center justify-between border-b border-[#06483D]/20 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B9741C]">
                  Jattari / Local Directory
                </span>

                <span className="text-xs font-semibold text-[#64736D]">
                  01 — 0{areaHighlights.length}
                </span>
              </div>

              <div>
                {areaHighlights.map((item, index) => (
                  <article
                    key={item.number}
                    style={{ transitionDelay: `${index * 60}ms` }}
                    className="group relative grid grid-cols-[48px_1fr_30px] items-center gap-4 border-b border-[#06483D]/15 py-7 transition-all duration-500 hover:translate-x-2 hover:border-[#D58A28] sm:grid-cols-[65px_1fr_40px] sm:gap-6"
                  >
                    <span className="text-2xl font-light tracking-tight text-[#B9741C]/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D58A28] sm:text-3xl">
                      {item.number}
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#B9741C]">
                        {item.detail}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49] sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-7 text-[#64736D]">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center text-xl text-[#0B5A49] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-[#D58A28] sm:h-12 sm:w-12">
                      {item.icon}
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D58A28] transition-all duration-500 group-hover:w-full" />
                  </article>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64736D]">
                  Everyday life in Jattari
                </p>

                <span className="text-2xl text-[#0B5A49] transition-transform duration-300 hover:translate-x-2 hover:translate-y-1">
                  ↘
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — INTERACTIVE TOPIC SELECTOR */}
      <section
        id="explore"
        className={`${revealClasses} bg-[#FFF9F0] py-20 sm:py-24`}
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className={sectionLabel}>05 / Your area guide</span>
            <h2 className={`mt-4 ${sectionHeading}`}>
              Explore Jattari{" "}
              <span className="text-[#0B5A49]">your way.</span>
            </h2>
            <p className={`mt-4 ${bodyText}`}>
              Choose a subject to discover more. Each topic offers a different
              starting point for understanding the town.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-t border-[#06483D]/20">
              {exploreTopics.map((topic, index) => (
                <button
                  key={topic.title}
                  type="button"
                  onClick={() => setActiveTopic(index)}
                  aria-pressed={activeTopic === index}
                  className={`group flex w-full items-center gap-4 border-b py-5 text-left transition-all duration-300 ${
                    activeTopic === index
                      ? "border-[#D58A28] bg-[#F3EBDD] px-4"
                      : "border-[#06483D]/15 px-2 hover:bg-[#F3EBDD]/60 hover:pl-4"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-all duration-300 group-hover:scale-110 ${
                      activeTopic === index
                        ? "bg-[#06483D] text-[#F2AE45]"
                        : "bg-[#F3EBDD] text-[#0B5A49]"
                    }`}
                  >
                    {topic.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#B9741C]">
                      {topic.eyebrow}
                    </span>
                    <span
                      className={`mt-1 block text-sm font-bold sm:text-base ${
                        activeTopic === index
                          ? "text-[#06483D]"
                          : "text-[#53645E]"
                      }`}
                    >
                      {topic.title}
                    </span>
                  </span>
                  <span className="text-lg text-[#D58A28] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ))}
            </div>

            <div
              key={currentTopic.title}
              className="relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#06483D] p-7 text-white shadow-lg transition-all duration-500 sm:min-h-[430px] sm:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 transition-transform duration-1000 hover:scale-110"
              />
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#F2AE45]/20"
              />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F2AE45]">
                  {currentTopic.eyebrow}
                </p>
                <span className="mt-8 block text-5xl text-[#F2AE45]">
                  {currentTopic.icon}
                </span>
                <h3 className="mt-6 max-w-lg text-3xl font-extrabold leading-tight sm:text-4xl">
                  {currentTopic.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
                  {currentTopic.detail}
                </p>
              </div>

              <div className="relative mt-10 flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-xs font-semibold text-white/45">
                  TOPIC {String(activeTopic + 1).padStart(2, "0")} / 06
                </span>
                <div className="flex gap-2">
                  {exploreTopics.map((topic, index) => (
                    <button
                      key={topic.title}
                      type="button"
                      aria-label={`Show ${topic.title}`}
                      aria-pressed={activeTopic === index}
                      onClick={() => setActiveTopic(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeTopic === index
                          ? "w-8 bg-[#F2AE45]"
                          : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#06483D]/10 bg-[#F3EBDD] p-5 transition-all duration-300 hover:border-[#D58A28]/50 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="max-w-2xl text-sm leading-7 text-[#53645E]">
              Verify current addresses, services, approvals and travel details
              before making decisions.
            </p>
            <Link
              href="/#location"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:gap-4"
            >
              Explore location <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — PROPERTY RESEARCH */}
      <section className={`${revealClasses} bg-[#F3EBDD] py-20 sm:py-24`}>
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className={sectionLabel}>06 / Property research</span>
            <h2 className={`mt-4 ${sectionHeading}`}>
              Make property decisions
              <span className="block text-[#0B5A49]">with care.</span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#64736D]">
              If you are researching residential plots or other property
              options in Jattari, look beyond location and price. Review
              access, surrounding facilities, records, approvals and essential
              services before making a decision.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#64736D]">
              Prices, future development and investment returns are not
              guaranteed. Inspect the property, compare independent
              information and seek professional advice before committing
              financially.
            </p>
            <Link
              href="/#contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#06483D] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg"
            >
              Ask an enquiry
              <span className="text-[#F2AE45] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="border-t border-[#06483D]/20">
            {propertyChecks.map((item) => (
              <article
                key={item.number}
                className="group grid grid-cols-[42px_1fr] gap-4 border-b border-[#06483D]/20 py-6 transition-all duration-300 hover:translate-x-2 hover:border-[#D58A28] sm:grid-cols-[58px_1fr]"
              >
                <span className="pt-1 text-xs font-bold tracking-[0.15em] text-[#B9741C]">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#172B26] transition-colors group-hover:text-[#0B5A49]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#64736D]">
                    {item.description}
                  </p>
                </div>
                <span className="col-start-2 text-lg text-[#0B5A49] transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </article>
            ))}

            <p className="mt-5 border-l-2 border-[#D58A28] pl-4 text-xs leading-6 text-[#64736D]">
              <strong className="text-[#06483D]">Please note:</strong> This
              guide is for general research only. Confirm documents and
              details independently; it is not a guarantee of property status
              or investment performance.
            </p>
          </div>
        </div>
      </section>

      {/* 08 — FAQ */}
      <section className={`${revealClasses} bg-[#FFF9F0] py-20 sm:py-24`}>
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <span className={sectionLabel}>07 / Need to know</span>
              <h2 className={`mt-4 ${sectionHeading}`}>
                Questions about
                <span className="block text-[#0B5A49]">Jattari.</span>
              </h2>
              <p className={`mt-5 ${bodyText}`}>
                Find answers about Jattari, local facilities, connectivity and
                property research.
              </p>
              <p className="mt-8 text-6xl font-black tracking-tighter text-[#D58A28]">
                FAQ<span className="text-[#06483D]">.</span>
              </p>
            </div>

            <div className="border-t border-[#06483D]/20">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={faq.question}
                    className={`border-b transition-colors duration-300 ${
                      isOpen
                        ? "border-[#D58A28]"
                        : "border-[#06483D]/15"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="flex items-start gap-4">
                        <span className="pt-1 text-xs font-bold tracking-widest text-[#B9741C]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-bold leading-6 text-[#172B26] transition-colors group-hover:text-[#0B5A49] sm:text-base">
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-[#06483D] bg-[#06483D] text-[#F2AE45]"
                            : "border-[#06483D]/20 text-[#06483D] group-hover:border-[#D58A28]"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-6 pl-10 pr-10">
                          <p className="text-sm leading-7 text-[#64736D]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 09 — FINAL CTA */}
      <section className={`${revealClasses} bg-[#06483D] py-20 text-white sm:py-24`}>
        <div className="container-site">
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#073B32] px-7 py-12 transition-all duration-500 hover:border-[#D58A28]/50 hover:shadow-2xl hover:shadow-black/10 sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#F2AE45]/20 transition-transform duration-1000 group-hover:scale-125"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F2AE45]">
                  Continue your discovery
                </span>
                <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Your guide to
                  <span className="block text-[#F2AE45]">
                    discovering Jattari.
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
                  Continue exploring the location, local surroundings,
                  connectivity and useful information about Jattari. Start
                  with the topics that matter most to you.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/#explore"
                  className="group/button inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D58A28] px-7 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-lg"
                >
                  Explore Jattari
                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F2AE45] hover:text-[#F2AE45]"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="relative mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs font-medium text-white/55">
              <span>01 — Explore the location</span>
              <span>02 — Learn about local facilities</span>
              <span>03 — Research with confidence</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}