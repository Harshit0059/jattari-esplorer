
const newsItems = [
  {
    category: "Local Updates",
    title: "Stay Informed About Jattari",
    description:
      "Use reliable local sources to learn about announcements, public services, and developments.",
  },
  {
    category: "Community",
    title: "Discover What's Happening",
    description:
      "Follow verified updates relevant to residents and visitors in the Jattari area.",
  },
  {
    category: "Property Information",
    title: "Research Before You Decide",
    description:
      "Check official records and trusted sources before acting on property-related news.",
  },
];

export default function NewsUpdates() {
  return (
    <section id="news" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex rounded-full bg-soft-accent px-4 py-2 text-sm font-semibold text-primary">
              News & Local Updates
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stay connected with
              <span className="block text-primary">local updates</span>
            </h2>
          </div>
          <p className="max-w-md leading-7 text-muted">
            Keep up with useful information and verify announcements through
            official or trusted sources.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <span className="rounded-full bg-soft-accent px-3 py-1 text-xs font-semibold text-primary">
                {item.category}
              </span>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted">
          These are informational cards, not live news reports.
        </p>
      </div>
    </section>
  );
}
