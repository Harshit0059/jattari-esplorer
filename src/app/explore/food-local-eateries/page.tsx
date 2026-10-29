
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Clock,
  Coffee,
  CookingPot,
  MapPin,
  Utensils,
} from "lucide-react";

const foodCategories = [
  {
    title: "Everyday Meals",
    tag: "LOCAL FOOD",
    description:
      "Explore everyday meal options and ask local residents for places they recommend.",
    image: "/images/everyday-meals.jpg",
    imageAlt: "Traditional everyday Indian meal",
    icon: CookingPot,
    number: "01",
  },
  {
    title: "Tea & Snacks",
    tag: "QUICK BITES",
    description:
      "Discover tea stalls and snack spots while exploring the town's everyday food culture.",
    image: "/images/tea-snacks.jpg",
    imageAlt: "Indian tea and freshly prepared snacks",
    icon: Coffee,
    number: "02",
  },
  {
    title: "Family Dining",
    tag: "DINING OUT",
    description:
      "Check menus, opening hours, seating, and current reviews before choosing a place to eat.",
    image: "/images/family-dining.jpg",
    imageAlt: "Welcoming family dining experience",
    icon: Utensils,
    number: "03",
  },
  {
    title: "Regional Flavours",
    tag: "FOOD CULTURE",
    description:
      "Learn about the wider food traditions of Uttar Pradesh and ask about locally available dishes.",
    image: "/images/regional-food.jpg",
    imageAlt: "Regional Indian food and traditional flavours",
    icon: CookingPot,
    number: "04",
  },
];

const foodTips = [
  {
    title: "Check before visiting",
    description:
      "Confirm opening hours, menu availability, and prices directly with the eatery.",
    icon: Clock,
  },
  {
    title: "Explore local favourites",
    description:
      "Ask residents for recommendations on popular snacks and everyday meal options.",
    icon: MapPin,
  },
  {
    title: "Enjoy responsibly",
    description:
      "Choose clean food establishments and check ingredients if you have dietary requirements.",
    icon: Utensils,
  },
];

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#172554]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/food-hero.jpg"
            alt="Local food and dining culture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827]/95 via-[#172554]/85 to-[#1D4ED8]/50" />

        <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28 lg:py-32">
          <Link
            href="/explore/attractions"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#DBEAFE] transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Places to Visit
          </Link>

          <div className="mt-14 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#BFDBFE] md:text-sm">
              A Taste of Local Life
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Food & Local
              <span className="block text-[#BFDBFE]">Eateries</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Discover ways to explore local food in Jattari, from everyday
              meals and quick snacks to regional flavours and dining
              experiences.
            </p>

            <a
              href="#food-guide"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1D4ED8] transition hover:bg-[#DBEAFE]"
            >
              Explore the food guide
              <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Coffee size={17} />
              Tea & snacks
            </span>
            <span className="flex items-center gap-2">
              <CookingPot size={17} />
              Everyday meals
            </span>
            <span className="flex items-center gap-2">
              <Utensils size={17} />
              Dining experiences
            </span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              Explore Through Food
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Food is part of the journey.
            </h2>

            <p className="mt-6 leading-8 text-[#6B7280]">
              Local food can offer a glimpse into everyday routines and
              regional preferences. Explore nearby options, check current
              information, and ask residents for suggestions when you arrive
              in Jattari.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#2563EB]" />
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-3xl md:min-h-[390px]">
            <Image
              src="/images/jattari-food-culture.jpg"
              alt="Indian food culture and local dining"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DBEAFE]">
                Discover Local Life
              </p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                A flavour of the region
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section
        id="food-guide"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-16 md:px-12 md:pb-24"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              Food Guide
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              What to explore
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[#6B7280]">
            From a quick cup of tea to a relaxed meal, explore different ways
            to experience local food.
          </p>
        </div>

        <div className="mt-12 space-y-10 md:mt-16 md:space-y-16">
          {foodCategories.map((item, index) => {
            const Icon = item.icon;
            const imageOnRight = index % 2 === 0;

            return (
              <article
                key={item.title}
                className="grid overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white md:grid-cols-2"
              >
                <div
                  className={`relative min-h-[260px] overflow-hidden md:min-h-[380px] ${
                    imageOnRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#1D4ED8]">
                    {item.tag}
                  </div>

                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-lg">
                    <Icon size={23} />
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center p-7 md:p-10 lg:p-12 ${
                    imageOnRight ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                      {item.number} / 04
                    </span>
                    <span className="text-sm text-[#9CA3AF]">
                      Jattari Food Guide
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#6B7280]">
                    {item.description}
                  </p>

                  <div className="mt-8 border-t border-[#E5E7EB] pt-5">
                    <p className="text-sm leading-7 text-[#6B7280]">
                      <span className="font-semibold text-[#1F2937]">
                        Helpful tip:{" "}
                      </span>
                      Ask about current availability and confirm details before
                      making a special trip.
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Practical Tips */}
      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              Before You Visit
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A few useful food tips
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Make your food exploration easier by checking a few details
              before heading out.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {foodTips.map((tip, index) => {
              const Icon = tip.icon;

              return (
                <article
                  key={tip.title}
                  className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DBEAFE] text-[#2563EB]">
                    <Icon size={22} />
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#2563EB]">
                    TIP 0{index + 1}
                  </p>

                  <h3 className="mt-2 text-lg font-bold">{tip.title}</h3>

                  <p className="mt-3 leading-7 text-[#6B7280]">
                    {tip.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Markets CTA */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 text-white md:p-12 lg:p-14">
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/15" />
          <div className="absolute -bottom-24 right-36 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DBEAFE]">
                Continue Exploring
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Discover local markets and everyday life
              </h2>

              <p className="mt-4 leading-7 text-white/85">
                Explore shopping areas and local market experiences as you
                discover more of Jattari.
              </p>
            </div>

            <Link
              href="/explore/local-markets"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-[#1D4ED8] transition hover:bg-[#DBEAFE]"
            >
              Explore Local Markets
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
