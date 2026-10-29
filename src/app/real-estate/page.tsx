import Image from "next/image";
import Link from "next/link";

const realEstateSections = [
  {
    number: "01",
    title: "Projects",
    subtitle: "Explore residential developments",
    description:
      "Learn about property projects in and around Jattari, including location details and available project information.",
    href: "/real-estate/projects",
  },
  {
    number: "02",
    title: "Residential Plots",
    subtitle: "Explore land for residential use",
    description:
      "Understand residential plot options, locality information and important details to check before making a decision.",
    href: "/real-estate/residential-plots",
  },
  {
    number: "03",
    title: "Commercial Plots",
    subtitle: "Property for business purposes",
    description:
      "Explore commercial land considerations, road access, permitted land use and nearby development.",
    href: "/real-estate/commercial-plots",
  },
  {
    number: "04",
    title: "Buying Checklist",
    subtitle: "Know what to verify before buying",
    description:
      "Review ownership documents, land records, approvals, site boundaries and other important checks.",
    href: "/real-estate/buying-checklist",
  },
  {
    number: "05",
    title: "Property Enquiries",
    subtitle: "Ask questions about property options",
    description:
      "Find the next step for property-related questions and enquiries about the Jattari area.",
    href: "/real-estate/property-enquiries",
  },
];

const buyingChecks = [
  {
    number: "01",
    title: "Ownership and land records",
    description:
      "Check ownership history and relevant land records with the appropriate authorities.",
  },
  {
    number: "02",
    title: "Land use and approvals",
    description:
      "Verify the permitted use of the land and applicable permissions before committing.",
  },
  {
    number: "03",
    title: "Road access and boundaries",
    description:
      "Inspect the site, access road, boundaries and connection to nearby facilities.",
  },
  {
    number: "04",
    title: "Written agreements and payments",
    description:
      "Review agreements, payment terms and receipts carefully with a qualified professional.",
  },
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* HERO WITH OPTIMIZED BACKGROUND IMAGE */}
      <section className="relative isolate flex min-h-[370px] items-center overflow-hidden bg-[#374151] sm:min-h-[420px] lg:min-h-[460px]">
        {/* Image is preloaded because it appears above the fold */}
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=75"
          alt="Residential property and real estate"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="z-0 object-cover object-center"
        />

        {/* Neutral overlay for readable text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/15"
        />

        {/* Hero content */}
        <div className="relative z-20 mx-auto flex min-h-[370px] w-full max-w-7xl items-center px-6 py-12 sm:min-h-[420px] md:px-10 lg:min-h-[460px]">
          <div className="max-w-3xl text-white">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#93C5FD]"
              />
              Jattari Property Guide
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Real Estate.
              <span className="mt-1 block text-[#DBEAFE]">
                Understand Your Options.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
              Explore property information, residential and commercial plots,
              local developments and practical buying considerations for
              Jattari and nearby areas.
            </p>

            <a
              href="#real-estate-options"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1D4ED8] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#DBEAFE]"
            >
              Explore Real Estate
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
              Property in Jattari
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#1F2937] sm:text-4xl">
              Make informed property decisions.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6B7280]">
              Whether you are exploring a residential plot, considering
              commercial land or learning about a development, understanding
              location, access, documentation and land-use rules is essential.
              Use this section as a starting point for your research.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#2563EB]">
              <span className="h-1 w-12 rounded-full bg-[#2563EB]" />
              Explore five property categories
            </div>
          </div>
        </div>
      </section>

      {/* REAL ESTATE CATEGORIES */}
      <section
        id="real-estate-options"
        className="scroll-mt-24 bg-[#F5F7FA] px-6 py-12 md:px-10 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#D8E1EE] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
                Property Directory
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1F2937] sm:text-4xl">
                Explore your options
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B7280]">
              Choose a section for more information about property,
              documentation and enquiries.
            </p>
          </div>

          <div>
            {realEstateSections.map((item) => (
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

      {/* PROPERTY BUYING CHECKLIST */}
      <section className="bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
              Before You Buy
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1F2937] sm:text-4xl">
              Important property checks
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6B7280]">
              A few practical things to review before making a property
              decision. Requirements depend on the location and type of land.
            </p>
          </div>

          <div className="mt-6">
            {buyingChecks.map((item) => (
              <div
                key={item.number}
                className="grid gap-3 border-b border-[#E5E7EB] py-5 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-5"
              >
                <span className="text-sm font-bold tabular-nums text-[#2563EB]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-[#1F2937]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/real-estate/buying-checklist"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition hover:text-[#1D4ED8]"
          >
            View full buying checklist
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* REGIONAL PROPERTY PERSPECTIVE */}
      <section className="border-t border-[#E5E7EB] bg-[#F5F7FA] px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
              Explore Residential Options
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#1F2937] sm:text-3xl">
              Location matters when planning your future.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-[#6B7280]">
              If you are researching property around Jattari or the wider
              Jewar region, you can also explore these property brands for
              their respective project information.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#6B7280]">
              Learn about{" "}
              <a
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition hover:text-[#1D4ED8]"
              >
                Anugrah Homes
              </a>{" "}
              and{" "}
              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition hover:text-[#1D4ED8]"
              >
                Skyline Aero Homes
              </a>
              . Check each company&apos;s official information and verify
              project approvals, land records, pricing and availability
              independently.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-white px-6 pb-12 pt-10 md:px-10 md:pb-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-[#E5E7EB] pt-9 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Need More Information?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-[#1F2937]">
              Have a property-related question?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">
              Use the contact page to share a question or feedback about the
              Jattari directory.
            </p>
          </div>

          <Link
            href="/real-estate/property-enquiries"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
          >
            Property Enquiries
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}