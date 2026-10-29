import Link from "next/link";

const culturalHighlights = [
  {
    number: "01",
    icon: "🏡",
    title: "Community & Everyday Life",
    description:
      "The character of a town is shaped by the people who live there: neighbourhood connections, family occasions, local businesses, shared public spaces and day-to-day interactions. Exploring Jattari means paying attention to these ordinary experiences as well as its notable places.",
  },
  {
    number: "02",
    icon: "🌾",
    title: "The Regional Landscape",
    description:
      "Jattari is part of the wider Aligarh region of western Uttar Pradesh. Agriculture, nearby settlements, road connections and town markets all help explain how many communities across this part of the state are connected. Local conditions can vary, so current details should be checked on the ground.",
  },
  {
    number: "03",
    icon: "🎉",
    title: "Festivals & Shared Traditions",
    description:
      "Across western Uttar Pradesh, festivals and family gatherings can bring people together through worship, food, visits and community activities. Celebrations vary from household to household; visitors should ask local residents about dates, customs and events specific to Jattari.",
  },
  {
    number: "04",
    icon: "🍲",
    title: "Food & Hospitality",
    description:
      "Regional food traditions across western Uttar Pradesh include everyday home-cooked meals, seasonal ingredients, breads, lentils, vegetables and festive dishes. Local eateries and family recipes provide another way to learn about the area's identity without assuming every custom is unique to Jattari.",
  },
  {
    number: "05",
    icon: "🛍️",
    title: "Markets & Local Exchange",
    description:
      "Local markets are useful places to understand everyday needs and social life. Shops, small businesses and service providers connect residents with groceries, clothing, household goods and other essentials. Store timings, facilities and the range of services may change over time.",
  },
  {
    number: "06",
    icon: "🤝",
    title: "Languages & Social Connections",
    description:
      "Hindi is widely used across the Aligarh district, while local speech and expressions reflect the wider western Uttar Pradesh setting. Conversations with residents, shopkeepers and community members can offer a more personal understanding of the town's daily life.",
  },
];

const historyMilestones = [
  {
    period: "Early regional history",
    title: "The wider Aligarh region",
    description:
      "The official Aligarh district history explains that the region was historically associated with the name Kol or Koil. It also notes that the early history of parts of the district is incomplete, so individual accounts and legends should be treated carefully.",
  },
  {
    period: "Medieval period",
    title: "A region shaped by changing powers",
    description:
      "The district's recorded history refers to several ruling powers and changes in place names over time. These are part of the broader regional background; they should not automatically be presented as events that took place specifically in Jattari.",
  },
  {
    period: "1524–1525 and later",
    title: "Historical developments around Koil",
    description:
      "The district account describes the development and renaming of fortifications around Koil during the Lodhi period and later centuries. This is regional context rather than a confirmed timeline for Jattari itself.",
  },
  {
    period: "Modern district identity",
    title: "Aligarh today",
    description:
      "Aligarh is widely associated with Aligarh Muslim University and its lock industry. These institutions and industries are important parts of the district's modern identity and provide context for understanding the wider area around Jattari.",
  },
];

const exploreTopics = [
  {
    title: "Understand local history",
    description:
      "Start with reliable district records, local archives and documented accounts. When a story is based on oral memory, identify it as a local account unless it has been independently verified.",
    href: "https://aligarh.nic.in/history/",
    linkLabel: "Read district history",
  },
  {
    title: "Visit regional heritage places",
    description:
      "The Aligarh district tourism pages list heritage and public-interest places such as Aligarh Fort and other regional attractions. Check the latest access information and travel details before making a visit.",
    href: "https://aligarh.nic.in/places-of-interest/",
    linkLabel: "Explore places of interest",
  },
  {
    title: "Learn from the community",
    description:
      "Ask residents about local celebrations, traditional foods, changing markets and memories of the town. First-hand conversations can add detail that may not appear in general district histories.",
    href: "/explore/lifestyle-markets",
    linkLabel: "Explore lifestyle & markets",
  },
];

export default function HistoryCulturePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-foreground">
      {/* HERO WITH VISIBLE CULTURE BACKGROUND IMAGE */}
      <section
        className="relative overflow-hidden bg-white px-6 py-12 sm:py-16 md:px-12 md:py-20"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255, 255, 255, 0.25),
              rgba(255, 255, 255, 0.40)
            ),
            url("/images/culture.jpeg")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-primary/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full border border-primary/20"
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/explore"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover sm:mb-10"
          >
            <span aria-hidden="true">←</span> Back to Explore Jattari
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8] sm:text-sm">
            Heritage, People &amp; Traditions
          </p>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] drop-shadow-sm sm:text-4xl md:text-6xl">
            History &amp; Culture of{" "}
            <span className="text-primary">Jattari</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-[#1F2937] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            Explore Jattari through its local community, everyday traditions
            and the wider history of Aligarh district. This guide brings
            together regional context and practical ways to learn more about
            the town, while separating documented history from details that
            need local confirmation.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <a
              href="#regional-history"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover sm:px-7"
            >
              Explore Regional History
              <span className="ml-2">→</span>
            </a>

            <a
              href="#culture"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white/90 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-soft-accent sm:px-7"
            >
              Discover Local Culture
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:mt-11 sm:grid-cols-3">
            {[
              ["Town", "Jattari"],
              ["District", "Aligarh, Uttar Pradesh"],
              ["Explore", "People, heritage & daily life"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-sm"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-border bg-white px-6 py-11 sm:py-14 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-9 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
              A Living Story
            </p>

            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
              Culture is more than monuments and dates
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              <p>
                A town&apos;s identity develops through its people, work,
                celebrations, food, language and the places where everyday life
                happens. In Jattari, local experiences are best understood by
                looking at the town itself as well as its links with the wider
                Aligarh district and western Uttar Pradesh.
              </p>

              <p>
                Historical sources often focus on district headquarters,
                forts, major institutions and documented political events.
                They may not record every detail of a smaller town&apos;s past.
                For that reason, this page uses Aligarh&apos;s documented
                history as regional background and avoids assigning those
                events directly to Jattari without specific evidence.
              </p>

              <p>
                To build a more complete picture, combine reliable written
                sources with local accounts, conversations with long-time
                residents and observations of markets, community spaces and
                seasonal activities.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-2 rotate-2 rounded-3xl bg-soft-accent"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl border border-border bg-white p-6 shadow-lg sm:p-8">
              <span className="inline-flex rounded-full bg-soft-accent px-3 py-1.5 text-xs font-semibold text-primary">
                A Regional Perspective
              </span>

              <h3 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
                People. Places. Traditions.
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Discover the stories held in neighbourhoods, family gatherings,
                local businesses and regional heritage. Each perspective adds
                another layer to understanding Jattari.
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-accent text-xl"
                  aria-hidden="true"
                >
                  📍
                </span>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Jattari, Uttar Pradesh
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    Local life within a wider regional story
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL HISTORY */}
      <section
        id="regional-history"
        className="scroll-mt-24 bg-white px-6 py-12 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Historical Background
            </p>

            <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Jattari in the wider history of Aligarh
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              The official district history provides context for the region,
              although it does not establish every milestone below as a
              Jattari-specific event. Use the timeline as an introduction to
              Aligarh&apos;s wider past, not as a complete history of Jattari.
            </p>
          </div>

          <div className="mt-8 border-t border-border sm:mt-10">
            {historyMilestones.map((item, index) => (
              <article
                key={item.period}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:py-7"
              >
                <div className="flex items-start gap-3 sm:block">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft-accent text-xs font-bold text-primary sm:mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-primary sm:pt-0">
                    {item.period}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-4xl text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-primary/15 bg-soft-accent/50 p-4 sm:p-5">
            <p className="text-sm leading-7 text-foreground">
              <strong>Research note:</strong> The historical account above
              refers to the Aligarh region. Before publishing a specific date,
              ruler, monument or event as part of Jattari&apos;s own history,
              verify it with a reliable local or archival source.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE HIGHLIGHTS */}
      <section
        id="culture"
        className="scroll-mt-24 border-y border-border bg-white px-6 py-12 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Culture &amp; Everyday Life
            </p>

            <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              The many layers of local culture
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              These themes offer a starting point for learning about Jattari
              and the broader region. They describe regional context, not
              customs that should automatically be assumed to be unique to
              every household in town.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {culturalHighlights.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-accent text-xl"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                  <span className="text-sm font-bold tracking-widest text-primary/60">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO EXPLORE */}
      <section className="bg-white px-6 py-12 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Keep Exploring
            </p>

            <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Ways to learn more about the area
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Use official records for historical facts, and local sources for
              current events, community practices and practical visitor
              information.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:mt-9 md:grid-cols-3">
            {exploreTopics.map((item, index) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-white p-5 sm:p-6"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Guide {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={
                    item.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
                >
                  {item.linkLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT GUIDE CTA */}
      <section className="bg-white px-6 py-10 sm:py-14 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm">
              Continue Your Journey
            </p>

            <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              Explore everyday life and local markets
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Continue with a practical guide to the markets, services and
              daily experiences that help you understand the town today.
            </p>
          </div>

          <Link
            href="/explore/lifestyle-markets"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover sm:px-7 sm:py-4 sm:text-base md:self-center"
          >
            Next: Lifestyle &amp; Markets
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* SOURCES */}
      <section className="bg-white px-6 pb-10 md:px-12">
        <div className="mx-auto max-w-6xl border-t border-border pt-5">
          <p className="text-xs leading-6 text-muted">
            Suggested references:{" "}
            <a
              className="font-medium text-primary underline underline-offset-4"
              href="https://aligarh.nic.in/history/"
              target="_blank"
              rel="noopener noreferrer"
            >
              District Aligarh — History
            </a>{" "}
            and{" "}
            <a
              className="font-medium text-primary underline underline-offset-4"
              href="https://aligarh.nic.in/places-of-interest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              District Aligarh — Places of Interest
            </a>
            . Confirm local events, current details and Jattari-specific
            historical claims with reliable sources before relying on them.
          </p>
        </div>
      </section>
    </main>
  );
}