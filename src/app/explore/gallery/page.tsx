
"use client";

import Link from "next/link";

const photos = [
  {
    title: "Jattari Streets",
    src: "/images/jattari-1.jpg",
    category: "Town Life",
  },
  {
    title: "Local Neighbourhoods",
    src: "/images/jattari-2.jpg",
    category: "Community",
  },
  {
    title: "Markets & Shopping",
    src: "/images/jattari-3.jpg",
    category: "Markets",
  },
  {
    title: "Local Surroundings",
    src: "/images/jattari-4.jpg",
    category: "Places",
  },
  {
    title: "Everyday Moments",
    src: "/images/jattari-5.jpg",
    category: "Lifestyle",
  },
  {
    title: "Discover Jattari",
    src: "/images/jattari-6.jpg",
    category: "Explore",
  },
];

const fallbackIcons = ["⌂", "✳", "↗", "◈", "❋", "⌖"];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* Hero Section */}
      <section className="border-b border-[#E5E7EB] bg-[#F5F7FA] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/explore/lifestyle-markets"
            className="text-sm font-medium text-[#6B7280] transition hover:text-[#111827]"
          >
            ← Lifestyle &amp; Markets
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#6B7280]">
            Visual Journal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Jattari in Pictures
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#6B7280]">
            Explore the town through your own photographs of local places,
            streets, markets, and everyday life.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6B7280]">
            Photo Collection
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Moments from Jattari
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#6B7280]">
            Add your photographs to the public/images folder and update the
            filenames below to match your files.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <article
              key={photo.title}
              className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-[#F3F4F6]">
                {/* Neutral placeholder behind the photo */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#F3F4F6] text-5xl text-[#9CA3AF]">
                  <span aria-hidden="true">
                    {fallbackIcons[index]}
                  </span>
                </div>

                {/* Hide the image if its file is unavailable */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="absolute inset-0 z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                  {photo.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#1F2937]">
                  {photo.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Photo Instructions */}
        <div className="mt-12 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 md:p-8">
          <h3 className="text-xl font-bold text-[#1F2937]">
            Add your own photographs
          </h3>

          <p className="mt-3 leading-7 text-[#6B7280]">
            Copy your photos into{" "}
            <code className="rounded bg-white px-2 py-1 text-[#1F2937]">
              public/images/
            </code>
            . Rename them to match the filenames in this page, or update the{" "}
            <code className="mx-1 rounded bg-white px-2 py-1 text-[#1F2937]">
              src
            </code>{" "}
            values above.
          </p>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="px-6 pb-16 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl border border-[#E5E7EB] bg-[#F5F7FA] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937]">
              Have a question about Jattari?
            </h2>

            <p className="mt-2 text-[#6B7280]">
              Visit the FAQ page for helpful information.
            </p>
          </div>

          <Link
            href="/explore/faq"
            className="inline-flex items-center justify-center rounded-full bg-[#1F2937] px-6 py-3 font-semibold text-white transition hover:bg-[#374151]"
          >
            Explore FAQs →
          </Link>
        </div>
      </section>
    </main>
  );
}
