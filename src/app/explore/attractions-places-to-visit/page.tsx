"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Compass,
  Clock,
  Trees,
  Church,
  Route,
  ShieldCheck,
  Sparkles,
  Search,
  CalendarDays,
  Info,
  ExternalLink,
  Mountain,
} from "lucide-react";

const places = [
  {
    number: "01",
    name: "Khatu Shyam Jattari Dham",
    category: "Religious Places",
    type: "Temple",
    location: "Aligarh–Palwal Road, Jattari",
    description:
      "A local place of worship dedicated to Baba Khatu Shyam. It can be included in a visit around Jattari for people interested in devotional places and local religious traditions.",
    image: "/images/khatu shyam.jpeg",
    tag: "Local spiritual landmark",
    featured: true,
  },
  {
    number: "02",
    name: "Dauji Mandir",
    category: "Religious Places",
    type: "Temple",
    location: "Jattari",
    description:
      "A local temple associated with Lord Balram. It represents the religious and community life of Jattari and is relevant for visitors exploring local places of worship.",
    image: "/images/dauji-mandir.jpeg",
    tag: "Local temple",
    featured: true,
  },
  {
    number: "03",
    name: "Shri Radha Damodar Mandir",
    category: "Religious Places",
    type: "Temple",
    location: "Bagichi, Jattari",
    description:
      "A local temple associated with Radha and Damodar. Visitors interested in devotional traditions can include this place while exploring the religious landmarks of Jattari.",
    image: "/images/radha-damodar.jpeg",
    tag: "Devotional heritage",
    featured: false,
  },
  {
    number: "04",
    name: "Bhola Mandir",
    category: "Religious Places",
    type: "Temple",
    location: "Jattari, near SH-22A",
    description:
      "A local Shiva temple listed in the Jattari area. It is a neighbourhood religious landmark rather than a large tourist attraction.",
    image: "/images/bhola-mandir.jpeg",
    tag: "Local place of worship",
    featured: false,
  },
  {
    number: "05",
    name: "Shiv Mandir",
    category: "Nearby Places",
    type: "Temple",
    location: "Fazilpur Kalan, Pisawa–Jattari Road",
    description:
      "A nearby village temple that can be explored by visitors interested in the religious places and local communities around Jattari.",
    image: "/images/shiv-mandir.jpeg",
    tag: "Nearby village temple",
    featured: false,
  },
  {
    number: "06",
    name: "Shri Siddh Baba",
    category: "Nearby Places",
    type: "Religious Site",
    location: "Jikarpur",
    description:
      "A local religious site in the Jikarpur area. It offers another option for discovering the small temples and devotional places around Jattari.",
    image: "/images/siddh-baba.jpeg",
    tag: "Nearby religious site",
    featured: false,
  },
  {
    number: "07",
    name: "Ambedkar Park",
    category: "Parks & Outdoors",
    type: "Park",
    location: "Tappal",
    description:
      "A park listing in the Tappal area that may be worth checking for a short outdoor visit. Confirm public access and available facilities before travelling.",
    image: "/images/ambedkar-park.jpeg",
    tag: "Outdoor space",
    featured: false,
  },
  {
    number: "08",
    name: "Ramleela Ground",
    category: "Culture & Community",
    type: "Community Ground",
    location: "Aligarh–Palwal Road, Jattari",
    description:
      "A local community ground associated with public and cultural activities. It is better understood as a community landmark than a regular tourist park.",
    image: "/images/ramleela.jpeg",
    tag: "Community landmark",
    featured: false,
  },
];

const categories = [
  "All Places",
  "Religious Places",
  "Nearby Places",
  "Parks & Outdoors",
  "Culture & Community",
];

const travelTips = [
  {
    number: "01",
    title: "Check the route first",
    description:
      "Use a navigation app to confirm the exact location, road route and current travel conditions before leaving.",
    icon: Route,
  },
  {
    number: "02",
    title: "Confirm visiting arrangements",
    description:
      "Temple timings, public access and local arrangements may vary. Check with local sources before planning.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Respect local traditions",
    description:
      "Follow the customs of religious places, dress appropriately and respect the people and surroundings.",
    icon: ShieldCheck,
  },
];

const localExperiences = [
  {
    title: "Religious traditions",
    description:
      "Explore local temples and places of worship that are part of everyday community life.",
    icon: Church,
  },
  {
    title: "Village surroundings",
    description:
      "Discover nearby settlements, local roads and the character of the countryside around Jattari.",
    icon: Mountain,
  },
  {
    title: "Community culture",
    description:
      "Learn about local gathering spaces and cultural activities such as Ramleela celebrations.",
    icon: CalendarDays,
  },
];

function getMapUrl(name: string, location: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${name}, ${location}, Uttar Pradesh`
  )}`;
}

export default function AttractionsPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.remove("opacity-0", "translate-y-8");
        section.classList.add("opacity-100", "translate-y-0");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const reveal =
    "reveal-section translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-gradient-to-br from-[#062F29] via-[#06483D] to-[#0B5A49] lg:min-h-[740px]">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -right-20 top-10 h-[420px] w-[420px] animate-[spin_50s_linear_infinite] rounded-full border border-white/30 lg:h-[580px] lg:w-[580px]" />
          <div className="absolute -right-10 top-28 h-[300px] w-[300px] animate-[spin_35s_linear_infinite_reverse] rounded-full border border-[#D58A28]/50 lg:h-[430px] lg:w-[430px]" />
          <div className="absolute -bottom-48 -left-20 h-[500px] w-[500px] rounded-full border border-white/20" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#062F29]/40 via-transparent to-[#06483D]/20" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[740px] lg:px-12">
          <div className="max-w-4xl animate-[fadeInUp_900ms_ease-out_both]">
            <div className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E6B86F] sm:text-sm">
              <span className="h-px w-9 bg-[#D58A28]" />
              Attractions & Local Discoveries
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Explore the places
              <span className="mt-2 block text-[#E6B86F]">
                that make Jattari special.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/80 sm:text-base md:text-lg">
              From local temples and community landmarks to nearby outdoor
              spaces, discover places in Jattari and its surrounding villages.
              Explore the local character of the region, one destination at
              a time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#destinations"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-[#D58A28] px-7 py-3 font-bold text-[#172B26] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5A443] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Discover places
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#travel-guide"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Visitor guide
                <Compass
                  size={18}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/20 pt-7 text-sm font-medium text-white/85">
              <span className="flex items-center gap-2 transition-colors hover:text-[#E6B86F]">
                <MapPin size={17} className="text-[#E6B86F]" />
                Jattari & nearby areas
              </span>

              <span className="flex items-center gap-2 transition-colors hover:text-[#E6B86F]">
                <Church size={17} className="text-[#E6B86F]" />
                Temples & local heritage
              </span>

              <span className="flex items-center gap-2 transition-colors hover:text-[#E6B86F]">
                <Trees size={17} className="text-[#E6B86F]" />
                Community & outdoor places
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[260px] border-l border-t border-white/20 bg-[#06483D]/70 p-6 backdrop-blur-md transition-all duration-500 hover:bg-[#06483D]/90 lg:block">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E6B86F]">
            Discover locally
          </p>
          <p className="mt-2 text-lg font-bold text-white">
            Places. People. Traditions.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={`${reveal} relative px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B9741C] sm:text-sm">
              <span className="h-px w-9 bg-[#D58A28]" />
              Discover the neighbourhood
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#172B26] sm:text-4xl lg:text-5xl">
              More than destinations.
              <span className="mt-2 block text-[#0B5A49]">
                A glimpse of local life.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#64736D] sm:text-base">
              Jattari and its surrounding villages offer a mix of local
              religious places, community spaces and everyday countryside
              experiences. These destinations provide a way to understand
              the local culture and explore places that are part of the
              surrounding community.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#64736D] sm:text-base">
              This guide focuses on Jattari and nearby places rather than
              distant Aligarh city attractions. Exact distances, road routes
              and visitor access should be checked before each visit.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Local temples", "Nearby villages", "Community spaces"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D8CDBB] bg-white px-4 py-2 text-xs font-semibold text-[#0B5A49] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:shadow-md"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-[#D58A28] transition-all duration-500 group-hover:-left-2 group-hover:-top-2" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#E7DCCB] bg-white p-2.5 shadow-[0_25px_65px_rgba(6,72,61,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(6,72,61,0.18)]">
              <div className="relative h-[340px] overflow-hidden rounded-[1.5rem] sm:h-[440px]">
                <Image
                  src="/images/ramleela.jpeg"
                  alt="Ramleela community ground in Jattari"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062F29]/85 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <Sparkles size={14} />
                    Local culture
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    Discover the spirit of Jattari.
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                    Explore the places and traditions that connect local
                    communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-3 rounded-2xl border border-[#E7DCCB] bg-white px-5 py-4 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:-right-5">
              <p className="text-sm font-bold text-[#06483D]">
                Explore nearby
              </p>
              <p className="mt-1 text-xs text-[#64736D]">
                Discover · Learn · Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL REAL ESTATE CONNECTION */}
      <section className={`${reveal} border-y border-[#E7DCCB] bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12`}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
                Discover the wider neighbourhood
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
                Explore Jattari beyond its attractions.
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
                Getting to know a place also means understanding its
                neighbourhood, residential options and local development.
                If you are exploring the area from a real-estate perspective,
                these names may be useful starting points for further research.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border border-[#E7DCCB] bg-[#FFF9F0] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/60 hover:shadow-[0_18px_40px_rgba(6,72,61,0.10)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9741C]">
                  Local real-estate connection
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#06483D] transition-colors group-hover:text-[#B9741C]">
                  Anugrah Homes
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64736D]">
                  Explore Anugrah Homes as a name connected with the Jattari
                  real-estate landscape. Review available property details
                  and verify project information before making a decision.
                </p>

                <Link
                  href="/real-estate"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:gap-3 hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
                >
                  Explore real estate
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="group rounded-2xl border border-[#E7DCCB] bg-[#FFF9F0] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/60 hover:shadow-[0_18px_40px_rgba(6,72,61,0.10)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9741C]">
                  Area development connection
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#06483D] transition-colors group-hover:text-[#B9741C]">
                  Skyline Aero Homes
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64736D]">
                  Skyline Aero Homes is another name to explore while
                  researching property and development around the wider
                  Jattari region. Check location, approvals and project
                  information independently.
                </p>

                <Link
                  href="/real-estate"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:gap-3 hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
                >
                  Explore real estate
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className={`${reveal} relative overflow-hidden bg-[#F3EBDD] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}>
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#D58A28]/20" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
                Featured destinations
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#172B26] sm:text-4xl lg:text-5xl">
                Places worth discovering.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#64736D] sm:text-base">
                Start with some of the local places of worship and landmarks
                that help introduce the character of Jattari.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#D8CDBB] bg-[#FFF9F0] px-4 py-2.5 text-xs font-bold text-[#0B5A49] transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:self-auto">
              <MapPin size={15} className="text-[#B9741C]" />
              Within the Jattari area
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {places
              .filter((place) => place.featured)
              .map((place, index) => (
                <article
                  key={place.number}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#E5D8C4] bg-[#FFF9F0] shadow-[0_12px_35px_rgba(6,72,61,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(6,72,61,0.14)]"
                >
                  <div className="relative h-[270px] overflow-hidden sm:h-[330px]">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#062F29]/80 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#062F29]/90" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#FFF9F0]/95 px-4 py-2 text-xs font-bold text-[#06483D] transition-transform duration-300 group-hover:-translate-y-1">
                      {place.tag}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B86F]">
                          Destination {place.number}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                          {place.name}
                        </h3>
                      </div>

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D58A28] text-[#172B26] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                        <Church size={23} />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-sm leading-7 text-[#64736D]">
                      {place.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7DCCB] pt-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-[#64736D]">
                        <MapPin size={17} className="text-[#B9741C]" />
                        {place.location}
                      </div>

                      <a
                        href={getMapUrl(place.name, place.location)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-colors hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
                      >
                        View map
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* ALL PLACES WITH FILTER */}
      <section
        id="destinations"
        className={`${reveal} scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              Explore more places
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#172B26] sm:text-4xl lg:text-5xl">
              More discoveries around Jattari.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              Browse local religious sites, nearby village destinations,
              outdoor spaces and community landmarks.
            </p>
          </div>

          <PlacesExplorer />
        </div>
      </section>

      {/* LOCAL EXPERIENCES */}
      <section className={`${reveal} border-y border-[#E7DCCB] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              Beyond sightseeing
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
              Experience the local character.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              Exploring Jattari is also about understanding the everyday
              surroundings, religious traditions and community life that
              shape the area.
            </p>

            <Link
              href="/explore/history-culture"
              className="group mt-7 inline-flex items-center gap-2 font-bold text-[#0B5A49] transition-all duration-300 hover:gap-3 hover:text-[#B9741C]"
            >
              Discover Jattari history & culture
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {localExperiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className="group rounded-2xl border border-[#E7DCCB] bg-[#FFF9F0] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/60 hover:shadow-[0_18px_35px_rgba(6,72,61,0.10)] sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06483D] text-[#E6B86F] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#D58A28] group-hover:text-[#172B26]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#172B26] transition-colors group-hover:text-[#0B5A49]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64736D]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDE */}
      <section
        id="travel-guide"
        className={`${reveal} px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              Before you visit
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
              Make your visit more meaningful.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              A little preparation can make exploring nearby places easier.
              Keep these simple points in mind before starting your journey.
            </p>

            <div className="mt-8 rounded-2xl border border-[#D58A28]/30 bg-[#F3EBDD] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-3">
                <Info size={20} className="mt-0.5 shrink-0 text-[#B9741C]" />
                <p className="text-sm leading-7 text-[#64736D]">
                  Some destinations are small local religious sites or
                  community spaces. Public access, facilities and timings
                  may not be published online.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-[#E7DCCB] border-y border-[#E7DCCB]">
            {travelTips.map((tip, index) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.number}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className="group grid gap-4 py-7 transition-all duration-300 hover:translate-x-2 sm:grid-cols-[64px_1fr] sm:items-start sm:gap-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06483D] text-[#E6B86F] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#D58A28] group-hover:text-[#172B26]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-wider text-[#B9741C]">
                        {tip.number}
                      </span>
                      <h3 className="text-lg font-bold text-[#172B26] transition-colors group-hover:text-[#0B5A49]">
                        {tip.title}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64736D]">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INFORMATION NOTE */}
      <section className={`${reveal} px-5 pb-16 sm:px-8 lg:px-12`}>
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#E7DCCB] bg-[#F3EBDD] p-6 transition-all duration-500 hover:border-[#D58A28]/50 hover:shadow-lg sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#06483D] text-[#E6B86F] transition-transform duration-500 hover:rotate-6">
              <ShieldCheck size={23} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#172B26]">
                About the information on this page
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#64736D]">
                This guide highlights local places and nearby listings for
                discovery. It is not an official tourism directory. Names,
                exact locations, public access, opening hours and facilities
                should be confirmed locally before publishing visitor
                instructions or planning a trip. The 20 km area is an
                approximate discovery scope, not a guarantee of road distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#06483D]">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 animate-[spin_45s_linear_infinite] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-5 -top-10 h-64 w-64 rounded-full border border-[#D58A28]/20" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E6B86F] sm:text-sm">
              Keep discovering
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              There is more to discover in Jattari.
            </h2>

            <p className="mt-4 text-sm leading-8 text-white/75 sm:text-base">
              Explore local history, culture, markets and everyday life to
              understand the neighbourhood beyond its destinations.
            </p>
          </div>

          <Link
            href="/explore"
            className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#D58A28] px-7 py-3 font-bold text-[#172B26] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5A443] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 md:self-center"
          >
            Explore Jattari
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* CLIENT-SIDE PLACES FILTER */

function PlacesExplorer() {
  const [activeCategory, setActiveCategory] = useState("All Places");
  const [searchQuery, setSearchQuery] = useState("");

  const visiblePlaces = places.filter((place) => {
    if (place.featured) return false;

    const matchesCategory =
      activeCategory === "All Places" ||
      place.category === activeCategory;

    const searchText =
      `${place.name} ${place.location} ${place.description} ${place.category}`.toLowerCase();

    const matchesSearch = searchText.includes(
      searchQuery.trim().toLowerCase()
    );

    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setActiveCategory("All Places");
    setSearchQuery("");
  };

  return (
    <div className="mt-10">
      {/* FILTER BAR */}
      <div className="rounded-2xl border border-[#E7DCCB] bg-[#F3EBDD] p-4 transition-shadow duration-300 hover:shadow-md sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2 sm:text-sm ${
                  activeCategory === category
                    ? "scale-[1.03] bg-[#06483D] text-white shadow-md"
                    : "border border-[#D8CDBB] bg-[#FFF9F0] text-[#64736D] hover:-translate-y-0.5 hover:border-[#D58A28] hover:text-[#06483D] hover:shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-[270px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64736D] transition-colors"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search places..."
              aria-label="Search attractions"
              className="min-h-[46px] w-full rounded-xl border border-[#D8CDBB] bg-[#FFF9F0] pl-11 pr-4 text-sm text-[#172B26] outline-none transition-all duration-300 placeholder:text-[#9A9F99] hover:border-[#B9A98F] focus:border-[#0B5A49] focus:ring-4 focus:ring-[#06483D]/10"
            />
          </div>
        </div>
      </div>

      {/* RESULT COUNT */}
      <div className="mt-7 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[#64736D]">
          Showing{" "}
          <span className="font-bold text-[#06483D]">
            {visiblePlaces.length}
          </span>{" "}
          {visiblePlaces.length === 1 ? "place" : "places"}
        </p>

        {(activeCategory !== "All Places" || searchQuery !== "") && (
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg px-2 py-1 text-sm font-bold text-[#B9741C] transition-all duration-300 hover:bg-[#F3EBDD] hover:text-[#06483D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* PLACES GRID */}
      {visiblePlaces.length > 0 ? (
        <div
          key={`${activeCategory}-${searchQuery}`}
          className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visiblePlaces.map((place, index) => (
            <article
              key={place.number}
              style={{
                animationDelay: `${index * 90}ms`,
              }}
              className="group flex h-full animate-[fadeInUp_500ms_ease-out_both] flex-col overflow-hidden rounded-2xl border border-[#E7DCCB] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/60 hover:shadow-[0_18px_40px_rgba(6,72,61,0.12)]"
            >
              <div className="relative h-[220px] overflow-hidden bg-[#F3EBDD]">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062F29]/65 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#062F29]/80" />

                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#FFF9F0]/95 px-3 py-2 text-[11px] font-bold text-[#06483D] transition-transform duration-300 group-hover:-translate-y-1">
                  {place.category}
                </span>

                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.18em] text-[#E6B86F]">
                  {place.number} / LOCAL DISCOVERY
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49]">
                  {place.name}
                </h3>

                <p className="mt-3 flex items-start gap-2 text-xs font-medium text-[#64736D]">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#B9741C]" />
                  {place.location}
                </p>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#64736D]">
                  {place.description}
                </p>

                <div className="mt-6 border-t border-[#E7DCCB] pt-4">
                  <a
                    href={getMapUrl(place.name, place.location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/map inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-colors hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
                  >
                    View on Google Maps
                    <ExternalLink
                      size={15}
                      className="transition-transform duration-300 group-hover/map:translate-x-1 group-hover/map:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-[#D8CDBB] bg-[#F3EBDD] px-6 py-16 text-center animate-[fadeInUp_400ms_ease-out_both]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06483D] text-[#E6B86F] transition-transform duration-500 hover:rotate-12 hover:scale-110">
            <Search size={24} />
          </div>

          <h3 className="mt-5 text-xl font-bold text-[#172B26]">
            No places found
          </h3>

          <p className="mt-2 text-sm leading-7 text-[#64736D]">
            Try another search term or select a different category.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 rounded-xl bg-[#06483D] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#06483D]/20"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}