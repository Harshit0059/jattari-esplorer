
import Link from "next/link";

const travelTips = [
  {
    number: "01",
    title: "Plan Your Route",
    description:
      "Confirm your starting point, destination, and the latest route before leaving. Check a current map and allow extra time during busy hours.",
    icon: "⌖",
    tag: "ROUTE PLANNING",
  },
  {
    number: "02",
    title: "Check Transport Options",
    description:
      "Verify current bus, shared-vehicle, taxi, or other local transport availability and timings before travelling.",
    icon: "↗",
    tag: "TRANSPORT",
  },
  {
    number: "03",
    title: "Carry Everyday Essentials",
    description:
      "Keep your phone charged, carry drinking water, and bring any medicines or personal essentials you may need.",
    icon: "✓",
    tag: "TRAVEL BASICS",
  },
  {
    number: "04",
    title: "Respect Local Places",
    description:
      "Be considerate of residents, local customs, places of worship, private property, and community spaces.",
    icon: "✳",
    tag: "LOCAL ETIQUETTE",
  },
  {
    number: "05",
    title: "Confirm Opening Hours",
    description:
      "Before visiting a shop, eatery, office, or other facility, confirm its address, opening hours, and availability.",
    icon: "◷",
    tag: "VISIT PLANNING",
  },
  {
    number: "06",
    title: "Keep Your Plans Flexible",
    description:
      "Allow extra time for traffic, weather, waiting, and transport changes. Keep an alternative route in mind.",
    icon: "◈",
    tag: "FLEXIBLE JOURNEY",
  },
];

const checklist = [
  "Route and transport details checked",
  "Phone charged and essential items packed",
  "Opening hours and visit details confirmed",
  "Extra time allowed for the journey",
];

export default function TravelTipsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO */}
      <section
        className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-cover bg-center px-6 py-20 text-white sm:min-h-[500px] md:px-12 md:py-28"
        style={{
          backgroundImage:
            "url('./images/road5.jpeg')",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-900/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full border border-white/20"
        />

        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/explore/local-markets"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-blue-200"
          >
            <span aria-hidden="true">←</span>
            Local Markets
          </Link>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.3em] text-blue-200 sm:text-sm">
            Make Your Visit Easier
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight drop-shadow-lg sm:text-5xl md:text-6xl">
            Travel Tips for{" "}
            <span className="text-blue-300">Jattari</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:text-lg">
            Plan your journey, prepare your essentials, and explore Jattari and
            its surroundings with practical travel guidance.
          </p>

          <a
            href="#tips"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1D4ED8] shadow-lg transition hover:bg-blue-100 sm:px-7"
          >
            View Travel Checklist
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Before You Go
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              A little preparation goes a long way
            </h2>
          </div>

          <p className="text-sm leading-7 text-[#6B7280] sm:text-base">
            Travel conditions and local services can change. Check current
            transport information and confirm visit details before setting out.
          </p>
        </div>

        {/* TRAVEL TIPS */}
        <div
          id="tips"
          className="mt-9 grid scroll-mt-24 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {travelTips.map((tip) => (
            <article
              key={tip.number}
              className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-[#2563EB]">
                  {tip.number}
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DBEAFE] text-2xl text-[#2563EB] transition duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                  {tip.icon}
                </span>
              </div>

              <p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-[#2563EB] sm:text-xs">
                {tip.tag}
              </p>

              <h3 className="mt-2 text-xl font-bold">{tip.title}</h3>

              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                {tip.description}
              </p>

              <div className="mt-5 h-1 w-10 rounded-full bg-[#2563EB]/70 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>

        {/* CHECKLIST */}
        <div className="mt-12 rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-9 md:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
              Final Checklist
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Ready to explore?
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#6B7280] sm:text-base">
              Check these essentials before leaving for your journey.
            </p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-sm font-bold text-[#2563EB]">
                  ✓
                </span>
                <span className="text-sm leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXPLORE CTA */}
      <section className="px-6 pb-16 md:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] p-7 text-white sm:p-10 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
            Start Exploring
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Your Jattari guide starts here
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">
                Discover local culture, markets, food, attractions, and useful
                information for your visit.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-white px-6 py-3 font-semibold text-[#2563EB] transition hover:bg-[#DBEAFE] md:self-center"
            >
              Explore Jattari
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
