"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type CoachingCentre = {
  name: string;
  focus: string;
  details: string;
};

const coachingCentres: CoachingCentre[] = [
  {
    name: "CCA Coaching Centre",
    focus: "School tuition",
    details:
      "Listed local academic support option, particularly for secondary and senior-secondary students.",
  },
  {
    name: "Chaudhary Coaching Centre",
    focus: "Academic coaching",
    details:
      "Local coaching listing. Confirm current subjects and batches directly.",
  },
  {
    name: "New Paramount Competition Classes",
    focus: "Competitive exams",
    details:
      "Public listing mentions SSC, banking, railway and teaching eligibility exam preparation.",
  },
  {
    name: "TutorHub",
    focus: "Tutoring",
    details:
      "Listed among tutoring and coaching options. Confirm the exact address and subjects.",
  },
  {
    name: "Safalda Competition Academy",
    focus: "Competition preparation",
    details:
      "Listed in local coaching directories; ask about exam batches and timings.",
  },
  {
    name: "Expert Coaching Centre",
    focus: "Academic coaching",
    details:
      "Listed coaching option. Confirm classes and subjects before joining.",
  },
  {
    name: "Target Coaching & Competition Centre",
    focus: "Competitive exams",
    details:
      "Local directory listing for exam preparation; current courses need confirmation.",
  },
  {
    name: "Gaudiyal Competition Academy",
    focus: "Competition preparation",
    details:
      "Listed under competitive-exam coaching in the wider local area.",
  },
  {
    name: "The Milestone Academy",
    focus: "Academic learning",
    details:
      "Listed in coaching results. Check available grades and subjects directly.",
  },
  {
    name: "Drishti Classes",
    focus: "School and exam preparation",
    details:
      "Public listing mentions this centre; confirm its current location and programmes.",
  },
];

export default function CoachingCentresPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-coach-reveal]"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.classList.add(
          "!opacity-100",
          "!translate-x-0",
          "!translate-y-0"
        );
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "!opacity-100",
              "!translate-x-0",
              "!translate-y-0"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
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
        {/* Hero Background Image */}
        <Image
          src="/images/coaching-hero.webp"
          alt="Learning and coaching environment"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="z-0 object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/75 to-[#073B32]/35" />

        {/* Animated Decorative Lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-0 z-[2] h-full w-[55%] opacity-20"
        >
          <div className="absolute right-0 top-[-20%] h-[420px] w-[420px] animate-[spin_35s_linear_infinite] rounded-full border border-white/40" />

          <div className="absolute right-[12%] top-[-5%] h-[320px] w-[320px] animate-[spin_28s_linear_infinite_reverse] rounded-full border border-white/30" />

          <div className="absolute right-[25%] top-[12%] h-[200px] w-[200px] rounded-full border border-[#F4B65E]/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 sm:min-h-[480px] md:px-10 md:py-20">
          <div
            data-coach-reveal
            className="max-w-3xl translate-x-[-45px] opacity-0 transition-all duration-1000 ease-out"
          >
            <p className="mt-12 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F4B65E]">
              <span className="h-px w-10 bg-[#F4B65E]" />
              Jattari Education Directory
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Coaching Centres Near Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Explore academic coaching and competitive-exam preparation
              options in Jattari and the surrounding Aligarh area.
            </p>

            <div className="mt-7 text-sm font-medium text-white/85">
              <span className="font-bold text-[#F4B65E]">
                {coachingCentres.length}
              </span>{" "}
              directory entries · Aligarh, Uttar Pradesh
            </div>

            <a
              href="#coaching-directory"
              className="group/button mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-accent-hover hover:shadow-xl"
            >
              Explore Coaching Centres
              <span className="transition-transform duration-300 group-hover/button:translate-y-1">
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
          className="pointer-events-none absolute right-0 top-10 h-48 w-48 rounded-full bg-green-light/70 blur-3xl"
        />

        <div
          data-coach-reveal
          className="relative translate-y-8 opacity-0 transition-all duration-700 ease-out"
        >
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Coaching Directory
            <span className="h-px w-12 bg-accent/50" />
          </p>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Find academic and exam support
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Explore these local listings to learn about academic tuition,
            subject support and competitive-exam preparation options.
            Confirm available subjects, fees and batches before enrolling.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["School Tuition", "Academic Support", "Competitive Exams"].map(
              (label, index) => (
                <span
                  key={label}
                  className="group/tag inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover/tag:scale-150" />
                  {label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Coaching Directory */}
      <section
        id="coaching-directory"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 pt-8 md:px-10 md:pb-20"
      >
        <div className="space-y-4">
          {coachingCentres.map((centre, index) => (
            <article
              key={centre.name}
              data-coach-reveal
              style={{ transitionDelay: `${(index % 4) * 90}ms` }}
              className="group relative grid translate-y-8 gap-4 overflow-hidden rounded-xl border border-border bg-surface p-5 opacity-0 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg sm:grid-cols-[70px_minmax(0,1fr)] sm:gap-6 sm:p-6 md:p-7"
            >
              {/* Animated Side Accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 w-1 origin-bottom scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"
              />

              {/* Number Badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-sm font-extrabold tabular-nums text-primary transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-accent group-hover:text-white sm:h-14 sm:w-14">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                    Coaching Centre {String(index + 1).padStart(2, "0")}
                  </p>

                  <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-primary">
                    {centre.focus}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                  {centre.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-bold text-foreground">Focus: </span>
                  {centre.focus}
                </p>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
                  {centre.details}
                </p>
              </div>

              {/* Hover Corner Detail */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-5 h-5 w-5 rounded-tr-lg border-r border-t border-accent/0 transition-all duration-500 group-hover:right-4 group-hover:top-4 group-hover:border-accent/70"
              />
            </article>
          ))}
        </div>

        {/* Directory Disclaimer */}
        <div
          data-coach-reveal
          className="mt-8 translate-y-8 rounded-xl border border-border bg-green-light/70 p-5 opacity-0 transition-all duration-700 ease-out"
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
              Entries are based on public directory listings and are not an
              official ranking. Some names have not been independently
              verified against current programmes. Confirm details locally
              before enrolling.
            </p>
          </div>
        </div>
      </section>

      {/* Indirect Real Estate Promotion */}
      <section className="relative isolate overflow-hidden bg-[#073B32] px-6 py-16 text-white md:px-10 md:py-20">
        {/* Floating Decorative Elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 animate-[spin_45s_linear_infinite] rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl">
          <div
            data-coach-reveal
            className="max-w-3xl translate-x-[-35px] opacity-0 transition-all duration-800 ease-out"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4B65E]">
              Growing Neighbourhoods
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Learning opportunities shape the future of a neighbourhood.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              Education, connectivity and residential development all
              contribute to the character of a growing area. Along with
              learning facilities, families and property explorers may
              also want to understand the wider Jattari and Jewar region.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Anugrah Homes */}
            <div
              data-coach-reveal
              className="group translate-y-10 rounded-2xl border border-white/15 bg-white/[0.06] p-6 opacity-0 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#D58A28]/70 hover:bg-white/[0.10] hover:shadow-2xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F4B65E] transition-transform duration-300 group-hover:scale-150" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B65E]">
                  Jattari · Residential Development
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white">
                Anugrah Homes
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Discover Anugrah Homes and explore its residential project
                in Jattari. Learn more about the project and the surrounding
                neighbourhood through its official website.
              </p>

              <a
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F4B65E] transition-all duration-300 group-hover:gap-4"
              >
                Discover Anugrah Homes
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Skyline Aero Homes */}
            <div
              data-coach-reveal
              className="group translate-y-10 rounded-2xl border border-white/15 bg-white/[0.06] p-6 opacity-0 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#D58A28]/70 hover:bg-white/[0.10] hover:shadow-2xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F4B65E] transition-transform duration-300 group-hover:scale-150" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B65E]">
                  Jewar Region · Residential Development
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white">
                Skyline Aero Homes
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Explore Skyline Aero Homes and learn about its residential
                offerings in the wider Jewar region through its official
                website.
              </p>

              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F4B65E] transition-all duration-300 group-hover:gap-4"
              >
                Discover Skyline Aero Homes
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <p
            data-coach-reveal
            className="mt-7 translate-y-6 text-xs leading-6 text-white/50 opacity-0 transition-all duration-700 ease-out"
          >
            Project information is provided for general awareness. Review
            official details and verify information independently before
            making a property decision.
          </p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-border bg-green-light px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div
            data-coach-reveal
            className="translate-x-[-25px] opacity-0 transition-all duration-700 ease-out"
          >
            <h2 className="text-xl font-extrabold text-foreground">
              Explore more education options
            </h2>

            <p className="mt-2 text-sm leading-7 text-muted">
              Browse schools, colleges, tuition classes and libraries.
            </p>
          </div>

          <div
            data-coach-reveal
            className="translate-x-[25px] opacity-0 transition-all duration-700 ease-out"
          >
            <Link
              href="/education"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-primary-hover hover:shadow-lg"
            >
              Back to Education
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