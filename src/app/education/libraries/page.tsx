"use client";

import { useEffect } from "react";
import Link from "next/link";

type Library = {
  name: string;
  location: string;
  type: string;
  details: string;
};

const libraries: Library[] = [
  {
    name: "Guliya Library",
    location:
      "Main Road, 1st Floor, Young India Coaching Centre, near PNB, Jattari",
    type: "Library and study space",
    details: "Listed local library for reading and self-study.",
  },
  {
    name: "Panchavati E-Library",
    location: "Aligarh–Palwal Road, near Bharat Petrol Pump, Jattari",
    type: "E-library and study centre",
    details: "Study space for students and independent learners.",
  },
  {
    name: "Takshashila Library",
    location: "Faizuaka, Aligarh district",
    type: "Library",
    details: "Listed in the nearby-area library directory.",
  },
  {
    name: "Aaradhya Library",
    location: "Tappal, Aligarh district",
    type: "Library",
    details: "Local reading and study option listed in Tappal.",
  },
  {
    name: "Tappal Digital Library",
    location: "Noorpur, Tappal, Aligarh district",
    type: "Digital library",
    details: "Listed study facility for local learners.",
  },
  {
    name: "Sharda Library",
    location: "Palar, Simrauthi, Tappal area",
    type: "Library",
    details: "Local library listing in the Palar area.",
  },
  {
    name: "Ekta Digital Library",
    location: "Tappal, Aligarh district",
    type: "Digital library",
    details: "Listed for self-study and learning support.",
  },
  {
    name: "Study Hub Library",
    location: "Pisawa–Jattari Road, Pisawa",
    type: "Study library",
    details:
      "A nearby study option for students travelling along the Pisawa–Jattari Road.",
  },
  {
    name: "Dr. APJ Library",
    location: "Khair, Aligarh district",
    type: "Library and reading space",
    details: "Listed study facility in the nearby Khair area.",
  },
  {
    name: "Narayani Library",
    location: "Near Gonda Adda, opposite Post Office, Khair",
    type: "Library",
    details: "Local reading and self-study option in Khair.",
  },
];

const reveal =
  "translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealLeft =
  "-translate-x-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealRight =
  "translate-x-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

export default function LibrariesPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const revealAll = () => {
      elements.forEach((element) => {
        element.classList.add(
          "!translate-x-0",
          "!translate-y-0",
          "!opacity-100"
        );
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "!translate-x-0",
              "!translate-y-0",
              "!opacity-100"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero Section */}
      <section className="group relative isolate min-h-[420px] overflow-hidden bg-[#073B32] sm:min-h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=85"
          alt="Library with bookshelves and reading spaces"
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/75 to-[#073B32]/35" />

        {/* Decorative book-inspired lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-70px] top-[-80px] -z-0 h-[360px] w-[260px] rotate-12 rounded-[45%] border border-white/15 transition-transform duration-1000 group-hover:rotate-[22deg] group-hover:scale-110 sm:right-10 sm:h-[480px] sm:w-[340px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-20px] top-[-35px] -z-0 h-[300px] w-[210px] rotate-12 rounded-[45%] border border-white/10 transition-transform duration-1000 group-hover:-rotate-3 group-hover:scale-110 sm:right-24 sm:h-[400px] sm:w-[280px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-100px] left-[30%] -z-0 h-64 w-64 rounded-full bg-[#D58A28]/15 blur-3xl transition-transform duration-1000 group-hover:scale-125"
        />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 sm:min-h-[480px] md:px-10 md:py-20">
          <div
            data-reveal
            className={`max-w-3xl text-white ${revealLeft}`}
          >
            <p className="mt-12 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F4B65E]">
              <span className="h-px w-9 bg-[#F4B65E]" />
              Jattari Education Directory
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Libraries Near Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Discover local libraries, digital study spaces and reading
              facilities in Jattari and surrounding areas.
            </p>

            <p className="mt-7 text-sm font-medium text-white/90">
              <span className="font-bold text-[#F4B65E]">
                {libraries.length}
              </span>{" "}
              directory entries
              <span className="mx-2 text-white/50">·</span>
              Aligarh, Uttar Pradesh
            </p>

            <a
              href="#library-directory"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-accent-hover hover:shadow-xl"
            >
              Explore Libraries
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Directory Introduction */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-3 pt-14 md:px-10 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-60 w-60 rounded-full bg-green-light/70 blur-3xl"
        />

        <div data-reveal className={`relative ${reveal}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Library Directory
          </p>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Find a place to read and study
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Browse nearby library listings and check the location before
            travelling. Opening hours, fees, seating and membership availability
            should be confirmed locally.
          </p>
        </div>
      </section>

      {/* Library Directory Rows */}
      <section
        id="library-directory"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-12 pt-5 md:px-10 md:pb-16"
      >
        {libraries.map((library, index) => (
          <article
            key={library.name}
            data-reveal
            style={{ transitionDelay: `${(index % 5) * 100}ms` }}
            className={`group relative grid gap-4 border-b border-border py-7 transition-all duration-500 hover:bg-green-light/60 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6 md:py-8 ${
              index % 2 === 0 ? revealLeft : revealRight
            }`}
          >
            {/* Number badge */}
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-accent-light text-sm font-extrabold tabular-nums text-primary transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Library Details */}
            <div className="min-w-0">
              <h3 className="inline-block text-xl font-extrabold tracking-tight text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:text-2xl">
                {library.name}
              </h3>

              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span>{library.location}</span>
              </p>

              <div className="mt-4 inline-flex items-center rounded-full border border-primary/15 bg-green-light px-3 py-1.5 text-xs font-bold text-primary transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent-light group-hover:shadow-sm">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                {library.type}
              </div>

              <p className="mt-3 text-sm leading-7 text-muted">
                {library.details}
              </p>
            </div>

            {/* Animated bottom line */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
            />
          </article>
        ))}

        {/* Directory Disclaimer */}
        <div
          data-reveal
          className={`mt-8 rounded-xl border border-border bg-green-light/70 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-md ${reveal}`}
        >
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
            </span>

            <p className="text-sm leading-7 text-muted">
              This is a directory of public listings, not an official ranking.
              Verify current operating status, exact addresses, opening hours
              and membership details before visiting.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Awareness and Brand Promotion */}
      <section className="relative isolate overflow-hidden bg-[#073B32] px-6 py-14 text-white md:px-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-[#D58A28]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <div data-reveal className={`max-w-3xl ${revealLeft}`}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4B65E]">
              Beyond Learning
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Education, neighbourhood and better living.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              When families explore a place to live, educational facilities,
              everyday connectivity and nearby services can all be part of
              their research. Explore these residential projects to learn
              more about the wider region.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {/* Anugrah Homes */}
            <div
              data-reveal
              style={{ transitionDelay: "100ms" }}
              className={`group rounded-2xl border border-white/15 bg-white/[0.07] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/70 hover:bg-white/[0.10] hover:shadow-2xl sm:p-8 ${revealLeft}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B65E]">
                Residential Project · Jattari
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-white transition-transform duration-300 group-hover:translate-x-1">
                Anugrah Homes
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Explore Anugrah Homes and learn more about its residential
                project in Jattari. Visit the official website for project
                information and enquiries.
              </p>

              <a
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:gap-4 hover:bg-accent-hover"
              >
                Explore Anugrah Homes
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Skyline Aero Homes */}
            <div
              data-reveal
              style={{ transitionDelay: "220ms" }}
              className={`group rounded-2xl border border-white/15 bg-white/[0.07] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/70 hover:bg-white/[0.10] hover:shadow-2xl sm:p-8 ${revealRight}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B65E]">
                Residential Project · Jewar Region
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-white transition-transform duration-300 group-hover:translate-x-1">
                Skyline Aero Homes
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Discover Skyline Aero Homes and explore its residential
                offerings in the wider Jewar region. Visit the official
                website for project details and enquiries.
              </p>

              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:gap-4 hover:border-[#F4B65E] hover:bg-white/10"
              >
                Explore Skyline Aero Homes
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <p
            data-reveal
            className={`mt-6 text-xs leading-6 text-white/50 ${reveal}`}
          >
            Project information is provided for general awareness. Please
            review official project details and verify all information
            independently before making a property decision.
          </p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-border bg-green-light px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div data-reveal className={revealLeft}>
            <h2 className="text-xl font-extrabold text-foreground">
              Explore more education options
            </h2>

            <p className="mt-2 text-sm leading-7 text-muted">
              Browse schools, colleges, tuition classes and coaching centres.
            </p>
          </div>

          <div data-reveal className={revealRight}>
            <Link
              href="/education"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:gap-4 hover:bg-primary-hover hover:shadow-lg"
            >
              Back to Education
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}