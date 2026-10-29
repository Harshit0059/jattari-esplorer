
"use client";

import Link from "next/link";

type College = {
  name: string;
  location: string;
  details: string;
  courses: string;
  contact: string;
  image?: string;
  website?: string;
  source: string;
  map: string;
};

const affiliationSource =
  "https://rmpssu.ac.in/Pages/AffiliatedColleges";

const colleges: College[] = [
  {
    name: "Bohare Mohan Lal Memorial Mahavidyalaya",
    location:
      "Plot No. 576/3, Jattari Bypass, Nagar Panchayat Jattari, Tehsil Khair, Aligarh, UP 202137",
    details:
      "A higher-education institution listed in the university's affiliated-college directory.",
    courses:
      "Teacher-training courses including B.Ed. and D.El.Ed. have appeared in public regulatory records; confirm current offerings.",
    contact: "Contact details not independently verified.",
    source: "https://www.agnirva.com/colleges/uttar-pradesh/bohare-mohan-lal-memorial-mahavidhlaya",
    map: "https://www.google.com/maps/search/?api=1&query=Bohare+Mohan+Lal+Memorial+Mahavidyalaya+Jattari",
  },
  {
    name: "Government Degree College, Khair",
    location: "Khair, Aligarh, Uttar Pradesh",
    details:
      "Government degree college listed in the Raja Mahendra Pratap Singh State University directory.",
    courses:
      "Check the college for currently available undergraduate courses and admission requirements.",
    contact: "Contact details not verified.",
    source: affiliationSource,
    map: "https://www.google.com/maps/search/?api=1&query=Government+Degree+College+Khair+Aligarh",
  },
  {
    name: "Rajkiye Mahavidyalaya, Tappal",
    location: "Tappal, Aligarh, Uttar Pradesh",
    details:
      "Government college listed in the affiliated-college directory for Aligarh district.",
    courses:
      "Confirm current subjects, degree programmes and admission dates with the institution.",
    contact: "Contact details not verified.",
    source: affiliationSource,
    map: "https://www.google.com/maps/search/?api=1&query=Rajkiye+Mahavidyalaya+Tappal+Aligarh",
  },
  {
    name: "Chaudhary Sahab Singh Bohre Mahavidyalaya",
    location: "Goumat Chauraha, Palwal Road, Khair, Aligarh, Uttar Pradesh",
    details:
      "Listed in the university's affiliated-college directory.",
    courses:
      "Confirm the current degree programmes and eligibility directly.",
    contact: "Contact details not verified.",
    source: affiliationSource,
    map: "https://www.google.com/maps/search/?api=1&query=Chaudhary+Sahab+Singh+Bohre+Mahavidyalaya+Khair",
  },
  {
    name: "D.D.S. Mahavidyalaya",
    location: "Bharatpur, Bajeda, Khair, Aligarh, Uttar Pradesh",
    details:
      "Institution listed in the university's affiliated-college directory.",
    courses:
      "Check directly for available programmes, admission details and course duration.",
    contact: "Contact details not verified.",
    source: affiliationSource,
    map: "https://www.google.com/maps/search/?api=1&query=DDS+Mahavidyalaya+Bharatpur+Bajeda+Khair+Aligarh",
  },
  {
    name: "Govind Mahavidyalaya",
    location: "Khair, Aligarh, Uttar Pradesh 202138",
    details:
      "The college website describes a campus serving students from rural areas.",
    courses: "B.A., B.Sc., B.Ed. and D.El.Ed. are listed on its website.",
    contact: "+91 96902 00087 · info@govindcollege.org",
    website: "https://govindcollege.org/",
    source: "https://govindcollege.org/",
    map: "https://www.google.com/maps/search/?api=1&query=Govind+Mahavidyalaya+Khair+Aligarh",
  },
  {
    name: "Khair Kanya Mahavidyalaya",
    image:
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/46260/2022/10/3/College%20of%20Khair%20Kanya%20Mahavidhyalaya%20Aligarh_Campus-View.jpg",
    location: "Khair, Aligarh, Uttar Pradesh",
    details:
      "A girls' college listed in the affiliated-college directory. A campus photograph is available from a public college listing.",
    courses:
      "Public listings mention arts, science and teacher-education programmes; confirm the current offering directly.",
    contact: "Contact details not independently verified.",
    source: "https://www.careers360.com/colleges/khair-kanya-mahavidhyalaya-aligarh",
    map: "https://www.google.com/maps/search/?api=1&query=Khair+Kanya+Mahavidyalaya+Khair+Aligarh",
  },
  {
    name: "Shri Khushiram Mahavidyalaya",
    image:
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/46317/2025/5/29/Campus%20View%20of%20Shri%20Khushi%20Ram%20Mahavidyalaya%20Aligarh_Campus-View.jpg",
    location: "Khair, Aligarh, Uttar Pradesh",
    details:
      "Listed as Shri Khushiram Mahavidyalaya in the university's affiliated-college directory.",
    courses:
      "Confirm available degrees, subjects and admissions with the institution.",
    contact: "Contact details not independently verified.",
    source: affiliationSource,
    map: "https://www.google.com/maps/search/?api=1&query=Shri+Khushiram+Mahavidyalaya+Khair+Aligarh",
  },
  {
    name: "Maa Saraswati Nawal Singh Kanya Mahavidyalaya",
    location: "Madak, Tappal, Aligarh, Uttar Pradesh",
    details:
      "Girls' college listed in the affiliated-college directory for the Tappal area.",
    courses:
      "Confirm available courses and eligibility with the college.",
    contact: "Contact details not independently verified.",
    source: affiliationSource,
    map: "https://www.google.com/maps/search/?api=1&query=Maa+Saraswati+Nawal+Singh+Kanya+Mahavidyalaya+Madak+Tappal",
  },
  {
    name: "Pt. Shri Chand Sharma Memorial P.G. College",
    location: "Manpur Kalan, Khair, Aligarh, Uttar Pradesh",
    details:
      "Listed in the university's affiliated-college directory.",
    courses:
      "Contact the institution to confirm currently offered postgraduate and undergraduate programmes.",
    contact: "Contact details not independently verified.",
    source: affiliationSource,
    map: "https://www.google.com/maps/search/?api=1&query=Pt+Shri+Chand+Sharma+Memorial+PG+College+Manpur+Kalan+Khair",
  },
];

export default function CollegesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Hero with college campus background */}
      <section className="relative isolate min-h-[430px] overflow-hidden bg-[#1D4ED8] sm:min-h-[500px]">
        <img
          src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/46260/2022/10/3/College%20of%20Khair%20Kanya%20Mahavidhyalaya%20Aligarh_Campus-View.jpg"
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
              className="text-sm font-semibold text-white/90 transition hover:text-white"
            >
              ← All Education
            </Link>

            <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Jattari &amp; Nearby Areas
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Colleges Near Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Explore higher-education institutions in Jattari, Khair, Tappal
              and nearby parts of Aligarh district.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
              <span>
                <strong className="text-white">{colleges.length}</strong>{" "}
                directory entries
              </span>
              <span>Aligarh · Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directory introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-3 pt-14 md:px-10 md:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          College Directory
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
          Explore colleges and locations
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B7280]">
          These institutions are in Jattari or the surrounding Khair, Tappal
          and Aligarh areas. Verify the exact route, current courses,
          recognition and admission availability before visiting.
        </p>
      </section>

      {/* Numbered directory rows — no cards */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-5 md:px-10 md:pb-20">
        {colleges.map((college, index) => (
          <article
            key={college.name}
            className="grid gap-5 border-b border-[#E5E7EB] py-8 md:grid-cols-[150px_minmax(0,1fr)_170px] md:items-start md:gap-7"
          >
            {/* Image or neutral placeholder */}
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

              {college.image && (
                <img
                  src={college.image}
                  alt={`${college.name} campus`}
                  loading="lazy"
                  className="absolute inset-0 z-10 h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>

            {/* College information */}
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB]">
                College {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl">
                {college.name}
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
                <span>{college.location}</span>
              </p>

              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                {college.details}
              </p>

              <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-[#1F2937]">
                    Courses / programmes
                  </dt>
                  <dd className="mt-1 leading-6 text-[#6B7280]">
                    {college.courses}
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-[#1F2937]">
                    Contact information
                  </dt>
                  <dd className="mt-1 break-words leading-6 text-[#6B7280]">
                    {college.contact}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
                <a
                  href={college.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition hover:text-[#1D4ED8]"
                >
                  View source
                </a>

                {college.website && (
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition hover:text-[#1D4ED8]"
                  >
                    Official website
                  </a>
                )}
              </div>
            </div>

            {/* Google Maps link */}
            <div className="md:flex md:justify-end md:pt-1">
              <a
                href={college.map}
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
          This is a regional directory, not an official ranking. Institution
          names and locations are based on publicly available listings.
          Contact details and current course offerings should be confirmed
          directly. Only selected entries have a college-specific image
          available here; other rows use a neutral placeholder rather than
          displaying an unrelated campus photo.
        </p>

        <p className="mt-4 text-sm leading-7 text-[#6B7280]">
          Reference directory:{" "}
          <a
            href={affiliationSource}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#2563EB] underline underline-offset-4"
          >
            Raja Mahendra Pratap Singh State University — Affiliated Colleges
          </a>
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
              Browse schools, tuition classes, coaching centres and libraries.
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
