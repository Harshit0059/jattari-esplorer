
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Home,
  MapPin,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const propertyGuides = [
  {
    number: "01",
    title: "Residential Plots",
    description:
      "Explore the important factors to consider when looking for a residential plot around Jattari.",
    href: "/real-estate/residential-plots",
    icon: Home,
  },
  {
    number: "02",
    title: "Commercial Plots",
    description:
      "Understand location, road access, permitted use and other considerations before choosing commercial land.",
    href: "/real-estate/commercial-plots",
    icon: Building2,
  },
  {
    number: "03",
    title: "Buying Checklist",
    description:
      "Review essential documents, ownership details and verification steps before making a property decision.",
    href: "/real-estate/buying-checklist",
    icon: ClipboardCheck,
  },
];

const featuredBrands = [
  {
    name: "Anugrah Homes",
    category: "Property enquiries",
    description:
      "Explore property-related information and share your requirements for further assistance from Anugrah Homes.",
    image: "/images/anugrah.jpeg",
    imageAlt: "Anugrah Homes property project",
  },
  {
    name: "Skyline Aero Homes",
    category: "Residential property enquiries",
    description:
      "Share your interest in residential property options and request further information about Skyline Aero Homes.",
    image: "/images/skyline%20aerohomes.jpeg",
    imageAlt: "Skyline Aero Homes property project",
  },
];

const otherBrands = [
  {
    name: "Dreamnest Realtors",
    category: "Residential and other property enquiries",
    description:
      "Share the type of property you are exploring and submit your requirements through our enquiry form.",
  },
  {
    name: "Shiva Associates",
    category: "Residential and commercial property enquiries",
    description:
      "Tell us about your residential or commercial property requirements to register your enquiry.",
  },
  {
    name: "Jewar Lands",
    category: "Jewar-region property enquiries",
    description:
      "Register your interest in land and property options around the Jewar region.",
  },
];

function getEnquiryLink(brand: string) {
  return `/real-estate/property-enquiries?brand=${encodeURIComponent(brand)}`;
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FA] text-[#1F2937]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#111827] sm:min-h-[530px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/skyline%20aerohomes.jpeg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827]/90 via-[#111827]/70 to-[#111827]/25" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <MapPin size={16} />
              <span>Jattari and surrounding areas</span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Jattari Real Estate Guide
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Property Opportunities in Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Learn about residential and commercial plots, understand the
              property-buying process and submit an enquiry based on your
              requirements.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/real-estate/property-enquiries"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Submit Property Enquiry
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/real-estate/buying-checklist"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Buying Checklist
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              Property information
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make an informed property decision
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B7280]">
              Choosing property involves more than comparing locations.
              Consider connectivity, the surrounding area, ownership records,
              land-use permissions and your long-term requirements before
              making a decision.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#6B7280]">
              Use the guides below to understand the basics, then submit an
              enquiry if you would like to discuss a specific property
              requirement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgb(15_23_42/6%)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] text-[#2563EB]">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Verify before you invest
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  Check title documents, applicable approvals, land-use
                  permissions, access rights and the relevant records with
                  qualified professionals before committing funds.
                </p>

                <Link
                  href="/real-estate/buying-checklist"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Read the checklist
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property guides */}

      {/* Property Guides - Editorial Layout, No Cards */}
      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Section introduction */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                Property Resources
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your guide to making a smarter property decision.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-[#6B7280]">
                Whether you are exploring land for your home or considering
                a commercial property, start with the information that
                matters to you.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-[#6B7280]">
                <span className="h-px w-10 bg-[#2563EB]" />
                <span>Explore our property guides</span>
              </div>
            </div>

            {/* Simple editorial links */}
            <div className="divide-y divide-[#E5E7EB]">
              {propertyGuides.map((guide) => {
                const Icon = guide.icon;

                return (
                  <Link
                    key={guide.number}
                    href={guide.href}
                    className="group block py-7 transition-colors first:pt-0 last:pb-0 sm:py-9"
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span className="pt-1 text-sm font-medium tabular-nums text-[#9CA3AF]">
                        {guide.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[#2563EB] sm:text-2xl lg:text-3xl">
                            {guide.title}
                          </h3>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#2563EB] transition-all group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white">
                            <ArrowRight
                              size={19}
                              className="transition-transform group-hover:-rotate-45"
                            />
                          </span>
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#6B7280] sm:text-base">
                          {guide.description}
                        </p>

                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                          Explore guide
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] text-[#2563EB] sm:flex">
                        <Icon size={22} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Featured property brands */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            Featured property enquiries
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore featured options
          </h2>

          <p className="mt-4 leading-7 text-[#6B7280]">
            Review these property-related options and use the enquiry form
            to share your requirements. Availability, pricing and approvals
            should be confirmed directly before making a decision.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredBrands.map((brand) => (
            <article
              key={brand.name}
              className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_4px_20px_rgb(15_23_42/6%)] transition hover:shadow-[0_8px_30px_rgb(15_23_42/10%)]"
            >
              <div className="relative h-60 overflow-hidden bg-[#E5E7EB] sm:h-72">
                <div
                  role="img"
                  aria-label={brand.imageAlt}
                  className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url("${brand.image}")`,
                  }}
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 pt-16">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    <MapPin size={13} />
                    Jattari region
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
                  {brand.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {brand.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {brand.description}
                </p>

                <Link
                  href={getEnquiryLink(brand.name)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                >
                  Enquire about this option
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Additional property options: intentionally no images */}
      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              More enquiry options
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Other property enquiries
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Select an option to submit your property requirements.
              These entries are enquiry categories and do not imply
              verification, partnership or endorsement.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[#E5E7EB]">
            {otherBrands.map((brand, index) => (
              <article
                key={brand.name}
                className="grid gap-5 border-l-2 border-[#2563EB]/20 py-7 pl-5 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    Option 0{index + 3}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    {brand.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#2563EB]">
                    {brand.category}
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6B7280]">
                    {brand.description}
                  </p>
                </div>

                <Link
                  href={getEnquiryLink(brand.name)}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#2563EB] px-4 py-3 text-sm font-semibold text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white"
                >
                  Enquire
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Buying guidance */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgb(15_23_42/6%)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DBEAFE] text-[#2563EB]">
              <CheckCircle2 size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
              Before you finalise a property
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#6B7280]">
              Review the documentation, verify ownership and applicable
              permissions, understand the payment terms and seek independent
              legal advice where needed.
            </p>
          </div>

          <Link
            href="/real-estate/buying-checklist"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#2563EB] px-5 py-3.5 text-sm font-semibold text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white"
          >
            Open checklist
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Final enquiry CTA */}
      <section className="bg-[#1E3A8A]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-medium text-blue-100">
                <MessageSquare size={17} />
                Property requirements
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Looking for a property in Jattari?
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Submit your requirements through the property enquiry
                page to tell us what type of property you are exploring.
              </p>
            </div>

            <Link
              href="/real-estate/property-enquiries"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-sm font-semibold text-[#1E3A8A] transition hover:bg-blue-50"
            >
              Go to Enquiry Form
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
