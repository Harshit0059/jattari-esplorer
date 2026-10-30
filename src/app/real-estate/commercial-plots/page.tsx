
"use client";

import Link from "next/link";
import { useEffect } from "react";
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
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-project-reveal]"
    );

    // Elements remain readable even if IntersectionObserver is unavailable.
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          // Use inline styles to avoid Tailwind class conflicts.
          element.style.opacity = "1";
          element.style.transform = "none";

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
      {/* HERO */}
      <section className="group relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#073B32] sm:min-h-[530px]">
        <div
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center transition-transform duration-[15000ms] ease-out group-hover:scale-100"
          style={{
            backgroundImage: "url('/images/skyline%20aerohomes.jpeg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/80 to-[#073B32]/35" />

        <div className="pointer-events-none absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border border-white/15 transition-transform duration-[2000ms] group-hover:scale-125" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-[280px] w-[280px] rounded-full border border-white/15 transition-transform duration-[2000ms] group-hover:scale-110" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 700ms ease, transform 700ms ease",
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
            >
              <MapPin size={16} />
              <span>Jattari and surrounding areas</span>
            </div>

            <p
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 700ms ease 100ms, transform 700ms ease 100ms",
              }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F4B65E]"
            >
              Jattari Real Estate Guide
            </p>

            <h1
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: "opacity 900ms ease 150ms, transform 900ms ease 150ms",
              }}
              className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Explore Property Opportunities in Jattari
            </h1>

            <p
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 900ms ease 250ms, transform 900ms ease 250ms",
              }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg"
            >
              Learn about residential and commercial plots, understand the
              property-buying process and submit an enquiry based on your
              requirements.
            </p>

            <div
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 900ms ease 350ms, transform 900ms ease 350ms",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/real-estate/property-enquiries"
                className="group/button inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#D58A28] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl"
              >
                Submit Property Enquiry
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>

              <Link
                href="/real-estate/buying-checklist"
                className="group/button inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                View Buying Checklist
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div
            data-project-reveal
            style={{
              opacity: 0,
              transform: "translateX(-25px)",
              transition: "opacity 800ms ease, transform 800ms ease",
            }}
          >
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

          <div
            data-project-reveal
            style={{
              opacity: 0,
              transform: "translateX(25px)",
              transition: "opacity 800ms ease 150ms, transform 800ms ease 150ms",
            }}
            className="rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-[0_4px_20px_rgb(23_43_38/7%)] transition-shadow duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(23_43_38/10%)] sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F0E9] text-[#06483D] transition-transform duration-500 hover:rotate-12 hover:scale-110">
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
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:gap-4 hover:text-[#D58A28]"
                >
                  Read the checklist
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY GUIDES */}
      <section className="border-y border-[#E8E1D5] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 800ms ease, transform 800ms ease",
              }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
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
                <span className="h-px w-10 bg-[#D58A28] transition-all duration-500 hover:w-20" />
                <span>Explore our property guides</span>
              </div>
            </div>

            <div className="divide-y divide-[#E8E1D5]">
              {propertyGuides.map((guide, index) => {
                const Icon = guide.icon;

                return (
                  <Link
                    key={guide.number}
                    href={guide.href}
                    data-project-reveal
                    style={{
                      opacity: 0,
                      transform: "translateX(25px)",
                      transition: `opacity 700ms ease ${index * 120}ms, transform 700ms ease ${index * 120}ms`,
                    }}
                    className="group block py-7 transition-colors duration-300 first:pt-0 last:pb-0 hover:bg-[#FFF9F0] sm:py-9 sm:hover:px-4"
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span className="pt-1 text-sm font-medium tabular-nums text-[#A49D91] transition-colors duration-300 group-hover:text-[#D58A28]">
                        {guide.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D58A28] sm:text-2xl lg:text-3xl">
                            {guide.title}
                          </h3>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8E1D5] text-[#06483D] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-[#06483D] group-hover:bg-[#06483D] group-hover:text-white">
                            <ArrowRight size={19} />
                          </span>
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#68756F] sm:text-base">
                          {guide.description}
                        </p>

                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#06483D]">
                          Explore guide
                          <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                          </span>
                        </span>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F0E9] text-[#06483D] transition-all duration-500 group-hover:rotate-12 group-hover:bg-[#06483D] group-hover:text-white sm:flex">
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

      {/* FEATURED PROPERTY BRANDS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div
          data-project-reveal
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 800ms ease, transform 800ms ease",
          }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D58A28]">
            Featured property enquiries
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore featured options
          </h2>

          <p className="mt-4 leading-7 text-[#68756F]">
            Review these property-related options and use the enquiry form
            to share your requirements. Availability, pricing and approvals
            should be confirmed directly before making a decision.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredBrands.map((brand, index) => (
            <article
              key={brand.name}
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: `opacity 800ms ease ${index * 150}ms, transform 800ms ease ${index * 150}ms`,
              }}
              className="group overflow-hidden rounded-2xl border border-[#E8E1D5] bg-white shadow-[0_4px_20px_rgb(23_43_38/7%)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/50 hover:shadow-[0_18px_40px_rgb(23_43_38/13%)]"
            >
              <div className="relative h-60 overflow-hidden bg-[#E8F0E9] sm:h-72">
                <div
                  role="img"
                  aria-label={brand.imageAlt}
                  className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${brand.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#073B32]/30 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#073B32]/80 to-transparent p-5 pt-16">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                    <MapPin size={13} />
                    Jattari region
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D58A28]">
                  {brand.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold transition-colors duration-300 group-hover:text-[#06483D]">
                  {brand.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#68756F]">
                  {brand.description}
                </p>

                <Link
                  href={getEnquiryLink(brand.name)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#06483D] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#04382F] hover:shadow-lg"
                >
                  Enquire about this option
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ADDITIONAL PROPERTY OPTIONS */}
      <section className="border-y border-[#E8E1D5] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div
            data-project-reveal
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 800ms ease, transform 800ms ease",
            }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D58A28]">
              More enquiry options
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Other property enquiries
            </h2>

            <p className="mt-4 leading-7 text-[#68756F]">
              Select an option to submit your property requirements.
              These entries are enquiry categories and do not imply
              verification, partnership or endorsement.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[#E8E1D5]">
            {otherBrands.map((brand, index) => (
              <article
                key={brand.name}
                data-project-reveal
                style={{
                  opacity: 0,
                  transform: "translateX(25px)",
                  transition: `opacity 700ms ease ${index * 100}ms, transform 700ms ease ${index * 100}ms`,
                }}
                className="group grid gap-5 border-l-2 border-[#D58A28]/40 py-7 pl-5 transition-all duration-300 hover:border-[#D58A28] hover:bg-[#FFF9F0] sm:grid-cols-[1fr_auto] sm:items-center sm:hover:pl-8"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#68756F]">
                    Option 0{index + 3}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold transition-colors duration-300 group-hover:text-[#06483D]">
                    {brand.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#06483D]">
                    {brand.category}
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#68756F]">
                    {brand.description}
                  </p>
                </div>

                <Link
                  href={getEnquiryLink(brand.name)}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#06483D] px-4 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#06483D] hover:text-white"
                >
                  Enquire
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING GUIDANCE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div
          data-project-reveal
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 800ms ease, transform 800ms ease",
          }}
          className="grid gap-8 rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-[0_4px_20px_rgb(23_43_38/7%)] transition-shadow duration-500 hover:shadow-[0_14px_35px_rgb(23_43_38/10%)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0D8] text-[#B9741C] transition-all duration-500 hover:rotate-[-10deg] hover:scale-110">
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
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#06483D] px-5 py-3.5 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#06483D] hover:text-white"
          >
            Open checklist
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL ENQUIRY CTA */}
      <section className="group relative overflow-hidden bg-[#073B32]">
        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10 transition-transform duration-[2000ms] group-hover:scale-125" />
        <div className="pointer-events-none absolute -right-5 -top-16 h-64 w-64 rounded-full border border-white/10 transition-transform duration-[2000ms] group-hover:scale-110" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 800ms ease, transform 800ms ease",
              }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-[#F4B65E]">
                <MessageSquare size={17} />
                Property requirements
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Looking for a property in Jattari?
              </h2>

              <p className="mt-4 leading-7 text-white/80">
                Submit your requirements through the property enquiry
                page to tell us what type of property you are exploring.
              </p>
            </div>

            <div
              data-project-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 800ms ease 150ms, transform 800ms ease 150ms",
              }}
            >
              <Link
                href="/real-estate/property-enquiries"
                className="group/cta inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#D58A28] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl"
              >
                Go to Enquiry Form
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
