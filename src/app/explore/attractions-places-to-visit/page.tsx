import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Compass,
  Clock,
  Trees,
  Landmark,
  Church,
  Camera,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const places = [
  {
    number: "01",
    name: "Jawahar Park",
    category: "Parks & Recreation",
    description:
      "A green space to enjoy a relaxed outing, spend time outdoors, and take a break from everyday routines. Check local timings before visiting.",
    image: "/images/jawahar-park.jpg",
    icon: Trees,
    location: "Aligarh region",
    tag: "Outdoor escape",
  },
  {
    number: "02",
    name: "Aligarh Fort",
    category: "History & Heritage",
    description:
      "Explore the historic side of the Aligarh region and learn more about its heritage. Confirm access and visitor information before planning your trip.",
    image: "/images/aligarh-fort.jpg",
    icon: Landmark,
    location: "Aligarh",
    tag: "History & heritage",
  },
  {
    number: "03",
    name: "Khereshwar Temple",
    category: "Religious & Cultural Places",
    description:
      "Discover a religious destination in the Aligarh region and learn about local traditions, cultural experiences, and places of worship.",
    image: "/images/khereshwar-temple.jpg",
    icon: Church,
    location: "Aligarh region",
    tag: "Culture & tradition",
  },
];

const tips = [
  {
    icon: Route,
    number: "01",
    title: "Plan your route",
    description:
      "Check the distance, road conditions, and transport options before leaving Jattari.",
  },
  {
    icon: Clock,
    number: "02",
    title: "Check timings",
    description:
      "Visitor hours and access arrangements may change. Verify details before travelling.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Travel responsibly",
    description:
      "Respect local customs, keep public spaces clean, and follow visitor rules.",
  },
];

const officialGuide = "https://aligarh.nic.in/places-of-interest/";

export default function AttractionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-slate-950 sm:min-h-[640px] lg:min-h-[700px]">
        <Image
          src="/images/jawahar-park.jpg"
          alt="Outdoor greenery in the Aligarh region"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border border-white/20 sm:h-[430px] sm:w-[430px]" />
        <div className="pointer-events-none absolute -right-8 top-28 h-52 w-52 rounded-full border border-white/15 sm:h-[330px] sm:w-[330px]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-5 py-20 sm:min-h-[640px] sm:px-8 lg:min-h-[700px] lg:px-12">
          <div className="max-w-4xl">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ArrowRight className="rotate-180" size={16} />
              Explore Jattari
            </Link>

            <div className="mt-9 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200 sm:text-sm">
              <Compass size={17} />
              Places, heritage & experiences
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Find your next
              <span className="mt-2 block text-blue-300">
                local discovery.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 md:text-lg">
              Discover outdoor spaces, historic landmarks and cultural
              destinations around Jattari and the wider Aligarh region.
              Plan a thoughtful day out and explore beyond your usual routes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#destinations"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#2563EB] px-7 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
              >
                Explore destinations
                <ArrowRight size={19} />
              </a>

              <a
                href={officialGuide}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Official tourist guide
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/25 pt-6 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-300" />
                Jattari & Aligarh region
              </span>

              <span className="flex items-center gap-2">
                <Camera size={16} className="text-blue-300" />
                Nature, history & culture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#2563EB] sm:text-sm">
              <span className="h-px w-9 bg-[#2563EB]" />
              Explore the region
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Everyday surroundings.
              <span className="mt-2 block text-[#6B7280]">
                Unexpected discoveries.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#6B7280] sm:text-base">
              Jattari connects visitors with the wider Aligarh region, where
              local culture, heritage, places of worship and outdoor spaces
              offer opportunities to explore. Whether you are planning a short
              outing or learning about the surrounding area, a little planning
              can make your visit more enjoyable.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#6B7280] sm:text-base">
              Journey times depend on your starting point and route. Verify
              directions, opening hours and access details before visiting.
            </p>

            <Link
              href="/explore"
              className="mt-7 inline-flex items-center gap-3 font-semibold text-[#2563EB] transition hover:gap-4"
            >
              Discover more Jattari guides
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-[#93C5FD] sm:-left-4 sm:-top-4" />

            <div className="relative rounded-3xl border border-white bg-white p-2.5 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-3">
              <div className="relative h-[330px] overflow-hidden rounded-2xl bg-slate-200 sm:h-[440px]">
                <Image
                  src="/images/jawahar-park.jpg"
                  alt="Outdoor greenery in the Aligarh region"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Sparkles size={14} />
                    Explore at your pace
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    Make room for discovery.
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200">
                    Learn about places, traditions and experiences around the
                    region.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-3 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 shadow-xl sm:-right-5">
              <p className="text-sm font-bold">Discover locally</p>
              <p className="mt-1 text-xs text-[#6B7280]">
                Plan · Explore · Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS — ALTERNATING EDITORIAL LAYOUT */}
      <section
        id="destinations"
        className="scroll-mt-20 border-y border-[#E5E7EB] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563EB] sm:text-sm">
              Places to explore
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The region, one place at a time.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B7280] sm:text-base">
              From open green spaces to historic and cultural landmarks,
              discover places around the Aligarh region and plan your visit
              with reliable local information.
            </p>
          </div>

          <div className="space-y-14 sm:space-y-20 lg:space-y-24">
            {places.map((place, index) => {
              const Icon = place.icon;
              const reverse = index % 2 === 1;

              return (
                <article
                  key={place.number}
                  className="grid items-center gap-7 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={`relative ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative h-[280px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[380px] lg:h-[430px]">
                      <Image
                        src={place.image}
                        alt={place.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/10" />

                      <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 backdrop-blur">
                        {place.category}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                            Destination {place.number}
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                            {place.name}
                          </h3>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563EB] shadow-lg">
                          <Icon size={23} />
                        </span>
                      </div>
                    </div>

                    <div
                      className={`absolute -bottom-3 hidden h-16 w-28 rounded-xl border border-[#DBEAFE] bg-[#DBEAFE]/60 sm:block ${
                        reverse ? "-left-3" : "-right-3"
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`relative py-2 sm:py-5 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <p className="text-sm font-bold tracking-[0.18em] text-[#2563EB]">
                      {place.number}
                      <span className="mx-3 text-[#D1D5DB]">/</span>
                      {place.tag}
                    </p>

                    <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                      Discover{" "}
                      <span className="text-[#2563EB]">{place.name}.</span>
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-[#6B7280] sm:text-base">
                      {place.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-sm text-[#6B7280]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DBEAFE] text-[#2563EB]">
                        <MapPin size={18} />
                      </span>
                      <div>
                        <p className="font-semibold text-[#1F2937]">
                          Location
                        </p>
                        <p className="mt-0.5">{place.location}</p>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#E5E7EB] pt-6">
                      <a
                        href={officialGuide}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
                      >
                        Check visitor information
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-[#E5E7EB] pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-[#6B7280]">
              Destination details are a starting point. Confirm exact
              locations, access and opening arrangements with official or
              local sources.
            </p>

            <a
              href={officialGuide}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#2563EB] transition hover:gap-3"
            >
              More places to visit
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563EB] sm:text-sm">
              Before you go
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              A little planning goes a long way.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B7280] sm:text-base">
              Use these simple checks to make your outing around Jattari and
              nearby destinations easier.
            </p>

            <a
              href={officialGuide}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition hover:gap-3"
            >
              Visit the official guide
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {tips.map((tip) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.number}
                  className="grid gap-4 py-6 sm:grid-cols-[60px_1fr] sm:items-start sm:gap-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DBEAFE] text-[#2563EB]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-wider text-[#2563EB]">
                        {tip.number}
                      </span>
                      <h3 className="text-lg font-bold">{tip.title}</h3>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6B7280]">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#1F2937] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-indigo-400/15 blur-3xl"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300 sm:text-sm">
                Continue exploring
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Get to know Jattari beyond the map.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Explore local culture, everyday life, markets and useful
                information to understand the area better.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-white px-6 py-3 font-semibold text-[#1F2937] transition hover:-translate-y-0.5 hover:bg-blue-50 md:self-center"
            >
              Explore Jattari
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}