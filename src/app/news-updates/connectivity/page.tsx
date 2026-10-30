import ConnectivityPromotionPopup from "@/components/ConnectivityPromotionPopup";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  BusFront,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Route,
  Signpost,
} from "lucide-react";

const connectivityTopics = [
  {
    icon: Route,
    number: "01",
    title: "Road Network",
    description:
      "Explore the roads connecting Jattari with nearby towns and the surrounding region. Check your route before starting your journey.",
  },
  {
    icon: BusFront,
    number: "02",
    title: "Public Transport",
    description:
      "Plan local travel by checking available bus services, boarding points and transport timings before you leave.",
  },
  {
    icon: Navigation,
    number: "03",
    title: "Nearby Destinations",
    description:
      "Understand how Jattari connects with nearby towns, markets and important destinations across the region.",
  },
];

const travelChecklist = [
  "Confirm your route using a current navigation app.",
  "Check road conditions and any diversions before departure.",
  "Verify public transport timings directly before travelling.",
  "Allow extra time for traffic, weather and local road conditions.",
];

export default function ConnectivityUpdatesPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate min-h-[510px] overflow-hidden border-b border-border sm:min-h-[590px]">
        <Image
          src="/images/road-connectivity.jpeg"
          alt="Road development and connectivity around Jattari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
<div
  className="absolute inset-0 bg-gradient-to-r from-[#FFF9F0]/90 0%, via-[#FFF9F0]/65 35%, via-[#FFF9F0]/10 65%, transparent 100%"
  aria-hidden="true"
/>
        <div className="container-site relative mx-auto flex min-h-[510px] items-center px-4 py-16 sm:min-h-[590px] sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <Navigation size={16} />
              Jattari Travel & Infrastructure
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Roads That Connect
              <span className="block text-primary">
                Jattari to Opportunity.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Explore road connectivity, local transport information and
              nearby destinations around Jattari. Stay informed, plan smarter
              journeys and understand the role connectivity plays in everyday
              life and property decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#road-network"
                className="button-primary inline-flex items-center gap-2"
              >
                Explore Connectivity
                <ArrowRight size={17} />
              </a>

              <Link
                href="/real-estate/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 font-semibold transition hover:border-primary hover:text-primary"
              >
                Explore Properties
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} className="text-primary" />
                Jattari, Uttar Pradesh
              </span>
              <span className="inline-flex items-center gap-2">
                <Signpost size={17} className="text-primary" />
                Routes & Local Updates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="road-network"
        className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Connected Living
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Connectivity is more than a road on a map.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted">
            Good travel planning helps residents reach workplaces, markets,
            educational institutions and essential services. For anyone
            exploring property in Jattari, it is equally important to evaluate
            the actual approach road, travel options and current conditions
            before making a decision.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {connectivityTopics.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group border-t-2 border-border bg-surface p-6 transition-colors duration-300 hover:border-primary sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-soft-accent text-primary">
                    <Icon size={23} />
                  </div>
                  <span className="text-sm font-bold text-gray-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ROUTE PLANNING STRIP */}
      <section className="border-y border-border bg-white">
        <div className="container-site mx-auto grid gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-soft-accent text-primary">
              <CarFront size={25} />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                Planning a journey to Jattari?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                Use live navigation for the latest directions, traffic and
                estimated arrival time. Road conditions and journey times can
                change, so confirm details before travelling.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Jattari%2C+Uttar+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
          >
            Open Google Maps
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* PROPERTY CONNECTIVITY + PROMOTION */}
      <section className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Connectivity & Property
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Looking at property? Look beyond the location pin.
          </h2>
          <p className="mt-4 leading-8 text-muted">
            A property visit is a good opportunity to assess its approach
            roads, surrounding development, access to everyday facilities
            and your regular travel needs. Here are two property brands you
            can explore while researching options around Jattari.
          </p>
        </div>

        {/* Anugrah Homes */}
        <article className="mt-10 grid overflow-hidden rounded-3xl border border-border bg-white md:grid-cols-2">
          <div className="relative min-h-[280px] md:min-h-[390px]">
            <Image
              src="/images/anugrah.jpeg"
              alt="Anugrah Homes property development"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
              Explore the Neighbourhood
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Building2 size={18} />
              Anugrah Homes
            </div>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              Make location part of your property checklist.
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Exploring property in Jattari? Consider Anugrah Homes as one
              option to research. Before deciding, review the project
              location, approach road, available documentation and the
              facilities you need for everyday travel.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                Check the exact site location and access route.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                Visit the property and verify the details independently.
              </li>
            </ul>

            <div className="mt-7">
              <Link
                href="/real-estate/projects"
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
              >
                Explore Property Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </article>

        {/* Skyline Aero Homes */}
        <article className="mt-6 grid overflow-hidden rounded-3xl border border-border bg-white md:grid-cols-2">
          <div className="relative min-h-[280px] md:order-2 md:min-h-[390px]">
            <Image
              src="/images/skyline%20aerohomes.jpeg"
              alt="Skyline Aero Homes property development"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
              Research Before You Decide
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Navigation size={18} />
              Skyline Aero Homes
            </div>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              Evaluate your route before you evaluate your investment.
            </h3>

            <p className="mt-4 leading-8 text-muted">
              If you are researching Skyline Aero Homes, include real-world
              connectivity in your evaluation. Check the actual distance to
              your regular destinations, the approach road and current travel
              options rather than relying on a project name or a map pin alone.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                Confirm the project's exact location.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                Verify connectivity claims and property documents.
              </li>
            </ul>

            <div className="mt-7">
              <Link
                href="/real-estate/property-enquiries"
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
              >
                Explore Property Enquiries
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* TRAVEL CHECKLIST */}
      <section className="bg-[#EAF1FB]">
        <div className="container-site mx-auto grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:py-20">
          <div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
              <Clock3 size={24} />
            </div>
            <h2 className="mt-5 text-3xl font-bold">
              Before you hit the road
            </h2>
            <p className="mt-4 leading-8 text-gray-600">
              A few simple checks can make your journey and property visit
              easier to plan.
            </p>
          </div>

          <div className="space-y-4">
            {travelChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-100 bg-white/90 p-4 sm:p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-soft-accent text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container-site mx-auto px-4 py-16 text-center sm:px-6 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Discover Jattari
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
          Stay informed. Travel prepared. Explore with confidence.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">
          Continue exploring local developments, everyday facilities and
          property information through the Jattari Explorer guide.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/news-updates" className="button-primary inline-flex items-center gap-2">
            More Local Updates
            <ArrowRight size={17} />
          </Link>
          <Link
            href="/location-connectivity"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 font-semibold transition hover:border-primary hover:text-primary"
          >
            Location & Connectivity
            <ArrowDownRight size={17} />
          </Link>
        </div>
      </section>
      <ConnectivityPromotionPopup />
    </main>
  );
}
