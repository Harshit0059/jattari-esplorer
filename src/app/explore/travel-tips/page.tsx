
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Navigation,
  Bus,
  Backpack,
  Clock,
  HeartHandshake,
  CalendarCheck,
  Route,
  CheckCircle2,
  Compass,
  Info,
} from "lucide-react";

const travelTips = [
  {
    number: "01",
    title: "Plan Your Route",
    description:
      "Before starting your journey to Jattari, confirm your starting point, destination and preferred route. Use an updated map to understand road connections and nearby landmarks. Allow additional travel time during busy hours and keep an alternative route in mind.",
    icon: Navigation,
    tag: "ROUTE PLANNING",
  },
  {
    number: "02",
    title: "Check Transport Options",
    description:
      "Depending on your starting location, explore suitable transport options such as buses, shared vehicles, taxis or private vehicles. Check current availability, departure points and timings instead of relying on outdated travel information.",
    icon: Bus,
    tag: "TRANSPORT",
  },
  {
    number: "03",
    title: "Carry Everyday Essentials",
    description:
      "Keep your mobile phone charged and carry drinking water, personal identification, essential medicines and other items you may need during the journey. A small travel bag can help keep everything organised.",
    icon: Backpack,
    tag: "TRAVEL BASICS",
  },
  {
    number: "04",
    title: "Respect Local Places",
    description:
      "Jattari has residential neighbourhoods, local markets, community spaces and places of worship. Be considerate of residents, follow local customs, respect private property and maintain cleanliness wherever you visit.",
    icon: HeartHandshake,
    tag: "LOCAL ETIQUETTE",
  },
  {
    number: "05",
    title: "Confirm Opening Hours",
    description:
      "If you plan to visit a restaurant, market, shop, office or other facility, check its current address and opening hours beforehand. Availability may differ on weekends, public holidays and special occasions.",
    icon: CalendarCheck,
    tag: "VISIT PLANNING",
  },
  {
    number: "06",
    title: "Keep Your Plans Flexible",
    description:
      "Allow enough time for road conditions, traffic, weather and waiting. Transport schedules and local services can change, so having a flexible itinerary and a backup plan can make your visit more comfortable.",
    icon: Route,
    tag: "FLEXIBLE JOURNEY",
  },
];

const checklist = [
  "Route and transport details checked",
  "Phone charged and essential items packed",
  "Opening hours and visit details confirmed",
  "Extra time allowed for the journey",
  "Important addresses and contact details saved",
  "Alternative route or transport option considered",
];

const travelEssentials = [
  {
    icon: MapPin,
    title: "Know Your Destination",
    description:
      "Save the address of your destination and identify useful nearby landmarks before travelling.",
  },
  {
    icon: Clock,
    title: "Allow Extra Time",
    description:
      "Avoid planning your journey too tightly. Keep some extra time for unexpected delays.",
  },
  {
    icon: Compass,
    title: "Explore Responsibly",
    description:
      "Follow local directions, respect neighbourhoods and keep public spaces clean.",
  },
];

export default function TravelTipsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
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
    <main className="travel-page min-h-screen overflow-hidden bg-background text-foreground">
      <style jsx global>{`
        .travel-page [data-reveal] {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 750ms ease,
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .travel-page [data-reveal="left"] {
          transform: translateX(-45px);
        }

        .travel-page [data-reveal="right"] {
          transform: translateX(45px);
        }

        .travel-page [data-reveal="scale"] {
          transform: scale(0.92);
        }

        .travel-page [data-reveal].is-visible {
          opacity: 1;
          transform: translate(0) scale(1);
        }

        .travel-page .travel-image img {
          transition: transform 1s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .travel-page .travel-image:hover img {
          transform: scale(1.06);
        }

        .travel-page .travel-card {
          transition:
            transform 450ms ease,
            box-shadow 450ms ease,
            border-color 450ms ease;
        }

        .travel-page .travel-card:hover {
          transform: translateY(-8px);
        }

        .travel-page .travel-card-icon {
          transition:
            transform 450ms ease,
            background-color 450ms ease,
            color 450ms ease;
        }

        .travel-page .travel-card:hover .travel-card-icon {
          transform: rotate(-8deg) scale(1.12);
        }

        .travel-page .travel-orbit {
          animation: travelOrbit 18s linear infinite;
        }

        .travel-page .travel-orbit-inner {
          animation: travelOrbit 13s linear infinite reverse;
        }

        .travel-page .travel-float {
          animation: travelFloat 5s ease-in-out infinite;
        }

        @keyframes travelOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes travelFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .travel-page [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .travel-page .travel-orbit,
          .travel-page .travel-orbit-inner,
          .travel-page .travel-float {
            animation: none;
          }

          .travel-page .travel-image img {
            transition: none;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="group relative isolate flex min-h-[460px] items-center overflow-hidden bg-green-dark px-6 py-20 text-white sm:min-h-[520px] md:px-12 md:py-28">
        <Image
          src="/images/road5.jpeg"
          alt="Road and travel surroundings near Jattari"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/75 to-[#073B32]/30"
        />

        <div
          aria-hidden="true"
          className="travel-orbit pointer-events-none absolute -right-20 -top-20 z-0 h-80 w-80 rounded-full border border-white/20"
        />

        <div
          aria-hidden="true"
          className="travel-orbit-inner pointer-events-none absolute -right-10 -top-10 z-0 h-60 w-60 rounded-full border border-[#F2B75D]/30"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-[15%] z-0 h-3 w-3 rounded-full bg-[#F2B75D] shadow-[0_0_25px_8px_rgba(242,183,93,0.25)]"
        />

        <div className="container-site relative z-10">
          <div data-reveal className="max-w-4xl">
            <div className="travel-float inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F2B75D] backdrop-blur-sm sm:text-sm">
              <Compass size={16} />
              Make Your Visit Easier
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Travel Tips for
              <span className="block text-[#F2B75D]">Jattari</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/85 sm:text-base md:text-lg">
              Plan your journey, prepare your essentials and explore Jattari
              and its surroundings with practical travel guidance. A little
              preparation can make your visit easier and more comfortable.
            </p>

            <a
              href="#tips"
              className="button-accent mt-8 inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View Travel Checklist
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6 text-sm text-white/85">
              <span className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                <Navigation size={17} className="text-[#F2B75D]" />
                Route Planning
              </span>
              <span className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                <Bus size={17} className="text-[#F2B75D]" />
                Transport
              </span>
              <span className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                <MapPin size={17} className="text-[#F2B75D]" />
                Local Guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div data-reveal="left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                BEFORE YOU GO
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                A little preparation goes a long way
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-muted">
                Whether you are visiting Jattari for the first time,
                travelling for work or exploring nearby places, planning
                the basic details beforehand can help you make better use
                of your time.
              </p>
            </div>

            <div
              data-reveal="right"
              className="group rounded-2xl border border-border bg-green-light p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <MapPin size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Explore with confidence
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                Keep your destination, transport details and essential
                information handy before starting your journey.
              </p>

              <div className="mt-5 h-1 w-12 rounded-full bg-accent transition-all duration-500 group-hover:w-24" />
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section id="tips" className="scroll-mt-24 bg-green-light py-20">
        <div className="container-site">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
              SMARTER TRAVEL
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Useful Tips for Your Journey
            </h2>

            <p className="mt-5 leading-8 text-muted">
              Simple things to remember before and during your visit to
              Jattari. Use these tips to prepare for a smoother journey.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {travelTips.map((tip, index) => {
              const Icon = tip.icon;

              return (
                <article
                  key={tip.number}
                  data-reveal={index % 3 === 0 ? "left" : index % 3 === 1 ? "scale" : "right"}
                  style={{ transitionDelay: `${(index % 3) * 110}ms` }}
                  className="travel-card group rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-primary/60">
                      {tip.number}
                    </span>

                    <span className="travel-card-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-green-light text-primary group-hover:bg-primary group-hover:text-white">
                      <Icon size={23} />
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-accent sm:text-xs">
                    {tip.tag}
                  </p>

                  <h3 className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {tip.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {tip.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-accent/80 transition-all duration-500 group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAVEL ESSENTIALS */}
      <section className="py-20">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div data-reveal="left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                TRAVEL SMART
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Make your journey more comfortable
              </h2>

              <p className="mt-5 leading-8 text-muted">
                Good travel planning is not just about reaching your
                destination. It is also about staying organised, knowing
                what to expect and being prepared for small changes along
                the way.
              </p>

              <Link
                href="/location-connectivity"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:gap-4 hover:text-accent"
              >
                Explore Location & Connectivity
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="space-y-4">
              {travelEssentials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-reveal="right"
                    style={{ transitionDelay: `${index * 120}ms` }}
                    className="group flex gap-5 rounded-2xl border border-border bg-surface p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-light text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CHECKLIST */}
      <section className="bg-green-light py-20">
        <div className="container-site">
          <div
            data-reveal="scale"
            className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-500 hover:shadow-xl sm:p-9 md:p-10"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                FINAL CHECKLIST
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Ready to explore Jattari?
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Before leaving, take a moment to review these important
                travel essentials.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <li
                  key={item}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  style={{ transitionDelay: `${index * 70}ms` }}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-light text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <CheckCircle2 size={19} />
                  </span>

                  <span className="text-sm leading-6">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-[#FFF0D8] p-4 transition-transform duration-300 hover:translate-x-1">
              <Info size={20} className="mt-0.5 shrink-0 text-[#B9741C]" />

              <p className="text-sm leading-7 text-[#684A23]">
                <strong>Travel reminder:</strong> Transport availability,
                road conditions, timings and local services can change.
                Always confirm current information before travelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div
          data-reveal
          className="group container-site relative overflow-hidden rounded-3xl bg-[#073B32] p-7 text-white sm:p-10 md:p-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-45" />
          <div className="pointer-events-none absolute -right-5 -top-12 h-44 w-44 rounded-full border border-[#F2B75D]/20" />

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B75D] sm:text-sm">
              START EXPLORING
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  Your Jattari guide starts here
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                  Discover local culture, markets, food, attractions and
                  useful information to make your visit more meaningful.
                </p>
              </div>

              <Link
                href="/explore"
                className="button-accent inline-flex shrink-0 self-start items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Jattari
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
