import Link from "next/link";
import Image from "next/image";

const attractions = [
  {
    number: "01",
    category: "PARKS & NATURE",
    title: "Jawahar Park, Aligarh",
    description:
      "Explore a public park in Aligarh, known for its green spaces, walking paths, and outdoor recreation.",
    location: "Aligarh, Uttar Pradesh",
    href: "https://aligarh.nic.in/places-of-interest/",
    label: "Explore official details",
  },
  {
    number: "02",
    category: "HISTORICAL HERITAGE",
    title: "Aligarh Fort",
    description:
      "Discover a historic fort in Aligarh and learn about the wider region's architectural and historical heritage.",
    location: "Aligarh, Uttar Pradesh",
    href: "https://aligarh.nic.in/places-of-interest/",
    label: "Discover heritage",
  },
  {
    number: "03",
    category: "RELIGIOUS HERITAGE",
    title: "Khereshwar Temple",
    description:
      "Learn about a regional religious attraction known for its temple architecture and traditional significance.",
    location: "Aligarh region, Uttar Pradesh",
    href: "https://aligarh.nic.in/places-of-interest/",
    label: "Explore place details",
  },
];

const visitTips = [
  "Check the latest opening hours before leaving.",
  "Confirm directions and transportation options in advance.",
  "Respect local customs and keep public spaces clean.",
];

export default function AttractionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#15251D] px-6 py-20 sm:min-h-[580px] md:min-h-[650px] md:px-12 md:py-24">
        {/* Local Jawahar Park Image */}
{/* Jawahar Park — Verified Image URL */}
{/* Optimized Jawahar Park Image */}
<Image
  src="/images/jawahar-park.jpg"
  alt="Jawahar Park entrance in Aligarh, Uttar Pradesh"
  fill
  priority
  sizes="100vw"
  quality={80}
  className="z-0 object-cover object-center"
/>

        {/* Dark gradient for readable text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/15"
        />

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-black/10"
        />

        {/* Decorative graphics */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full border border-white/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 right-[12%] z-10 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
        />

        {/* Hero content */}
        <div className="relative z-20 mx-auto w-full max-w-6xl">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to Explore Jattari
          </Link>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.28em] text-emerald-200 sm:text-sm">
            Explore Places &amp; Experiences
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Places to Visit
            <span className="mt-2 block text-emerald-200">
              Around Jattari
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white drop-shadow-md sm:text-base sm:leading-8 md:text-lg">
            Discover parks, historical landmarks and religious heritage in
            Jattari and the wider Aligarh region. Find useful information
            before planning your visit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#places-to-visit"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#166534] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              Discover Attractions
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="https://aligarh.nic.in/places-of-interest/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/15 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Official Tourist Guide
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/30 pt-6 text-sm text-white/90">
            <span>
              <strong className="text-white">Explore</strong>
              <span className="mx-2 text-emerald-200">/</span>
              Parks &amp; Heritage
            </span>

            <span>
              <strong className="text-white">Region</strong>
              <span className="mx-2 text-emerald-200">/</span>
              Aligarh, Uttar Pradesh
            </span>
          </div>

          {/* Image attribution */}
          <p className="mt-5 text-xs leading-5 text-white/80">
            Hero photograph: Wikimedia Commons, CC BY-SA 4.0.{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Jawahar_Park_Entrance,_Aligarh.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-4 hover:text-emerald-200"
            >
              View original image and licence
            </a>
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-16 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Explore the Region
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
              Discover the places that make the region interesting
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#4B5563] sm:text-base">
              Exploring an area means learning about its outdoor spaces,
              historical landmarks, religious places and nearby destinations.
              These attractions offer a starting point for discovering the
              wider Aligarh region around Jattari.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#4B5563] sm:text-base">
              Some places listed here are in Aligarh rather than Jattari
              itself. Check the individual location and travel distance before
              planning a visit.
            </p>

            <Link
              href="/location-connectivity"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8]"
            >
              Explore location &amp; connectivity
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Editorial Highlight */}
          <div className="relative overflow-hidden rounded-3xl bg-[#17251F] p-7 text-white sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/15"
            />

            <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
              Plan with confidence
            </p>

            <h3 className="relative mt-4 text-2xl font-bold leading-snug sm:text-3xl">
              Explore locally. Discover more nearby.
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-white/75 sm:text-base">
              Check the route, available facilities and current visitor
              information before travelling to a new destination.
            </p>

            <div className="relative mt-7 border-t border-white/15 pt-5">
              <span className="text-sm font-semibold text-emerald-200">
                Your regional travel guide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PLACES TO VISIT */}
      <section
        id="places-to-visit"
        className="scroll-mt-24 border-y border-[#E5E7EB] bg-white px-6 py-16 sm:py-20 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Regional Attractions
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
              Places worth exploring
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
              Start with these attractions in the wider Aligarh region.
              Verify current access arrangements and travel details before
              setting out.
            </p>
          </div>

          <div className="mt-10 border-t border-[#E5E7EB]">
            {attractions.map((place) => (
              <article
                key={place.number}
                className="group grid gap-4 border-b border-[#E5E7EB] py-7 transition-colors duration-300 hover:bg-[#F8FAFC] sm:grid-cols-[72px_1fr_auto] sm:items-center sm:gap-7 sm:px-4"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-[#2563EB]">
                  {place.number}
                </span>

                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-[#6B7280] sm:text-xs">
                    {place.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#111827] transition-colors group-hover:text-[#2563EB] sm:text-2xl">
                    {place.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B7280] sm:text-base">
                    {place.description}
                  </p>

                  <p className="mt-3 text-xs font-medium text-[#4B5563] sm:text-sm">
                    <span className="mr-2 text-[#2563EB]">●</span>
                    {place.location}
                  </p>
                </div>

                <a
                  href={place.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-self-start text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8] sm:justify-self-end"
                >
                  {place.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISITOR TIPS */}
      <section className="px-6 py-16 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
            Before You Go
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
            Helpful tips for your visit
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {visitTips.map((tip, index) => (
              <div
                key={tip}
                className="flex gap-4 border-t-2 border-[#DBEAFE] bg-white py-5 sm:py-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] text-sm font-bold text-[#2563EB]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-[#4B5563] sm:text-base">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="px-6 pb-16 md:px-12 md:pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#17251F] to-[#244738] px-6 py-10 text-white sm:px-10 sm:py-12 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Get to know Jattari better
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Explore local facilities, markets, everyday life and useful
              information about the surrounding region.
            </p>
          </div>

          <Link
            href="/explore"
            className="mt-7 inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#166534] transition hover:bg-emerald-50 md:mt-0"
          >
            Back to Explore Jattari
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}