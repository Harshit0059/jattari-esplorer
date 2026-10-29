This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.









<!-- page.tsx backup -->
import SuggestionForm from "@/components/SuggestionForm";

const places = [
  {
    number: "01",
    title: "Location & Connectivity",
    description:
      "Explore routes, nearby destinations and connections when planning your visit.",
    tag: "GETTING AROUND",
    icon: "↗",
    href: "#contact",
  },
  {
    number: "02",
    title: "Education & Learning",
    description:
      "Discover educational resources, schools and learning opportunities in the area.",
    tag: "EDUCATION",
    icon: "⌂",
    href: "#contact",
  },
  {
    number: "03",
    title: "Healthcare",
    description:
      "Find useful healthcare information and local medical resources.",
    tag: "WELLBEING",
    icon: "+",
    href: "#contact",
  },
  {
    number: "04",
    title: "Property & Investment",
    description:
      "Explore property guidance, project information and important investment considerations.",
    tag: "REAL ESTATE",
    icon: "⌑",
    href: "#property",
  },
];

const highlights = [
  { number: "01", title: "Explore Jattari", detail: "Local guide & useful places" },
  { number: "02", title: "Plan your journey", detail: "Location & connectivity" },
  { number: "03", title: "Make informed choices", detail: "Property & local resources" },
];

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen w-full overflow-x-clip bg-background text-foreground"
    >
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl">
        <nav className="container-site flex min-w-0 items-center justify-between gap-2 py-3 sm:gap-4 sm:py-4">
          <a href="#home" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white sm:h-12 sm:w-12">
              J.
            </span>
            <span className="min-w-0">
              <span className="block text-base font-bold tracking-tight sm:text-lg">Jattari</span>
              <span className="block whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.055em] text-primary min-[380px]:text-[9px] min-[380px]:tracking-[0.08em] sm:text-[10px] sm:tracking-[0.18em]">
                Explore · Discover · Connect
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
            <a className="transition hover:text-primary" href="#about">About</a>
            <a className="transition hover:text-primary" href="#explore">Explore</a>
            <a className="transition hover:text-primary" href="#property">Property</a>
            <a className="transition hover:text-primary" href="#contact">Contact</a>
          </div>

          <a
            href="#explore"
            className="button-primary shrink-0 whitespace-nowrap rounded-full px-3 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">Explore</span><span className="hidden sm:inline">Start Exploring</span> <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="relative isolate w-full">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 -z-10 h-80 w-80 rounded-full bg-soft-accent/70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-site grid min-w-0 grid-cols-1 items-center gap-10 py-10 sm:gap-14 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
          <div className="min-w-0 animate-[fadeUp_.8s_ease-out_both]">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-surface px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary sm:mb-7 sm:px-4 sm:text-xs sm:tracking-[0.12em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Your guide to Jattari, Uttar Pradesh</span>
            </div>

            <h1 className="max-w-full break-words text-[clamp(2.5rem,8vw,3rem)] font-semibold leading-[1.08] tracking-[-0.045em] sm:max-w-3xl sm:text-6xl sm:tracking-[-0.055em] lg:text-7xl">
              Discover the <span className="block text-primary">place behind</span> the possibilities.
            </h1>

            <p className="mt-6 max-w-full break-words text-base leading-7 text-muted sm:mt-7 sm:max-w-xl sm:text-lg sm:leading-8">
              A growing local guide to Jattari — explore its surroundings, connectivity, essential services, markets and property opportunities in one place.
            </p>

            <div className="mt-7 flex min-w-0 flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#explore" className="button-primary w-full rounded-full px-5 py-3 text-sm sm:w-auto sm:px-7 sm:py-4">
                Explore Jattari <span aria-hidden="true">↗</span>
              </a>
              <a href="#about" className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-soft-accent sm:w-auto sm:px-7 sm:py-4">
                Get to know the area
              </a>
            </div>

            <div className="mt-8 grid min-w-0 grid-cols-1 gap-4 border-t border-border pt-6 min-[420px]:grid-cols-2 sm:mt-12 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 sm:pt-7">
              <div>
                <p className="text-sm font-bold">Local-first</p>
                <p className="mt-1 text-xs text-muted">Useful area information</p>
              </div>
              <div className="hidden h-9 w-px bg-border sm:block" />
              <div>
                <p className="text-sm font-bold">Easy to explore</p>
                <p className="mt-1 text-xs text-muted">Organised local guides</p>
              </div>
              <div className="hidden h-9 w-px bg-border sm:block" />
              <div>
                <p className="text-sm font-bold">Informed decisions</p>
                <p className="mt-1 text-xs text-muted">Practical property guidance</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-2 w-full min-w-0 max-w-xl px-1 pb-5 sm:mt-0 sm:px-0 sm:pb-0">
            <div className="absolute -right-1 -top-4 z-10 rounded-2xl border border-border bg-surface px-3 py-3 shadow-lg sm:-right-5 sm:top-8 sm:px-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Your next discovery</p>
              <p className="mt-1 text-sm font-bold text-primary">Starts here ↗</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-3 shadow-xl sm:rounded-[2.5rem] sm:p-6">
              <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[1.25rem] border border-primary/10 bg-gradient-to-br from-soft-accent via-white to-blue-50 p-5 sm:min-h-[440px] sm:rounded-[1.5rem] sm:p-9">
                <div aria-hidden="true" className="absolute -right-8 -top-10 h-56 w-56 rounded-full border border-primary/10" />
                <div aria-hidden="true" className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full border border-primary/10" />
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">A closer look</span>
                  <h2 className="mt-4 max-w-sm break-words text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                    More to know.<br />More to explore.
                  </h2>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
                    Places, people, practical information and possibilities — thoughtfully brought together.
                  </p>
                </div>
                <div className="relative mt-10 sm:mt-12">
                  <div className="mb-4 flex items-center justify-between gap-3 text-[10px] text-muted sm:text-xs">
                    <span>THE JATTARI GUIDE</span><span>01 — 04</span>
                  </div>
                  <div className="h-px bg-border"><div className="h-px w-1/2 bg-primary" /></div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-sm text-muted">Discover at your pace</span>
                    <a href="#explore" aria-label="Explore guide" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-white transition hover:rotate-45">↗</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-2 rounded-2xl border border-border bg-surface p-3 shadow-lg sm:-bottom-5 sm:-left-6 sm:p-5">
              <p className="text-xs text-muted">A guide built around</p>
              <p className="mt-1 text-sm font-bold text-primary">Local discovery</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-surface">
        <div className="container-site grid min-w-0 gap-8 py-12 sm:gap-10 sm:py-14 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">A place worth knowing</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Get to know Jattari, one discovery at a time.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-muted">Jattari is a town in the Khair area of Aligarh district, Uttar Pradesh. This guide brings together local information, travel planning, essential services and property resources to help visitors and residents explore with greater confidence.</p>
            <a href="#explore" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover">Explore the guide <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section id="explore" className="container-site py-12 sm:py-24">
        <div className="flex min-w-0 flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Explore by interest</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">What would you like to discover?</h2>
          </div>
          <p className="max-w-full text-sm leading-7 text-muted sm:max-w-sm">Start with a topic and find the information you need, all in one organised guide.</p>
        </div>

        <div className="mt-8 grid min-w-0 gap-5 sm:mt-10 sm:grid-cols-2">
          {places.map((place) => (
            <a key={place.number} href={place.href} className="group relative min-w-0 overflow-hidden rounded-3xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="pt-1 text-xs font-bold tracking-[0.18em] text-primary">{place.tag}</span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-soft-accent text-2xl text-primary transition group-hover:bg-primary group-hover:text-white">{place.icon}</span>
              </div>
              <p className="mt-8 text-xs font-medium text-muted">{place.number} / 04</p>
              <h3 className="mt-2 break-words text-xl font-semibold tracking-tight sm:text-2xl">{place.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">{place.description}</p>
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
                <span className="text-sm font-semibold text-primary">Discover more</span>
                <span aria-hidden="true" className="transition group-hover:translate-x-1">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-site grid min-w-0 gap-8 py-12 sm:gap-10 sm:py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">A useful local companion</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Better information.<br />Better decisions.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted">Whether you are learning about the area, planning a journey or researching property, start with the topic that matters to you.</p>
          </div>
          <div>
            {highlights.map((item) => (
              <div key={item.number} className="flex gap-4 border-b border-border py-5 first:border-t sm:gap-5">
                <span className="pt-1 text-xs font-bold tracking-widest text-primary">{item.number}</span>
                <div className="min-w-0 flex-1"><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm text-muted">{item.detail}</p></div>
                <span aria-hidden="true" className="text-primary">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="property" className="container-site py-12 sm:py-24">
        <div className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-primary/10 bg-soft-accent/60 p-6 sm:rounded-[2.5rem] sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -right-10 -top-16 h-64 w-64 rounded-full border border-primary/10" />
          <div aria-hidden="true" className="absolute -right-2 -top-8 h-48 w-48 rounded-full border border-primary/10" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Property &amp; investment</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Research first.<br />Make informed choices.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">Learn what to consider when researching land and property, understand project information, and prepare the right questions before making an investment decision.</p>
            <a href="#contact" className="button-primary mt-7 rounded-full px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base">Ask about property information <span aria-hidden="true">↗</span></a>
            <p className="mt-4 max-w-lg text-xs leading-6 text-muted">Property information should be independently verified. This guide does not guarantee returns, legal status or future appreciation.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-surface">
        <div className="container-site grid min-w-0 gap-8 py-12 sm:gap-10 sm:py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Help us improve</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">What should we explore next?</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">Have a suggestion for a local guide, useful resource or topic? Share it with us as this website grows.</p>
          </div>
          <div className="min-w-0"><SuggestionForm /></div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="container-site flex min-w-0 flex-col gap-6 py-8 pb-10 sm:gap-8 sm:py-10 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary font-bold text-white">J.</span>
            <span><span className="block font-bold">Jattari Explorer</span><span className="mt-1 block text-xs text-muted">A local guide to discover more.</span></span>
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"><a href="#about" className="hover:text-primary">About</a><a href="#explore" className="hover:text-primary">Explore</a><a href="#property" className="hover:text-primary">Property guide</a><a href="#contact" className="hover:text-primary">Contact</a></div>
          <p className="text-xs text-muted">© 2026 Jattari Explorer</p>
        </div>
      </footer>
    </main>
  );
}
