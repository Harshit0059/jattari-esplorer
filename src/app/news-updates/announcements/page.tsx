import Link from "next/link";
import Image from "next/image";

const announcementTopics = [
  {
    number: "01",
    title: "Community Events & Festivals",
    description:
      "Discover cultural celebrations, Ramlila programmes, religious gatherings and community activities happening around Jattari.",
    points: [
      "Festival and cultural event updates",
      "Community programmes and public gatherings",
      "Event dates, venues and schedules",
    ],
  },
  {
    number: "02",
    title: "Public Notices & Local Information",
    description:
      "Stay informed about public information and community notices that may be useful for residents, families and visitors.",
    points: [
      "Public notices and announcements",
      "Local service-related information",
      "Updates from relevant authorities",
    ],
  },
  {
    number: "03",
    title: "Education & Community Activities",
    description:
      "Learn about educational activities, school programmes, awareness campaigns and community initiatives around Jattari.",
    points: [
      "School and college activities",
      "Educational and awareness programmes",
      "Community participation opportunities",
    ],
  },
  {
    number: "04",
    title: "Local Business & Development",
    description:
      "Explore updates related to local markets, businesses, infrastructure and neighbourhood developments.",
    points: [
      "Local business and market information",
      "Neighbourhood improvement updates",
      "Useful information for residents and visitors",
    ],
  },
];

const verificationSteps = [
  {
    number: "01",
    title: "Check the original source",
    description:
      "Look for the original notice, event organiser or relevant authority before relying on a forwarded message.",
  },
  {
    number: "02",
    title: "Confirm the date and location",
    description:
      "Check the event date, venue, timings and any changes directly with the organiser.",
  },
  {
    number: "03",
    title: "Avoid unverified claims",
    description:
      "Do not treat social media forwards or unofficial property and investment messages as confirmed information.",
  },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero section with visible background image */}
      <section className="relative isolate min-h-[540px] overflow-hidden border-b border-border sm:min-h-[580px] lg:min-h-[620px]">

<Image
  src="/images/anouncements.jpeg"
  alt="Ramlila and cultural celebrations in Jattari"
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>

        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-white/85 via-white/85 to-white/30"
          aria-hidden="true"
        />

        <div className="container-site relative z-20 mx-auto flex min-h-[540px] items-center px-4 py-16 sm:min-h-[580px] sm:px-6 lg:min-h-[620px] lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Jattari Community Updates
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Local Announcements
              <span className="mt-2 block text-primary">
                Stay Connected with Jattari
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-800 sm:text-lg">
              Discover community events, cultural celebrations, public
              information and local activities in and around Jattari. Stay
              connected with your neighbourhood and find useful local updates.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#announcement-topics"
                className="button-primary inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-sm transition hover:-translate-y-0.5"
              >
                Explore Announcements
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>

              <Link
                href="/news-updates/local-developments"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/90 px-6 py-3 font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Local Developments
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-700">
              Your guide to community information and local activities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              About This Page
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              What is happening around Jattari?
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-muted">
            <p>
              Local announcements help people stay informed about cultural
              events, public notices, educational activities and community
              initiatives. They help residents and visitors learn about
              activities taking place in and around Jattari.
            </p>
            <p>
              Use this page as a guide to the kinds of updates worth following.
              Always confirm time-sensitive information with the original
              organiser or relevant authority before making plans.
            </p>
          </div>
        </div>
      </section>

      {/* Announcement topics */}
      <section
        id="announcement-topics"
        className="scroll-mt-24 border-y border-border bg-white"
      >
        <div className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              What to Follow
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Updates that matter to the community
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Explore different kinds of local information that can help you
              remain connected with everyday life in Jattari.
            </p>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {announcementTopics.map((topic) => (
              <article
                key={topic.number}
                className="grid gap-6 py-8 sm:grid-cols-[80px_1fr] sm:gap-8 lg:gap-12"
              >
                <div className="text-3xl font-light tracking-tight text-primary/70">
                  {topic.number}
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">
                      {topic.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">
                      {topic.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {topic.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 leading-7 text-foreground"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community and culture */}
      <section className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Community & Culture
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Stay connected to local traditions
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-muted">
              <p>
                Festivals, religious gatherings, cultural programmes and
                community celebrations are an important part of local life.
                Following announcements can help you discover activities and
                plan your participation.
              </p>
              <p>
                For events such as Ramlila, confirm the venue, schedule and
                other details with the event organiser before travelling.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-primary bg-soft-accent/60 px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              Helpful Reminder
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              Check before you share
            </h3>
            <p className="mt-4 leading-7 text-foreground/80">
              Before forwarding an announcement, confirm its source, date,
              location and whether the information is still current.
            </p>
          </div>
        </div>
      </section>

      {/* Local developments */}
      <section className="border-y border-border bg-white">
        <div className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Neighbourhood Information
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Follow local changes and developments
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Community information may include road improvements, public
                facilities, market activities and neighbourhood developments.
                Explore the local developments section for more information.
              </p>

              <Link
                href="/news-updates/local-developments"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
              >
                Explore Local Developments <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="divide-y divide-border border-y border-border">
              <div className="py-6">
                <h3 className="text-lg font-semibold">Local facilities</h3>
                <p className="mt-2 leading-7 text-muted">
                  Learn about educational institutions, healthcare services
                  and other facilities relevant to everyday life.
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <Link
                    href="/education"
                    className="font-semibold text-primary hover:underline"
                  >
                    Explore Education
                  </Link>
                  <Link
                    href="/health"
                    className="font-semibold text-primary hover:underline"
                  >
                    Explore Healthcare
                  </Link>
                </div>
              </div>

              <div className="py-6">
                <h3 className="text-lg font-semibold">
                  Property and investment information
                </h3>
                <p className="mt-2 leading-7 text-muted">
                  Verify property ownership, documentation, approvals and
                  transaction terms independently before making a decision.
                </p>
                <Link
                  href="/real-estate"
                  className="mt-3 inline-flex font-semibold text-primary hover:underline"
                >
                  Explore Real Estate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification guide */}
      <section className="container-site mx-auto px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Stay Informed
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How to verify an announcement
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Use these simple checks before making plans or acting on local
            information.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {verificationSteps.map((step) => (
            <article
              key={step.number}
              className="grid gap-4 py-6 sm:grid-cols-[70px_1fr] sm:gap-8"
            >
              <span className="text-2xl font-light text-primary">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-muted">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-6 text-muted">
          Jattari Explorer is an informational guide. Verify important
          announcements independently with the original source.
        </p>
      </section>

      {/* Bottom navigation */}
      <section className="border-t border-border bg-soft-accent/40">
        <div className="container-site mx-auto flex flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Explore More
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Discover more about Jattari
            </h2>
            <p className="mt-2 max-w-xl leading-7 text-muted">
              Explore local information, neighbourhood developments and
              community resources through Jattari Explorer.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/news-updates"
              className="button-primary inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold"
            >
              All News & Updates
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-5 py-3 font-semibold transition hover:border-primary hover:text-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
