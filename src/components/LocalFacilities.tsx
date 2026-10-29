    
const facilities = [
  {
    number: "01",
    title: "Education & Learning",
    description:
      "Explore information about schools, colleges, and educational options around Jattari.",
    icon: "📚",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Look for information about hospitals, clinics, and healthcare services in the area.",
    icon: "🏥",
  },
  {
    number: "03",
    title: "Shopping & Markets",
    description:
      "Discover local markets, shops, and everyday shopping options.",
    icon: "🛍️",
  },
  {
    number: "04",
    title: "Transport",
    description:
      "Explore local transport options and useful connectivity information.",
    icon: "🚌",
  },
];

export default function LocalFacilities() {
  return (
    <section
      id="facilities"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-soft-accent px-4 py-2 text-sm font-semibold text-primary">
            Local Facilities
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everyday essentials
            <span className="block text-primary">around Jattari</span>
          </h2>

          <p className="mt-5 leading-7 text-muted">
            Explore the main categories of local facilities. Confirm specific
            locations and services before planning your visit.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <article
              key={facility.number}
              className="group rounded-2xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-accent text-2xl">
                {facility.icon}
              </div>

              <p className="mt-6 text-xs font-bold tracking-widest text-primary">
                {facility.number}
              </p>

              <h3 className="mt-2 text-lg font-bold text-foreground">
                {facility.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {facility.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
