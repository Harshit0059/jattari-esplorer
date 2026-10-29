
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  MapPin,
} from "lucide-react";

const propertyLinks = [
  {
    number: "01",
    title: "Residential Plots",
    description: "Explore land options for your future home.",
    href: "/real-estate/residential-plots",
  },
  {
    number: "02",
    title: "Commercial Plots",
    description: "Understand property options for business use.",
    href: "/real-estate/commercial-plots",
  },
  {
    number: "03",
    title: "Property Projects",
    description: "Discover projects and review their details.",
    href: "/real-estate/projects",
  },
  {
    number: "04",
    title: "Buying Checklist",
    description: "Know what to verify before purchasing land.",
    href: "/real-estate/buying-checklist",
  },
];

export default function RealEstatePage() {
  return (
    <main className="overflow-hidden bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO */}
      <section
        className="relative flex min-h-[650px] items-center bg-cover bg-center md:min-h-[760px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(9,20,38,0.84) 0%, rgba(9,20,38,0.57) 48%, rgba(9,20,38,0.12) 100%), url('/images/skyline%20aerohomes.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              <MapPin size={15} />
              <span>Real Estate & Property Guide · Jattari</span>
            </div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200 sm:text-sm">
              Find your place. Understand your options.
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.13] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A better way to
              <br />
              explore <span className="text-blue-300">property.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              Explore residential land, commercial property and real estate
              projects around Jattari. Find useful information to help you
              make more informed property decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/real-estate/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Projects
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/real-estate/buying-checklist"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Property Buying Guide
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-4 text-sm text-white/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                <ArrowDown size={18} />
              </div>
              <span>Discover property options and local insights</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[310px] border-l border-t border-white/20 bg-slate-950/35 p-7 text-white backdrop-blur-md lg:block">
          <p className="text-xs uppercase tracking-[0.22em] text-blue-200">
            Your local guide
          </p>
          <p className="mt-2 text-xl font-medium">Property in Jattari</p>
          <p className="mt-2 text-sm leading-6 text-white/75">
            Explore, compare and verify before making a decision.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Property, made clearer
            </p>
            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Start with the right information.
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              Every property decision starts with understanding your needs.
              Whether you are considering land for a home, exploring
              commercial opportunities or reviewing a real estate project,
              use this guide to understand the options and the checks that
              matter.
            </p>

            <Link
              href="/real-estate/buying-checklist"
              className="mt-7 inline-flex items-center gap-2 border-b border-blue-600 pb-2 text-sm font-semibold text-blue-700 transition hover:gap-4"
            >
              Read the buying checklist <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROPERTY PATHWAYS — EDITORIAL ROWS, NOT CARDS */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Explore your options
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Where would you like to begin?
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Browse the sections that match your property goals and learn
              what to consider before moving forward.
            </p>
          </div>

          <div className="border-t border-gray-200">
            {propertyLinks.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group grid gap-4 border-b border-gray-200 py-7 transition hover:bg-[#F5F7FA] sm:grid-cols-[70px_1fr_1fr_50px] sm:items-center sm:px-5"
              >
                <span className="text-sm font-medium text-blue-600">
                  {item.number}
                </span>

                <h3 className="text-xl font-semibold tracking-tight transition group-hover:text-blue-700 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="max-w-sm text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowUpRight size={19} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT IMAGE */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="relative min-h-[390px] overflow-hidden rounded-2xl sm:min-h-[510px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('/images/skyline%20aerohomes.jpeg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 text-white sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-xs backdrop-blur-sm">
                <Building2 size={14} />
                Featured property brand
              </span>
              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Skyline Aero Homes
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                Explore the project details, location information and
                available property options directly with the developer.
              </p>
            </div>
          </div>

          <div className="lg:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Featured project
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Explore a project before you choose a plot.
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              A project deserves a closer look beyond its name or photographs.
              Review the location, land documentation, approvals, development
              details and applicable terms before deciding whether it suits
              your requirements.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                "Review project and location details",
                "Ask about plot availability and applicable prices",
                "Verify ownership, approvals and relevant documents",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  <span className="text-sm leading-6 text-gray-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/real-estate/projects"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Project Details <ArrowRight size={18} />
            </Link>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Availability, pricing and approvals should be confirmed with
              the relevant project representative.
            </p>
          </div>
        </div>
      </section>

      {/* ANUGRAH HOMES — DISTINCT BRAND SECTION */}
      <section className="relative overflow-hidden bg-[#E9EEF5]">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-blue-200/70" />
        <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-blue-200/70" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
              Explore a local property brand
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Anugrah Homes
              <span className="block text-blue-700">Discover the details.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Looking into property options around Jattari? Connect with
              Anugrah Homes to enquire about its offerings, understand
              project-specific details and request information relevant to
              your requirements.
            </p>

            <div className="mt-8 border-l-2 border-blue-600 pl-5">
              <p className="font-semibold">Before you take the next step</p>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Ask about the exact location, available plots, total costs,
                documentation and applicable approvals.
              </p>
            </div>

            <Link
              href="/real-estate/property-enquiries"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#1F2937] px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Enquire About Property <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative min-h-[350px] overflow-hidden rounded-2xl sm:min-h-[460px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url('/images/anugrah.jpeg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Anugrah Homes · Jattari
                </p>
                <p className="mt-3 max-w-md text-2xl font-medium leading-snug sm:text-3xl">
                  Find the information you need to make a considered choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <FileCheck2 size={27} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              A practical property guide
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Before you buy, know what to check.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Property photographs and verbal assurances are not enough.
              Understand the paperwork and costs, and obtain independent
              legal verification before making a commitment.
            </p>

            <Link
              href="/real-estate/buying-checklist"
              className="mt-7 inline-flex items-center gap-3 font-semibold text-blue-700 transition hover:gap-5"
            >
              Open the complete checklist <ArrowRight size={19} />
            </Link>
          </div>

          <div className="space-y-0 border-t border-gray-200">
            {[
              {
                title: "Ownership & title",
                detail:
                  "Have the ownership history and title documents independently reviewed.",
              },
              {
                title: "Land use & approvals",
                detail:
                  "Confirm permitted land use and relevant approvals with the appropriate authorities.",
              },
              {
                title: "Costs & terms",
                detail:
                  "Understand the total purchase cost, payment terms and other applicable charges.",
              },
              {
                title: "Location & access",
                detail:
                  "Visit the actual site and verify boundaries, access roads and surrounding conditions.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="grid gap-3 border-b border-gray-200 py-6 sm:grid-cols-[48px_1fr]"
              >
                <span className="text-sm font-semibold text-blue-600">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(15,30,53,0.92), rgba(15,30,53,0.76)), url('/images/skyline%20aerohomes.jpeg')",
        }}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center lg:px-12 lg:py-20">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Compass size={17} />
              <span>Take your next step</span>
            </div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Looking for a property in Jattari?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Share your requirements to start an enquiry about residential
              plots, commercial land or a specific property project.
            </p>
          </div>

          <Link
            href="/real-estate/property-enquiries"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Send an Enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
