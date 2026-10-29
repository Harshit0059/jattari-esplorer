import Link from "next/link";

const foodCategories = [
  {
    title: "Everyday Meals",
    tag: "LOCAL FOOD",
    description:
      "Explore everyday meal options and ask local residents for places they recommend.",
    icon: "✳",
  },
  {
    title: "Tea & Snacks",
    tag: "QUICK BITES",
    description:
      "Look for local tea and snack spots while exploring the town's everyday food culture.",
    icon: "☕",
  },
  {
    title: "Family Dining",
    tag: "DINING OUT",
    description:
      "Check menus, opening hours, seating, and current reviews before choosing a place to eat.",
    icon: "⌂",
  },
  {
    title: "Regional Flavours",
    tag: "FOOD CULTURE",
    description:
      "Learn about the wider food traditions of Uttar Pradesh and ask about locally available dishes.",
    icon: "❋",
  },
];

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="absolute -right-12 -top-16 h-72 w-72 rounded-full border border-white/15" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/explore/attractions"
            className="text-sm text-[#DBEAFE] transition hover:text-white"
          >
            ← Places to Visit
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#DBEAFE]">
            A Taste of Local Life
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Food &amp; Local Eateries
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-white/85">
            Discover ways to explore local food in Jattari, from everyday meals
            and quick snacks to regional flavours and dining experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              Explore Through Food
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Food is part of the journey
            </h2>

            <p className="mt-5 leading-8 text-[#6B7280]">
              Local food can offer a glimpse into everyday routines and regional
              preferences. Explore nearby options, check current information,
              and ask residents for suggestions when you arrive.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-[#DBEAFE] p-8 md:p-10">
            <span className="text-5xl" aria-hidden="true">
              ✳
            </span>

            <h3 className="mt-6 text-2xl font-bold">
              Explore with curiosity
            </h3>

            <p className="mt-3 leading-7 text-[#6B7280]">
              Menus, availability, prices, and opening times can change.
              Confirm details directly with an eatery before travelling.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2563EB]">
            Food Guide
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What to explore
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {foodCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#2563EB]">
                    {item.tag}
                  </span>

                  <span
                    className="text-3xl text-[#2563EB]"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-[#6B7280]">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#2563EB]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] p-8 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold">
              Enjoy exploring local shopping areas
            </h2>

            <p className="mt-2 text-white/85">
              Continue to the Local Markets guide.
            </p>
          </div>

          <Link
            href="/explore/local-markets"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#2563EB] transition hover:bg-[#DBEAFE]"
          >
            Local Markets →
          </Link>
        </div>
      </section>
    </main>
  );
}