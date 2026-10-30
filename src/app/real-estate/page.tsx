"use client";

import Link from "next/link";
import { useEffect } from "react";
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

const buyingChecks = [
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
];

export default function RealEstatePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-property-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("property-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section
        className="group relative flex min-h-[650px] items-center overflow-hidden bg-cover bg-center md:min-h-[760px]"
      >
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[12000ms] ease-out group-hover:scale-110"
          style={{
            backgroundImage:
              "url('/images/skyline%20aerohomes.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,59,50,0.94)_0%,rgba(7,59,50,0.72)_48%,rgba(7,59,50,0.28)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073B32]/50 via-transparent to-[#073B32]/10" />

        <div className="pointer-events-none absolute -right-32 top-20 h-[430px] w-[430px] animate-[spin_45s_linear_infinite] rounded-full border border-white/15" />
        <div className="pointer-events-none absolute -right-16 top-36 h-[300px] w-[300px] animate-[spin_35s_linear_infinite_reverse] rounded-full border border-white/15" />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12">
          <div
            data-property-reveal
            className="max-w-3xl translate-y-10 opacity-0 transition-all duration-1000 ease-out"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition duration-500 hover:border-[#F4B65E]/70 hover:bg-white/20">
              <MapPin size={15} />
              <span>Real Estate & Property Guide · Jattari</span>
            </div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#F4B65E]">
              Find your place. Understand your options.
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.13] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A better way to
              <br />
              explore{" "}
              <span className="relative inline-block text-[#F4B65E]">
                property.
                <span className="absolute -bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#F4B65E] transition-transform duration-1000 delay-500 group-hover:scale-x-100" />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              Explore residential land, commercial property and real estate
              projects around Jattari. Find useful information to help you
              make more informed property decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/real-estate/projects"
                className="group/button inline-flex items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-accent-hover hover:shadow-xl"
              >
                Explore Projects
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                />
              </Link>

              <Link
                href="/real-estate/buying-checklist"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Property Buying Guide
                <ArrowRight size={17} className="transition-transform duration-300 hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-4 text-sm text-white/80">
              <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/30">
                <ArrowDown size={18} />
              </div>
              <span>Discover property options and local insights</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden translate-y-5 border-l border-t border-white/20 bg-[#073B32]/60 p-7 text-white opacity-0 backdrop-blur-md transition-all duration-700 delay-500 lg:block lg:w-[310px] lg:translate-y-0 lg:opacity-100">
          <p className="text-xs uppercase tracking-[0.22em] text-[#F4B65E]">
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
          <div
            data-property-reveal
            className="translate-x-[-45px] opacity-0 transition-all duration-1000 ease-out"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Property, made clearer
            </p>
            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Start with the right information.
            </h2>
            <div className="mt-6 h-1 w-16 origin-left bg-accent transition-all duration-700 hover:w-32" />
          </div>

          <div
            data-property-reveal
            className="translate-y-10 opacity-0 transition-all duration-1000 delay-200 ease-out lg:pt-8"
          >
            <p className="text-base leading-8 text-muted sm:text-lg">
              Every property decision starts with understanding your needs.
              Whether you are considering land for a home, exploring
              commercial opportunities or reviewing a real estate project,
              use this guide to understand the options and the checks that
              matter.
            </p>

            <Link
              href="/real-estate/buying-checklist"
              className="mt-7 inline-flex items-center gap-2 border-b border-accent pb-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-4 hover:text-accent"
            >
              Read the buying checklist <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROPERTY PATHWAYS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-property-reveal className="translate-y-8 opacity-0 transition-all duration-700">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Explore your options
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Where would you like to begin?
              </h2>
            </div>

            <p
              data-property-reveal
              className="max-w-md translate-y-8 text-sm leading-7 text-muted opacity-0 transition-all duration-700 delay-200"
            >
              Browse the sections that match your property goals and learn
              what to consider before moving forward.
            </p>
          </div>

          <div className="border-t border-border">
            {propertyLinks.map((item, index) => (
              <Link
                key={item.number}
                href={item.href}
                data-property-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
                className="group grid translate-x-[-35px] gap-4 border-b border-border py-7 opacity-0 transition-all duration-700 ease-out hover:bg-green-light/50 sm:grid-cols-[70px_1fr_1fr_50px] sm:items-center sm:px-5"
              >
                <span className="text-sm font-bold text-accent transition-transform duration-300 group-hover:translate-x-2">
                  {item.number}
                </span>

                <h3 className="text-xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:text-2xl">
                  {item.title}
                </h3>

                <p className="max-w-sm text-sm leading-6 text-muted transition-colors duration-300 group-hover:text-foreground">
                  {item.description}
                </p>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
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
          <div
            data-property-reveal
            className="group relative min-h-[390px] translate-y-10 overflow-hidden rounded-2xl opacity-0 transition-all duration-1000 sm:min-h-[510px]"
          >
            <div
              className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              style={{
                backgroundImage: "url('/images/skyline%20aerohomes.jpeg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073B32]/85 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#073B32]/95" />

            <div className="absolute bottom-0 left-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-2 sm:p-9">
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

          <div
            data-property-reveal
            className="translate-x-10 opacity-0 transition-all duration-1000 ease-out lg:py-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Featured project
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Explore a project before you choose a plot.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
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
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-primary transition-transform duration-300 hover:scale-125"
                  />
                  <span className="text-sm leading-6 text-muted">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/real-estate/projects"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg"
            >
              View Project Details <ArrowRight size={18} />
            </Link>

            <p className="mt-4 text-xs leading-5 text-muted">
              Availability, pricing and approvals should be confirmed with
              the relevant project representative.
            </p>
          </div>
        </div>
      </section>

      {/* ANUGRAH HOMES */}
      <section className="relative overflow-hidden bg-[#EAF2ED]">
        <div className="absolute -right-20 -top-24 h-72 w-72 animate-[spin_40s_linear_infinite] rounded-full border border-[#B9D8C8]/70" />
        <div className="absolute -right-8 -top-12 h-48 w-48 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-[#B9D8C8]/70" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          <div
            data-property-reveal
            className="order-2 translate-x-[-40px] opacity-0 transition-all duration-1000 lg:order-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Explore a local property brand
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Anugrah Homes
              <span className="block text-primary">Discover the details.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              Looking into property options around Jattari? Connect with
              Anugrah Homes to enquire about its offerings, understand
              project-specific details and request information relevant to
              your requirements.
            </p>

            <div className="mt-8 border-l-2 border-accent pl-5 transition-all duration-300 hover:border-l-4 hover:pl-7">
              <p className="font-semibold text-foreground">
                Before you take the next step
              </p>
              <p className="mt-2 text-sm leading-7 text-muted">
                Ask about the exact location, available plots, total costs,
                documentation and applicable approvals.
              </p>
            </div>

            <Link
              href="/real-estate/property-enquiries"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg"
            >
              Enquire About Property <ArrowUpRight size={18} />
            </Link>
          </div>

          <div
            data-property-reveal
            className="group order-1 translate-y-10 opacity-0 transition-all duration-1000 lg:order-2"
          >
            <div className="relative min-h-[350px] overflow-hidden rounded-2xl sm:min-h-[460px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
                style={{ backgroundImage: "url('/images/anugrah.jpeg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073B32]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white transition-transform duration-500 group-hover:-translate-y-2 sm:bottom-8 sm:left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4B65E]">
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
          <div
            data-property-reveal
            className="translate-y-10 opacity-0 transition-all duration-1000"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-accent transition-all duration-500 hover:rotate-[-8deg] hover:scale-110">
              <FileCheck2 size={27} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              A practical property guide
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Before you buy, know what to check.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted">
              Property photographs and verbal assurances are not enough.
              Understand the paperwork and costs, and obtain independent
              legal verification before making a commitment.
            </p>

            <Link
              href="/real-estate/buying-checklist"
              className="mt-7 inline-flex items-center gap-3 font-semibold text-primary transition-all duration-300 hover:gap-5 hover:text-accent"
            >
              Open the complete checklist <ArrowRight size={19} />
            </Link>
          </div>

          <div className="space-y-0 border-t border-border">
            {buyingChecks.map((item, index) => (
              <div
                key={item.title}
                data-property-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                className="group grid translate-x-8 gap-3 border-b border-border py-6 opacity-0 transition-all duration-700 hover:bg-green-light/30 sm:grid-cols-[48px_1fr] sm:px-4"
              >
                <span className="text-sm font-semibold text-accent transition-transform duration-300 group-hover:scale-125">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">
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
        className="group relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,59,50,0.94), rgba(7,59,50,0.78)), url('/images/skyline%20aerohomes.jpeg')",
        }}
      >
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10 transition-transform duration-[3000ms] group-hover:scale-125" />

        <div className="relative mx-auto flex max-w-[1240px] flex-col justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center lg:px-12 lg:py-20">
          <div
            data-property-reveal
            className="max-w-2xl translate-y-8 text-white opacity-0 transition-all duration-1000"
          >
            <div className="flex items-center gap-2 text-sm text-[#F4B65E]">
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

          <div data-property-reveal className="translate-y-8 opacity-0 transition-all duration-1000 delay-200">
            <Link
              href="/real-estate/property-enquiries"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-accent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hover hover:shadow-xl"
            >
              Send an Enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* REVEAL ANIMATION STYLES */}
      <style jsx global>{`
        [data-property-reveal] {
          will-change: transform, opacity;
        }

        [data-property-reveal].property-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-property-reveal],
          [data-property-reveal].property-visible {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}