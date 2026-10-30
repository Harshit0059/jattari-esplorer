
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Coffee,
  CookingPot,
  MapPin,
  MapPinned,
  Utensils,
  Store,
  Users,
  ShoppingBasket,
  Info,
} from "lucide-react";

const foodCategories = [
  {
    number: "01",
    title: "Everyday Local Meals",
    tag: "HOMELY FOOD",
    image: "/images/everyday-meals.jpg",
    description:
      "Everyday food in and around Jattari reflects the familiar North Indian home-style cooking tradition. Simple, filling meals built around roti, dal, seasonal vegetables, rice and fresh accompaniments are an important part of daily life.",
    details: [
      "Roti or paratha served with dal and seasonal sabzi.",
      "Rice, curd, salad and simple homemade accompaniments.",
      "Familiar vegetarian meal options at local eateries.",
    ],
  },
  {
    number: "02",
    title: "Tea, Snacks & Quick Bites",
    tag: "LOCAL FAVOURITES",
    image: "/images/tea-snacks.jpg",
    description:
      "Tea and snacks are a familiar part of everyday routines. Small food outlets and roadside stalls are places where people can stop for a quick cup of chai, a light breakfast or something to eat while travelling through the town.",
    details: [
      "Tea and coffee for a short refreshment break.",
      "Common North Indian snacks such as samosa, kachori and pakora, where available.",
      "Quick bites and light refreshments from local shops.",
    ],
  },
  {
    number: "03",
    title: "Family Dining & Dhaba Food",
    tag: "TOGETHER AT THE TABLE",
    image: "/images/family-dining.jpg",
    description:
      "Family restaurants and roadside dhabas offer another way to experience the local food scene. These places can be useful for a relaxed meal, a stop during a road journey or dining with family and friends.",
    details: [
      "North Indian meal options at selected restaurants.",
      "Dal, paneer dishes, roti and other familiar preparations.",
      "Casual dining options along the main road and nearby areas.",
    ],
  },
  {
    number: "04",
    title: "Fast Food & Modern Eateries",
    tag: "QUICK & CASUAL",
    image: "/images/regional-food.jpg",
    description:
      "Alongside traditional meals, Jattari also has casual food outlets serving popular fast-food choices. These options add variety for people looking for a quick snack or a casual outing.",
    details: [
      "Pizza, burgers and other quick meal options at selected outlets.",
      "Some eateries also list rolls, momos and Indo-Chinese snacks.",
      "Availability and menus differ from one outlet to another.",
    ],
  },
];

const localEateries = [
  {
    name: "Hotel Raysab Palace",
    category: "Restaurant & Family Dining",
    location: "Main Road, Aligarh–Palwal Road, Jattari",
    description:
      "An online-listed dining option in Jattari associated with North Indian and Indo-Chinese food. It may be worth checking for a sit-down meal or family dining.",
    type: "Restaurant",
  },
  {
    name: "Shivam Family Dhaba",
    category: "Dhaba & Indian Food",
    location: "Aligarh–Palwal Road, Jattari",
    description:
      "A local dhaba-style option for people looking for familiar Indian meals. Online listings also mention vegetarian food choices.",
    type: "Dhaba",
  },
  {
    name: "Prakash Fauji Vegetarian Dhaba",
    category: "Vegetarian Food",
    location: "Aligarh–Palwal Road, Jattari",
    description:
      "A vegetarian dhaba listed in the Jattari area. Visitors can check locally for the available daily meal options.",
    type: "Vegetarian Dhaba",
  },
  {
    name: "Ninimmya Chaudhary Restaurant",
    category: "Indian Restaurant",
    location: "Main Road, near Radhika Vihar Colony, Jattari",
    description:
      "An Indian restaurant listed around the Main Road area. Online customer information mentions snack options such as rolls.",
    type: "Restaurant",
  },
  {
    name: "Harino's",
    category: "Pizza & Fast Food",
    location: "Shri Roshanlal Sharma Complex, Main Road, Chhajjupur, Jattari",
    description:
      "A casual fast-food outlet listed for pizza and other quick bites. A possible option when you are looking for something different from a regular meal.",
    type: "Fast Food",
  },
  {
    name: "Pizza Fire Jattari",
    category: "Pizza & Quick Bites",
    location: "Shri Banke Bihari Plaza, opposite SBI, Main Road, Jattari",
    description:
      "A fast-food option listed on Jattari's Main Road, with online mentions of pizza, burgers and other quick snacks.",
    type: "Fast Food",
  },
];

const foodTips = [
  {
    icon: Clock,
    title: "Check timings first",
    description:
      "Opening hours can differ between restaurants and may change on holidays. Confirm before travelling.",
  },
  {
    icon: MapPin,
    title: "Confirm the location",
    description:
      "Use the map link or contact the outlet to confirm its exact location before visiting.",
  },
  {
    icon: Users,
    title: "Ask about seating",
    description:
      "If you are visiting with family or a group, check seating arrangements and availability in advance.",
  },
  {
    icon: Info,
    title: "Check the current menu",
    description:
      "Menu items, prices and food availability can change. Ask the restaurant directly for current details.",
  },
];

function getMapUrl(name: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${name}, Jattari, Uttar Pradesh`
  )}`;
}

export default function FoodPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => {
        element.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
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
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* ANIMATION STYLES */}
      <style jsx global>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 750ms ease,
            transform 750ms cubic-bezier(0.2, 0.65, 0.3, 1);
        }

        [data-reveal].reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="group relative min-h-[540px] overflow-hidden bg-green-dark">
        <Image
          src="/images/food-hero.jpg"
          alt="Food and dining culture around Jattari"
          fill
          priority
          className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/75 to-[#073B32]/30" />

        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-110" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border border-white/10" />

        <div className="container-site relative z-10 flex min-h-[540px] items-center py-20">
          <div className="max-w-3xl text-white">
            <div data-reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-[#FFE4B5] backdrop-blur-sm transition duration-300 hover:bg-white/20">
              <Utensils size={16} />
              EXPLORE JATTARI FOOD CULTURE
            </div>

            <h1 data-reveal className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Discover the
              <span className="block text-[#F2B75D]">
                Taste of Jattari
              </span>
            </h1>

            <p data-reveal className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              From everyday North Indian meals and roadside dhabas to tea
              stalls, family restaurants and modern fast-food outlets,
              explore the different food experiences you can find in and
              around Jattari.
            </p>

            <div data-reveal className="mt-9 flex flex-wrap gap-4">
              <a
                href="#local-eateries"
                className="button-accent group/button transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Local Eateries
                <ArrowRight size={18} className="transition-transform duration-300 group-hover/button:translate-x-1" />
              </a>

              <a
                href="#food-culture"
                className="group/button inline-flex items-center gap-2 rounded-[10px] border border-white/50 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#06483D]"
              >
                Discover Food Culture
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
              </a>
            </div>

            <div data-reveal className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6 text-sm text-white/80">
              <span className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-3px]">
                <Coffee size={17} className="text-[#F2B75D]" />
                Tea & Snacks
              </span>
              <span className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-3px]">
                <CookingPot size={17} className="text-[#F2B75D]" />
                Local Meals
              </span>
              <span className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-3px]">
                <Store size={17} className="text-[#F2B75D]" />
                Restaurants & Dhabas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="food-culture" className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="group relative min-h-[380px] overflow-hidden rounded-2xl">
            <Image
              src="/images/jattari-food-culture.jpg"
              alt="Traditional Indian food and local dining"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172B26]/80 to-transparent p-7">
              <p className="translate-y-2 font-semibold text-white transition-transform duration-500 group-hover:translate-y-0">
                Everyday flavours, familiar food and local experiences
              </p>
            </div>
          </div>

          <div data-reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              A TASTE OF LOCAL LIFE
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Food is a part of
              <span className="text-primary"> everyday life in Jattari</span>
            </h2>

            <p className="mt-6 leading-8 text-muted">
              Food in Jattari can be explored through the everyday eating
              habits and local food outlets of this town in the Aligarh
              region of Uttar Pradesh. Familiar North Indian meals, simple
              vegetarian dishes, tea-time snacks and casual restaurant food
              are all part of the wider local food experience.
            </p>

            <p className="mt-4 leading-8 text-muted">
              The food experience is not limited to one type of place.
              Small shops and snack outlets serve quick refreshments,
              roadside dhabas offer casual meal stops, and restaurants
              provide options for people dining with family or friends.
              The exact menu and availability depend on the individual
              establishment.
            </p>

            <p className="mt-4 leading-8 text-muted">
              Whether you are a local resident, a visitor passing through
              or someone exploring Jattari for the first time, discovering
              its food outlets can help you understand another side of
              everyday town life.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="group rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CookingPot className="mb-3 text-primary transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" size={26} />
                <h3 className="font-bold">Traditional Meals</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Familiar North Indian food and everyday dishes.
                </p>
              </div>

              <div className="group rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <Coffee className="mb-3 text-accent transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" size={26} />
                <h3 className="font-bold">Local Food Stops</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Tea, snacks and casual places to eat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD CATEGORIES */}
      <section className="bg-green-light py-20 sm:py-24">
        <div className="container-site">
          <div data-reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              EXPLORE THE FLAVOURS
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              What Can You Explore in Jattari?
            </h2>

            <p className="mt-5 leading-8 text-muted">
              Explore different food experiences, from everyday meals and
              traditional snacks to casual dining and popular fast-food
              choices.
            </p>
          </div>

          <div className="space-y-8">
            {foodCategories.map((item, index) => (
              <article
                key={item.number}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`group grid overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[300px] overflow-hidden lg:min-h-[410px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <span className="text-sm font-bold tracking-[0.18em] text-accent transition-colors duration-300 group-hover:text-[#B9741C]">
                    {item.tag}
                  </span>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-3xl font-bold text-primary/30 transition-colors duration-300 group-hover:text-accent/60">
                      {item.number}
                    </span>
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 leading-8 text-muted">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {item.details.map((detail, detailIndex) => (
                      <li
                        key={detail}
                        style={{ transitionDelay: `${detailIndex * 60}ms` }}
                        className="flex items-start gap-3 text-sm leading-7 text-foreground transition-transform duration-300 hover:translate-x-1"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent transition-transform duration-300 hover:scale-150" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL EATERIES */}
      <section id="local-eateries" className="py-20 sm:py-24">
        <div className="container-site">
          <div data-reveal className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                FIND PLACES TO EAT
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Local Restaurants & Eateries in Jattari
              </h2>

              <p className="mt-5 leading-8 text-muted">
                Here are some food outlets listed in and around Jattari.
                Explore their locations and check directly for current
                menus, timings and services before visiting.
              </p>
            </div>

            <Link
              href="/explore/local-markets"
              className="group inline-flex shrink-0 items-center gap-2 font-semibold text-primary transition-colors duration-300 hover:text-accent"
            >
              Explore Local Markets
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {localEateries.map((place, index) => (
              <article
                key={place.name}
                data-reveal
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-green-light px-3 py-1.5 text-xs font-bold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {place.type}
                  </span>
                  <Utensils size={21} className="text-accent transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>

                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {place.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-accent">
                  {place.category}
                </p>

                <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted">
                  <MapPin
                    size={17}
                    className="mt-1 shrink-0 text-primary"
                  />
                  {place.location}
                </p>

                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  {place.description}
                </p>

                <a
                  href={getMapUrl(place.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-bold text-primary transition-colors duration-300 hover:text-accent"
                >
                  View on Google Maps
                  <ArrowUpRight size={17} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </article>
            ))}
          </div>

          <div data-reveal className="mt-8 rounded-xl border border-[#E8E1D5] bg-[#FFF0D8] p-5 transition-shadow duration-300 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-1 shrink-0 text-[#B9741C]" size={21} />
              <p className="text-sm leading-7 text-[#684A23]">
                <strong>Visitor note:</strong> These are examples based on
                publicly available online listings, not official
                recommendations or endorsements. Business locations,
                opening hours, menus, prices and services may change.
                Please confirm the details directly before visiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD EXPERIENCE */}
      <section className="bg-[#073B32] py-20 text-white sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F2B75D]">
              EXPLORE LOCAL LIFE
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Discover more than just food
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Exploring food outlets is also a way to discover the everyday
              rhythm of Jattari. Local markets, shops and roadside
              establishments together create the town's everyday
              commercial and social environment.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              Take time to explore nearby market areas, ask local residents
              about their favourite food spots and check the latest
              information before planning your visit.
            </p>

            <Link
              href="/explore/local-markets"
              className="button-accent group mt-8 inline-flex transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Jattari Markets
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div data-reveal className="group relative min-h-[350px] overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/food-market.jpg"
              alt="Local market and food outlets"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#073B32]/10 transition-colors duration-500 group-hover:bg-transparent" />
          </div>
        </div>
      </section>

      {/* VISITOR TIPS */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              PLAN YOUR FOOD VISIT
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A Few Things to Keep in Mind
            </h2>

            <p className="mt-5 leading-8 text-muted">
              A little planning can make it easier to explore local food
              outlets and enjoy your visit.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {foodTips.map((tip, index) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.title}
                  data-reveal
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-light text-primary transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                    {tip.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 pb-20">
        <div data-reveal className="group container-site relative overflow-hidden rounded-2xl bg-[#FFF0D8] px-6 py-12 text-center transition-shadow duration-500 hover:shadow-xl sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#D58A28]/15 transition-transform duration-1000 group-hover:scale-125" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-[#D58A28]/15 transition-transform duration-1000 group-hover:scale-110" />

          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-accent shadow-sm transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <ShoppingBasket size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#172B26] sm:text-4xl">
              Explore the Local Side of Jattari
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#68756F]">
              Discover local markets, everyday shops, food outlets and
              neighbourhood experiences that make Jattari an interesting
              place to explore.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/explore/local-markets"
                className="button-primary group/button transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Local Markets
                <ArrowRight size={18} className="transition-transform duration-300 group-hover/button:translate-x-1" />
              </Link>

              <Link
                href="/explore/attractions-places-to-visit"
                className="group/button inline-flex items-center gap-2 rounded-[10px] border border-[#06483D]/20 px-5 py-3 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                Places to Visit
                <MapPinned size={18} className="transition-transform duration-300 group-hover/button:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
