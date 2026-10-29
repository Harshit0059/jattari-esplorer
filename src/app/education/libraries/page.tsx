
"use client";

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
    location: "Main Road, 1st Floor, Young India Coaching Centre, near PNB, Jattari",
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
    details: "A nearby study option for students travelling along the Pisawa–Jattari Road.",
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

export default function LibrariesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Hero with library background image */}
      <section className="relative isolate min-h-[420px] overflow-hidden bg-[#1D4ED8] sm:min-h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=85"
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
              Libraries Near Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Discover local libraries, digital study spaces and reading
              facilities in Jattari and surrounding areas.
            </p>

            <p className="mt-7 text-sm font-medium text-white/90">
              {libraries.length} directory entries · Aligarh, Uttar Pradesh
            </p>
          </div>
        </div>
      </section>

      {/* Directory heading */}
      <section className="mx-auto max-w-7xl px-6 pb-3 pt-14 md:px-10 md:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          Library Directory
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
          Find a place to read and study
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B7280]">
          Browse nearby library listings and check the location before
          travelling. Opening hours, fees, seating and membership availability
          should be confirmed locally.
        </p>
      </section>

      {/* Directory rows — no cards */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-5 md:px-10 md:pb-20">
        {libraries.map((library, index) => (
          <article
            key={library.name}
            className="grid gap-4 border-b border-[#E5E7EB] py-7 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6 md:py-8"
          >
            <p className="text-sm font-bold tabular-nums text-[#9CA3AF]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <div className="min-w-0">
              <h3 className="text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl">
                {library.name}
              </h3>

              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#4B5563]">
                <span className="text-[#2563EB]" aria-hidden="true">
                  ⌖
                </span>
                <span>{library.location}</span>
              </p>

              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                <span className="font-semibold text-[#374151]">
                  Type:{" "}
                </span>
                {library.type}
              </p>

              <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                {library.details}
              </p>
            </div>
          </article>
        ))}

        <p className="mt-8 text-sm leading-7 text-[#6B7280]">
          This is a directory of public listings, not an official ranking.
          Verify current operating status and exact addresses before visiting.
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
              Browse schools, colleges, tuition classes and coaching centres.
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
