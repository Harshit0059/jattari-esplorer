
"use client";

import { useEffect, useState } from "react";
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

const googleMapsEmbedUrl =
  "https://maps.google.com/maps?q=Jattari%2C%20Uttar%20Pradesh%20202137&output=embed";

const streetViewEmbedUrl =
  "https://www.google.com/maps/embed?pb=!4v0!6m8!1m7!1sV8isf-s3muwJvyYN7ikvKw!2m2!1d28.0288648!2d77.65919!3f51.02!4f0!5f0.7820865974627469";

export default function ExplorePage() {
  const [streetViewLoading, setStreetViewLoading] = useState(false);
  const [streetViewOpen, setStreetViewOpen] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Reveal sections as they enter the viewport.
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
      elements.forEach(reveal);
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

  // Full-screen 5-second Street View preparation animation.
  useEffect(() => {
    if (!streetViewLoading) return;

    setScanProgress(0);

    const startTime = Date.now();
    const duration = 5000;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);

      setScanProgress(progress);

      if (elapsed >= duration) {
        window.clearInterval(interval);
        setScanProgress(100);
        setStreetViewLoading(false);
        setStreetViewOpen(true);
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [streetViewLoading]);

  const handleOpenStreetView = () => {
    setStreetViewOpen(false);
    setScanProgress(0);
    setStreetViewLoading(true);
  };

  const handleCloseStreetView = () => {
    setStreetViewOpen(false);
    setStreetViewLoading(false);
    setScanProgress(0);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F8FA] text-[#10251F]">
      {/* HERO SECTION */}
      <section className="group/hero relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#F4F8FA] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[760px] md:px-12">
        <Image
          src="/images/explore-jattari.jpeg"
          alt="Explore Jattari and its surrounding area"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-center opacity-95 transition-transform duration-[12000ms] ease-out group-hover/hero:scale-105 motion-reduce:transition-none motion-reduce:group-hover/hero:scale-100"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-[#8FC8F1]/60 via-[#B7DDF4]/25 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 via-35% to-transparent" />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full border border-[#F4F8FA]/20 transition-transform duration-1000 group-hover/hero:rotate-45" />

        <div className="pointer-events-none absolute -bottom-28 left-1/3 z-10 h-72 w-72 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 group-hover/hero:scale-125" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-32 pb-16 sm:px-10 sm:pt-36 sm:pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p
              className={`${revealClass} mt-12 text-xs font-bold uppercase tracking-[0.3em] text-[#B9741C] sm:text-sm`}
            >
              Discover the Region
            </p>

            <h1
              className={`${revealClass} mt-4 text-4xl font-extrabold leading-tight text-[#10251F] sm:text-5xl md:text-6xl lg:text-7xl`}
              style={{ transitionDelay: "100ms" }}
            >
              Explore Jattari
              <span className="mt-2 block text-[#D58A28]">
                Places, People &amp; Everyday Life
              </span>
            </h1>

            <p
              className={`${revealClass} mt-6 max-w-2xl text-sm leading-7 text-[#10251F] font-medium sm:text-base sm:leading-8 md:text-lg`}
              style={{ transitionDelay: "200ms" }}
            >
              Discover Jattari in Aligarh district, Uttar Pradesh. Explore its
              location, nearby attractions, local facilities, markets, culture,
              food, and useful information for visitors.
            </p>

            <a
              href="#explore-topics"
              className={`${revealClass} mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2AE45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF5F8]`}
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
              className={`${revealClass} mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#10251F]/10 pt-6 text-sm text-[#10251F] font-medium`}
              style={{ transitionDelay: "400ms" }}
            >
              <span>
                <strong className="text-[#10251F]">Location</strong>
                <span className="mx-2 text-[#D58A28]">/</span>
                Jattari
              </span>

              <span>
                <strong className="text-[#10251F]">Region</strong>
                <span className="mx-2 text-[#D58A28]">/</span>
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

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#10251F] sm:text-4xl">
              A closer look at the town and its surroundings
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#10251F] font-medium sm:text-base">
              Every place has its own character. Explore Jattari through its
              location, nearby destinations, local markets, essential
              services, regional history, and everyday experiences.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#10251F] font-medium sm:text-base">
              Use these guides to find helpful information about the area.
              Details such as opening hours, routes, available services, and
              local facilities should be checked before travelling.
            </p>

            <Link
              href="/explore/introduction"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#254C3C] transition-colors duration-300 hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
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

            <h3 className="mt-4 text-2xl font-bold leading-snug text-[#10251F] sm:text-3xl">
              Understand the location. Discover the community.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#10251F] font-medium sm:text-base">
              From practical visitor information to regional attractions,
              each guide gives you another way to learn about Jattari.
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#D58A28] transition-all duration-500 hover:w-28" />
          </div>
        </div>
      </section>

      {/* JATTARI STREET VIEW */}
      <section className="relative overflow-hidden bg-[#EAF2F6] px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="explore-reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10251F]/15 bg-[#F4F8FA] px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#D58A28]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#10251F]">
                  Explore Jattari in 360°
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#10251F] sm:text-4xl">
                Take a closer look
                <span className="mt-1 block text-[#254C3C]">at Jattari</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#10251F] font-medium sm:text-base">
                Explore a real Google Street View panorama from Jattari,
                Aligarh district. Move around the 360° view and get a
                street-level glimpse of the selected location.
              </p>

              <div className="mt-7 flex items-start gap-3 border-t border-[#10251F]/15 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10251F] text-[#F4F8FA]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.3"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#10251F]">
                    Jattari, Aligarh District
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#10251F] font-medium">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Street View button */}
              {!streetViewOpen && !streetViewLoading && (
                <button
                  type="button"
                  onClick={handleOpenStreetView}
                  className="group mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-[#D58A28] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B9741C] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
                >
                  Explore in 360°
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </button>
              )}
            </div>

            {/* MAP AREA */}
            <div className="min-w-0">
              {/* Google Map is visible when the page loads */}
              {!streetViewOpen && !streetViewLoading && (
                <div className="overflow-hidden rounded-2xl border border-[#10251F]/10 bg-white p-2.5 shadow-[0_16px_45px_rgb(23_43_38_/_12%)] sm:p-3">
                  <div className="flex items-center justify-between gap-3 px-2 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F2F6] text-[#10251F]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M3 6.5 8.5 4l7 2.5L21 4v13.5L15.5 20l-7-2.5L3 20V6.5Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.5 4v13.5M15.5 6.5V20"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                        </svg>
                      </span>

                      <span className="text-xs font-bold text-[#10251F] sm:text-sm">
                        Google Maps · Jattari
                      </span>
                    </div>

                    <span className="rounded-full bg-[#E8F2F6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#10251F] sm:text-[11px]">
                      Map View
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-[#D8E5E8]">
                    <iframe
                      title="Google Map of Jattari, Aligarh District"
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="420"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block h-[280px] w-full sm:h-[360px] lg:h-[420px]"
                    />
                  </div>

                  <p className="px-2 pt-3 text-xs text-[#10251F] font-medium">
                    Explore the location of Jattari on Google Maps
                  </p>
                </div>
              )}

              {/* Street View panel appears after animation */}
              {streetViewOpen && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-700 rounded-2xl border border-[#10251F]/10 bg-white p-2.5 shadow-[0_16px_45px_rgb(23_43_38_/_12%)] sm:p-3">
                  <div className="flex items-center justify-between gap-3 px-2 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F2F6] text-[#10251F]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="8.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M3.8 12h16.4M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5s-1 6.1-3.2 8.5c-2.2-2.4-3.2-5.2-3.2-8.5s1-6.1 3.2-8.5Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                        </svg>
                      </span>

                      <span className="text-xs font-bold text-[#10251F] sm:text-sm">
                        Google Street View
                      </span>
                    </div>

                    <span className="rounded-full bg-[#FFF0D8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#975D15] sm:text-[11px]">
                      360° Panorama
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-[#D8E5E8]">
                    <iframe
                      title="Google Street View of Jattari, Aligarh District"
                      src={streetViewEmbedUrl}
                      width="100%"
                      height="420"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block h-[280px] w-full sm:h-[360px] lg:h-[420px]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-3">
                    <p className="text-xs text-[#10251F] font-medium">
                      Move around to explore the surroundings
                    </p>

                    <button
                      type="button"
                      onClick={handleCloseStreetView}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#10251F]/15 px-3 py-2 text-xs font-bold text-[#10251F] transition-colors hover:border-[#D58A28] hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
                    >
                      Close View
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE TOPICS */}
      <section
        id="explore-topics"
        className="scroll-mt-24 border-y border-[#10251F]/15 bg-[#EAF2F6] px-6 py-14 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className={revealClass}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Explore by Topic
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#10251F] sm:text-4xl">
              What would you like to discover?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#10251F] font-medium sm:text-base">
              Choose a topic to explore information about Jattari and its
              surrounding region.
            </p>
          </div>

          <div className="mt-9 border-t border-[#10251F]/20">
            {places.map((place, index) => (
              <article
                key={place.number}
                className={`${revealClass} group grid gap-4 border-b border-[#10251F]/15 py-6 transition-all duration-300 hover:bg-[#F4F8FA]/70 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-6 sm:px-4`}
                style={{
                  transitionDelay: `${Math.min(index * 70, 350)}ms`,
                }}
              >
                <span className="text-sm font-bold tracking-widest text-[#B9741C] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10251F]">
                  {place.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-[#10251F] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#254C3C] sm:text-xl">
                    {place.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#10251F] font-medium transition-colors duration-300 group-hover:text-[#435B51]">
                    {place.description}
                  </p>
                </div>

                <Link
                  href={place.href}
                  className="inline-flex items-center gap-2 justify-self-start text-sm font-bold text-[#254C3C] transition-all duration-300 hover:text-[#B9741C] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] sm:justify-self-end"
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
          className={`${revealClass} mx-auto max-w-6xl border-t border-[#10251F]/15 pt-8 sm:pt-10`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
            Your Jattari Guide
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-[#10251F] sm:text-3xl md:text-4xl">
            Keep exploring and learn more about the area.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#10251F] font-medium sm:text-base">
            Browse the available guides to learn about local facilities,
            regional culture, attractions, shopping, and practical travel
            information.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/location-connectivity"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Location &amp; Connectivity
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/explore/attractions"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#10251F]/20 bg-[#F4F8FA] px-6 py-3 text-sm font-semibold text-[#10251F] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Attractions &amp; Places to Visit
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/explore/contact-feedback"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#10251F]/20 bg-[#F4F8FA] px-6 py-3 text-sm font-semibold text-[#10251F] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Contact &amp; Feedback
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FULL-SCREEN 5-SECOND ANIMATION */}
      {streetViewLoading && (
        <div
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F8FA] px-6"
          role="status"
          aria-live="polite"
          aria-label="Preparing Google Street View"
        >
          {/* Theme background decoration */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(213,138,40,0.12),_transparent_55%)]"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[min(85vw,650px)] w-[min(85vw,650px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10251F]/10"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[min(65vw,480px)] w-[min(65vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D58A28]/20"
          />

          <div className="relative z-10 w-full max-w-xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#10251F] shadow-[0_20px_60px_rgba(6,72,61,0.22)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                fill="none"
                className="h-12 w-12 text-[#F4F8FA]"
              >
                <path
                  d="M24 42s14-10.4 14-24a14 14 0 1 0-28 0c0 13.6 14 24 14 24Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="24"
                  cy="18"
                  r="4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M24 2v5M46 18h-5M7 18H2"
                  stroke="#D58A28"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-[#B9741C]">
              Jattari Explorer
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#10251F] sm:text-4xl">
              Preparing your 360° view
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#10251F] font-medium sm:text-base">
              Scanning the surroundings and preparing a street-level view of
              Jattari.
            </p>

            {/* Theme-colored scanning animation */}
            <div className="relative mx-auto mt-9 h-28 max-w-md overflow-hidden rounded-2xl border border-[#10251F]/15 bg-white/70 shadow-inner">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(rgba(6,72,61,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(6,72,61,0.07)_1px,transparent_1px)] bg-[size:18px_18px]"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 180 80"
                  fill="none"
                  className="h-20 w-44 text-[#10251F]"
                >
                  <path
                    d="M12 65 42 38 70 50 106 18 145 42 168 28M12 65h156M42 38v27M70 50v15M106 18v47M145 42v23"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="106"
                    cy="18"
                    r="6"
                    stroke="#D58A28"
                    strokeWidth="2"
                  />
                  <circle cx="106" cy="18" r="2" fill="#D58A28" />
                </svg>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D58A28] to-transparent shadow-[0_0_14px_rgba(213,138,40,0.6)] transition-[top] duration-75 ease-linear"
                style={{ top: `${scanProgress}%` }}
              />
            </div>

            {/* Progress bar */}
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#10251F]/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#10251F] via-[#254C3C] to-[#D58A28] transition-[width] duration-75 ease-linear"
                style={{ width: `${scanProgress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#D58A28]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10251F]">
                Mapping panorama coordinates
              </span>
            </div>

            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8B968F]">
              Please wait · 5 seconds
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

