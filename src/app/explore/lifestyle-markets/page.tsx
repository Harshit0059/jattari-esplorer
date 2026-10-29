import Link from "next/link";

const marketFeatures = [
  {
    title: "Everyday Essentials",
    description:
      "Explore local shops for common household goods and everyday needs.",
    icon: "⌂",
  },
  {
    title: "Fresh Produce",
    description:
      "Ask locally about places selling fresh produce and other daily food supplies.",
    icon: "❋",
  },
  {
    title: "Clothing & Goods",
    description:
      "Discover local retailers and ask about available products, sizes, and prices.",
    icon: "◈",
  },
  {
    title: "Small Businesses",
    description:
      "Get to know independent shops and businesses that serve the local community.",
    icon: "↗",
  },
];

export default function LocalMarketsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO WITH MARKET BACKGROUND IMAGE */}
      <section
        className="relative isolate overflow-hidden px-6 py-20 text-white sm:py-24 md:px-12 md:py-28"
        style={{
          backgroundImage: `
            linear-gradient(
              110deg,
              rgba(15, 23, 42, 0.48),
              rgba(15, 23, 42, 0.30),
              rgba(15, 23, 42, 0.52)
            ),
            url("/images/market.jpeg")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Decorative shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/25"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[#DBEAFE]/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/explore/food"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#DBEAFE]"
          >
            <span aria-hidden="true">←</span>
            Food &amp; Local Eateries
          </Link>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.3em] text-[#DBEAFE] sm:text-sm">
            Explore Local Commerce
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight drop-shadow-md sm:text-5xl md:text-6xl">
            Local Markets of Jattari
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white sm:text-base sm:leading-8 md:text-lg">
            Discover the role of local shops and shopping areas in daily life,
            and get practical tips for exploring them.
          </p>

          <a
            href="#market-experience"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1D4ED8] shadow-lg transition hover:bg-[#DBEAFE]"
          >
            Explore Local Markets
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* LOCAL SHOPPING EXPERIENCE */}
      <section
        id="market-experience"
        className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB] sm:text-sm">
            The Local Shopping Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Small shops, everyday needs
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#6B7280] sm:text-base">
            Local markets connect residents with everyday products and
            services. When visiting Jattari, explore at a comfortable pace,
            check prices, and ask local shopkeepers about product availability.
          </p>
        </div>

        {/* MARKET FEATURES */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {marketFeatures.map((item, index) => (
            <article
              key={item.title}
              className="group flex gap-5 rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-lg md:p-8"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DBEAFE] text-2xl text-[#2563EB] transition duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                {item.icon}
              </span>

              <div>
                <p className="text-xs font-bold tracking-widest text-[#2563EB]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#6B7280] sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* SHOPPING TIPS */}
        <div className="mt-12 rounded-3xl border border-[#E5E7EB] bg-[#DBEAFE] p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
            Before You Visit
          </p>

          <h2 className="mt-3 text-2xl font-bold">Useful shopping tips</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Check opening times before travelling.",
              "Confirm prices and product availability with the seller.",
              "Keep personal belongings secure in busy areas.",
            ].map((tip, index) => (
              <div
                key={tip}
                className="rounded-xl border border-[#E5E7EB] bg-white p-5 text-sm leading-7 text-[#1F2937] transition hover:border-[#2563EB]/40"
              >
                <span className="mr-2 font-bold text-[#2563EB]">
                  0{index + 1}
                </span>
                {tip}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS CTA */}
      <section className="px-6 pb-16 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] p-8 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold">Planning a visit?</h2>

            <p className="mt-2 text-sm leading-7 text-white/90 sm:text-base">
              Read the travel tips before setting out.
            </p>
          </div>

          <Link
            href="/explore/travel-tips"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 font-semibold text-[#2563EB] transition hover:bg-[#DBEAFE] md:self-center"
          >
            Travel Tips
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}