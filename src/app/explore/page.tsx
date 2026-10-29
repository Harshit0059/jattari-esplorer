import Image from "next/image";
import Link from "next/link";

const places = [
  {
    number: "01",
    title: "Location & Connectivity",
    description:
      "Explore Jattari's location, nearby routes, transport connections, and surrounding areas.",
    href: "/explore/attractions",
    label: "Explore location",
  },
  {
    number: "02",
    title: "Local Facilities & Markets",
    description:
      "Learn about local shops, education, healthcare, everyday facilities, and community life.",
    href: "/explore/local-markets",
    label: "Explore local facilities",
  },
  {
    number: "03",
    title: "History & Culture",
    description:
      "Discover the wider Aligarh region's historical background, local traditions, and everyday life.",
    href: "/explore/history-culture",
    label: "Explore history & culture",
  },
  {
    number: "04",
    title: "Food & Local Eateries",
    description:
      "Explore regional food traditions and learn more about local eating experiences.",
    href: "/explore/food",
    label: "Explore food",
  },
  {
    number: "05",
    title: "Lifestyle & Markets",
    description:
      "Learn about shopping areas, small businesses, local services, and daily activities.",
    href: "/explore/lifestyle-markets",
    label: "Explore lifestyle",
  },
  {
    number: "06",
    title: "Travel Tips",
    description:
      "Prepare for your visit with practical information to help you explore the area.",
    href: "/explore/travel-tips",
    label: "View travel tips",
  },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO — LOCAL EXPLORE JATTARI IMAGE */}
      <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#17212B] sm:min-h-[500px] md:min-h-[540px] md:px-12">
        <Image
          src="/images/explore-jattari.jpeg"
          alt="Explore Jattari and its surrounding area"
          fill
          preload
          sizes="100vw"
          className="z-0 object-cover object-center"
        />

        {/* Dark overlay for text readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#080F1C]/75 via-[#080F1C]/45 to-[#080F1C]/20"
        />

        {/* Decorative graphics */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full border border-white/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 left-1/3 z-10 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl"
        />

        {/* Hero content */}
        <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-16 md:px-0 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.3em] text-blue-200 sm:text-sm">
            Discover the Region
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Explore Jattari
            <span className="mt-2 block text-blue-200">
              Places, People &amp; Everyday Life
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/95 drop-shadow sm:text-base sm:leading-8 md:text-lg">
            Discover Jattari in Aligarh district, Uttar Pradesh. Explore its
            surrounding areas, local facilities, markets, culture, food, and
            useful information for visitors.
          </p>

          <a
            href="#explore-topics"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1D4ED8] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#DBEAFE]"
          >
            Start Exploring
            <span aria-hidden="true">→</span>
          </a>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-6 text-sm text-white/90">
            <span>
              <strong className="text-white">Location</strong>
              <span className="mx-2 text-blue-200">/</span>
              Jattari
            </span>

            <span>
              <strong className="text-white">Region</strong>
              <span className="mx-2 text-blue-200">/</span>
              Western Uttar Pradesh
            </span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Get to Know Jattari
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
              A closer look at the town and its surroundings
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#4B5563] sm:text-base">
              Every place has its own character. Explore Jattari through its
              location, local markets, essential services, regional history,
              and everyday experiences.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#4B5563] sm:text-base">
              Use these guides to find helpful information about the area.
              Details such as opening hours, routes, available services, and
              local facilities should be checked before travelling.
            </p>

            <Link
              href="/explore/introduction"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8]"
            >
              Get introduced to Jattari
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Editorial highlight */}
          <div className="relative border-l-4 border-[#2563EB] py-3 pl-6 sm:pl-8">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              Explore at your pace
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-[#111827] sm:text-3xl">
              Understand the location. Discover the community.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
              From practical visitor information to the wider regional story,
              each guide gives you another way to learn about Jattari.
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORE TOPICS */}
      <section
        id="explore-topics"
        className="scroll-mt-24 border-y border-[#E5E7EB] bg-white px-6 py-14 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Explore by Topic
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
              What would you like to discover?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
              Choose a topic to explore information about Jattari and its
              surrounding region.
            </p>
          </div>

          <div className="mt-9 border-t border-[#E5E7EB]">
            {places.map((place) => (
              <article
                key={place.number}
                className="group grid gap-4 border-b border-[#E5E7EB] py-6 transition-colors duration-300 hover:bg-[#F8FAFC] sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-6 sm:px-4"
              >
                <span className="text-sm font-bold tracking-widest text-[#2563EB]">
                  {place.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-[#111827] transition-colors group-hover:text-[#2563EB] sm:text-xl">
                    {place.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6B7280]">
                    {place.description}
                  </p>
                </div>

                <Link
                  href={place.href}
                  className="inline-flex items-center gap-2 justify-self-start text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8] sm:justify-self-end"
                >
                  {place.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl border-t border-[#E5E7EB] pt-8 sm:pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
            Your Jattari Guide
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-[#111827] sm:text-3xl md:text-4xl">
            Keep exploring and learn more about the area.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B7280] sm:text-base">
            Browse the available guides to learn about local facilities,
            regional culture, shopping, and practical travel information.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/location-connectivity"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Location &amp; Connectivity
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/explore/contact-feedback"
              className="inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] bg-white px-6 py-3 text-sm font-semibold text-[#1F2937] transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Contact &amp; Feedback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}