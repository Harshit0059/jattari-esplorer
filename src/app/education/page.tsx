
"use client";

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

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Compact hero with natural image colours */}
      <section className="relative isolate flex min-h-[370px] items-center overflow-hidden bg-[#374151] sm:min-h-[420px] lg:min-h-[460px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90"
          alt="Students learning together in a classroom"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {/* Neutral dark overlay; no blue tint on the photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/15"
        />

        <div className="mx-auto flex min-h-[370px] w-full max-w-7xl items-center px-6 py-12 sm:min-h-[420px] md:px-10 lg:min-h-[460px]">
          <div className="max-w-3xl text-white">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#93C5FD]" />
              Jattari Education Directory
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learning Today.
              <span className="mt-1 block text-[#DBEAFE]">
                Building Tomorrow.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
              Explore education opportunities in Jattari and nearby areas,
              from schools and colleges to tuition, coaching and libraries.
            </p>

            <a
              href="#education-options"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1D4ED8] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#DBEAFE]"
            >
              Explore Education
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Education introduction */}
      <section className="bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
              Explore and Learn
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#1F2937] sm:text-4xl">
              Find the right place for your next step.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6B7280]">
              Education is an important part of a community’s growth. Use this
              directory to explore local learning options, understand their
              locations and find a starting point for your search.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#2563EB]">
              <span className="h-1 w-12 rounded-full bg-[#2563EB]" />
              Explore five education categories
            </div>
          </div>
        </div>
      </section>

      {/* Education categories — numbered rows, no cards */}
      <section
        id="education-options"
        className="scroll-mt-24 bg-[#F5F7FA] px-6 py-12 md:px-10 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#D8E1EE] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
                Education Categories
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1F2937] sm:text-4xl">
                Explore your options
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B7280]">
              Choose a category to explore local education information and
              directory listings.
            </p>
          </div>

          <div>
            {educationSections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group grid gap-4 border-b border-[#D8E1EE] py-6 transition duration-300 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-7"
              >
                <span className="text-sm font-extrabold tabular-nums text-[#2563EB]">
                  {item.number}
                </span>

                <span className="min-w-0">
                  <span className="block text-xl font-extrabold tracking-tight text-[#1F2937] transition-colors duration-200 group-hover:text-[#2563EB] sm:text-2xl">
                    {item.title}
                  </span>

                  <span className="mt-2 block text-sm font-semibold text-[#374151]">
                    {item.subtitle}
                  </span>

                  <span className="mt-2 block max-w-3xl text-sm leading-7 text-[#6B7280]">
                    {item.description}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#BFDBFE] text-xl text-[#2563EB] transition duration-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white sm:ml-4"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subtle residential awareness section */}
      <section className="border-t border-[#E5E7EB] bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
              Beyond Education
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#1F2937] sm:text-3xl">
              A community is about more than a school.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-[#6B7280]">
              When families explore a neighbourhood, education is one part
              of the bigger picture. Everyday connectivity, nearby facilities
              and future living plans can also matter.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              For those researching residential options in the wider region,
              you can learn more about{" "}
              <a
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 hover:text-[#1D4ED8]"
              >
                Anugrah Homes in Jattari
              </a>{" "}
              and{" "}
              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 hover:text-[#1D4ED8]"
              >
                Skyline Aero Homes near Jewar
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="bg-white px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl border-t border-[#E5E7EB] pt-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                Your Learning Journey
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-[#1F2937]">
                Explore education opportunities around Jattari.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">
                Review the directory and confirm current details directly
                with the relevant institution before making a decision.
              </p>
            </div>

            <Link
              href="/explore/contact-feedback"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
            >
              Contact &amp; Feedback
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
