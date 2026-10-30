"use client";

import { useEffect } from "react";
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
    source:
      "https://www.agnirva.com/colleges/uttar-pradesh/bohare-mohan-lal-memorial-mahavidhlaya",
    map:
      "https://www.google.com/maps/search/?api=1&query=Bohare+Mohan+Lal+Memorial+Mahavidyalaya+Jattari",
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
    map:
      "https://www.google.com/maps/search/?api=1&query=Government+Degree+College+Khair+Aligarh",
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
    map:
      "https://www.google.com/maps/search/?api=1&query=Rajkiye+Mahavidyalaya+Tappal+Aligarh",
  },
  {
    name: "Chaudhary Sahab Singh Bohre Mahavidyalaya",
    location:
      "Goumat Chauraha, Palwal Road, Khair, Aligarh, Uttar Pradesh",
    details:
      "Listed in the university's affiliated-college directory.",
    courses:
      "Confirm the current degree programmes and eligibility directly.",
    contact: "Contact details not verified.",
    source: affiliationSource,
    map:
      "https://www.google.com/maps/search/?api=1&query=Chaudhary+Sahab+Singh+Bohre+Mahavidyalaya+Khair",
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
    map:
      "https://www.google.com/maps/search/?api=1&query=DDS+Mahavidyalaya+Bharatpur+Bajeda+Khair+Aligarh",
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
    map:
      "https://www.google.com/maps/search/?api=1&query=Govind+Mahavidyalaya+Khair+Aligarh",
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
    source:
      "https://www.careers360.com/colleges/khair-kanya-mahavidyalaya-aligarh",
    map:
      "https://www.google.com/maps/search/?api=1&query=Khair+Kanya+Mahavidyalaya+Khair+Aligarh",
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
    map:
      "https://www.google.com/maps/search/?api=1&query=Shri+Khushiram+Mahavidyalaya+Khair+Aligarh",
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
    map:
      "https://www.google.com/maps/search/?api=1&query=Maa+Saraswati+Nawal+Singh+Kanya+Mahavidyalaya+Madak+Tappal",
  },
  {
    name: "Pt. Shri Chand Sharma Memorial P.G. College",
    location: "Manpur Kalan, Khair, Aligarh, Uttar Pradesh",
    details: "Listed in the university's affiliated-college directory.",
    courses:
      "Contact the institution to confirm currently offered postgraduate and undergraduate programmes.",
    contact: "Contact details not independently verified.",
    source: affiliationSource,
    map:
      "https://www.google.com/maps/search/?api=1&query=Pt+Shri+Chand+Sharma+Memorial+PG+College+Manpur+Kalan+Khair",
  },
];

const reveal =
  "translate-y-10 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealLeft =
  "-translate-x-10 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const revealRight =
  "translate-x-10 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none";

export default function CollegesPage() {
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
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
      {/* Hero Section */}
      <section className="group relative isolate min-h-[440px] overflow-hidden bg-[#073B32] sm:min-h-[510px]">
        <img
          src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/46260/2022/10/3/College%20of%20Khair%20Kanya%20Mahavidhyalaya%20Aligarh_Campus-View.jpg"
          alt="College campus"
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/80 to-[#073B32]/35" />

        {/* Decorative campus-inspired rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-0 h-[360px] w-[360px] rounded-full border border-white/15 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12 sm:right-10 sm:h-[480px] sm:w-[480px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-[-55px] -z-0 h-[260px] w-[260px] rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-125 group-hover:-rotate-12 sm:right-28 sm:h-[340px] sm:w-[340px]"
        />

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-16 sm:min-h-[510px] md:px-10 md:py-20">
          <div
            data-reveal
            className={`max-w-3xl text-white ${revealLeft}`}
          >
            <p className="mt-12 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F4B85A]">
              <span className="h-px w-9 bg-[#F4B85A]" />
              Jattari & Nearby Areas
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Colleges Near Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Explore higher-education institutions in Jattari, Khair, Tappal
              and nearby parts of Aligarh district.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              <span>
                <strong className="text-[#F4B85A]">
                  {colleges.length}
                </strong>{" "}
                directory entries
              </span>
              <span>Aligarh · Uttar Pradesh</span>
            </div>

            <div className="mt-9">
              <a
                href="#college-directory"
                className="group/button inline-flex items-center gap-3 rounded-lg bg-[#D58A28] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-[#B9741C] hover:shadow-xl"
              >
                Explore Colleges
                <span className="transition-transform duration-300 group-hover/button:translate-y-1">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        id="college-directory"
        className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-5 pt-16 md:px-10 md:pt-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[#EAF2ED] blur-3xl"
        />

        <div data-reveal className={`relative ${reveal}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9741C]">
            College Directory
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#073B32] sm:text-3xl">
            Explore colleges and locations
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#68756F]">
            These institutions are in Jattari or the surrounding Khair, Tappal
            and Aligarh areas. Verify the exact route, current courses,
            recognition and admission availability before visiting.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#EAF2ED] px-4 py-2 text-xs font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              Higher Education
            </span>
            <span className="rounded-full bg-[#FFF0D8] px-4 py-2 text-xs font-semibold text-[#945A13] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              Jattari Region
            </span>
            <span className="rounded-full bg-[#EAF2ED] px-4 py-2 text-xs font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              College Listings
            </span>
          </div>
        </div>
      </section>

      {/* College Directory */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-5 md:px-10 md:pb-20">
        {colleges.map((college, index) => (
          <article
            key={college.name}
            data-reveal
            style={{ transitionDelay: `${(index % 5) * 100}ms` }}
            className={`group relative grid gap-5 border-b border-[#E8E1D5] py-8 transition-colors duration-500 hover:bg-[#EAF2ED]/60 md:grid-cols-[150px_minmax(0,1fr)_170px] md:items-start md:gap-7 ${
              index % 2 === 0 ? revealLeft : revealRight
            }`}
          >
            {/* College Image */}
            <div className="relative h-36 w-full overflow-hidden rounded-xl bg-[#EAF2ED] md:h-28 md:w-[150px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#68756F]">
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
                  className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}

              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#073B32]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* College Information */}
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B9741C]">
                College {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 inline-block text-xl font-bold tracking-tight text-[#073B32] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B9741C] sm:text-2xl">
                {college.name}
              </h3>

              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#68756F]">
                <span
                  className="shrink-0 text-[#D58A28] transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  ⌖
                </span>
                <span>{college.location}</span>
              </p>

              <p className="mt-3 text-sm leading-7 text-[#68756F]">
                {college.details}
              </p>

              <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                <div className="rounded-lg border border-[#E8E1D5] bg-white/60 p-4 transition-all duration-300 group-hover:border-[#B9D8C8] group-hover:bg-white">
                  <dt className="font-semibold text-[#172B26]">
                    Courses / programmes
                  </dt>
                  <dd className="mt-1 leading-6 text-[#68756F]">
                    {college.courses}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
                {college.website && (
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#06483D] underline decoration-[#B9D8C8] underline-offset-4 transition-all duration-300 hover:gap-3 hover:text-[#D58A28]"
                  >
                    Official website
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                <a
                  href={college.map}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#06483D] underline decoration-[#B9D8C8] underline-offset-4 transition-all duration-300 hover:gap-3 hover:text-[#D58A28]"
                >
                  View on map
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={college.source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#68756F] underline decoration-[#E8E1D5] underline-offset-4 transition-all duration-300 hover:gap-3 hover:text-[#D58A28]"
                >
                  Source
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Animated number marker */}
            <div className="hidden justify-end md:flex">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E1D5] text-sm font-bold tabular-nums text-[#B9741C] transition-all duration-500 group-hover:rotate-12 group-hover:border-[#D58A28] group-hover:bg-[#D58A28] group-hover:text-white group-hover:shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D58A28] transition-all duration-500 group-hover:w-full"
            />
          </article>
        ))}

        <div
          data-reveal
          className={`mt-8 rounded-xl border border-[#E8E1D5] bg-white p-5 transition-all duration-300 hover:border-[#B9D8C8] hover:shadow-md ${reveal}`}
        >
          <p className="text-sm leading-7 text-[#68756F]">
            This is a regional directory, not an official ranking. Institution
            names and locations are based on publicly available listings.
            Contact details and current course offerings should be confirmed
            directly. Only selected entries have a college-specific image
            available here; other rows use a neutral placeholder rather than
            displaying an unrelated campus photo.
          </p>
        </div>

        <p
          data-reveal
          className={`mt-4 text-sm leading-7 text-[#68756F] ${reveal}`}
        >
          Reference directory:{" "}
          <a
            href={affiliationSource}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#06483D] underline underline-offset-4 transition-colors hover:text-[#D58A28]"
          >
            Raja Mahendra Pratap Singh State University — Affiliated Colleges
          </a>
        </p>
      </section>

      {/* Anugrah Homes Promotion */}
      <section className="relative isolate overflow-hidden bg-[#EAF2ED]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-[#06483D]/10"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-[1fr_auto] md:px-10 md:py-16">
          <div data-reveal className={`max-w-3xl ${revealLeft}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9741C]">
              Local Real Estate
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#073B32] sm:text-3xl">
              Discover Property Opportunities Around Jattari
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#52665D]">
              Along with education and local facilities, families may also
              explore residential property options around Jattari. Anugrah
              Homes provides a local real-estate point of reference for
              people interested in exploring property opportunities in the
              area.
            </p>

            <p className="mt-3 text-sm font-semibold text-[#06483D]">
              Anugrah Homes · Jattari, Uttar Pradesh
            </p>
          </div>

          <div data-reveal className={revealRight}>
            <Link
              href="/real-estate"
              className="group inline-flex w-fit items-center gap-3 rounded-lg bg-[#06483D] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-[#04382F] hover:shadow-lg"
            >
              Explore Real Estate
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skyline Aero Homes Promotion */}
      <section className="relative isolate overflow-hidden bg-[#073B32]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 -right-20 -z-10 h-80 w-80 rounded-full bg-[#D58A28]/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-[1fr_auto] md:px-10 md:py-16">
          <div data-reveal className={`max-w-3xl ${revealLeft}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B85A]">
              Property & Connectivity
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Explore Skyline Aero Homes
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75">
              Interested in the wider Jattari and Jewar region? Explore
              Skyline Aero Homes to learn more about its residential plot
              offerings and the surrounding area's connectivity. Review
              project details and verify all property information before
              making a decision.
            </p>

            <p className="mt-3 text-sm font-semibold text-[#F4B85A]">
              Skyline Aero Homes · Jattari Region
            </p>
          </div>

          <div data-reveal className={revealRight}>
            <Link
              href="/real-estate"
              className="group inline-flex w-fit items-center gap-3 rounded-lg bg-[#D58A28] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-[#B9741C] hover:shadow-lg"
            >
              Explore Property Options
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-[#E8E1D5] bg-[#FFF9F0]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 sm:flex-row sm:items-center md:px-10">
          <div data-reveal className={revealLeft}>
            <h2 className="text-xl font-bold text-[#073B32]">
              Explore more education options
            </h2>
            <p className="mt-2 text-sm text-[#68756F]">
              Browse schools, tuition classes, coaching centres and libraries.
            </p>
          </div>

          <div data-reveal className={revealRight}>
            <Link
              href="/education"
              className="group inline-flex w-fit items-center gap-3 rounded-lg bg-[#06483D] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-[#04382F] hover:shadow-lg"
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