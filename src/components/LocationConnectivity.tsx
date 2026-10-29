
const connectivityItems = [
  {
    number: "01",
    title: "Regional Location",
    description:
      "Learn about Jattari's location in the Khair area of Aligarh district, Uttar Pradesh.",
  },
  {
    number: "02",
    title: "Road Connectivity",
    description:
      "Review road routes and travel options relevant to your starting point before travelling.",
  },
  {
    number: "03",
    title: "Nearby Destinations",
    description:
      "Plan journeys to nearby towns and destinations after checking current routes and distances.",
  },
];

export default function LocationConnectivity() {
  return (
    <section
      id="location"
      className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-soft-accent px-4 py-2 text-sm font-semibold text-primary">
              Location & Connectivity
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Understand where
              <span className="block text-primary">Jattari connects</span>
            </h2>

            <p className="mt-5 leading-8 text-muted">
              Location and route information can help residents, visitors,
              and property seekers plan more confidently. Check current maps
              and travel conditions before setting out.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Jattari%2C+Uttar+Pradesh%2C+India"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-7 inline-flex items-center justify-center"
            >
              Find Jattari on Maps <span className="ml-2">↗</span>
            </a>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-soft-accent blur-2xl" />

            <div className="relative space-y-4">
              {connectivityItems.map((item) => (
                <article
                  key={item.number}
                  className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-accent text-sm font-bold text-primary">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
