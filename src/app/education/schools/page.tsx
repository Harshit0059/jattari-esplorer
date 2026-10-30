"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type School = {
  name: string;
  location: string;
  details: string;
  board: string;
  contact: string;
  website?: string;
};

const schools: School[] = [
  {
    name: "Babuji Convent School",
    location: "Fajilpur Kalan, Jattari, Aligarh, UP 202137",
    details: "School campus and education facilities.",
    board: "CBSE affiliation listed; verify current status.",
    contact: "Verify contact details with the school.",
  },
  {
    name: "R.P.S. Global School",
    location: "Harsukh Ki Nagaliya, Jattari, Aligarh, UP 202137",
    details: "School campus and learning facilities.",
    board: "Confirm current affiliation with the school.",
    contact: "Confirm the current phone number on the official website.",
  },
  {
    name: "S.D. International School",
    location: "Jattari–Khair Road, Jattari, Aligarh, UP 202137",
    details: "School campus and educational facilities.",
    board: "Confirm current affiliation on the school's official website.",
    contact: "Check the school's website for contact details.",
  },
  {
    name: "Jeevan Jyoti Public School",
    location: "Usrah area, near Jattari, Aligarh, Uttar Pradesh",
    details: "Check the exact campus address before visiting.",
    board: "Verify recognition and current classes directly.",
    contact: "Check the official website for contact details.",
  },
  {
    name: "Patel Smarak Inter College",
    location: "Police Chowki Gali, Jattari, Aligarh, UP 202137",
    details: "An inter-college listing in the Jattari area.",
    board: "Verify current recognition and classes with the institution.",
    contact: "Check the official website for contact details.",
  },
  {
    name: "Grow Well Public School",
    location: "Pisawa–Jattari Road area, Aligarh, Uttar Pradesh",
    details: "Confirm the exact campus address and classes before visiting.",
    board: "Not independently verified.",
    contact: "Not verified.",
  },
  {
    name: "Badami Devi School",
    location: "Neta Nagar area, Jattari, Aligarh, Uttar Pradesh",
    details: "Confirm the exact school location before visiting.",
    board: "Not independently verified.",
    contact: "Not verified.",
  },
  {
    name: "Jaipur World School",
    location: "Aligarh–Palwal Road area, Jattari, Uttar Pradesh",
    details: "Confirm the school's exact address and current status.",
    board: "Not independently verified.",
    contact: "Not verified.",
  },
  {
    name: "B.L. Convent School",
    location: "Jattari area, Aligarh, Uttar Pradesh",
    details: "Confirm the school's exact name, address and current status.",
    board: "Not independently verified.",
    contact: "Not verified.",
  },
  {
    name: "BSP Education Society",
    location: "Jattari area, Aligarh, Uttar Pradesh",
    details: "Confirm the institution's exact name and location before visiting.",
    board: "Not independently verified.",
    contact: "Not verified.",
  },
];

const revealUp =
  "translate-y-10 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealLeft =
  "-translate-x-10 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealRight =
  "translate-x-10 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

export default function SchoolsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const showAll = () => {
      elements.forEach((element) => {
        element.classList.add(
          "!translate-x-0",
          "!translate-y-0",
          "!opacity-100"
        );
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showAll();
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
        threshold: 0.1,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero Section */}
      <section className="group relative isolate min-h-[430px] overflow-hidden bg-[#073B32] sm:min-h-[500px]">
        <Image
          src="/images/schools-hero.webp"
          alt="Schools and education facilities in Jattari"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="-z-20 object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073B32]/90 via-[#073B32]/70 to-[#073B32]/30" />

        {/* Decorative background elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 -z-0 h-72 w-72 rounded-full border border-white/15 transition-transform duration-[1200ms] group-hover:rotate-45 group-hover:scale-110 sm:h-96 sm:w-96"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-24 -z-0 h-52 w-52 rounded-full border border-white/10 transition-transform duration-[1200ms] group-hover:-rotate-45 group-hover:scale-110 sm:h-72 sm:w-72"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-100px] left-[25%] -z-0 h-64 w-64 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 group-hover:scale-125"
        />

        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-6 py-16 sm:min-h-[500px] md:px-10 md:py-20">
          <div
            data-reveal
            className={`max-w-3xl text-white ${revealLeft}`}
          >
            <p className="mt-12 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F4B65E]">
              <span className="h-px w-8 bg-[#F4B65E]" />
              Jattari Education Directory
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Schools in Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Explore school information and educational options around
              Jattari to help families learn more about the local education
              landscape.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
              <span className="transition-transform duration-300 hover:translate-y-[-3px]">
                <strong className="text-[#F4B65E]">
                  {schools.length}
                </strong>{" "}
                directory entries
              </span>

              <span className="transition-transform duration-300 hover:translate-y-[-3px]">
                Jattari · Aligarh · Uttar Pradesh
              </span>
            </div>

            <a
              href="#school-directory"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-accent-hover hover:shadow-xl"
            >
              Explore Schools
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
          className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-green-light/60 blur-3xl"
        />

        <div data-reveal className={`relative ${revealUp}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Education Directory
          </p>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Schools and their details
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Browse the school entries below. Contact each institution directly
            to confirm addresses, admissions, fees, classes and current
            affiliation.
          </p>
        </div>
      </section>

      {/* School Directory */}
      <section
        id="school-directory"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-12 pt-5 md:px-10 md:pb-16"
      >
        {schools.map((school, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={`${school.name}-${index}`}
              data-reveal
              style={{ transitionDelay: `${(index % 5) * 100}ms` }}
              className={`group relative grid gap-5 border-b border-border py-7 transition-all duration-500 hover:bg-green-light/50 md:grid-cols-[64px_minmax(0,1fr)] md:items-start md:gap-7 md:py-8 ${
                isEven ? revealLeft : revealRight
              }`}
            >
              {/* Animated Number */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-sm font-extrabold tabular-nums text-primary transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* School Details */}
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent transition-all duration-300 group-hover:tracking-[0.2em]">
                  School {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 inline-block text-xl font-extrabold tracking-tight text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:text-2xl">
                  {school.name}
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

                  <span>{school.location}</span>
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {school.details}
                </p>

                <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <dt className="font-bold text-foreground">
                      Board / affiliation
                    </dt>

                    <dd className="mt-1 leading-6 text-muted">
                      {school.board}
                    </dd>
                  </div>

                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <dt className="font-bold text-foreground">
                      Contact information
                    </dt>

                    <dd className="mt-1 leading-6 text-muted">
                      {school.contact}
                    </dd>
                  </div>
                </dl>

                {school.website && (
                  <div className="mt-5">
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-accent/40 underline-offset-4 transition-all duration-300 hover:gap-3 hover:text-accent"
                    >
                      Official website
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Hover accent line */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
              />
            </article>
          );
        })}

        {/* Directory Disclaimer */}
        <div
          data-reveal
          className={`mt-8 rounded-xl border border-border bg-green-light/70 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-md ${revealUp}`}
        >
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary transition-transform duration-500 hover:rotate-12">
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
              This directory is a starting point based on public listings
              and institution websites, not an official ranking or
              endorsement. Some entries and details require direct
              confirmation. Please verify school recognition, affiliation
              and current information before making a decision.
            </p>
          </div>
        </div>
      </section>

      {/* Anugrah Homes and Skyline Aero Homes Promotion */}
      <section className="relative isolate overflow-hidden bg-[#073B32] px-6 py-14 text-white md:px-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-[#D58A28]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <div data-reveal className={`max-w-3xl ${revealLeft}`}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4B65E]">
              Beyond Education
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              A neighbourhood is more than its schools.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              For families exploring the Jattari and wider Jewar region,
              education is one part of the neighbourhood picture. Residential
              options, everyday connectivity and nearby facilities can also
              be important considerations.
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
            className={`mt-6 text-xs leading-6 text-white/50 ${revealUp}`}
          >
            Project information is provided for general awareness. Review
            official project details and verify all information independently
            before making a property decision.
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
              Browse colleges, tuition classes, coaching centres and
              libraries.
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