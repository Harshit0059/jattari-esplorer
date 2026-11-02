
"use client";

import { useEffect, useState, useRef } from "react";
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
  "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D58A28]";

const sectionHeading =
  "text-3xl font-extrabold leading-tight tracking-tight text-[#10251F] sm:text-4xl lg:text-5xl";

const bodyText =
  "text-sm leading-7 text-[#263D3A] sm:text-base sm:leading-8";

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
  const travelRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentPlace =
    places.find((place) => place.id === selectedPlace) ?? places[0];

  const currentTopic = exploreTopics[activeTopic];

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveTravel(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.4,
      }
    );

    travelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll reveal: sections appear smoothly when they enter the viewport.
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
    <main className="overflow-hidden bg-[#F4F8FA] text-[#10251F]">
      {/* 01 — ABOUT HERO */}
      <section className={`${revealClasses} relative overflow-hidden bg-gradient-to-b from-[#E4EDF0] via-[#F4F8FA] to-[#F4F8FA] text-[#10251F]`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[500px] w-[500px] rounded-full border border-[#D58A28]/20 transition-transform duration-1000 hover:scale-110"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-12 h-[360px] w-[360px] rounded-full border border-[#10251F]/10"
        />

        <div className="container-site relative py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative w-full py-10 sm:py-14">
              <div className="flex items-center justify-between border-y border-[#10251F]/20 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B9741C]">
                  Jattari Explorer / Field Notes
                </p>
                <p className="text-[10px] font-semibold tracking-widest text-[#5C736D]">
                  LOCATION PROFILE — 001
                </p>
              </div>

              <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_100px_0.85fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5C736D]">
                    A closer look at
                  </p>

                  <h1 className="mt-4 text-5xl font-bold tracking-[-0.055em] text-[#10251F] transition-all duration-500 hover:tracking-[-0.025em] sm:text-6xl">
                    Jattari<span className="text-[#D58A28]">.</span>
                  </h1>

                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B9741C]">
                    Uttar Pradesh, India
                  </p>

                  <div className="mt-8 max-w-md">
                    <h2 className="text-2xl font-semibold leading-snug text-[#10251F] sm:text-3xl">
                      Discover a place through the details that define it.
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-[#263D3A]">
                      Explore Jattari through its geographical setting,
                      regional connectivity, everyday facilities, local
                      surroundings and property-related information.
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-6">
                    <Link
                      href="/#explore"
                      className="group inline-flex items-center gap-3 border-b-2 border-[#D58A28] pb-2 text-sm font-bold text-[#10251F] transition-all duration-300 hover:gap-5 hover:text-[#B9741C]"
                    >
                      Explore Jattari
                      <span className="text-[#D58A28] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </Link>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 pb-2 text-sm font-semibold text-[#5C736D] transition-all duration-300 hover:gap-3 hover:text-[#B9741C]"
                    >
                      Contact us <span>→</span>
                    </Link>
                  </div>
                </div>

                <div className="hidden h-[340px] flex-col items-center justify-center border-x border-[#10251F]/15 lg:flex">
                  <span className="text-[76px] font-extralight leading-none tracking-[-0.1em] text-[#D58A28] transition-transform duration-500 hover:scale-110">
                    01
                  </span>
                  <span className="mt-5 h-20 w-px bg-[#D58A28]/60" />
                  <span className="mt-5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#5C736D] [writing-mode:vertical-rl]">
                    Explore the neighbourhood
                  </span>
                </div>

                <div className="border-t border-[#10251F]/20 lg:border-t-0">
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
                      className="group grid grid-cols-[35px_1fr] gap-4 border-b border-[#10251F]/15 py-5 transition-all duration-300 hover:translate-x-2 hover:border-[#D58A28]"
                    >
                      <span className="pt-1 text-xs font-semibold text-[#B9741C]">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-sm font-bold text-[#10251F] transition-colors group-hover:text-[#B9741C]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-6 text-[#5C736D]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 border-y border-[#10251F]/20 sm:grid-cols-4">
                {[
                  ["REGION", "North India"],
                  ["STATE", "Uttar Pradesh"],
                  ["IDENTITY", "Local Town"],
                  ["GUIDE", "Jattari Explorer"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className="group border-b border-r border-[#10251F]/10 px-4 py-5 transition-colors duration-300 hover:bg-[#EAF2F6] last:border-r-0 sm:border-b-0"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5C736D]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#10251F] transition-colors group-hover:text-[#B9741C]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center">
              <div className="absolute inset-5 rounded-full border border-[#D58A28]/35 transition-transform duration-1000 hover:scale-105" />
              <div className="absolute inset-12 rounded-full border border-[#10251F]/15" />
              <div className="absolute inset-20 rounded-full border border-dashed border-[#D58A28]/40" />

              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#10251F]/10" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#10251F]/10" />

              <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-full border border-[#D8E5E8] bg-white text-center text-[#10251F] shadow-xl transition-transform duration-700 hover:scale-105 sm:h-56 sm:w-56">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D58A28]">
                  Uttar Pradesh
                </span>
                <span className="mt-1 text-8xl font-black leading-none text-[#10251F]">
                  J
                </span>
                <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5C736D]">
                  Discover Jattari
                </span>
              </div>

              <span className="absolute right-0 top-[22%] rounded-full border border-[#D58A28]/30 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#B9741C] shadow-sm transition-transform duration-300 hover:-translate-y-1">
                Explore
              </span>

              <span className="absolute bottom-[15%] left-0 rounded-full border border-[#10251F]/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#10251F] shadow-sm transition-transform duration-300 hover:translate-y-1">
                Discover
              </span>

              <span className="absolute left-[17%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-[#D58A28] motion-reduce:animate-none" />
              <span className="absolute bottom-[24%] right-[17%] h-2.5 w-2.5 animate-pulse rounded-full bg-[#254C3C] motion-reduce:animate-none" />
            </div>
          </div>

          <div className="mt-16 grid gap-5 border-t border-[#10251F]/15 pt-7 sm:grid-cols-3">
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
                  <p className="text-xs text-[#5C736D]">{label}</p>
                  <p className="mt-1 text-sm font-bold text-[#10251F] transition-colors group-hover:text-[#B9741C]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — ABOUT JATTARI */}
      <section className={`${revealClasses} relative overflow-hidden bg-[#EAF2F6] py-20 sm:py-28`}>
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <span className={sectionLabel}>01 / About the place</span>
              <p className="mt-6 max-w-[220px] text-sm font-semibold uppercase leading-6 tracking-[0.15em] text-[#10251F]">
                Understanding a town beyond its name.
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10251F] transition-all duration-500 hover:tracking-normal sm:text-5xl lg:text-6xl">
                A closer look at
                <span className="block text-[#254C3C]">Jattari.</span>
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

              <div className="mt-8 border-t border-[#10251F]/20 pt-6">
                <p className="max-w-2xl text-lg font-semibold leading-8 text-[#10251F]">
                  Jattari Explorer brings these subjects together in one guide.
                  Use it as a starting point, and verify specific addresses,
                  services and travel details before making plans.
                </p>
              </div>

              <Link
                href="#location"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#254C3C] transition-all duration-300 hover:gap-5 hover:text-[#B9741C]"
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
        className={`${revealClasses} bg-[#F4F8FA] py-20 sm:py-24`}
      >
        <div className="container-site">
          <SectionHeading
            label="02 / Location & surroundings"
            title="Jattari at the centre of its region."
            description="Explore Jattari and the nearby towns and cities. Select any location to discover its regional context."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#10251F]/15 bg-[#EAF2F6] p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              {/* Dedicated Map Stage Canvas */}
              <div className="relative h-[480px] w-full overflow-hidden rounded-2xl bg-[#EAF2F6] sm:h-[540px]">
                {/* Dot grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(#254C3C_1.2px,transparent_1.2px)] bg-[size:22px_22px] opacity-35"
                />

                {/* SVG Route lines & crosshairs centered at (300, 250) = 50%, 50% */}
                <svg
                  viewBox="0 0 600 500"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <line x1="0" y1="250" x2="600" y2="250" stroke="#254C3C" strokeOpacity=".2" strokeWidth="1.5" />
                  <line x1="300" y1="0" x2="300" y2="500" stroke="#254C3C" strokeOpacity=".2" strokeWidth="1.5" />

                  <path d="M300 250 L120 215" stroke="#D58A28" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M300 250 L228 75" stroke="#254C3C" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M300 250 L402 95" stroke="#254C3C" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M300 250 L492 210" stroke="#D58A28" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M300 250 L114 380" stroke="#254C3C" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M300 250 L498 360" stroke="#D58A28" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M300 250 L222 455" stroke="#254C3C" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M300 250 L396 455" stroke="#D58A28" strokeWidth="2.5" strokeDasharray="6 6" />
                </svg>

                {/* Concentric radar rings centered EXACTLY at 50%, 50% */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="h-44 w-44 rounded-full border border-[#D58A28]/35 transition-transform duration-1000 group-hover:scale-110 sm:h-56 sm:w-56" />
                  <div className="absolute h-28 w-28 rounded-full border border-[#D58A28]/25 sm:h-36 sm:w-36" />
                  <div className="absolute h-64 w-64 rounded-full border border-[#254C3C]/15 sm:h-80 sm:w-80" />
                </div>

                {/* City location buttons - circle image centered exactly at place.x, place.y */}
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
                      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-transform duration-300 hover:z-20 hover:scale-110 focus-visible:scale-110 focus-visible:outline-none"
                    >
                      <span
                        className={`relative flex items-center justify-center overflow-hidden rounded-full border-[3px] border-[#F4F8FA] shadow-lg transition-all duration-500 ${
                          isMain
                            ? "h-[76px] w-[76px] ring-4 ring-[#D58A28]/40 group-hover:ring-[#D58A28]/70 sm:h-[84px] sm:w-[84px]"
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
                        className={`absolute top-full mt-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[9px] font-extrabold shadow-sm transition-all duration-300 sm:px-3 sm:text-[11px] ${
                          isSelected
                            ? "border-[#D58A28] bg-[#10251F] text-white shadow-md"
                            : isMain
                              ? "border-[#D58A28] bg-[#10251F] text-white ring-2 ring-[#D58A28]/40 shadow-md"
                              : "border-[#10251F]/10 bg-white/95 text-[#10251F] group-hover:border-[#D58A28] group-hover:bg-[#10251F] group-hover:text-white"
                        }`}
                      >
                        {place.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Legend & disclaimer outside the map canvas */}
              <div className="relative mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#10251F]/15 pt-4">
                <span className="flex items-center gap-2 text-[10px] font-semibold text-[#4A605A]">
                  <span className="h-3 w-3 rounded-full bg-[#D58A28]" />
                  Main destination
                </span>
                <span className="flex items-center gap-2 text-[10px] font-semibold text-[#4A605A]">
                  <span className="h-3 w-3 rounded-full bg-[#254C3C]" />
                  Nearby locations
                </span>
              </div>

              <p className="relative mt-3 text-center text-[10px] leading-5 text-[#263D3A]">
                Illustrative regional connectivity diagram, not a scale-accurate
                navigation map. Verify exact routes and directions before travelling.
              </p>
            </div>

            <div
              key={currentPlace.id}
              className="flex flex-col justify-between rounded-[2rem] border border-[#D8E5E8] bg-white p-7 text-[#10251F] shadow-md transition-all duration-500 animate-in fade-in slide-in-from-bottom-3 sm:p-9"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D58A28]">
                  Explore the region
                </span>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#5C736D]">
                  {currentPlace.category}
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl text-[#10251F]">
                  {currentPlace.name}
                  <span className="text-[#D58A28]">.</span>
                </h3>

                <p className="mt-5 text-sm leading-8 text-[#263D3A] sm:text-base">
                  {currentPlace.description}
                </p>
              </div>

              <div className="mt-8 border-t border-[#D8E5E8] pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D58A28]">
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
                          ? "border-[#D58A28] bg-[#D58A28] text-white shadow-sm"
                          : "border-[#D8E5E8] bg-[#F4F8FA] text-[#10251F] hover:border-[#D58A28] hover:bg-white"
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
                  className="group mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#D58A28] transition-all duration-300 hover:gap-5 hover:text-[#B9741C]"
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
      <section className={`${revealClasses} relative overflow-hidden bg-[#F4F8FA] py-16 sm:py-20 text-[#10251F]`}>
        <div className="container-site">
          <div className="mb-12 max-w-3xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D58A28]">
              03 / Connectivity & Travel
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#10251F] sm:text-5xl lg:text-6xl">
              Closer to Every
              <span className="block text-[#D58A28]">Destination.</span>
            </h2>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Sticky image card on the left */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="group relative min-h-[380px] h-[480px] sm:h-[540px] overflow-hidden rounded-[24px] border border-[#D8E5E8] bg-[#10251F] shadow-lg">
                <Image
                  key={selectedTravel.image}
                  src={selectedTravel.image}
                  alt={selectedTravel.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251F]/90 via-[#10251F]/30 to-black/20 transition-opacity duration-500" />

                <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F2AE45] backdrop-blur-md">
                  {selectedTravel.number} / 04
                </div>

                <div
                  key={selectedTravel.number}
                  className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 transition-all duration-500"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F2AE45]">
                    {selectedTravel.caption}
                  </span>

                  <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                    {selectedTravel.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-7 text-white/85">
                    {selectedTravel.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D58A28]">
                Explore travel essentials
              </p>

              <div className="border-t border-[#D8E5E8]">
                {travelOptions.map((item, index) => {
                  const isActive = activeTravel === index;

                  return (
                    <button
                      key={item.number}
                      ref={(el) => {
                        travelRefs.current[index] = el;
                      }}
                      data-index={index}
                      type="button"
                      onClick={() => setActiveTravel(index)}
                      onMouseEnter={() => setActiveTravel(index)}
                      onFocus={() => setActiveTravel(index)}
                      aria-pressed={isActive}
                      className={`group grid w-full grid-cols-[48px_1fr_28px] items-center gap-4 border-b border-[#D8E5E8] py-5 text-left transition-all duration-300 rounded-xl px-3 ${
                        isActive
                          ? "bg-white shadow-md border-[#D58A28] px-4"
                          : "hover:bg-white/70 hover:px-4"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold tracking-widest transition-colors ${
                          isActive
                            ? "text-[#D58A28]"
                            : "text-[#5C736D] group-hover:text-[#D58A28]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span>
                        <span
                          className={`block text-xl font-bold transition-colors sm:text-2xl ${
                            isActive
                              ? "text-[#10251F]"
                              : "text-[#10251F] group-hover:text-[#D58A28]"
                          }`}
                        >
                          {item.title}
                        </span>

                        <span className="mt-1 block text-sm leading-6 text-[#263D3A]">
                          {item.description}
                        </span>
                      </span>

                      <span
                        className={`text-xl transition-all duration-300 ${
                          isActive
                            ? "translate-x-1 text-[#D58A28]"
                            : "text-[#5C736D] group-hover:translate-x-1 group-hover:text-[#D58A28]"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-5 text-xs leading-6 text-[#5C736D]">
                Actual journey time depends on your starting point, vehicle,
                route and traffic. Check current travel conditions before departure.
              </p>

              <Link
                href="/#location"
                className="group mt-6 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#D58A28] transition-all duration-300 hover:gap-5 hover:text-[#B9741C]"
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
      <section className={`${revealClasses} relative overflow-hidden bg-[#EAF2F6] py-20 sm:py-28`}>
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="relative">
              <span className={sectionLabel}>04 / Everyday life</span>

              <h2 className={`mt-6 max-w-md ${sectionHeading}`}>
                A neighbourhood shaped by{" "}
                <span className="text-[#254C3C]">everyday living.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-8 text-[#263D3A]">
                Discover the local facilities, familiar services and everyday
                essentials that make Jattari an active neighbourhood.
              </p>

              <Link
                href="/#location"
                className="group mt-9 inline-flex items-center gap-3 border-b border-[#254C3C]/30 pb-2 text-sm font-bold text-[#254C3C] transition-all duration-300 hover:gap-5 hover:border-[#D58A28]"
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
                <p className="mt-3 text-sm leading-7 text-[#263D3A]">
                  Small everyday details come together to define the character
                  of a place.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="mb-7 flex items-center justify-between border-b border-[#10251F]/20 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B9741C]">
                  Jattari / Local Directory
                </span>

                <span className="text-xs font-semibold text-[#263D3A]">
                  01 — 0{areaHighlights.length}
                </span>
              </div>

              <div>
                {areaHighlights.map((item, index) => (
                  <article
                    key={item.number}
                    style={{ transitionDelay: `${index * 60}ms` }}
                    className="group relative grid grid-cols-[48px_1fr_30px] items-center gap-4 border-b border-[#10251F]/15 py-7 transition-all duration-500 hover:translate-x-2 hover:border-[#D58A28] sm:grid-cols-[65px_1fr_40px] sm:gap-6"
                  >
                    <span className="text-2xl font-light tracking-tight text-[#B9741C]/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D58A28] sm:text-3xl">
                      {item.number}
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#B9741C]">
                        {item.detail}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-[#10251F] transition-colors duration-300 group-hover:text-[#254C3C] sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-7 text-[#263D3A]">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center text-xl text-[#254C3C] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-[#D58A28] sm:h-12 sm:w-12">
                      {item.icon}
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D58A28] transition-all duration-500 group-hover:w-full" />
                  </article>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#263D3A]">
                  Everyday life in Jattari
                </p>

                <span className="text-2xl text-[#254C3C] transition-transform duration-300 hover:translate-x-2 hover:translate-y-1">
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
        className={`${revealClasses} bg-[#F4F8FA] py-20 sm:py-24`}
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className={sectionLabel}>05 / Your area guide</span>
            <h2 className={`mt-4 ${sectionHeading}`}>
              Explore Jattari{" "}
              <span className="text-[#254C3C]">your way.</span>
            </h2>
            <p className={`mt-4 ${bodyText}`}>
              Choose a subject to discover more. Each topic offers a different
              starting point for understanding the town.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-t border-[#10251F]/20">
              {exploreTopics.map((topic, index) => (
                <button
                  key={topic.title}
                  type="button"
                  onClick={() => setActiveTopic(index)}
                  aria-pressed={activeTopic === index}
                  className={`group flex w-full items-center gap-4 border-b py-5 text-left transition-all duration-300 ${
                    activeTopic === index
                      ? "border-[#D58A28] bg-[#EAF2F6] px-4"
                      : "border-[#10251F]/15 px-2 hover:bg-[#EAF2F6]/60 hover:pl-4"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-all duration-300 group-hover:scale-110 ${
                      activeTopic === index
                        ? "bg-[#10251F] text-[#F2AE45]"
                        : "bg-[#EAF2F6] text-[#254C3C]"
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
                          ? "text-[#10251F]"
                          : "text-[#4A605A]"
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
              className="relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#D8E5E8] bg-white p-7 text-[#10251F] shadow-md transition-all duration-500 sm:min-h-[430px] sm:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D58A28]/10 transition-transform duration-1000 hover:scale-110"
              />
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#D58A28]/15"
              />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D58A28]">
                  {currentTopic.eyebrow}
                </p>
                <span className="mt-6 block text-5xl text-[#D58A28]">
                  {currentTopic.icon}
                </span>
                <h3 className="mt-5 max-w-lg text-3xl font-extrabold leading-tight text-[#10251F] sm:text-4xl">
                  {currentTopic.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-8 text-[#263D3A] sm:text-base">
                  {currentTopic.detail}
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-[#D8E5E8] pt-5">
                <span className="text-xs font-semibold text-[#5C736D]">
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
                          ? "w-8 bg-[#D58A28]"
                          : "w-2 bg-[#D8E5E8] hover:bg-[#D58A28]/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#10251F]/10 bg-[#EAF2F6] p-5 transition-all duration-300 hover:border-[#D58A28]/50 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="max-w-2xl text-sm leading-7 text-[#4A605A]">
              Verify current addresses, services, approvals and travel details
              before making decisions.
            </p>
            <Link
              href="/#location"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#254C3C] transition-all duration-300 hover:gap-4"
            >
              Explore location <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — PROPERTY RESEARCH */}
      <section className={`${revealClasses} bg-[#EAF2F6] py-20 sm:py-24`}>
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className={sectionLabel}>06 / Property research</span>
            <h2 className={`mt-4 ${sectionHeading}`}>
              Make property decisions
              <span className="block text-[#254C3C]">with care.</span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#263D3A]">
              If you are researching residential plots or other property
              options in Jattari, look beyond location and price. Review
              access, surrounding facilities, records, approvals and essential
              services before making a decision.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#263D3A]">
              Prices, future development and investment returns are not
              guaranteed. Inspect the property, compare independent
              information and seek professional advice before committing
              financially.
            </p>
            <Link
              href="/#contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#D58A28] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-lg"
            >
              Ask an enquiry
              <span className="text-[#F2AE45] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="border-t border-[#10251F]/20">
            {propertyChecks.map((item) => (
              <article
                key={item.number}
                className="group grid grid-cols-[42px_1fr] gap-4 border-b border-[#10251F]/20 py-6 transition-all duration-300 hover:translate-x-2 hover:border-[#D58A28] sm:grid-cols-[58px_1fr]"
              >
                <span className="pt-1 text-xs font-bold tracking-[0.15em] text-[#B9741C]">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#10251F] transition-colors group-hover:text-[#254C3C]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#263D3A]">
                    {item.description}
                  </p>
                </div>
                <span className="col-start-2 text-lg text-[#254C3C] transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </article>
            ))}

            <p className="mt-5 border-l-2 border-[#D58A28] pl-4 text-xs leading-6 text-[#263D3A]">
              <strong className="text-[#10251F]">Please note:</strong> This
              guide is for general research only. Confirm documents and
              details independently; it is not a guarantee of property status
              or investment performance.
            </p>
          </div>
        </div>
      </section>

      {/* 08 — FAQ */}
      <section className={`${revealClasses} bg-[#F4F8FA] py-20 sm:py-24`}>
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <span className={sectionLabel}>07 / Need to know</span>
              <h2 className={`mt-4 ${sectionHeading}`}>
                Questions about
                <span className="block text-[#254C3C]">Jattari.</span>
              </h2>
              <p className={`mt-5 ${bodyText}`}>
                Find answers about Jattari, local facilities, connectivity and
                property research.
              </p>
              <p className="mt-8 text-6xl font-black tracking-tighter text-[#D58A28]">
                FAQ<span className="text-[#10251F]">.</span>
              </p>
            </div>

            <div className="border-t border-[#10251F]/20">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={faq.question}
                    className={`border-b transition-colors duration-300 ${
                      isOpen
                        ? "border-[#D58A28]"
                        : "border-[#10251F]/15"
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
                        <span className="text-sm font-bold leading-6 text-[#10251F] transition-colors group-hover:text-[#254C3C] sm:text-base">
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-[#10251F] bg-[#10251F] text-[#F2AE45]"
                            : "border-[#10251F]/20 text-[#10251F] group-hover:border-[#D58A28]"
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
                          <p className="text-sm leading-7 text-[#263D3A]">
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
      <section className={`${revealClasses} bg-[#F4F8FA] py-10 sm:py-14`}>
        <div className="container-site">
          <div className="relative overflow-hidden rounded-2xl border border-[#D8E5E8] bg-gradient-to-r from-white via-[#F4F8FA] to-[#EAF2F6] p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D58A28]">
                  Continue your discovery
                </span>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#10251F] sm:text-3xl">
                  Your guide to{" "}
                  <span className="text-[#D58A28]">discovering Jattari.</span>
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#263D3A]">
                  Continue exploring the location, local surroundings,
                  connectivity and useful information about Jattari. Start with
                  the topics that matter most to you.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Link
                  href="/#explore"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#D58A28] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B9741C] hover:shadow-md"
                >
                  Explore Jattari
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#D8E5E8] bg-white px-6 py-2.5 text-sm font-semibold text-[#10251F] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8F2F6] hover:border-[#D58A28]/50"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
