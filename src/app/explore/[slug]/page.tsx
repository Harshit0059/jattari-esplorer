import Link from "next/link";
import { notFound } from "next/navigation";
import { explorePages } from "../data";

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
    return { title: "Page Not Found | Explore Jattari" };
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
    <main className="min-h-screen bg-white text-[#1F2937]">
      <section className="border-b border-[#E5E7EB] bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2563EB] transition hover:text-[#1D4ED8]"
          >
            <span aria-hidden="true">←</span> All Explore Jattari pages
          </Link>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
            {page.eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#1F2937] sm:text-6xl">
            {page.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6B7280] sm:text-lg">
            {page.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-lg leading-8 text-[#1F2937]">
            {page.intro}
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563EB]">
            Explore the details
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {page.highlights.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DBEAFE] text-sm font-bold text-[#1D4ED8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-xl font-semibold text-[#1F2937]">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {page.note && (
          <aside className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA] p-5 sm:p-6">
            <p className="font-semibold text-[#1F2937]">Helpful note</p>
            <p className="mt-2 text-sm leading-7 text-[#6B7280]">
              {page.note}
            </p>
          </aside>
        )}

        <div className="mt-12 rounded-3xl border border-[#E5E7EB] bg-white p-7 sm:p-10">
          <h2 className="text-2xl font-semibold text-[#1F2937]">
            Continue exploring Jattari
          </h2>

          <p className="mt-3 max-w-xl leading-7 text-[#6B7280]">
            Discover more guides about local life, places, markets and travel.
          </p>

          <Link
            href="/explore"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[#2563EB] px-5 py-3 font-semibold text-white transition hover:bg-[#1D4ED8]"
          >
            View all topics <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}