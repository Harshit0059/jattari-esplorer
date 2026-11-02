
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

const allProjects = [
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
  {
    name: "Dreams N Realtors",
    category: "Residential & Commercial Land",
    description:
      "Share the type of property you are exploring and submit your requirements through our enquiry form.",
    image: "/images/residentails.jpeg",
    imageAlt: "Dreams N Realtors property project",
  },
  {
    name: "Jewar Lands",
    category: "Jewar-region property enquiries",
    description:
      "Register your interest in land and property options around the Jewar region.",
    image: "/images/commercial.jpeg",
    imageAlt: "Jewar Lands property project",
  },
  {
    name: "Shiva Associates",
    category: "Residential and commercial property enquiries",
    description:
      "Tell us about your residential or commercial property requirements to register your enquiry.",
    image: "/images/developments.jpeg",
    imageAlt: "Shiva Associates property project",
  },
];

function getEnquiryLink(brand: string) {
  return `/real-estate/property-enquiries?brand=${encodeURIComponent(brand)}`;
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F8FA] text-[#10251F]">

      {/* Hero */}
      <section className="group/hero relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#F4F8FA] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[760px] md:px-12">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/skyline%20aerohomes.jpeg')",
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-[#8FC8F1]/60 via-[#B7DDF4]/25 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 via-35% to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <MapPin size={16} />
              <span>Jattari and surrounding areas</span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B9741C]">
              Jattari Real Estate Guide
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#10251F] sm:text-6xl lg:text-6xl">
              Explore Property Opportunities in Jattari
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#10251F] font-medium sm:text-lg">
              Learn about residential and commercial plots, understand the
              property-buying process and submit an enquiry based on your
              requirements.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/real-estate/property-enquiries"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#D58A28] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B9741C]"
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D58A28]">
              Property information
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make an informed property decision
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#68756F]">
              Choosing property involves more than comparing locations.
              Consider connectivity, the surrounding area, ownership records,
              land-use permissions and your long-term requirements before
              making a decision.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#68756F]">
              Use the guides below to understand the basics, then submit an
              enquiry if you would like to discuss a specific property
              requirement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D8E5E8] bg-white p-6 shadow-[0_4px_20px_rgb(23_43_38/7%)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F2F6] text-[#10251F]">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Verify before you invest
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#68756F]">
                  Check title documents, applicable approvals, land-use
                  permissions, access rights and the relevant records with
                  qualified professionals before committing funds.
                </p>

                <Link
                  href="/real-estate/buying-checklist"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#10251F] transition hover:text-[#D58A28]"
                >
                  Read the checklist
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Guides */}
      <section className="border-y border-[#D8E5E8] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D58A28]">
                Property Resources
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your guide to making a smarter property decision.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-[#68756F]">
                Whether you are exploring land for your home or considering
                a commercial property, start with the information that
                matters to you.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-[#68756F]">
                <span className="h-px w-10 bg-[#D58A28]" />
                <span>Explore our property guides</span>
              </div>
            </div>

            <div className="divide-y divide-[#D8E5E8]">
              {propertyGuides.map((guide) => {
                const Icon = guide.icon;

                return (
                  <Link
                    key={guide.number}
                    href={guide.href}
                    className="group block py-7 transition-colors first:pt-0 last:pb-0 sm:py-9"
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span className="pt-1 text-sm font-medium tabular-nums text-[#A49D91]">
                        {guide.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[#D58A28] sm:text-2xl lg:text-3xl">
                            {guide.title}
                          </h3>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8E5E8] text-[#10251F] transition-all group-hover:border-[#10251F] group-hover:bg-[#10251F] group-hover:text-white">
                            <ArrowRight
                              size={19}
                              className="transition-transform group-hover:-rotate-45"
                            />
                          </span>
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#68756F] sm:text-base">
                          {guide.description}
                        </p>

                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#10251F]">
                          Explore guide
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F2F6] text-[#10251F] sm:flex">
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

      {/* Featured Property Brands */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D58A28]">
            Property directory
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore property options
          </h2>

          <p className="mt-4 leading-7 text-[#68756F]">
            Review all property projects and use the enquiry form to share
            your requirements. Availability, pricing and approvals should be
            confirmed directly before making a decision.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((brand) => (
            <article
              key={brand.name}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D8E5E8] bg-white shadow-[0_4px_20px_rgb(23_43_38/7%)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(23_43_38/12%)]"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-[#E8F2F6] sm:h-52">
                  <div
                    role="img"
                    aria-label={brand.imageAlt}
                    className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-[1.03]"
                    style={{
                      backgroundImage: `url("${brand.image}")`,
                    }}
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10251F]/80 to-transparent p-4 pt-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <MapPin size={13} />
                      Jattari region
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D58A28]">
                    {brand.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                    {brand.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68756F]">
                    {brand.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={getEnquiryLink(brand.name)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#D58A28] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#B9741C]"
                >
                  Enquire about this option
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Buying Guidance */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 rounded-2xl border border-[#D8E5E8] bg-white p-6 shadow-[0_4px_20px_rgb(23_43_38/7%)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0D8] text-[#B9741C]">
              <CheckCircle2 size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
              Before you finalise a property
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#68756F]">
              Review the documentation, verify ownership and applicable
              permissions, understand the payment terms and seek independent
              legal advice where needed.
            </p>
          </div>

          <Link
            href="/real-estate/buying-checklist"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#10251F] px-5 py-3.5 text-sm font-semibold text-[#10251F] transition hover:bg-[#D58A28] hover:text-white"
          >
            Open checklist
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Final Enquiry CTA */}
      <section className="border-t border-[#D8E5E8] bg-[#F4F8FA]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-medium text-[#B9741C]">
                <MessageSquare size={17} />
                Property requirements
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#10251F] sm:text-4xl">
                Looking for a property in Jattari?
              </h2>

              <p className="mt-4 leading-7 text-[#10251F] font-medium">
                Submit your requirements through the property enquiry
                page to tell us what type of property you are exploring.
              </p>
            </div>

            <Link
              href="/real-estate/property-enquiries"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#D58A28] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B9741C]"
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



