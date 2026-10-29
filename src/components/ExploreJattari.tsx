import Link from "next/link";

const places = [
  {
    number: "01",
    title: "Location & Connectivity",
    description:
      "Explore Jattari's location, nearby routes, and transport information.",
    href: "/explore/attractions",
    label: "Explore location",
  },
  {
    number: "02",
    title: "Local Facilities",
    description:
      "Find information about education, healthcare, shopping, and daily needs.",
    href: "/explore/local-markets",
    label: "Explore facilities",
  },
  {
    number: "03",
    title: "Property & Investment",
    description:
      "Learn about Jattari and explore useful information about the area.",
    href: "/explore/introduction",
    label: "Explore details",
  },
];

export default function ExploreJattari() {
  return (
    <section
      id="explore"
      className="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255, 255, 255, 0.32),
            rgba(255, 255, 255, 0.48)
          ),
          url("/images/explore-jattari.jpeg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-primary/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl"
      />

      <div className="container-site relative z-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-primary/15 bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
            Explore Jattari
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Everything you need to
            <span className="block text-primary">
              explore the area
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#374151] sm:text-base">
            Browse helpful topics to understand Jattari, its local facilities,
            connectivity, and property information.
          </p>
        </div>

        {/* Explore Sections */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {places.map((place) => (
            <article
              key={place.number}
              className="group rounded-xl border border-white/80 bg-white/90 p-5 shadow-[var(--shadow-card)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-soft-accent text-sm font-bold text-primary">
                  {place.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-primary transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-foreground">
                {place.title}
              </h3>

              <p className="mt-2 min-h-16 text-sm leading-6 text-muted">
                {place.description}
              </p>

              <Link
                href={place.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
              >
                {place.label}

                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}