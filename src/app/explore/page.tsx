
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const places = [
  {
    number: "01",
    title: "Location & Connectivity",
    description:
      "Explore Jattari's geographical location, nearby towns, road routes, transport options, and regional connectivity.",
    href: "/location-connectivity",
    label: "Explore location",
  },
  {
    number: "02",
    title: "Attractions & Places to Visit",
    description:
      "Discover parks, historic landmarks, cultural destinations, and places to explore around Jattari and the Aligarh region.",
    href: "/explore/attractions",
    label: "Explore attractions",
  },
  {
    number: "04",
    title: "History & Culture",
    description:
      "Discover the wider Aligarh region's historical background, local traditions, and everyday life.",
    href: "/explore/history-culture",
    label: "Explore history & culture",
  },
  {
    number: "05",
    title: "Food & Local Eateries",
    description:
      "Explore regional food traditions and learn more about local eating experiences.",
    href: "/explore/food",
    label: "Explore food",
  },
  {
    number: "06",
    title: "Lifestyle & Markets",
    description:
      "Learn about shopping areas, small businesses, local services, and daily activities.",
    href: "/explore/lifestyle-markets",
    label: "Explore lifestyle",
  },
  {
    number: "07",
    title: "Travel Tips",
    description:
      "Prepare for your visit with practical information to help you explore the area.",
    href: "/explore/travel-tips",
    label: "View travel tips",
  },
];

const revealClass =
  "explore-reveal translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none";

export default function ExplorePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".explore-reveal"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const reveal = (element: HTMLElement) => {
      element.classList.remove("translate-y-8", "opacity-0");
      element.classList.add("translate-y-0", "opacity-100");
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => reveal(element));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
      {/* HERO SECTION */}
      <section className="group/hero relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#06483D] sm:min-h-[500px] md:min-h-[540px] md:px-12">
        <Image
          src="/images/explore-jattari.jpeg"
          alt="Explore Jattari and its surrounding area"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-center transition-transform duration-[12000ms] ease-out group-hover/hero:scale-105 motion-reduce:transition-none motion-reduce:group-hover/hero:scale-100"
        />

        {/* Image overlays */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#06483D]/80 via-[#06483D]/45 to-[#06483D]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#06483D]/50 via-transparent to-[#06483D]/20"
        />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full border border-[#FFF9F0]/20 transition-transform duration-1000 group-hover/hero:rotate-45" />

        <div className="pointer-events-none absolute -bottom-28 left-1/3 z-10 h-72 w-72 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 group-hover/hero:scale-125" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-16 md:px-0 md:py-20">
          <div className="max-w-4xl">
            <p
              className={`${revealClass} mt-12 text-xs font-bold uppercase tracking-[0.3em] text-[#F2AE45] sm:text-sm`}
            >
              Discover the Region
            </p>

            <h1
              className={`${revealClass} mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl`}
              style={{ transitionDelay: "100ms" }}
            >
              Explore Jattari
              <span className="mt-2 block text-[#F2AE45]">
                Places, People &amp; Everyday Life
              </span>
            </h1>

            <p
              className={`${revealClass} mt-6 max-w-2xl text-sm leading-7 text-white/90 drop-shadow sm:text-base sm:leading-8 md:text-lg`}
              style={{ transitionDelay: "200ms" }}
            >
              Discover Jattari in Aligarh district, Uttar Pradesh. Explore its
              location, nearby attractions, local facilities, markets, culture,
              food, and useful information for visitors.
            </p>

            <a
              href="#explore-topics"
              className={`${revealClass} mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2AE45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06483D]`}
              style={{ transitionDelay: "300ms" }}
            >
              Start Exploring
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <div
              className={`${revealClass} mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-6 text-sm text-white/90`}
              style={{ transitionDelay: "400ms" }}
            >
              <span>
                <strong className="text-white">Location</strong>
                <span className="mx-2 text-[#F2AE45]">/</span>
                Jattari
              </span>

              <span>
                <strong className="text-white">Region</strong>
                <span className="mx-2 text-[#F2AE45]">/</span>
                Western Uttar Pradesh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          <div className={revealClass}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Get to Know Jattari
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
              A closer look at the town and its surroundings
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              Every place has its own character. Explore Jattari through its
              location, nearby destinations, local markets, essential
              services, regional history, and everyday experiences.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#64736D] sm:text-base">
              Use these guides to find helpful information about the area.
              Details such as opening hours, routes, available services, and
              local facilities should be checked before travelling.
            </p>

            <Link
              href="/explore/introduction"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-colors duration-300 hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
            >
              Get introduced to Jattari
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          </div>

          <div
            className={`${revealClass} relative border-l-4 border-[#D58A28] py-3 pl-6 transition-all duration-500 hover:translate-x-2 sm:pl-8`}
            style={{ transitionDelay: "150ms" }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
              Explore at your pace
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-[#172B26] sm:text-3xl">
              Understand the location. Discover the community.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              From practical visitor information to regional attractions,
              each guide gives you another way to learn about Jattari.
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#D58A28] transition-all duration-500 hover:w-28" />
          </div>
        </div>
      </section>

      {/* EXPLORE TOPICS */}
      <section
        id="explore-topics"
        className="scroll-mt-24 border-y border-[#06483D]/15 bg-[#F3EBDD] px-6 py-14 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className={revealClass}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Explore by Topic
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
              What would you like to discover?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              Choose a topic to explore information about Jattari and its
              surrounding region.
            </p>
          </div>

          <div className="mt-9 border-t border-[#06483D]/20">
            {places.map((place, index) => (
              <article
                key={place.number}
                className={`${revealClass} group grid gap-4 border-b border-[#06483D]/15 py-6 transition-all duration-300 hover:bg-[#FFF9F0]/70 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-6 sm:px-4`}
                style={{
                  transitionDelay: `${Math.min(index * 70, 350)}ms`,
                }}
              >
                <span className="text-sm font-bold tracking-widest text-[#B9741C] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#06483D]">
                  {place.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-[#172B26] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0B5A49] sm:text-xl">
                    {place.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64736D] transition-colors duration-300 group-hover:text-[#435B51]">
                    {place.description}
                  </p>
                </div>

                <Link
                  href={place.href}
                  className="inline-flex items-center gap-2 justify-self-start text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:text-[#B9741C] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] sm:justify-self-end"
                >
                  {place.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div
          className={`${revealClass} mx-auto max-w-6xl border-t border-[#06483D]/15 pt-8 sm:pt-10`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
            Your Jattari Guide
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-[#172B26] sm:text-3xl md:text-4xl">
            Keep exploring and learn more about the area.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64736D] sm:text-base">
            Browse the available guides to learn about local facilities,
            regional culture, attractions, shopping, and practical travel
            information.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/location-connectivity"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#06483D] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Location &amp; Connectivity
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/explore/attractions"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Attractions &amp; Places to Visit
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/explore/contact-feedback"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Contact &amp; Feedback
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
