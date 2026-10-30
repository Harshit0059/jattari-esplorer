"use client";

import { useEffect } from "react";
import Link from "next/link";

const educationSections = [
  {
    number: "01",
    title: "Schools",
    subtitle: "Primary to senior secondary education",
    description:
      "Explore schools, their locations and educational information around Jattari.",
    href: "/education/schools",
  },
  {
    number: "02",
    title: "Colleges",
    subtitle: "Higher education and degree programmes",
    description:
      "Discover colleges in Jattari, Khair, Tappal and nearby parts of Aligarh.",
    href: "/education/colleges",
  },
  {
    number: "03",
    title: "Tuition Classes",
    subtitle: "Personal guidance and academic support",
    description:
      "Explore tuition options for school subjects and additional learning support.",
    href: "/education/tuition-classes",
  },
  {
    number: "04",
    title: "Coaching Centres",
    subtitle: "Academic and competitive exam preparation",
    description:
      "Explore coaching options and learning centres in the surrounding area.",
    href: "/education/coaching-centres",
  },
  {
    number: "05",
    title: "Libraries",
    subtitle: "Reading, study and learning spaces",
    description:
      "Discover libraries and study spaces for students and independent learners.",
    href: "/education/libraries",
  },
];

const reveal =
  "translate-y-8 scale-[0.98] opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealLeft =
  "-translate-x-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealRight =
  "translate-x-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

export default function EducationPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.classList.add(
          "!translate-x-0",
          "!translate-y-0",
          "!scale-100",
          "!opacity-100"
        );
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "!translate-x-0",
              "!translate-y-0",
              "!scale-100",
              "!opacity-100"
            );
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
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero Section */}
      <section className="group relative isolate flex min-h-[370px] items-center overflow-hidden bg-[#073B32] sm:min-h-[420px] lg:min-h-[460px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90"
          alt="Students learning together in a classroom"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073B32]/90 via-[#073B32]/65 to-[#073B32]/20"
        />

        {/* Decorative animated circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 z-0 h-80 w-80 rounded-full border border-white/15 transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110 sm:h-[440px] sm:w-[440px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-14 z-0 h-60 w-60 rounded-full border border-white/10 transition-transform duration-1000 group-hover:-rotate-12 group-hover:scale-110 sm:h-[340px] sm:w-[340px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-100px] left-[40%] z-0 h-56 w-56 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 group-hover:scale-125"
        />

        <div className="relative z-10 mx-auto flex min-h-[370px] w-full max-w-7xl items-center px-6 py-12 sm:min-h-[420px] md:px-10 lg:min-h-[460px]">
          <div
            data-reveal
            className={`max-w-3xl text-white ${revealLeft}`}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:gap-3 hover:text-[#F4B65E]"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#F4B65E]/70 hover:bg-white/15">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D58A28]" />
              Jattari Education Directory
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learning Today.
              <span className="mt-1 block text-[#F4B65E] transition-colors duration-500">
                Building Tomorrow.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Explore education opportunities in Jattari and nearby areas,
              from schools and colleges to tuition, coaching and libraries.
            </p>

            <a
              href="#education-options"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#D58A28] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-[#B9741C] hover:shadow-xl"
            >
              Explore Education
              <span className="transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Education Introduction */}
      <section className="relative overflow-hidden bg-background px-6 py-12 md:px-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-green-light/60 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal className={revealLeft}>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
              Explore and Learn
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Find the right place for your next step.
            </h2>
          </div>

          <div data-reveal className={revealRight}>
            <p className="text-base leading-8 text-muted">
              Education is an important part of a community’s growth. Use this
              directory to explore local learning options, understand their
              locations and find a starting point for your search.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-primary">
              <span className="h-1 w-12 rounded-full bg-accent transition-all duration-500 hover:w-20" />
              Explore five education categories
            </div>
          </div>
        </div>
      </section>

      {/* Education Categories */}
      <section
        id="education-options"
        className="scroll-mt-24 bg-green-light px-6 py-12 md:px-10 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
            <div data-reveal className={revealLeft}>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
                Education Categories
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Explore your options
              </h2>
            </div>

            <p
              data-reveal
              className={`max-w-md text-sm leading-7 text-muted ${revealRight}`}
            >
              Choose a category to explore local education information and
              directory listings.
            </p>
          </div>

          <div>
            {educationSections.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
                className={`group relative grid gap-4 border-b border-border py-6 transition-all duration-500 hover:translate-x-2 hover:border-primary/40 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-7 ${reveal}`}
              >
                <span className="text-sm font-extrabold tabular-nums text-accent transition-transform duration-300 group-hover:scale-110">
                  {item.number}
                </span>

                <span className="min-w-0">
                  <span className="block text-xl font-extrabold tracking-tight text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:text-2xl">
                    {item.title}
                  </span>

                  <span className="mt-2 block text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                    {item.subtitle}
                  </span>

                  <span className="mt-2 block max-w-3xl text-sm leading-7 text-muted">
                    {item.description}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-xl text-accent transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-lg sm:ml-4"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Education */}
      <section className="relative overflow-hidden border-t border-border bg-background px-6 py-12 md:px-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-green-light/50 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-7 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
          <div data-reveal className={revealLeft}>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
              Beyond Education
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
              A community is about more than a school.
            </h2>
          </div>

          <div data-reveal className={revealRight}>
            <p className="text-sm leading-7 text-muted">
              When families explore a neighbourhood, education is one part
              of the bigger picture. Everyday connectivity, nearby facilities
              and future living plans can also matter.
            </p>

            <p className="mt-3 text-sm leading-7 text-muted">
              For those researching residential options in the wider region,
              you can learn more about{" "}
              <a
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline decoration-accent/50 underline-offset-4 transition-all duration-300 hover:text-accent hover:decoration-accent"
              >
                Anugrah Homes in Jattari
              </a>{" "}
              and{" "}
              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline decoration-accent/50 underline-offset-4 transition-all duration-300 hover:text-accent hover:decoration-accent"
              >
                Skyline Aero Homes near Jewar
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-background px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl border-t border-border pt-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div data-reveal className={revealLeft}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Your Learning Journey
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-foreground">
                Explore education opportunities around Jattari.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                Review the directory and confirm current details directly
                with the relevant institution before making a decision.
              </p>
            </div>

            <div data-reveal className={revealRight}>
              <Link
                href="/explore/contact-feedback"
                className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-primary-hover hover:shadow-xl"
              >
                Contact &amp; Feedback
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}