import Image from "next/image";
import Link from "next/link";

const projectSteps = [
  {
    number: "01",
    title: "Understand the Location",
    description:
      "Research the surrounding area, road access, nearby facilities and its connection to Jattari and neighbouring locations.",
  },
  {
    number: "02",
    title: "Explore the Development",
    description:
      "Review the available layout, project details, site information and amenities published by the relevant developer.",
  },
  {
    number: "03",
    title: "Verify Before Deciding",
    description:
      "Check land records, ownership, applicable approvals, written terms and current availability independently.",
  },
];

const projectChecks = [
  "Exact location and site access",
  "Land ownership and relevant records",
  "Applicable approvals and permitted land use",
  "Written payment terms and agreements",
];

export default function RealEstateProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#1F2937]">
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[450px] items-center overflow-hidden bg-[#17212B] sm:min-h-[510px] lg:min-h-[560px]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=75"
          alt="Contemporary residential architecture"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="z-0 object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#101820]/80 via-[#101820]/50 to-[#101820]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 z-10 h-72 w-72 rounded-full border border-white/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-[20%] z-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl"
        />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to Real Estate
          </Link>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.28em] text-blue-200 sm:text-sm">
            Jattari Property Guide
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Explore Property Projects.
            <span className="mt-2 block text-blue-200">
              Start With the Details.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/95 sm:text-base sm:leading-8 md:text-lg">
            Explore how to research residential developments around Jattari
            and the wider region. Understand the location, review published
            project information and make informed decisions.
          </p>

          <a
            href="#project-guide"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1D4ED8] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Explore the Project Guide
            <span aria-hidden="true">↓</span>
          </a>

          <p className="mt-5 text-xs text-white/75">
            Illustrative residential image, not a representation of a
            specific Jattari project.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-14 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-9 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#2563EB] sm:text-sm">
              Before Exploring a Project
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl">
              Location first. Documentation always.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#4B5563] sm:text-base">
              A property project should be assessed on its own details.
              Start by understanding the exact location, reviewing the
              available documentation and checking the information provided
              by the relevant developer.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#4B5563] sm:text-base">
              This guide helps you organise your research. It does not
              represent a verified inventory of projects currently available
              in Jattari.
            </p>

            <Link
              href="/real-estate/buying-checklist"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8]"
            >
              View the buying checklist
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative border-l-4 border-[#2563EB] py-3 pl-6 sm:pl-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Your Research Guide
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-[#111827] sm:text-3xl">
              Look beyond the brochure.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
              Compare written details, inspect the actual site and seek
              qualified advice before making a property commitment.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT RESEARCH STEPS */}
      <section
        id="project-guide"
        className="scroll-mt-24 border-y border-[#E5E7EB] bg-[#F5F7FA] px-6 py-14 sm:py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#2563EB] sm:text-sm">
              A Practical Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#111827] sm:text-4xl">
              Three steps to research a project
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
              Follow these steps to organise your research before visiting
              a site or contacting a developer.
            </p>
          </div>

          <div className="mt-9 border-t border-[#D8E1EE]">
            {projectSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 border-b border-[#D8E1EE] py-7 sm:grid-cols-[80px_1fr] sm:gap-7 sm:py-9"
              >
                <span className="text-sm font-extrabold tracking-widest text-[#2563EB]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B7280] sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY VERIFICATION CHECKLIST */}
      <section className="bg-white px-6 py-14 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#2563EB]">
              Before You Decide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl">
              Details worth checking
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
              Requirements vary by property and location. Verify the relevant
              records and permissions with the appropriate authorities.
            </p>

            <Link
              href="/real-estate/buying-checklist"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8]"
            >
              Open full checklist
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="border-t border-[#E5E7EB]">
            {projectChecks.map((check, index) => (
              <div
                key={check}
                className="flex items-start gap-4 border-b border-[#E5E7EB] py-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-sm font-bold text-[#1D4ED8]">
                  {index + 1}
                </span>

                <p className="pt-1 text-sm font-semibold leading-6 text-[#374151] sm:text-base">
                  {check}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMOTION INTRODUCTION */}
      <section className="border-t border-[#E5E7EB] bg-[#F5F7FA] px-6 py-14 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#2563EB]">
            Explore Property Brands
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl">
            Looking for more property information?
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B7280] sm:text-base">
            Explore these property brands to review their published
            information and learn more about the locations they cover.
            Confirm project details and documentation directly.
          </p>

          {/* TWO PREMIUM BRAND CARDS */}
          <div className="mt-10 grid gap-7 lg:grid-cols-2 lg:gap-8">
            {/* ANUGRAH HOMES CARD */}
            <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#DDE4ED] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Anugrah Homes local image */}
              <div className="relative h-[250px] overflow-hidden bg-[#E8EDF3] sm:h-[300px]">
                <Image
                  src="/images/anugrah.jpeg"
                  alt="Anugrah Homes property image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-transparent to-black/5"
                />

                <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  Residential Property
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Property Brand
                  </p>

                  <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                    Anugrah Homes
                  </h3>
                </div>
              </div>

              {/* Anugrah Homes content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                  Explore Residential Options
                </p>

                <h4 className="mt-3 text-xl font-bold leading-snug text-[#111827] sm:text-2xl">
                  Explore residential property information around Jattari.
                </h4>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#6B7280] sm:text-base">
                  Visit Anugrah Homes to review the project information
                  published on its official website and identify details
                  relevant to your residential property research.
                </p>

                <a
                  href="https://www.anugrahhomes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] sm:w-fit"
                >
                  Explore Anugrah Homes
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            {/* SKYLINE AERO HOMES CARD */}
            <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#283747] bg-[#17212B] text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Skyline Aero Homes local image */}
              <div className="relative h-[250px] overflow-hidden bg-[#253443] sm:h-[300px]">
                <Image
                  src="/images/aerohomes.jpeg"
                  alt="Skyline Aero Homes property image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#101820]/85 via-black/10 to-black/10"
                />

                <span className="absolute left-5 top-5 rounded-full border border-white/35 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  Wider Jewar Region
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Property Brand
                  </p>

                  <h3 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    Skyline Aero Homes
                  </h3>
                </div>
              </div>

              {/* Skyline Aero Homes content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Explore the Wider Region
                </p>

                <h4 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                  Include the wider Jewar region in your research.
                </h4>

                <p className="mt-4 flex-1 text-sm leading-7 text-white/75 sm:text-base">
                  Explore Skyline Aero Homes to review project information
                  available on its official website and identify details
                  that may be relevant to your property search.
                </p>

                <a
                  href="https://www.skylineaerohomes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#17212B] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-100 sm:w-fit"
                >
                  Explore Skyline Aero Homes
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>

          <p className="mt-6 text-xs leading-6 text-[#6B7280]">
            These are independent property brands. Verify project availability,
            pricing, approvals, land records and other details directly with
            the relevant company and authorities. Promotional images should
            represent the brands accurately.
          </p>
        </div>
      </section>

      {/* RELATED REAL ESTATE GUIDES */}
      <section className="bg-white px-6 py-14 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#2563EB]">
            Continue Your Research
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#111827] sm:text-4xl">
            Explore more property guides
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B7280] sm:text-base">
            Continue exploring residential plots, commercial property and
            practical buying checks.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/real-estate/residential-plots"
              className="inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] px-5 py-3 text-sm font-semibold transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Residential Plots →
            </Link>

            <Link
              href="/real-estate/commercial-plots"
              className="inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] px-5 py-3 text-sm font-semibold transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Commercial Plots →
            </Link>

            <Link
              href="/real-estate/buying-checklist"
              className="inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] px-5 py-3 text-sm font-semibold transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Buying Checklist →
            </Link>

            <Link
              href="/real-estate/property-enquiries"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Property Enquiries →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}