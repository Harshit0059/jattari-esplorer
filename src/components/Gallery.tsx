const galleryItems = [
  {
    number: "01",
    title: "Places Around Jattari",
    description: "Photos of local places and surroundings.",
  },
  {
    number: "02",
    title: "Roads & Connectivity",
    description: "Images showing routes and the local area.",
  },
  {
    number: "03",
    title: "Community & Lifestyle",
    description: "Everyday scenes and local experiences.",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-soft-accent px-4 py-2 text-sm font-semibold text-primary">
            Gallery
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Take a look at
            <span className="block text-primary">Jattari</span>
          </h2>

          <p className="mt-5 leading-7 text-muted">
            Explore photos and videos that help you get familiar with the
            area. Add your own verified local media to complete this gallery.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.number}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-soft-accent">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    <span aria-hidden="true">▧</span>
                  </div>

                  <p className="mt-3 text-sm font-medium text-primary">
                    Local media
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold tracking-widest text-primary">
                  {item.number}
                </p>

                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          These are media placeholders, not actual photographs of Jattari.
        </p>
      </div>
    </section>
  );
}