
import Link from "next/link";
import { newsPageConfig } from "@/config/news";

const categoryImages = [
  {
    href: "/news-updates/local-developments",
    image: "/images/road.jpeg",
    alt: "Road development around Jattari",
  },
  {
    href: "/news-updates/connectivity",
    image: "/images/road1.jpeg",
    alt: "Road and highway connectivity",
  },
  {
    href: "/news-updates/announcements",
    image: "/images/school.jpeg",
    alt: "Local education and community facilities",
  },
];

export default function NewsUpdatesPage() {
  const { categories } = newsPageConfig;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-no-repeat"
          style={{
            backgroundImage: "url('/images/jattari.jpeg')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />

        {/* Minimal overlay: image remains visible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/10"
        />

        <div className="container-site flex min-h-[560px] items-center py-10 sm:min-h-[500px] sm:py-14 lg:min-h-[530px]">
          <div className="w-full max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.16em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              {newsPageConfig.eyebrow}
            </p>

            <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {newsPageConfig.title}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-950 sm:mt-5 sm:text-lg sm:leading-8">
              {newsPageConfig.description}
            </p>

            <div className="mt-6 flex flex-col items-start gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="button-primary inline-flex min-h-11 w-fit max-w-full items-center justify-center gap-2 px-4 py-3 text-sm font-semibold shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
                >
                  <span>{category.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Information section */}
      <section className="container-site py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Stay informed
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What is happening around Jattari?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-muted">
              Explore the update categories to find relevant local information.
              Published news should include a reliable source and an appropriate
              date.
            </p>
          </div>

          <div className="card-base bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-soft-accent text-primary">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  {newsPageConfig.noticeTitle}
                </h2>

                <p className="mt-3 leading-7 text-muted">
                  {newsPageConfig.noticeDescription}
                </p>

                <p className="mt-4 text-sm font-semibold text-primary">
                  Verified updates will appear here when they are available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="border-y border-border bg-surface py-12 sm:py-16">
        <div className="container-site">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Browse by topic
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Explore local update categories
            </h2>

            <p className="mt-3 leading-7 text-muted">
              Choose a topic to explore its dedicated page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => {
              const imageData = categoryImages.find(
                (item) => item.href === category.href
              );

              return (
                <article
                  key={category.href}
                  className="card-base flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-soft-accent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageData?.image ?? "/images/jattari.jpeg"}
                      alt={imageData?.alt ?? category.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                      Local updates
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-bold tracking-tight">
                      {category.title}
                    </h3>

                    <p className="mt-3 flex-1 leading-7 text-muted">
                      {category.description}
                    </p>

                    <Link
                      href={category.href}
                      className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-primary transition hover:gap-3"
                    >
                      {category.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="container-site py-10 sm:py-14">
        <div className="flex flex-col gap-5 rounded-2xl border border-border bg-soft-accent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Looking for a specific local update?
            </h2>

            <p className="mt-2 leading-7 text-muted">
              Browse the available categories to find information relevant to
              you.
            </p>
          </div>

          <Link
            href="/news-updates/local-developments"
            className="button-primary inline-flex w-fit shrink-0 items-center gap-2"
          >
            Explore updates
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
