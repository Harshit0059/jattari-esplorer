
import Link from "next/link";

const developmentTopics = [
  {
    number: "01",
    title: "Road & Infrastructure",
    description:
      "Roads and infrastructure are important to everyday life in Jattari. Road conditions, drainage, street lighting and public-space maintenance can affect residents, commuters and local businesses. Understanding these facilities helps visitors learn about local infrastructure and the importance of ongoing maintenance.",
    image: "/images/road.jpeg",
    alt: "Road and infrastructure around Jattari",
    highlights: [
      "Road conditions and maintenance",
      "Drainage and public infrastructure",
      "Street lighting and public spaces",
    ],
  },
  {
    number: "02",
    title: "Connectivity Improvements",
    description:
      "Connectivity influences how people travel between Jattari, nearby settlements, workplaces, markets and essential services. Road access and transport options matter for daily commuting, business activities and access to education and healthcare. Check current routes and transport information before travelling.",
    image: "/images/road1.jpeg",
    alt: "Road connectivity near Jattari",
    highlights: [
      "Road access to nearby areas",
      "Daily commuting and transport",
      "Travel routes and accessibility",
    ],
  },
  {
    number: "03",
    title: "Education & Public Facilities",
    description:
      "Educational institutions and public facilities support families and the wider Jattari community. Schools, learning centres and essential services help people access resources closer to home. Confirm the availability, location and services of a specific facility directly with the relevant organisation.",
    image: "/images/school.jpeg",
    alt: "School representing local education facilities",
    highlights: [
      "Schools and learning facilities",
      "Access to essential public services",
      "Community needs and local resources",
    ],
  },
];

export default function LocalDevelopmentsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-no-repeat"
          style={{
            backgroundImage: "url('/images/road.jpeg')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-white/80 via-white/45 to-transparent"
        />

        <div className="container-site flex min-h-[560px] items-center py-10 sm:min-h-[500px] sm:py-14 lg:min-h-[530px]">
          <div className="w-full max-w-2xl">
            <Link
              href="/news-updates"
              className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5"
            >
              <span aria-hidden="true">←</span>
              Back to News & Updates
            </Link>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/95 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              Jattari Community
            </p>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Local Developments
              <span className="mt-2 block text-primary">
                Around Jattari
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-900 sm:text-lg sm:leading-8">
              Explore local infrastructure, road connectivity, education
              facilities and community resources that matter to everyday life
              in and around Jattari.
            </p>

            <a
              href="#development-topics"
              className="button-primary mt-7 inline-flex items-center gap-2"
            >
              Explore topics
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-site py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Community information
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Understand What Is Changing Locally
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Local development covers the infrastructure, transport
              connections and public facilities that people use in everyday
              life. In Jattari, these topics are relevant to residents,
              commuters, families and local businesses.
            </p>

            <p className="mt-4 leading-7 text-muted">
              Understanding local conditions can help people learn about
              accessibility, identify information they need and make informed
              decisions about travel, education and everyday activities. Roads,
              connectivity and education facilities are useful areas to explore
              when learning about the local community.
            </p>

            <p className="mt-4 leading-7 text-muted">
              This page brings these subjects together in one place. It offers
              an overview of the topics and helps visitors identify where to
              look for further information about a particular facility or
              local issue.
            </p>
          </div>

          <div className="card-base bg-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soft-accent text-primary">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11v5m0-8h.01"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Information & Verification
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Information about local development should be checked
                  carefully before it is treated as a confirmed update.
                  Conditions, services and project details can change over time.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  For specific details about a road, institution or development
                  project, consult the relevant local authority or organisation.
                  This page provides general topic information and does not
                  claim that a particular project is currently underway or
                  completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anugrah Homes promotion */}
      <section className="container-site pb-12 sm:pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[240px] overflow-hidden bg-soft-accent sm:min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/anugrah.jpeg"
                alt="Anugrah Homes residential property project"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Residential Property · Jattari
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Discover Anugrah Homes
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Exploring local development also means understanding the
                residential options available in the area. Anugrah Homes
                presents residential plots in Jattari, Aligarh, for people
                exploring property options for their future home or considering
                a property purchase.
              </p>

              <p className="mt-3 leading-7 text-muted">
                Visitors can explore the project website to learn about its
                location, available plot options, layout information and
                enquiry process. Confirm current availability, pricing and
                documentation directly with the developer before making a
                decision.
              </p>

              <Link
                href="https://www.anugrahhomes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary mt-6 inline-flex w-fit items-center gap-2"
              >
                Explore Anugrah Homes
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Existing development topics */}
      <section
        id="development-topics"
        className="border-y border-border bg-surface py-12 sm:py-16"
      >
        <div className="container-site">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Explore by topic
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Development Topics
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Explore these three areas to understand their relevance to daily
              life in Jattari. Each topic covers useful considerations and
              points visitors towards the kind of information they may need.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {developmentTopics.map((topic) => (
              <article
                key={topic.number}
                className="card-base group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-soft-accent">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={topic.image}
                    alt={topic.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow-sm">
                    {topic.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold tracking-tight">
                    {topic.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {topic.description}
                  </p>

                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-sm font-bold text-foreground">
                      Key areas to explore
                    </p>

                    <ul className="mt-3 space-y-2">
                      {topic.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm leading-6 text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skyline Aero Homes promotion */}
      <section className="container-site py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Residential Plots · Jewar Region
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Explore Skyline Aero Homes
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Residential development is another part of the wider local
                property landscape. Skyline Aero Homes promotes residential
                plots near Jewar Airport and the Yamuna Expressway, giving
                visitors another project to explore when researching property
                options in the region.
              </p>

              <p className="mt-3 leading-7 text-muted">
                Visit the official website to review project details, plot
                options, site images and available facilities. Verify current
                approvals, prices, availability and legal documents independently
                before purchasing.
              </p>

              <Link
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary mt-6 inline-flex w-fit items-center gap-2"
              >
                Explore Skyline Aero Homes
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="relative min-h-[240px] overflow-hidden bg-soft-accent sm:min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/skyline aerohomes.jpeg"
                alt="Skyline Aero Homes residential plot project"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Existing bottom CTA */}
      <section className="container-site pb-12 sm:pb-16">
        <div className="flex flex-col gap-5 rounded-2xl border border-border bg-soft-accent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Looking for More Local Information?
            </h2>

            <p className="mt-3 leading-7 text-muted">
              Continue exploring Jattari through the available community
              information. For details about road conditions, connectivity,
              local facilities or residential property projects, consult the
              relevant organisation and verify the latest information.
            </p>
          </div>

          <Link
            href="/news-updates"
            className="button-primary inline-flex w-fit shrink-0 items-center gap-2"
          >
            All News & Updates
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
