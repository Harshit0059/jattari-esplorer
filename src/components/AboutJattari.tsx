

"use client";



import { useState } from "react";

import Link from "next/link";



const areaHighlights = [

  {

    number: "01",

    title: "Location & Geography",

    icon: "📍",

    description:

      "Understand where Jattari is located, its surrounding settlements and its place within Aligarh district, Uttar Pradesh.",

  },

  {

    number: "02",

    title: "Road Connectivity",

    icon: "🛣️",

    description:

      "Learn about the Aligarh–Palwal Road, local routes and connections between nearby towns.",

  },

  {

    number: "03",

    title: "Everyday Lifestyle",

    icon: "🏘️",

    description:

      "Explore local markets, daily shopping, community spaces and essential services.",

  },

  {

    number: "04",

    title: "Education & Healthcare",

    icon: "🏥",

    description:

      "Research educational institutions, healthcare providers and essential services in Jattari and nearby areas.",

  },

  {

    number: "05",

    title: "Local Businesses",

    icon: "🏪",

    description:

      "Discover shops, service providers and businesses that support residents and visitors.",

  },

  {

    number: "06",

    title: "Property Information",

    icon: "🏡",

    description:

      "Research plots, residential locations, access roads, documents and property options carefully.",

  },

];



const exploreTopics = [

  {

    title: "Location & Surroundings",

    description:

      "Get familiar with Jattari's geographical setting and nearby localities.",

    icon: "🧭",

  },

  {

    title: "Connectivity & Travel",

    description:

      "Research road routes, transport options and travel details before planning a journey.",

    icon: "🚗",

  },

  {

    title: "Markets & Daily Needs",

    description:

      "Explore shopping areas, essential services and facilities useful for everyday living.",

    icon: "🛍️",

  },

  {

    title: "Community & Lifestyle",

    description:

      "Learn about the local environment, neighbourhood character and everyday life.",

    icon: "🤝",

  },

  {

    title: "Education & Healthcare",

    description:

      "Identify educational institutions and healthcare facilities, and verify their current details.",

    icon: "🎓",

  },

  {

    title: "Property Research",

    description:

      "Compare locations, check ownership records and approvals, and assess suitability.",

    icon: "📋",

  },

];



const propertyChecks = [

  "Verify ownership and the property's legal title.",

  "Check applicable approvals and land-use permissions.",

  "Inspect road access and the surrounding development.",

  "Confirm water, electricity and other essential services.",

  "Review the total cost, documents and applicable charges.",

  "Visit the property and seek independent legal advice.",

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



const sectionLabel =

  "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-soft-accent px-4 py-2 text-sm font-semibold text-primary";



const sectionHeading =

  "text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl";



const bodyText = "text-base leading-8 text-muted";



const cardStyle =

  "group rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl";



function SectionHeading({

  label,

  title,

  description,

  centered = false,

}: {

  label: string;

  title: string;

  description: string;

  centered?: boolean;

}) {

  return (

    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>

      <span className={sectionLabel}>

        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

        {label}

      </span>



      <h2 className={`mt-5 ${sectionHeading}`}>{title}</h2>



      <p className={`mt-5 ${bodyText}`}>{description}</p>

    </div>

  );

}



export default function AboutJattari() {

  const [openFaq, setOpenFaq] = useState<number | null>(0);



  return (

    <main className="overflow-hidden bg-background text-foreground">

      {/* HERO */}

      <section className="relative isolate overflow-hidden border-b border-border bg-background">

        <div

          aria-hidden="true"

          className="pointer-events-none absolute -right-28 -top-28 -z-10 h-96 w-96 rounded-full border border-primary/10 sm:h-[32rem] sm:w-[32rem]"

        />



        <div

          aria-hidden="true"

          className="pointer-events-none absolute right-8 top-24 -z-10 h-64 w-64 rounded-full bg-soft-accent/70 blur-3xl sm:right-24"

        />



        <div className="container-site relative py-16 sm:py-20 lg:py-28">

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            <div>

              <span className={sectionLabel}>

                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

                Get to Know the Town

              </span>



              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

                Discover

                <span className="block text-primary">Jattari.</span>

                <span className="mt-2 block text-2xl font-semibold leading-snug text-foreground sm:text-3xl lg:text-4xl">

                  Understand the Neighbourhood.

                </span>

              </h1>



              <p className={`mt-6 max-w-2xl ${bodyText}`}>

                Get to know Jattari, Uttar Pradesh, through a detailed guide

                to its location, road connectivity, local markets, everyday

                facilities, community life and property-related information.

                Whether you are learning about the town for the first time or

                researching a future visit, start with the information that

                matters to you.

              </p>



              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link

                  href="/#explore"

                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg"

                >

                  Explore Jattari

                  <span className="transition-transform duration-300 group-hover:translate-x-1">

                    →

                  </span>

                </Link>



                <Link

                  href="/#contact"

                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-md"

                >

                  Contact Us <span aria-hidden="true">↗</span>

                </Link>

              </div>



              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">

                <span className="inline-flex items-center gap-2">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-soft-accent text-primary">

                    ✓

                  </span>

                  Location information

                </span>



                <span className="inline-flex items-center gap-2">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-soft-accent text-primary">

                    ✓

                  </span>

                  Local area guide

                </span>

              </div>

            </div>



            <div className="relative mx-auto w-full max-w-md lg:max-w-none">

              <div

                aria-hidden="true"

                className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl border border-primary/20 sm:-right-6 sm:-top-6 sm:h-36 sm:w-36"

              />



              <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-3 shadow-2xl shadow-primary/10">

                <div className="relative overflow-hidden rounded-[1.5rem] bg-background p-6 sm:p-8">

                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-soft-accent/80 blur-3xl" />



                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">

                        Area Overview

                      </span>

                      <span className="text-2xl" aria-hidden="true">

                        📍

                      </span>

                    </div>



                    <div className="my-9 flex min-h-52 flex-col justify-center">

                      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">

                        Welcome to

                      </span>



                      <h2 className="mt-3 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">

                        Jattari<span className="text-primary">.</span>

                      </h2>



                      <div className="mt-5 h-1.5 w-20 rounded-full bg-primary" />



                      <p className="mt-5 max-w-xs leading-7 text-muted">

                        Explore the location, community, connectivity and

                        everyday life of the town.

                      </p>

                    </div>



                    <div className="grid grid-cols-2 gap-3">

                      <div className="rounded-2xl border border-border bg-white p-4">

                        <span className="text-xl" aria-hidden="true">

                          🗺️

                        </span>

                        <p className="mt-3 text-sm font-bold text-foreground">

                          Explore

                        </p>

                        <p className="mt-1 text-xs leading-5 text-muted">

                          The local area

                        </p>

                      </div>



                      <div className="rounded-2xl border border-border bg-white p-4">

                        <span className="text-xl" aria-hidden="true">

                          🛣️

                        </span>

                        <p className="mt-3 text-sm font-bold text-foreground">

                          Discover

                        </p>

                        <p className="mt-1 text-xs leading-5 text-muted">

                          Routes & facilities

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>



              <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-white p-4 shadow-xl sm:-left-8 sm:p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-accent text-xl">

                    🧭

                  </div>

                  <div>

                    <p className="text-sm font-bold text-foreground">

                      Your Area Guide

                    </p>

                    <p className="mt-1 text-xs text-muted">

                      Start exploring Jattari

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>



          <div className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-3 lg:mt-20">

            {[

              { label: "Town", value: "Jattari", icon: "📍" },

              {

                label: "District",

                value: "Aligarh, Uttar Pradesh",

                icon: "🗺️",

              },

              {

                label: "Regional Road",

                value: "Aligarh–Palwal Road",

                icon: "🛣️",

              },

            ].map((item) => (

              <div

                key={item.label}

                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"

              >

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soft-accent text-xl">

                  {item.icon}

                </span>

                <div className="min-w-0">

                  <p className="text-sm text-muted">{item.label}</p>

                  <p className="mt-1 font-bold text-foreground">

                    {item.value}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ABOUT JATTARI — FULL BACKGROUND IMAGE */}

      <section className="relative isolate overflow-hidden bg-slate-900 py-20 sm:py-28 lg:py-36">

        <img

          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90"

          alt="Open countryside fields and agricultural landscape"

          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"

          loading="lazy"

        />



        <div className="absolute inset-0 -z-10 bg-slate-950/60" />



        <div className="container-site relative">

          <div className="max-w-3xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-200">

              ABOUT JATTARI EXPLORER

            </p>



            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

              A Closer Look at

              <span className="mt-2 block text-sky-300">Jattari</span>

            </h2>



            <div className="mt-7 h-1.5 w-20 rounded-full bg-sky-300" />



            <p className="mt-7 text-base leading-8 text-white/90 sm:text-lg sm:leading-9">

              Jattari is a town in Uttar Pradesh, situated in Aligarh

              district. Its identity is connected with nearby settlements,

              regional roads and the everyday activities of the local

              community.

            </p>



            <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg sm:leading-9">

              Understanding a place involves more than knowing its name. It

              means exploring how people travel, where essential services are

              available, what facilities serve the community and how the

              surrounding neighbourhood fits into daily life.

            </p>



            <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg sm:leading-9">

              Jattari Explorer brings these subjects together in one guide.

              Use it as a starting point, and verify specific addresses,

              services and travel details before making plans.

            </p>



            <div className="mt-9 flex flex-wrap gap-4">

              <Link

                href="#location"

                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-sky-100"

              >

                Explore the Map <span aria-hidden="true">↗</span>

              </Link>



              <Link

                href="#explore"

                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"

              >

                Discover Jattari <span aria-hidden="true">↓</span>

              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* LOCATION AND MAP */}

      <section

        id="location"

        className="bg-background py-16 sm:py-20 lg:py-24"

      >

        <div className="container-site">

          <SectionHeading

            label="Location & Surroundings"

            title="Understand Where Jattari Fits In"

            description="Location is an important starting point when exploring any town. Jattari's position in Aligarh district and its connection with the Aligarh–Palwal Road provide useful context for understanding the surrounding region."

          />



          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <div className="flex flex-col justify-center rounded-3xl border border-border bg-white p-6 sm:p-8">

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-accent text-2xl">

                📍

              </span>



              <h3 className="mt-6 text-2xl font-extrabold">

                Jattari, Uttar Pradesh

              </h3>



              <p className={`mt-4 ${bodyText}`}>

                Use the map to locate Jattari and explore the surrounding

                area. Check exact addresses and routes before travelling to

                any particular destination.

              </p>



              <div className="mt-6 space-y-4 border-t border-border pt-6">

                <div>

                  <p className="text-sm text-muted">District</p>

                  <p className="mt-1 font-bold">Aligarh, Uttar Pradesh</p>

                </div>



                <div>

                  <p className="text-sm text-muted">Regional road</p>

                  <p className="mt-1 font-bold">Aligarh–Palwal Road</p>

                </div>

              </div>



              <a

                href="https://www.google.com/maps/search/?api=1&query=Jattari%2C+Uttar+Pradesh%2C+India"

                target="_blank"

                rel="noopener noreferrer"

                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"

              >

                Open in Google Maps <span aria-hidden="true">↗</span>

              </a>

            </div>



            <div className="relative min-h-[350px] overflow-hidden rounded-3xl border border-primary/15 bg-[#F5F7FA] p-5 shadow-sm sm:min-h-[450px] sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(#1D4ED8 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <svg aria-hidden="true" viewBox="0 0 600 440" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
                <path d="M40 80 C160 130 160 210 285 220 S440 300 560 350" fill="none" stroke="#DBEAFE" strokeWidth="5" strokeLinecap="round" />
                <path d="M70 370 C170 300 205 280 285 220 S390 130 530 65" fill="none" stroke="#1D4ED8" strokeOpacity=".4" strokeWidth="3" strokeDasharray="7 9" strokeLinecap="round" />
                <path d="M285 220 C260 150 220 110 165 65 M285 220 C365 200 420 210 520 205 M285 220 C330 300 350 345 385 390" fill="none" stroke="#2563EB" strokeOpacity=".45" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="relative z-10 flex min-h-[310px] flex-col items-center justify-center sm:min-h-[380px]">
                <div className="absolute left-[2%] top-[7%] rounded-xl border border-primary/10 bg-white/95 px-3 py-2 shadow-sm sm:left-[8%] sm:top-[10%] sm:px-4 sm:py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted sm:text-xs">Regional area</p><p className="mt-1 text-sm font-bold text-foreground sm:text-base">Aligarh</p>
                </div>
                <div className="absolute right-[1%] top-[18%] rounded-xl border border-primary/10 bg-white/95 px-3 py-2 shadow-sm sm:right-[7%] sm:px-4 sm:py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted sm:text-xs">Nearby region</p><p className="mt-1 text-sm font-bold text-foreground sm:text-base">Palwal</p>
                </div>
                <div className="absolute bottom-[12%] left-[2%] rounded-xl border border-primary/10 bg-white/95 px-3 py-2 shadow-sm sm:bottom-[10%] sm:left-[10%] sm:px-4 sm:py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted sm:text-xs">Local area</p><p className="mt-1 text-sm font-bold text-foreground sm:text-base">Khair</p>
                </div>
                <div className="absolute bottom-[9%] right-[1%] rounded-xl border border-primary/10 bg-white/95 px-3 py-2 shadow-sm sm:right-[8%] sm:px-4 sm:py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted sm:text-xs">Road link</p><p className="mt-1 text-sm font-bold text-foreground sm:text-base">Aligarh–Palwal</p>
                </div>
                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border-[6px] border-white bg-primary text-center text-white shadow-xl shadow-primary/20 sm:h-40 sm:w-40">
                  <span className="mb-1 text-2xl sm:text-3xl" aria-hidden="true">📍</span><span className="text-lg font-extrabold tracking-wide sm:text-2xl">JATTARI</span><span className="mt-1 text-[10px] font-medium text-white/80 sm:text-xs">Uttar Pradesh</span>
                  <span aria-hidden="true" className="absolute -inset-3 -z-10 rounded-full border border-primary/20" />
                </div>
                <div className="mt-5 rounded-full border border-primary/10 bg-white/90 px-4 py-2 text-center text-xs font-semibold text-primary shadow-sm sm:text-sm">Regional connectivity overview</div>
              </div>
              <p className="relative z-10 mt-2 text-center text-[10px] leading-5 text-muted sm:text-xs">Illustrative regional diagram — confirm exact routes and locations before travelling.</p>
            </div>

          </div>

        </div>

      </section>



      {/* CONNECTIVITY */}

      <section
        className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247, 248, 245, 0.91), rgba(247, 248, 245, 0.94)), url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >

        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          <div>

            <span className={sectionLabel}>Connectivity & Travel</span>



            <h2 className={`mt-5 ${sectionHeading}`}>

              Plan Your Journey Around Jattari

            </h2>



            <p className={`mt-6 ${bodyText}`}>

              Road connectivity plays an important role in how people reach

              workplaces, educational institutions, markets and other

              destinations. The Aligarh–Palwal Road is a key reference when

              researching Jattari's regional connections.

            </p>



            <p className={`mt-4 ${bodyText}`}>

              Before travelling, check your exact destination, available

              transport, current traffic conditions and any roadwork that may

              affect your route. Actual journey time depends on your starting

              point, vehicle, route and traffic.

            </p>



            <Link

              href="/#location"

              className="group mt-7 inline-flex items-center gap-3 font-semibold text-primary transition-colors hover:text-primary-hover"

            >

              Explore Location Information

              <span className="transition-transform duration-300 group-hover:translate-x-1">

                →

              </span>

            </Link>

          </div>



          <div className="space-y-0">

            {[

              {

                icon: "🚘",

                title: "Road Routes",

                description:

                  "Check the latest road route between your starting point and destination.",

              },

              {

                icon: "🚌",

                title: "Local Transport",

                description:

                  "Verify availability, timings and fares of transport services before travelling.",

              },

              {

                icon: "🧭",

                title: "Route Planning",

                description:

                  "Compare routes and confirm the location of your destination before departure.",

              },

              {

                icon: "🕒",

                title: "Travel Timing",

                description:

                  "Allow for traffic, weather and changing road conditions when planning a journey.",

              },

            ].map((item, index) => (

              <article

                key={item.title}

                className="grid grid-cols-[56px_1fr] gap-5 border-b border-border py-6 first:pt-0 last:border-b-0"

              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-accent text-2xl">

                  {item.icon}

                </div>



                <div>

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">

                    0{index + 1}

                  </span>

                  <h3 className="mt-1 text-xl font-bold">{item.title}</h3>

                  <p className={`mt-2 ${bodyText}`}>{item.description}</p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* LOCAL LIFE — COMPACT */}
      <section className="bg-white py-9 sm:py-11">
        <div className="container-site">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-[#DBEAFE] px-3 py-1.5 text-xs font-semibold text-[#1D4ED8]">
                Everyday Life
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
                Everyday Life in <span className="text-[#2563EB]">Jattari</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#6B7280]">
                A quick look at local facilities, surroundings and everyday essentials.
              </p>
            </div>
            <Link
              href="/#location"
              className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-[#2563EB] transition hover:gap-3"
            >
              Explore Location <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areaHighlights.map((item) => (
              <article
                key={item.number}
                className="group flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] p-4 transition duration-300 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] text-xl transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-wider text-[#2563EB]">
                      {item.number}
                    </span>
                    <h3 className="text-sm font-bold leading-5 text-[#1F2937]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* YOUR AREA GUIDE — COMPACT EXPLORATION PATH */}
      <section id="explore" className="relative overflow-hidden bg-[#F5F7FA] py-8 sm:py-10 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#DBEAFE]/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-[#1D4ED8]/10 blur-3xl" />

        <div className="container-site relative">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className={sectionLabel}>Your Area Guide</span>
              <h2 className={`mt-3 ${sectionHeading}`}>
                Explore Jattari <span className="text-[#1D4ED8]">Your Way.</span>
              </h2>
              <p className={`mt-3 max-w-xl text-sm leading-6 sm:text-base ${bodyText}`}>
                Start with what matters to you. Follow these guide points to explore Jattari’s location, everyday facilities, local surroundings and practical information at your own pace.
              </p>
              <div className="mt-4 flex items-center gap-2.5 text-sm font-semibold text-[#2563EB]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB] text-base text-white" aria-hidden="true">↘</span>
                <span>Choose a topic and keep exploring</span>
              </div>
            </div>

            <div className="relative lg:mt-0">
              <div aria-hidden="true" className="absolute bottom-5 left-[18px] top-5 w-px bg-gradient-to-b from-[#1D4ED8]/20 via-[#1D4ED8] to-[#1D4ED8]/20 sm:left-[22px]" />
              <div className="space-y-0">
                {exploreTopics.map((topic, index) => (
                  <article
                    key={topic.title}
                    className="group relative grid grid-cols-[38px_minmax(0,1fr)] gap-3 py-3 sm:grid-cols-[46px_minmax(0,1fr)] sm:gap-4 sm:py-4"
                  >
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#1D4ED8]/30 bg-[#F5F7FA] text-lg transition-all duration-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white sm:h-11 sm:w-11 sm:text-xl">
                      <span aria-hidden="true">{topic.icon}</span>
                    </div>
                    <div className="min-w-0 border-b border-[#2563EB]/15 pb-3 transition-transform duration-300 group-hover:translate-x-1 sm:pb-4">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1D4ED8]">Explore point {String(index + 1).padStart(2, "0")}</span>
                        <span aria-hidden="true" className="h-px w-6 bg-[#1D4ED8]/40" />
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-[#1E40AF] sm:text-xl">{topic.title}</h3>
                      <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">{topic.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-[#2563EB] px-4 py-4 text-white sm:flex sm:items-center sm:justify-between sm:gap-5 sm:px-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DBEAFE]">A useful starting point</p>
                  <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/85">Verify current addresses, services, approvals and travel details before making decisions.</p>
                </div>
                <Link href="/#location" className="mt-3 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3 sm:mt-0">
                  Explore Location <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PROPERTY RESEARCH — COMPACT */}
      <section className="relative overflow-hidden bg-white py-8 text-foreground sm:py-10 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-primary/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-primary/10" />
        <div className="container-site relative">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-soft-accent px-3 py-1.5 text-xs font-semibold text-primary">Property Research</span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">Make Property Decisions <span className="text-primary">With Care.</span></h2>
              <p className="mt-3 text-sm leading-6 text-muted">If you are researching residential plots or other property options in Jattari, look beyond location and price. Review access, surrounding facilities, records, approvals and essential services before making a decision.</p>
              <p className="mt-2 text-sm leading-6 text-muted">Prices, future development and investment returns are not guaranteed. Inspect the property, compare independent information and seek professional advice before committing financially.</p>
              <Link href="/#contact" className="group mt-4 inline-flex items-center gap-2 border-b border-primary/40 pb-1.5 text-sm font-semibold text-primary transition-all hover:gap-3">Ask an Enquiry <span aria-hidden="true">→</span></Link>
            </div>

            <div className="border-t border-border">
              <div className="flex items-start gap-3 border-b border-border py-4 sm:gap-4">
                <span className="pt-1 text-[11px] font-bold tracking-[0.18em] text-primary sm:w-8">01</span>
                <div className="flex-1"><h3 className="text-base font-bold sm:text-lg">Ownership & Documents</h3><p className="mt-1 text-sm leading-6 text-muted">Verify ownership, title records, relevant documents and any restrictions with qualified independent help.</p></div>
                <span className="text-xl text-primary" aria-hidden="true">⌕</span>
              </div>
              <div className="flex items-start gap-3 border-b border-border py-4 sm:gap-4">
                <span className="pt-1 text-[11px] font-bold tracking-[0.18em] text-primary sm:w-8">02</span>
                <div className="flex-1"><h3 className="text-base font-bold sm:text-lg">Approvals & Land Use</h3><p className="mt-1 text-sm leading-6 text-muted">Check applicable approvals, land-use permissions and rules with the relevant authority.</p></div>
                <span className="text-xl text-primary" aria-hidden="true">⌁</span>
              </div>
              <div className="flex items-start gap-3 border-b border-border py-4 sm:gap-4">
                <span className="pt-1 text-[11px] font-bold tracking-[0.18em] text-primary sm:w-8">03</span>
                <div className="flex-1"><h3 className="text-base font-bold sm:text-lg">Access & Essential Services</h3><p className="mt-1 text-sm leading-6 text-muted">Visit the location and assess road access, water, electricity, drainage and nearby everyday facilities.</p></div>
                <span className="text-xl text-primary" aria-hidden="true">↗</span>
              </div>
              <div className="flex items-start gap-3 border-b border-border py-4 sm:gap-4">
                <span className="pt-1 text-[11px] font-bold tracking-[0.18em] text-primary sm:w-8">04</span>
                <div className="flex-1"><h3 className="text-base font-bold sm:text-lg">Total Cost & Independent Advice</h3><p className="mt-1 text-sm leading-6 text-muted">Understand the complete cost, compare options and consult an independent property lawyer before signing or paying.</p></div>
                <span className="text-xl text-primary" aria-hidden="true">✓</span>
              </div>
              <p className="mt-4 border-l-2 border-[#DBEAFE] pl-3 text-xs leading-5 text-foreground/70"><strong className="text-primary">Please note:</strong> This guide is for general research only. Confirm documents and details independently; it is not a guarantee of property status or investment performance.</p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className={sectionLabel}>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Questions About Jattari
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
              Find answers about Jattari, local facilities, connectivity and property research.
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-3xl space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 bg-background shadow-sm"
                      : "border-border bg-white hover:border-primary/30 hover:shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 p-3.5 text-left sm:p-4"
                  >
                    <span className="flex min-w-0 items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-soft-accent text-primary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-0.5 text-sm font-semibold leading-6 text-foreground sm:text-base">
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-primary bg-primary text-white"
                          : "border-border bg-white text-primary"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5">
                      <p className="ml-10 border-t border-border pt-3 text-sm leading-6 text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* FINAL CTA */}

      <section className="bg-background py-16 sm:py-20 lg:py-24">

        <div className="container-site">

          <div className="relative isolate overflow-hidden rounded-3xl border border-primary/10 bg-white px-6 py-12 shadow-sm sm:px-10 sm:py-16 lg:px-16">

            <div

              aria-hidden="true"

              className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border border-primary/10 sm:h-96 sm:w-96"

            />



            <div

              aria-hidden="true"

              className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-64 w-64 rounded-full bg-soft-accent/70 blur-3xl"

            />



            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">

              <div className="max-w-3xl">

                <span className={sectionLabel}>Continue Exploring</span>



                <h2 className={`mt-5 ${sectionHeading}`}>

                  Your Guide to

                  <span className="block text-primary">

                    Discovering Jattari

                  </span>

                </h2>



                <p className={`mt-5 max-w-2xl ${bodyText}`}>

                  Continue exploring the location, local surroundings,

                  connectivity and useful information about Jattari. Start

                  with the topics that matter most to you.

                </p>

              </div>



              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                <Link

                  href="/#explore"

                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg"

                >

                  Explore Jattari

                  <span className="transition-transform duration-300 group-hover:translate-x-1">

                    →

                  </span>

                </Link>



                <Link

                  href="/#contact"

                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-white px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-md"

                >

                  Get in Touch

                </Link>

              </div>

            </div>



            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted">

              <span className="inline-flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-primary" />

                Explore the location

              </span>

              <span className="inline-flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-primary" />

                Learn about local facilities

              </span>

              <span className="inline-flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-primary" />

                Research with confidence

              </span>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}
