
"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Landmark,
  MapPin,
  ScrollText,
  Sparkles,
} from "lucide-react";

const jattariHistory = [
  {
    period: "Before the recorded history",
    title: "An old settlement and its archaeological mound",
    description:
      "The Archaeological Gazetteer of Aligarh and Hathras records an old mound at Jattari, with part of the village situated on it. The mound is described as approximately five acres in area and around three feet high. This is evidence of an older settlement in the area, although the exact date when Jattari was first established has not been confirmed.",
  },
  {
    period: "Medieval period",
    title: "Migration and settlement traditions",
    description:
      "The Archaeological Gazetteer records that Jat and Rewari families of Jattari migrated from Rajasthan to this area during the time of Muhammad Ghori. This account offers a historical explanation of settlement in the region. However, it does not establish an exact founding year for Jattari or prove that the town was founded by Muhammad Ghori.",
  },
  {
    period: "The origin of the name",
    title: "Why is it called Jattari?",
    description:
      "The Gazetteer explains the name Jattari by referring to the large Jat population of the village. This is a recorded explanation of the place name. An independently verified date of naming, an earlier official name, or the identity of a person who named the settlement has not yet been established.",
  },
  {
    period: "1857",
    title: "The events at Five Biswa Chaupal",
    description:
      "The Archaeological Gazetteer contains an account that local inhabitants who were holding a meeting at Five Biswa Chaupal in 1857 were killed by English forces. It also records a local tradition that a nearby pond became red because of their blood. This account is an important part of the recorded local history, but further independent archival evidence would help verify its details.",
  },
  {
    period: "1951",
    title: "Jattari in early census records",
    description:
      "The 1951 District Census material for Aligarh lists Jattari among the settlements of the district. This provides an official historical reference to the settlement in the period after India's independence. Census records help trace population and administrative changes over time.",
  },
  {
    period: "1961",
    title: "A recorded population of 3,636",
    description:
      "The 1961 Aligarh District Census Handbook records Jattari with a population of 3,636. This gives us a documented population reference for Jattari during the early decades of independent India.",
  },
  {
    period: "Later decades",
    title: "Growth and changing local life",
    description:
      "Over the decades, Jattari has continued as a settlement within the Khair area of Aligarh district. Its changing population, roads, markets, educational facilities, businesses and public services are important parts of its modern development. A detailed year-by-year local development timeline still requires additional municipal and archival records.",
  },
  {
    period: "Present day",
    title: "Jattari today",
    description:
      "Today's Jattari is shaped by its residents, local markets, education, healthcare, agriculture, businesses and road connectivity. Its identity connects its older settlement history with the everyday lives and aspirations of the people who live here.",
  },
];

const regionalHistory = [
  {
    period: "Before the 18th century",
    title: "Kol and Koil",
    description:
      "The official Aligarh district history explains that the region was historically known as Kol or Koil. The name covered a wider area than the present-day city, and its exact origin remains uncertain. This is the history of the wider region, not an earlier confirmed name for Jattari.",
  },
  {
    period: "Medieval period",
    title: "Changing regional powers",
    description:
      "The Aligarh region experienced changes in rulers and political control over several centuries. The early history of the district up to the 12th century is described as obscure in the official district account. These developments provide regional context but should not automatically be attributed to Jattari.",
  },
  {
    period: "1524–1525",
    title: "Muhammadgarh and the Koil fort",
    description:
      "According to the official district history, during Ibrahim Lodhi's reign, Muhammad, son of Umar, built a fort at Koil and named the city Muhammadgarh. This event belongs to the history of Koil and Aligarh city, rather than a confirmed event in Jattari.",
  },
  {
    period: "1753 and later",
    title: "The Jat ruler Surajmal and the region",
    description:
      "The district history records that Jat ruler Surajmal occupied the fort of Koil in 1753, after which it was renamed Ramgarh. Later, Najaf Khan captured Kol and gave it the name Aligarh. These events are part of the wider regional history.",
  },
  {
    period: "1875–1920",
    title: "The growth of modern Aligarh",
    description:
      "Sir Syed Ahmad Khan founded the Muhammadan Anglo-Oriental College in 1875. The institution later became Aligarh Muslim University in 1920. It became an important educational institution in the wider district.",
  },
];

const culturalHighlights = [
  {
    number: "01",
    icon: "🏡",
    title: "Community & Everyday Life",
    description:
      "Jattari's identity is shaped by its residents, neighbourhoods, family occasions, local businesses and shared public spaces. Conversations with older residents can help preserve memories of how the town and its communities have changed over generations.",
  },
  {
    number: "02",
    icon: "🌾",
    title: "Agriculture & Regional Landscape",
    description:
      "Jattari is part of the agricultural landscape of western Uttar Pradesh. Farming, surrounding settlements, local roads and town markets have all contributed to the area's economic and social connections.",
  },
  {
    number: "03",
    icon: "🎉",
    title: "Festivals & Traditions",
    description:
      "Religious festivals, seasonal celebrations, family gatherings and community occasions contribute to social life in Jattari. Specific local customs and stories are best documented through residents and families who have preserved them.",
  },
  {
    number: "04",
    icon: "🍲",
    title: "Food & Hospitality",
    description:
      "Everyday meals, seasonal ingredients, home cooking, breads, lentils, vegetables and festive dishes reflect the food traditions of the wider western Uttar Pradesh region. Local recipes and family food memories can add a personal layer to Jattari's cultural story.",
  },
  {
    number: "05",
    icon: "🛍️",
    title: "Markets & Local Exchange",
    description:
      "Jattari's shops, small businesses and local markets serve everyday needs and connect residents with goods and services. Markets also offer a glimpse into the town's changing economy and daily social life.",
  },
  {
    number: "06",
    icon: "🤝",
    title: "Languages & Social Connections",
    description:
      "Hindi and regional forms of speech are part of everyday communication across this area. Local expressions, family histories and conversations with residents help visitors understand the community more closely.",
  },
];

const exploreTopics = [
  {
    title: "Read official district history",
    description:
      "Explore the history of Kol, Koil and Aligarh through the official district website. Keep regional history separate from events specifically documented in Jattari.",
    href: "https://aligarh.nic.in/history/",
    linkLabel: "Read district history",
  },
  {
    title: "Explore regional heritage",
    description:
      "Discover historical and public-interest places listed by the Aligarh district administration. Check access and travel details before visiting.",
    href: "https://aligarh.nic.in/places-of-interest/",
    linkLabel: "Explore places of interest",
  },
  {
    title: "Discover local life",
    description:
      "Learn about the town's markets, everyday services, food, businesses and changing lifestyle.",
    href: "/explore/lifestyle-markets",
    linkLabel: "Explore lifestyle & markets",
  },
];

export default function HistoryCulturePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!("IntersectionObserver" in window) || reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("history-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("history-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">

      <style jsx global>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 750ms ease,
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        [data-reveal].history-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .history-timeline-line {
          background: linear-gradient(
            to bottom,
            transparent,
            #d58a28 8%,
            #d58a28 92%,
            transparent
          );
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="group relative isolate overflow-hidden bg-[#172B26] px-6 py-12 sm:py-16 md:px-12 md:py-20">
        <div
          className="absolute inset-0 -z-20 scale-100 bg-cover bg-center transition-transform duration-[1800ms] ease-out group-hover:scale-105"
          style={{ backgroundImage: 'url("/images/culture.jpeg")' }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092E27]/95 via-[#092E27]/75 to-[#092E27]/45" />

        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#F2B75D]/20 transition-transform duration-1000 group-hover:scale-110" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border border-[#F2B75D]/20" />

        <div className="relative mx-auto max-w-6xl">
          <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-[#F2B75D]/40 bg-[#172B26]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F2B75D] backdrop-blur-md sm:text-sm">
            <Sparkles size={15} />
            Heritage, History &amp; Traditions
          </div>

          <h1 data-reveal className="mt-7 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            History &amp; Culture of{" "}
            <span className="relative inline-block text-[#F2B75D]">
              Jattari
              <span className="absolute -bottom-2 left-0 h-1 w-0 rounded-full bg-[#F2B75D] transition-all duration-700 group-hover:w-full" />
            </span>
          </h1>

          <p data-reveal className="mt-6 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8 md:text-lg">
            Discover the story of Jattari, from its old settlement and the
            origin of its name to historical accounts, the events of 1857,
            census records and the culture of its people. Explore the town's
            past alongside the wider history of Aligarh district.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <a
              href="#jattari-history"
              className="group/button inline-flex items-center justify-center gap-2 rounded-xl bg-[#D58A28] px-5 py-3 text-sm font-bold text-[#172B26] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6A443] hover:shadow-xl sm:px-7"
            >
              Discover Jattari's History
              <ArrowRight size={17} className="transition-transform duration-300 group-hover/button:translate-x-1" />
            </a>

            <a
              href="#culture"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F2B75D] hover:bg-white/20 sm:px-7"
            >
              Explore Local Culture
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div data-reveal className="mt-12 grid gap-3 border-t border-white/20 pt-7 sm:mt-14 sm:grid-cols-3">
            {[
              ["Location", "Jattari, Khair area", MapPin],
              ["District", "Aligarh, Uttar Pradesh", Landmark],
              ["Discover", "Origins, history & culture", BookOpen],
            ].map(([label, value, Icon]) => {
              const ItemIcon = Icon as typeof MapPin;

              return (
                <div
                  key={label as string}
                  className="group/info flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F2B75D]/50 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2B75D]/15 text-[#F2B75D] transition-transform duration-300 group-hover/info:rotate-6 group-hover/info:scale-110">
                    <ItemIcon size={19} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                      {label as string}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                      {value as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative border-y border-[#06483D]/15 bg-[#FFF9F0] px-6 py-11 sm:py-14 md:px-12 md:py-16">
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full border border-[#D58A28]/10" />

        <div className="relative mx-auto grid max-w-6xl gap-9 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12">
          <div data-reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              The Story of a Town
            </p>

            <h2 className="text-2xl font-bold leading-tight text-[#172B26] sm:text-3xl md:text-4xl">
              Every town has a story. Jattari has one too.
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-[#64736D] sm:text-base sm:leading-8">
              <p>
                Jattari's history is connected with an old settlement, local
                communities and the wider history of the Aligarh region. An
                Archaeological Gazetteer records an old mound at Jattari and
                provides accounts about its settlement and name.
              </p>

              <p>
                The same historical source mentions a tradition connecting
                Jat and Rewari families with migration from Rajasthan during
                the time of Muhammad Ghori. It also records an account of
                events at Five Biswa Chaupal in 1857. These are important
                historical references, although further independent records
                are needed to confirm every detail.
              </p>

              <p>
                The exact year when Jattari was first established, its
                earliest name and the precise date when it came to be called
                Jattari have not yet been confirmed by the sources consulted.
                This page distinguishes recorded accounts from details that
                still need research.
              </p>
            </div>
          </div>

          <div data-reveal className="group relative overflow-hidden rounded-2xl border border-[#D58A28]/25 bg-[#F3EBDD] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#D58A28]/20 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#0B5A49]">
                <ScrollText size={14} />
                Historical Perspective
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#172B26] sm:text-3xl">
                Origins. People. Memories.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
                From the old settlement mound to the stories passed down by
                families, Jattari's history is a combination of written
                records, local memories and the lives of its people.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-[#06483D]/15 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#B9741C] transition-transform duration-300 group-hover:rotate-6">
                  <MapPin size={21} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#172B26]">
                    Jattari, Uttar Pradesh
                  </p>
                  <p className="mt-0.5 text-xs text-[#64736D]">
                    A settlement with a documented local past
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JATTARI HISTORY */}
      <section
        id="jattari-history"
        className="scroll-mt-24 bg-[#F3EBDD] px-6 py-12 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              Jattari Through Time
            </p>

            <h2 className="text-2xl font-bold text-[#172B26] sm:text-3xl md:text-4xl">
              The history of Jattari
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              The following timeline brings together the Jattari-specific
              accounts found in the Archaeological Gazetteer and historical
              census references. Where an exact date is unavailable, the
              timeline clearly identifies the uncertainty.
            </p>
          </div>

          <div className="relative mt-10 border-t border-[#06483D]/20 pt-2 sm:mt-12">
            <div className="history-timeline-line absolute bottom-8 left-[17px] top-8 hidden w-px sm:block" />

            {jattariHistory.map((item, index) => (
              <article
                key={item.period}
                data-reveal
                style={{ transitionDelay: `${(index % 4) * 90}ms` }}
                className="group relative grid gap-4 border-b border-[#06483D]/15 py-7 transition-all duration-300 sm:grid-cols-[210px_1fr] sm:gap-8 sm:pl-1"
              >
                <div className="relative flex items-start gap-3 sm:block sm:pl-9">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#D58A28] bg-[#06483D] text-xs font-bold text-[#FFF9F0] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D58A28] group-hover:text-[#172B26]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-[#0B5A49] transition-colors duration-300 group-hover:text-[#B9741C] sm:mt-3 sm:pt-0">
                    {item.period}
                  </p>
                </div>

                <div className="relative rounded-xl border border-transparent p-2 transition-all duration-300 group-hover:border-[#D58A28]/25 group-hover:bg-[#FFF9F0]/70 sm:p-4">
                  <span className="absolute bottom-4 left-0 top-4 hidden w-0.5 rounded-full bg-[#D58A28] opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block" />

                  <h3 className="text-lg font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-4xl text-sm leading-7 text-[#64736D] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div data-reveal className="mt-7 flex items-start gap-3 rounded-xl border border-[#D58A28]/30 bg-[#FFF9F0] p-4 transition-shadow duration-300 hover:shadow-md sm:p-5">
            <InfoIcon />
            <p className="text-sm leading-7 text-[#172B26]">
              <strong>Important historical note:</strong> The exact
              establishment year, earliest name and date of naming of
              Jattari are not confirmed in the sources currently available.
              The migration and 1857 accounts are presented as recorded in
              the Archaeological Gazetteer, not as independently verified
              facts.
            </p>
          </div>
        </div>
      </section>

      {/* NAME ORIGIN */}
      <section className="bg-[#FFF9F0] px-6 py-12 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-14">
          <div data-reveal className="group relative overflow-hidden border-l-4 border-[#D58A28] bg-[#F3EBDD] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg sm:p-8">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#D58A28]/25 transition-transform duration-700 group-hover:scale-125" />

            <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C]">
              The Name
            </p>
            <h2 className="relative mt-4 text-3xl font-extrabold text-[#06483D] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
              Jattari
            </h2>
            <p className="relative mt-3 text-sm leading-7 text-[#64736D]">
              A place name with a recorded explanation connected to the
              local Jat population.
            </p>
          </div>

          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C]">
              The Story Behind the Name
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#172B26] sm:text-3xl">
              How did Jattari get its name?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base sm:leading-8">
              The Archaeological Gazetteer of Aligarh and Hathras gives an
              explanation that Jattari was so named because of its large
              Jat population. This is the historical explanation recorded
              in that source.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base sm:leading-8">
              However, the source does not provide the exact year when the
              name came into use. It also does not establish a separate
              earlier official name. Until older revenue records, maps or
              other archival documents are found, a specific previous name
              should not be claimed as fact.
            </p>
          </div>
        </div>
      </section>

      {/* REGIONAL HISTORY */}
      <section
        id="regional-history"
        className="scroll-mt-24 bg-[#F3EBDD] px-6 py-12 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              Regional Background
            </p>
            <h2 className="text-2xl font-bold text-[#172B26] sm:text-3xl md:text-4xl">
              Jattari and the wider history of Aligarh
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              Jattari is part of the wider Aligarh region. The following
              milestones explain the area's historical background; they
              are not a separate timeline of events that necessarily
              happened in Jattari.
            </p>
          </div>

          <div className="relative mt-10 border-t border-[#06483D]/20 pt-2 sm:mt-12">
            <div className="history-timeline-line absolute bottom-8 left-[17px] top-8 hidden w-px sm:block" />

            {regionalHistory.map((item, index) => (
              <article
                key={item.period}
                data-reveal
                style={{ transitionDelay: `${(index % 4) * 90}ms` }}
                className="group relative grid gap-4 border-b border-[#06483D]/15 py-7 transition-all duration-300 sm:grid-cols-[210px_1fr] sm:gap-8 sm:pl-1"
              >
                <div className="relative flex items-start gap-3 sm:block sm:pl-9">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#D58A28] bg-[#06483D] text-xs font-bold text-[#FFF9F0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D58A28] group-hover:text-[#172B26]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-[#0B5A49] transition-colors duration-300 group-hover:text-[#B9741C] sm:mt-3 sm:pt-0">
                    {item.period}
                  </p>
                </div>

                <div className="rounded-xl border border-transparent p-2 transition-all duration-300 group-hover:border-[#D58A28]/25 group-hover:bg-[#FFF9F0]/70 sm:p-4">
                  <h3 className="text-lg font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm leading-7 text-[#64736D] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section
        id="culture"
        className="scroll-mt-24 border-y border-[#06483D]/15 bg-[#FFF9F0] px-6 py-12 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              Culture &amp; Everyday Life
            </p>
            <h2 className="text-2xl font-bold text-[#172B26] sm:text-3xl md:text-4xl">
              The living culture of Jattari
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              History is also preserved through people, family memories,
              festivals, food, local markets and everyday community life.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {culturalHighlights.map((item, index) => (
              <article
                key={item.number}
                data-reveal
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                className="group relative overflow-hidden rounded-xl border border-[#06483D]/10 bg-white/60 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/50 hover:bg-white hover:shadow-xl sm:p-6"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F3EBDD] opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EBDD] text-2xl transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-[#06483D] group-hover:shadow-md">
                    <span className="transition-transform duration-500 group-hover:scale-110">
                      {item.icon}
                    </span>
                  </span>
                  <span className="text-sm font-bold tracking-widest text-[#B9741C]">
                    {item.number}
                  </span>
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49]">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-7 text-[#64736D]">
                  {item.description}
                </p>

                <div className="relative mt-5 h-1 w-10 rounded-full bg-[#D58A28]/40 transition-all duration-500 group-hover:w-full group-hover:bg-[#D58A28]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO EXPLORE */}
      <section className="bg-[#F3EBDD] px-6 py-12 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B9741C] sm:text-sm">
              Keep Exploring
            </p>
            <h2 className="text-2xl font-bold text-[#172B26] sm:text-3xl md:text-4xl">
              Discover more about Jattari and Aligarh
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              Historical records, regional heritage and local conversations
              can help build a fuller picture of the town.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:mt-9 md:grid-cols-3">
            {exploreTopics.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${index * 110}ms` }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-[#06483D]/10 border-t-2 border-t-[#D58A28] bg-[#FFF9F0] p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3EBDD] text-[#0B5A49] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#06483D] group-hover:text-white">
                  {index === 0 ? (
                    <BookOpen size={19} />
                  ) : index === 1 ? (
                    <Landmark size={19} />
                  ) : (
                    <MapPin size={19} />
                  )}
                </span>

                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-[#B9741C]">
                  Guide {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-lg font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49]">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-7 text-[#64736D]">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B5A49] transition-colors duration-300 hover:text-[#B9741C]"
                >
                  {item.linkLabel}
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT GUIDE */}
      <section className="bg-[#FFF9F0] px-6 py-10 sm:py-14 md:px-12 md:py-16">
        <div data-reveal className="group relative mx-auto flex max-w-6xl flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#D58A28]/20 bg-[#F3EBDD] p-6 sm:p-8 md:flex-row md:items-center md:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#D58A28]/20 transition-transform duration-1000 group-hover:scale-125" />

          <div className="relative">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B9741C] sm:text-sm">
              <CalendarDays size={15} />
              Continue Your Journey
            </p>
            <h2 className="mt-3 text-xl font-bold text-[#172B26] sm:text-2xl md:text-3xl">
              Explore everyday life and local markets
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64736D] sm:text-base">
              Continue with a practical guide to the markets, services and
              daily experiences that help you understand Jattari today.
            </p>
          </div>

          <Link
            href="/explore/lifestyle-markets"
            className="group/button relative inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#06483D] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-xl sm:px-7 sm:py-4 sm:text-base md:self-center"
          >
            Next: Lifestyle &amp; Markets
            <ArrowRight size={18} className="transition-transform duration-300 group-hover/button:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* SOURCES */}
      <section className="bg-[#FFF9F0] px-6 pb-10 md:px-12">
        <div data-reveal className="mx-auto max-w-6xl border-t border-[#06483D]/15 pt-5">
          <p className="text-xs leading-6 text-[#64736D]">
            Historical references:{" "}
            <a
              className="font-medium text-[#0B5A49] underline underline-offset-4 transition-colors hover:text-[#B9741C]"
              href="https://www.scribd.com/document/417905209/Archaeological-Gazetteer-of-Aligarh-Hathras-Districts-With-Special-Reference-to-OCP-Other-Proto-Historic-Cultures"
              target="_blank"
              rel="noopener noreferrer"
            >
              Archaeological Gazetteer of Aligarh &amp; Hathras Districts
            </a>
            {" · "}
            <a
              className="font-medium text-[#0B5A49] underline underline-offset-4 transition-colors hover:text-[#B9741C]"
              href="https://censusindia.mha.gov.in/nada/index.php/catalog/28477"
              target="_blank"
              rel="noopener noreferrer"
            >
              District Census Handbook, Aligarh — 1961
            </a>
            {" · "}
            <a
              className="font-medium text-[#0B5A49] underline underline-offset-4 transition-colors hover:text-[#B9741C]"
              href="https://www.scribd.com/document/1070321046/23538-1951-ALI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aligarh District Census — 1951
            </a>
            {" · "}
            <a
              className="font-medium text-[#0B5A49] underline underline-offset-4 transition-colors hover:text-[#B9741C]"
              href="https://aligarh.nic.in/history/"
              target="_blank"
              rel="noopener noreferrer"
            >
              District Aligarh — Official History
            </a>
            . Historical accounts and local traditions should be checked
            against original archival records wherever possible.
          </p>
        </div>
      </section>
    </main>
  );
}

function InfoIcon() {
  return (
    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EBDD] text-[#B9741C]">
      <Clock3 size={18} />
    </span>
  );
}
