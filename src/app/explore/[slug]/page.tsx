
import Link from "next/link";
import { notFound } from "next/navigation";
import { explorePages } from "../data";

export const instant = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return explorePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = explorePages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Page Not Found | Explore Jattari",
    };
  }

  return {
    title: `${page.title} | Explore Jattari`,
    description: page.description,
  };
}

export default async function ExploreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = explorePages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-[#E5E7EB] bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#DBEAFE] opacity-70 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB] hover:bg-[#F5F7FA]"
          >
            <span aria-hidden="true">←</span>
            All Explore Jattari pages
          </Link>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_260px]">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#DBEAFE] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1D4ED8]">
                <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                {page.eyebrow}
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#1F2937] sm:text-5xl lg:text-7xl">
                {page.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg">
                {page.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
                >
                  Explore all topics
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3.5 text-sm font-semibold text-[#1F2937] transition hover:border-[#2563EB] hover:text-[#2563EB]"
                >
                  Back to home
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-3xl border border-[#E5E7EB] bg-[#F5F7FA] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DBEAFE] text-2xl text-[#2563EB]">
                  ✦
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                  Explore Jattari
                </p>
                <p className="mt-2 text-xl font-bold leading-snug text-[#1F2937]">
                  Discover your neighbourhood.
                </p>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                  <div className="h-full w-2/3 rounded-full bg-[#2563EB]" />
                </div>
                <p className="mt-3 text-xs leading-5 text-[#6B7280]">
                  Local guides to help you discover more about Jattari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <div className="min-w-0">
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgb(15_23_42/4%)] sm:p-9 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                About this guide
              </p>

              <p className="mt-5 text-base leading-8 text-[#4B5563] sm:text-lg sm:leading-9">
                {page.intro}
              </p>
            </div>

            <div className="mt-12">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                    Discover more
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl">
                    Explore the details
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-6 text-[#6B7280]">
                  Useful information to help you learn more about this topic.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {page.highlights.map((item, index) => (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-[0_12px_30px_rgb(37_99_235/8%)] sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DBEAFE] text-sm font-bold text-[#1D4ED8] transition group-hover:bg-[#2563EB] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xl text-[#9CA3AF] transition group-hover:translate-x-1 group-hover:text-[#2563EB]">
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug text-[#1F2937]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                      {item.text}
                    </p>

                    <div className="mt-6 h-px w-full bg-[#E5E7EB] transition group-hover:bg-[#BFDBFE]" />
                  </article>
                ))}
              </div>
            </div>

            {page.note && (
              <aside className="mt-8 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg text-[#2563EB]">
                    i
                  </span>

                  <div>
                    <h2 className="font-bold text-[#1F2937]">
                      Helpful note
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#4B5563]">
                      {page.note}
                    </p>
                  </div>
                </div>
              </aside>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Keep exploring
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-snug text-[#1F2937]">
                More to discover in Jattari
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                Browse more guides covering local places, everyday life,
                markets and travel information.
              </p>

              <Link
                href="/explore"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                View all topics
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F7FA] text-xl">
                <span aria-hidden="true">⌖</span>
              </div>

              <h2 className="mt-4 text-lg font-bold text-[#1F2937]">
                Discover local life
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                Learn about the neighbourhood and find information that helps
                you explore Jattari with confidence.
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#1F2937] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[#2563EB] opacity-30 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#93C5FD]">
                Explore Jattari
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                There is more to discover.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
                Continue exploring our guides to learn more about Jattari and
                its neighbourhood.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#1F2937] transition hover:bg-[#DBEAFE]"
            >
              Explore more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
