
"use client";

import Link from "next/link";

type TuitionOption = {
  name: string;
  location: string;
  classes: string;
  details: string;
};

const tuitionOptions: TuitionOption[] = [
  {
    name: "CCA Coaching Centre",
    location: "Ajeet Nagar, Jattari, Aligarh",
    classes: "Classes 9–12",
    details: "Local academic support and subject coaching.",
  },
  {
    name: "Chaudhary Coaching Centre",
    location: "Rewadian Mohalla, Jattari",
    classes: "School students",
    details: "Local coaching; mathematics and general studies are mentioned in public listings.",
  },
  {
    name: "Satyapal Singh",
    location: "Jartauli Road, Jattari",
    classes: "Class 10",
    details: "Mathematics, science, Hindi and other school subjects.",
  },
  {
    name: "Sapna S.",
    location: "Jartauli Road, Jattari",
    classes: "Classes 1–8; Mathematics for 9–10",
    details: "Home tuition and academic support across school subjects.",
  },
  {
    name: "Mukul Chahar",
    location: "Jattari, Aligarh",
    classes: "Classes 1–5",
    details: "Home tuition for primary-level students.",
  },
  {
    name: "Anjali C.",
    location: "Jattari, Aligarh",
    classes: "Classes 1–5",
    details: "Primary tuition, with Mathematics and Hindi listed.",
  },
  {
    name: "Ankul Kashyap",
    location: "Jattari, Aligarh",
    classes: "Class 12",
    details: "Accountancy, Business Studies and Economics.",
  },
  {
    name: "Ajay Parashar",
    location: "Jartauli Road, Jattari",
    classes: "Classes 1–8",
    details: "Science tuition and primary-level academic support.",
  },
  {
    name: "Ram Charan Educare",
    location: "Jattari, Aligarh",
    classes: "Computer and accounting skills",
    details: "Practical computer education and job-oriented learning support.",
  },
  {
    name: "C.C.T. Computer Institutes",
    location: "Near Khair Bus Stand, Goverdhan Market, Jattari",
    classes: "Computer learning",
    details: "Computer training for learners seeking digital skills.",
  },
];

export default function TuitionClassesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Hero section with background image */}
      <section className="relative isolate min-h-[420px] overflow-hidden bg-[#1D4ED8] sm:min-h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827]/85 via-[#1F2937]/65 to-[#1F2937]/30" />

        <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 sm:min-h-[480px] md:px-10 md:py-20">
          <div className="max-w-3xl text-white">
            <Link
              href="/education"
              className="text-sm font-semibold text-white/90 transition hover:text-white"
            >
              ← All Education
            </Link>

            <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Jattari Education Directory
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Tuition Classes in Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Explore local tutors, school-subject tuition and learning
              support options in Jattari and its surrounding areas.
            </p>

            <p className="mt-7 text-sm font-medium text-white/90">
              {tuitionOptions.length} directory entries · Aligarh, Uttar Pradesh
            </p>
          </div>
        </div>
      </section>

      {/* Directory introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-3 pt-14 md:px-10 md:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          Tuition Directory
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
          Find learning support
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B7280]">
          Browse the short listings below. Availability, fees, timings and
          subjects should be confirmed directly before joining.
        </p>
      </section>

      {/* Numbered rows — no cards and no external links */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-5 md:px-10 md:pb-20">
        {tuitionOptions.map((option, index) => (
          <article
            key={option.name}
            className="grid gap-4 border-b border-[#E5E7EB] py-7 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6 md:py-8"
          >
            <p className="text-sm font-bold tabular-nums text-[#9CA3AF]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <div className="min-w-0">
              <h3 className="text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl">
                {option.name}
              </h3>

              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#4B5563]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>{option.location}</span>
              </p>

              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                <span className="font-semibold text-[#374151]">
                  Classes / focus:{" "}
                </span>
                {option.classes}
              </p>

              <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                {option.details}
              </p>
            </div>
          </article>
        ))}

        <p className="mt-8 text-sm leading-7 text-[#6B7280]">
          These entries are based on public listings and are not an official
          ranking. Some options are individual tutors or skill-training
          centres rather than conventional tuition institutes. Please confirm
          current availability and details before visiting.
        </p>
      </section>

      {/* Bottom navigation */}
      <section className="border-t border-[#E5E7EB] bg-[#F5F7FA]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 sm:flex-row sm:items-center md:px-10">
          <div>
            <h2 className="text-xl font-bold text-[#1F2937]">
              Explore more education options
            </h2>

            <p className="mt-2 text-sm text-[#6B7280]">
              Find schools, colleges, coaching centres and libraries.
            </p>
          </div>

          <Link
            href="/education"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
          >
            Back to Education <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
