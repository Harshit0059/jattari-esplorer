
"use client";

import Link from "next/link";

type CoachingCentre = {
  name: string;
  location: string;
  focus: string;
  details: string;
};

const coachingCentres: CoachingCentre[] = [
  {
    name: "CCA Coaching Centre",
    location: "Ajeet Nagar, Jattari",
    focus: "School tuition",
    details: "Listed local academic support option, particularly for secondary and senior-secondary students.",
  },
  {
    name: "Chaudhary Coaching Centre",
    location: "Rewadian Mohalla, Jattari",
    focus: "Academic coaching",
    details: "Local coaching listing. Confirm current subjects and batches directly.",
  },
  {
    name: "New Paramount Competition Classes",
    location: "Near Jattari Tractors, Khair Bypass Road, Aligarh",
    focus: "Competitive exams",
    details: "Public listing mentions SSC, banking, railway and teaching eligibility exam preparation.",
  },
  {
    name: "TutorHub",
    location: "Jattari / Aligarh area",
    focus: "Tutoring",
    details: "Listed among tutoring and coaching options. Confirm the exact address and subjects.",
  },
  {
    name: "Safalda Competition Academy",
    location: "Jattari-area listing; exact address to be confirmed",
    focus: "Competition preparation",
    details: "Listed in local coaching directories; ask about exam batches and timings.",
  },
  {
    name: "Expert Coaching Centre",
    location: "Jattari-area listing; exact address to be confirmed",
    focus: "Academic coaching",
    details: "Listed coaching option. Confirm classes and subjects before joining.",
  },
  {
    name: "Target Coaching & Competition Centre",
    location: "Jattari-area listing; exact address to be confirmed",
    focus: "Competitive exams",
    details: "Local directory listing for exam preparation; current courses need confirmation.",
  },
  {
    name: "Gaudiyal Competition Academy",
    location: "Jattari-area listing; exact address to be confirmed",
    focus: "Competition preparation",
    details: "Listed under competitive-exam coaching in the wider local area.",
  },
  {
    name: "The Milestone Academy",
    location: "Jattari / Aligarh area",
    focus: "Academic learning",
    details: "Listed in coaching results. Check available grades and subjects directly.",
  },
  {
    name: "Drishti Classes",
    location: "Jattari / Aligarh area",
    focus: "School and exam preparation",
    details: "Public listing mentions this centre; confirm its current location and programmes.",
  },
];

export default function CoachingCentresPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Hero with classroom background image */}
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
              Coaching Centres Near Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Explore academic coaching and competitive-exam preparation
              options in Jattari and the surrounding Aligarh area.
            </p>

            <p className="mt-7 text-sm font-medium text-white/90">
              {coachingCentres.length} directory entries · Aligarh, Uttar Pradesh
            </p>
          </div>
        </div>
      </section>

      {/* Directory heading */}
      <section className="mx-auto max-w-7xl px-6 pb-3 pt-14 md:px-10 md:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          Coaching Directory
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
          Find academic and exam support
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B7280]">
          Use these short listings as a starting point. Confirm subjects,
          fees, current batches and exact addresses before enrolling.
        </p>
      </section>

      {/* Numbered directory rows — no cards or external links */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-5 md:px-10 md:pb-20">
        {coachingCentres.map((centre, index) => (
          <article
            key={centre.name}
            className="grid gap-4 border-b border-[#E5E7EB] py-7 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6 md:py-8"
          >
            <p className="text-sm font-bold tabular-nums text-[#9CA3AF]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <div className="min-w-0">
              <h3 className="text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl">
                {centre.name}
              </h3>

              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#4B5563]">
                <span className="text-[#2563EB]" aria-hidden="true">
                  ⌖
                </span>
                <span>{centre.location}</span>
              </p>

              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                <span className="font-semibold text-[#374151]">
                  Focus:{" "}
                </span>
                {centre.focus}
              </p>

              <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                {centre.details}
              </p>
            </div>
          </article>
        ))}

        <p className="mt-8 text-sm leading-7 text-[#6B7280]">
          Entries are based on public directory listings and are not an
          official ranking. Some names have not been independently verified
          against a current physical address. Confirm details locally before
          visiting or enrolling.
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
              Browse schools, colleges, tuition classes and libraries.
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
