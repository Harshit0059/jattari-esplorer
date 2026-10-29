
"use client";

import Link from "next/link";

type School = {
  name: string;
  image?: string;
  location: string;
  details: string;
  board: string;
  contact: string;
  website?: string;
  source: string;
  map: string;
};

const schools: School[] = [
  {
    name: "Babuji Convent School",
    image: "https://babujiconventschool.com/gallery/67.jpeg",
    location: "Fajilpur Kalan, Jattari, Aligarh, UP 202137",
    details: "School campus and education facilities.",
    board: "CBSE affiliation listed; verify current status.",
    contact: "Verify contact details with the school.",
    website: "https://babujiconventschool.com/",
    source: "https://saras.cbse.gov.in/SARAS/AffiliatedList/AfflicationDetails/2131286",
    map: "https://www.google.com/maps/search/?api=1&query=Babuji+Convent+School+Jattari+Aligarh",
  },
  {
    name: "R.P.S. Global School",
    image:
      "https://cache.careers360.mobi/media/schools/social-media/media-gallery/27155/2021/5/18/RPS%20Global%20School-Campus%20View.jpg",
    location: "Harsukh Ki Nagaliya, Jattari, Aligarh, UP 202137",
    details: "School campus and learning facilities.",
    board: "Confirm current affiliation with the school.",
    contact: "Confirm the current phone number on the official website.",
    website: "https://rpsglobalschool.com/",
    source: "https://rpsglobalschool.com/contact/",
    map: "https://www.google.com/maps/search/?api=1&query=RPS+Global+School+Jattari+Aligarh",
  },
  {
    name: "S.D. International School",
    image: "https://www.sdisjattari.com/images/img4.jpg",
    location: "Jattari–Khair Road, Jattari, Aligarh, UP 202137",
    details: "School campus and educational facilities.",
    board: "Confirm current affiliation on the school's official website.",
    contact: "Check the school's website for contact details.",
    website: "https://www.sdisjattari.com/",
    source: "https://www.sdisjattari.com/",
    map: "https://www.google.com/maps/search/?api=1&query=SD+International+School+Jattari+Aligarh",
  },
  {
    name: "Jeevan Jyoti Public School",
    image:
      "https://static.wixstatic.com/media/1a259d_9fe054f3e0cb4239999404db9affebf4~mv2.jpg",
    location: "Usrah area, near Jattari, Aligarh, Uttar Pradesh",
    details: "Check the exact campus address before visiting.",
    board: "Verify recognition and current classes directly.",
    contact: "Check the official website for contact details.",
    website: "https://www.jeevanjyotischool.com/",
    source: "https://www.jeevanjyotischool.com/",
    map: "https://www.google.com/maps/search/?api=1&query=Jeevan+Jyoti+Public+School+Jattari+Aligarh",
  },
  {
    name: "Patel Smarak Inter College",
    image:
      "https://cdn.edumis.com/schools/c8cba6bd-d2ac-11ec-bcee-d09466536334/website/photo-gallery/albums/d40fd927-7abc-4194-aa04-f14fa4bbca9c/6a83cf6c-8ee1-4c90-acea-ae6d95211c37.jpg",
    location: "Police Chowki Gali, Jattari, Aligarh, UP 202137",
    details: "An inter-college listing in the Jattari area.",
    board: "Verify current recognition and classes with the institution.",
    contact: "Check the official website for contact details.",
    website: "https://www.psicjattari.com/",
    source: "https://www.psicjattari.com/gallery/photo-gallery",
    map: "https://www.google.com/maps/search/?api=1&query=Patel+Smarak+Inter+College+Jattari",
  },
  {
    name: "Grow Well Public School",
    location: "Pisawa–Jattari Road area, Aligarh, Uttar Pradesh",
    details: "Confirm the exact campus address and classes before visiting.",
    board: "Not independently verified.",
    contact: "Not verified.",
    source: "https://www.justdial.com/Aligarh/Schools-in-Jattari/nct-10422444",
    map: "https://www.google.com/maps/search/?api=1&query=Grow+Well+Public+School+Jattari",
  },
  {
    name: "Badami Devi School",
    location: "Neta Nagar area, Jattari, Aligarh, Uttar Pradesh",
    details: "Confirm the exact school location before visiting.",
    board: "Not independently verified.",
    contact: "Not verified.",
    source: "https://www.justdial.com/Aligarh/Schools-in-Jattari/nct-10422444",
    map: "https://www.google.com/maps/search/?api=1&query=Badami+Devi+School+Jattari",
  },
  {
    name: "Jaipur World School",
    location: "Aligarh–Palwal Road area, Jattari, Uttar Pradesh",
    details: "Confirm the school's exact address and current status.",
    board: "Not independently verified.",
    contact: "Not verified.",
    source: "https://www.justdial.com/Aligarh/Schools-in-Jattari/nct-10422444",
    map: "https://www.google.com/maps/search/?api=1&query=Jaipur+World+School+Jattari",
  },
  {
    name: "B.L. Convent School",
    location: "Jattari area, Aligarh, Uttar Pradesh",
    details: "Confirm the school's exact name, address and current status.",
    board: "Not independently verified.",
    contact: "Not verified.",
    source: "https://www.justdial.com/Aligarh/Schools-in-Jattari/nct-10422444",
    map: "https://www.google.com/maps/search/?api=1&query=BL+Convent+School+Jattari+Aligarh",
  },
  {
    name: "BSP Education Society",
    location: "Jattari area, Aligarh, Uttar Pradesh",
    details: "Confirm the institution's exact name and location before visiting.",
    board: "Not independently verified.",
    contact: "Not verified.",
    source: "https://www.justdial.com/Aligarh/Schools-in-Jattari/nct-10422444",
    map: "https://www.google.com/maps/search/?api=1&query=BSP+Education+Society+Jattari+Aligarh",
  },
];

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Hero with school photograph as background */}
      <section className="relative isolate min-h-[430px] overflow-hidden bg-[#1D4ED8] sm:min-h-[500px]">
        <img
          src="https://babujiconventschool.com/gallery/67.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827]/85 via-[#1F2937]/65 to-[#1F2937]/25" />

        <div className="mx-auto flex min-h-[430px] max-w-7xl items-center px-6 py-16 sm:min-h-[500px] md:px-10 md:py-20">
          <div className="max-w-3xl text-white">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              ← All Education
            </Link>

            <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Jattari Education Directory
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Schools in Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Explore school information, locations and available resources
              to help families discover education options around Jattari.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
              <span>
                <strong className="text-white">{schools.length}</strong>{" "}
                directory entries
              </span>
              <span>Jattari · Aligarh · Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directory introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-3 pt-14 md:px-10 md:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          Education Directory
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
          Schools and their locations
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B7280]">
          Browse the entries below. Contact each institution to confirm
          addresses, admissions, fees, classes and current affiliation.
        </p>
      </section>

      {/* Numbered directory rows — no cards */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-5 md:px-10 md:pb-20">
        {schools.map((school, index) => (
          <article
            key={`${school.name}-${index}`}
            className="grid gap-5 border-b border-[#E5E7EB] py-8 md:grid-cols-[150px_minmax(0,1fr)_170px] md:items-start md:gap-7"
          >
            {/* School photograph or neutral placeholder */}
            <div className="relative h-28 w-full overflow-hidden rounded-lg bg-[#F5F7FA] md:h-28 md:w-[150px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#9CA3AF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M5 21V8l7-5 7 5v13" />
                  <path d="M9 21v-6h6v6M9 10h.01M15 10h.01" />
                </svg>
                <span className="text-xs">Photo unavailable</span>
              </div>

              {school.image && (
                <img
                  src={school.image}
                  alt={`${school.name} campus`}
                  loading="lazy"
                  className="absolute inset-0 z-10 h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>

            {/* School details */}
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB]">
                School {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl">
                {school.name}
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
                <span>{school.location}</span>
              </p>

              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                {school.details}
              </p>

              <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-[#1F2937]">
                    Board / affiliation
                  </dt>
                  <dd className="mt-1 leading-6 text-[#6B7280]">
                    {school.board}
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-[#1F2937]">
                    Contact information
                  </dt>
                  <dd className="mt-1 leading-6 text-[#6B7280]">
                    {school.contact}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
                <a
                  href={school.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition hover:text-[#1D4ED8]"
                >
                  View source
                </a>

                {school.website && (
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition hover:text-[#1D4ED8]"
                  >
                    Official website
                  </a>
                )}
              </div>
            </div>

            {/* Map link */}
            <div className="md:flex md:justify-end md:pt-1">
              <a
                href={school.map}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                View location <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}

        <p className="mt-8 text-sm leading-7 text-[#6B7280]">
          This directory is a starting point based on public listings and
          institution websites, not an official ranking or endorsement. Some
          entries and details require direct confirmation. Photos hosted by
          other websites may occasionally be unavailable.
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
              Browse colleges, tuition classes, coaching centres and libraries.
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
