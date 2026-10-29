import Link from "next/link";

const travelTips = [
  {
    number: "01",
    title: "Plan Your Route",
    description:
      "Confirm your starting point, destination, and the latest route before leaving. Check a current map and allow extra time if you are travelling during busy hours.",
    icon: "⌖",
    tag: "ROUTE PLANNING",
  },
  {
    number: "02",
    title: "Check Transport Options",
    description:
      "Verify current bus, shared-vehicle, taxi, or other local transport availability and timings before you travel. Do not rely on old schedules or unconfirmed information.",
    icon: "↗",
    tag: "TRANSPORT",
  },
  {
    number: "03",
    title: "Carry Everyday Essentials",
    description:
      "Keep your phone charged, carry drinking water, and bring any medicines or personal essentials you may need. Save important addresses and contact details before starting your journey.",
    icon: "✓",
    tag: "TRAVEL BASICS",
  },
  {
    number: "04",
    title: "Respect Local Places",
    description:
      "Be considerate of residents, local customs, places of worship, private property, and community spaces. Ask permission before photographing people or private premises.",
    icon: "✳",
    tag: "LOCAL ETIQUETTE",
  },
  {
    number: "05",
    title: "Confirm Opening Hours",
    description:
      "If you plan to visit a shop, eatery, office, school, or other facility, confirm its current address, opening hours, and availability before setting out.",
    icon: "◷",
    tag: "VISIT PLANNING",
  },
  {
    number: "06",
    title: "Keep Your Plans Flexible",
    description:
      "Allow extra time for traffic, weather, waiting, and changes to transport. Keep an alternative route or contact option available in case plans need to change.",
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
    <main className="min-h-screen overflow-hidden bg-white text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white px-6 py-12 sm:py-16 md:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-primary/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-20 top-24 h-40 w-40 rounded-full border border-primary/10"
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/explore/local-markets"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover"
          >
            <span aria-hidden="true">←</span> Local Markets
          </Link>

          <p className="mt-9 text-xs font-bold uppercase tracking-[0.25em] text-primary sm:mt-12 sm:text-sm sm:tracking-[0.3em]">
            Make Your Visit Easier
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-6xl">
            Travel Tips for <span className="text-primary">Jattari</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
            A practical guide to planning your journey, checking local services,
            preparing everyday essentials, and exploring Jattari and its
            surroundings with confidence.
          </p>

          <a
            href="#tips"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover sm:mt-9 sm:px-7 sm:py-3.5 sm:text-base"
          >
            View Travel Checklist <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* TRAVEL PREPARATION */}
      <section className="mx-auto max-w-6xl bg-white px-6 py-10 sm:py-14 md:px-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
            Before You Go
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            A little preparation goes a long way
          </h2>

          <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base">
            Travel conditions and local services can change. Use these general
            tips to prepare, then confirm time-sensitive details close to your
            visit. If you are visiting a specific place, check the exact address
            and contact the venue when possible.
          </p>
        </div>

        {/* TIPS GRID */}
        <div
          id="tips"
          className="mt-7 grid scroll-mt-24 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {travelTips.map((tip) => (
            <article
              key={tip.number}
              className="group rounded-2xl border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-primary">
                  {tip.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/10 bg-soft-accent text-xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  {tip.icon}
                </span>
              </div>

              <p className="mt-5 text-[10px] font-bold tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
                {tip.tag}
              </p>

              <h3 className="mt-2 text-lg font-bold text-foreground sm:text-xl">
                {tip.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {tip.description}
              </p>

              <div className="mt-5 h-1 w-10 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>

        {/* FINAL CHECKLIST */}
        <div className="mt-9 rounded-2xl border border-border bg-white p-5 sm:mt-12 sm:rounded-3xl sm:p-8 md:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
                Final Checklist
              </p>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                Ready to explore?
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Give these essentials a quick check before leaving for your trip.
            </p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border p-3 sm:p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-accent text-sm font-bold text-primary">
                  ✓
                </span>
                <span className="text-sm leading-6 text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXPLORE CTA */}
      <section className="bg-white px-6 pb-12 pt-4 sm:pb-16 md:px-12">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-white p-6 sm:rounded-3xl sm:p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
            Start Exploring
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Your Jattari guide starts here
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                Return to the Explore Jattari guide to discover local markets,
                culture, nearby places, and other useful information for your
                visit.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover sm:px-7 sm:py-3.5 sm:text-base md:self-center"
            >
              Explore Jattari <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
