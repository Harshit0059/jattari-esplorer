
import Link from "next/link";

const developmentTopics = [
  {
    number: "01",
    title: "Roads & Connectivity",
    description:
      "Road conditions, route improvements and transport connectivity can influence everyday travel around Jattari. Before travelling, check current route conditions and verify any reported roadwork or traffic restrictions.",
    label: "Transport",
  },
  {
    number: "02",
    title: "Public Infrastructure",
    description:
      "Drainage, street lighting, sanitation and other civic facilities are important to everyday community life. For information about a particular project, confirm its status and details with the responsible authority.",
    label: "Civic facilities",
  },
  {
    number: "03",
    title: "Education & Healthcare",
    description:
      "Changes affecting schools, educational facilities, hospitals and other healthcare services can matter to local families. Confirm opening hours, service availability and official announcements directly with the institution.",
    label: "Essential services",
  },
  {
    number: "04",
    title: "Markets & Local Economy",
    description:
      "Local markets, shops, small businesses and service providers contribute to Jattari's everyday economy. Verified information about public arrangements and business activities can help residents plan their day.",
    label: "Local economy",
  },
];

const verificationSteps = [
  {
    title: "Identify the original source",
    description:
      "Look for the relevant government department, local authority, institution or project organisation responsible for the announcement.",
  },
  {
    title: "Check the project status",
    description:
      "Distinguish between a proposal, an announced plan, work in progress and a completed development.",
  },
  {
    title: "Confirm the location and timeline",
    description:
      "Check the precise location, publication date and any official schedule before relying on a development update.",
  },
  {
    title: "Avoid unverified claims",
    description:
      "Do not treat forwarded messages, promotional material or old photographs as proof that a project is approved or completed.",
  },
];

export default function LocalDevelopmentsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-border">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/developments.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center 42%",
          }}
          aria-hidden="true"
        />

        {/* Light overlay only behind the text */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FFF9F0]/55 via-[#FFF9F0]/25 to-transparent"
          aria-hidden="true"
        />

        <div className="container-site relative mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#06483D]">
              Jattari · Local Development
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#172B26] sm:text-5xl lg:text-6xl">
              Local Developments & Infrastructure Updates
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#263A33] sm:text-lg">
              Explore the local development topics that can affect daily life in
              Jattari, from roads and public infrastructure to education,
              healthcare and local economic activity. Learn what to check and
              how to verify information before making decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#development-topics"
                className="button-primary inline-flex items-center gap-2"
              >
                Explore development topics
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#verify-developments"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/95 px-5 py-3 font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Verify information
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Understanding local change
            </p>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Development that shapes everyday life
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-muted">
              <p>
                Local development includes the roads people use, the public
                facilities they depend on and the services that support
                families, students, workers and businesses. Improvements in
                these areas can influence daily routines and future planning.
              </p>

              <p>
                For residents of Jattari, keeping track of reliable information
                about civic facilities, connectivity, education, healthcare and
                local economic activity can help them understand changes in the
                surrounding area.
              </p>

              <p>
                This page is an informational guide to development topics. It
                does not confirm that a specific project has been announced,
                approved, started or completed. Check current information with
                the relevant authority before relying on a claim.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What to look for
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Read development updates carefully
            </h3>

            <p className="mt-4 leading-7 text-muted">
              A headline or photograph may not show the complete status of a
              project. Look for the issuing organisation, the exact location,
              publication date and any official documentation.
            </p>

            <div className="mt-6 border-t border-border pt-5">
              <ul className="space-y-3 text-sm leading-6 text-muted">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  Original announcement or official notice
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  Confirmed location and current project status
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  Published timelines and relevant conditions
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* DEVELOPMENT TOPICS */}
      <section
        id="development-topics"
        className="scroll-mt-24 border-y border-border bg-surface py-16 sm:py-20"
      >
        <div className="container-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Key areas
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Development topics to follow in Jattari
            </h2>

            <p className="mt-5 leading-8 text-muted">
              These areas provide a useful starting point for understanding
              local needs and evaluating reports about development in and around
              Jattari.
            </p>
          </div>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {developmentTopics.map((topic) => (
              <article
                key={topic.number}
                className="grid gap-4 py-7 sm:grid-cols-[76px_1fr] sm:gap-7 sm:py-9"
              >
                <div>
                  <span className="text-2xl font-semibold text-primary/70">
                    {topic.number}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold sm:text-2xl">
                      {topic.title}
                    </h3>

                    <span className="rounded-full bg-soft-accent px-3 py-1 text-xs font-semibold text-primary">
                      {topic.label}
                    </span>
                  </div>

                  <p className="mt-3 max-w-3xl leading-8 text-muted">
                    {topic.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTIVITY AND INFRASTRUCTURE */}
      <section className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Connectivity & facilities
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why local infrastructure matters
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-muted">
              <p>
                Reliable roads and public facilities support access to schools,
                healthcare, markets and workplaces. Residents can follow
                official notices about road maintenance, civic works and changes
                that may affect local movement.
              </p>

              <p>
                When reading about a new road, transport link or public
                facility, check the exact route or location and identify which
                authority or organisation is responsible for the work. Published
                plans and proposals should not be confused with completed
                infrastructure.
              </p>

              <p>
                For immediate travel decisions, use current route information
                and follow any traffic directions issued by the responsible
                authorities.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-primary pl-6 sm:pl-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              A practical checklist
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Before relying on a development report
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Check the publication date and original source.",
                "Confirm the exact project location.",
                "Find out whether it is proposed, approved, underway or completed.",
                "Look for official notices or published documentation.",
                "Recheck details before making travel or financial decisions.",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-muted">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-accent text-sm font-bold text-primary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LOCAL ECONOMY AND PROPERTY PLANNING */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="container-site mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Community & local economy
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Local activity and future planning
            </h2>

            <p className="mt-5 leading-8 text-muted">
              Markets, services, educational facilities, healthcare and
              residential areas all contribute to the way a locality develops.
              Reliable information helps residents understand the services
              available to them and assess future plans more carefully.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="border-l-2 border-primary pl-5 sm:pl-7">
              <h3 className="text-xl font-bold">
                Supporting local businesses
              </h3>

              <p className="mt-3 leading-8 text-muted">
                Shops, service providers and small businesses play a role in
                meeting everyday needs. When checking information about a
                business opening, public facility or local market, confirm the
                current details with the relevant source.
              </p>
            </article>

            <article className="border-l-2 border-primary pl-5 sm:pl-7">
              <h3 className="text-xl font-bold">
                Residential and property planning
              </h3>

              <p className="mt-3 leading-8 text-muted">
                People researching housing options may explore private
                property-related resources such as{" "}
                <span className="font-semibold text-primary">
                  Anugrah Homes
                </span>{" "}
                and{" "}
                <span className="font-semibold text-primary">
                  Skyline Aero Homes
                </span>
                . These are private resources, not official development
                authorities. Independently verify project details, land records,
                applicable approvals, costs and terms before making a property
                decision.
              </p>
            </article>
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-muted">
            Mention of private organisations does not imply official
            endorsement, confirmed project approval or guaranteed investment
            returns. Verify all material information independently.
          </p>
        </div>
      </section>

      {/* VERIFICATION GUIDE */}
      <section
        id="verify-developments"
        className="container-site mx-auto scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20"
      >
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Information guide
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to verify local development updates
          </h2>

          <p className="mt-5 leading-8 text-muted">
            A few simple checks can help distinguish reliable information from
            rumours, outdated reports and promotional claims.
          </p>
        </div>

        <div className="mt-10">
          {verificationSteps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-3 border-t border-border py-6 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-accent font-bold text-primary">
                {index + 1}
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-3xl leading-8 text-muted">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h3 className="text-xl font-bold">Important information</h3>

          <p className="mt-3 leading-8 text-muted">
            This page is an informational guide, not a live project tracker or
            government notification service. It does not confirm the approval,
            funding, schedule or completion of any specific development. For
            official status, consult the responsible authority or project
            organisation.
          </p>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="border-t border-border bg-surface">
        <div className="container-site mx-auto flex flex-col gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Stay informed about Jattari
            </h2>

            <p className="mt-2 max-w-2xl leading-7 text-muted">
              Explore more local topics and community information in the News &
              Updates section.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
