
"use client";

import Link from "next/link";
import { useEffect } from "react";

const marketAreas = [
  {
    number: "01",
    title: "Goverdhan Market",
    location: "Main Road, near Khair Bus Stand",
    description:
      "Goverdhan Market is one of the market references associated with Jattari's Main Road area. It represents the everyday shopping environment where residents can explore nearby shops and local services.",
    category: "Local Shopping",
  },
  {
    number: "02",
    title: "Chota Chandni Chowk",
    location: "Pisawa–Jattari Road, near Dauji Mandir",
    description:
      "This market location is associated with clothing and family shopping. Online business listings mention Apna Bazar in this area, including sarees, garments and clothing for different age groups.",
    category: "Clothing & Retail",
  },
  {
    number: "03",
    title: "Seth Shri Chandra Market",
    location: "Jattari",
    description:
      "This market appears in local business listings as a supermarket or shopping destination. It is one of the examples of organised everyday retail in the town.",
    category: "Everyday Shopping",
  },
  {
    number: "04",
    title: "Pisawa Road Market Area",
    location: "Pisawa–Jattari Road",
    description:
      "The Pisawa Road stretch has several local business references, including grocery and general stores. It is useful to explore this road when looking for everyday household supplies and nearby shops.",
    category: "Grocery & Essentials",
  },
];

const shoppingCategories = [
  {
    number: "01",
    icon: "🛒",
    title: "Grocery & Daily Essentials",
    description:
      "Kirana shops, general stores and grocery outlets help residents purchase everyday food items, packaged products, household supplies and personal-use essentials.",
    examples: [
      "Super Bazar Canteen",
      "Mangla Enterprises",
      "Patanjali Arogya Kendra",
    ],
  },
  {
    number: "02",
    icon: "👗",
    title: "Clothing & Family Shopping",
    description:
      "Clothing stores and garment retailers serve everyday shopping as well as family occasions, celebrations and seasonal clothing needs.",
    examples: [
      "Apna Bazar (Chota Chandni Chowk)",
      "Gopal Garments & Sarees Collection",
      "Seth Kishori Raman Market",
    ],
  },
  {
    number: "03",
    icon: "🌾",
    title: "Agriculture & Farming Supplies",
    description:
      "Agriculture is an important part of the wider rural economy. Seed, fertiliser and agricultural supply shops connect farmers with products needed for seasonal farming activities.",
    examples: [
      "Poonam Enterprises",
      "Kumar Agriculture Store",
      "Pandit Ji Beej Bhandar",
    ],
  },
  {
    number: "04",
    icon: "🥛",
    title: "Food, Dairy & Bakery",
    description:
      "Restaurants, dairy outlets and bakeries contribute to the town's food culture. These businesses serve everyday meals, refreshments, dairy products and special occasions.",
    examples: [
      "Hotel Raysab Palace",
      "Madhuvan Dairy",
      "Local tea and snack outlets",
    ],
  },
  {
    number: "05",
    icon: "🏠",
    title: "Hardware & Building Materials",
    description:
      "Building material suppliers and hardware shops support home construction, repair, renovation and other property-related requirements.",
    examples: [
      "A+ Building Material's",
      "Agrawal Home Center",
      "Other local hardware retailers",
    ],
  },
  {
    number: "06",
    icon: "🔧",
    title: "Automotive & Local Services",
    description:
      "Vehicle-related businesses and service providers are part of the wider local economy. They help residents access automotive products and other practical services.",
    examples: [
      "Jattari Auto Sales",
      "Local vehicle-related businesses",
      "Repair and maintenance services",
    ],
  },
];

const localRoads = [
  {
    name: "Aligarh–Palwal Road",
    detail:
      "An important road reference for local businesses, shopping and movement through the wider Jattari area.",
  },
  {
    name: "Pisawa–Jattari Road",
    detail:
      "Associated with clothing, grocery and other retail business listings.",
  },
  {
    name: "Khair–Aligarh Road",
    detail:
      "A useful regional road connection for understanding access between Jattari and nearby settlements.",
  },
  {
    name: "Jartauli Road",
    detail:
      "Another local road reference where business and everyday service listings can be found.",
  },
  {
    name: "Usarah Road",
    detail:
      "A local area reference associated with retail and everyday shopping listings.",
  },
];

const lifestyleMoments = [
  {
    number: "01",
    title: "Morning in Jattari",
    description:
      "The morning routine of a town revolves around daily errands, opening shops, household purchases, work and movement between neighbourhoods and nearby settlements.",
    icon: "🌅",
  },
  {
    number: "02",
    title: "A Day at the Market",
    description:
      "Markets bring together shopkeepers, customers, local services and small businesses. Shopping is also an opportunity for everyday conversations and community interaction.",
    icon: "🏪",
  },
  {
    number: "03",
    title: "Family & Celebrations",
    description:
      "Family occasions, weddings, festivals and seasonal celebrations create additional shopping needs for clothing, food, gifts and household items.",
    icon: "🎉",
  },
  {
    number: "04",
    title: "Rural Connections",
    description:
      "Jattari's connection with nearby villages is an important part of its local identity. People travel between settlements for shopping, services, work and everyday requirements.",
    icon: "🌿",
  },
];

const marketTips = [
  "Ask shopkeepers about product availability before travelling for a specific item.",
  "Compare prices and check product quality before making a purchase.",
  "Confirm business opening hours, especially on holidays and festival days.",
  "Keep cash and digital payment options available.",
  "Ask local residents for directions to smaller shops and market lanes.",
  "Check transport availability before planning a visit from nearby villages.",
];

const businessExamples = [
  {
    name: "Super Bazar Canteen",
    type: "Grocery & General Store",
    area: "Pisawa–Jattari Road",
  },
  {
    name: "Apna Bazar",
    type: "Clothing & Family Retail",
    area: "Chota Chandni Chowk",
  },
  {
    name: "Poonam Enterprises",
    type: "Fertilizer Supplier",
    area: "Aligarh–Palwal Road",
  },
  {
    name: "Hotel Raysab Palace",
    type: "Restaurant",
    area: "Aligarh–Palwal Road",
  },
  {
    name: "Madhuvan Dairy",
    type: "Dairy & Bakery",
    area: "Jattari",
  },
  {
    name: "A+ Building Material's",
    type: "Building Materials",
    area: "Jattari",
  },
];

export default function LocalMarketsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
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
    <main className="markets-page min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
      <style jsx global>{`
        .markets-page [data-reveal] {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 750ms ease,
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .markets-page [data-reveal="left"] {
          transform: translateX(-45px);
        }

        .markets-page [data-reveal="right"] {
          transform: translateX(45px);
        }

        .markets-page [data-reveal="scale"] {
          transform: scale(0.94);
        }

        .markets-page [data-reveal].is-visible {
          opacity: 1;
          transform: translate(0) scale(1);
        }

        .markets-page .market-line {
          position: relative;
          overflow: hidden;
        }

        .markets-page .market-line::after {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          content: "";
          background: #d58a28;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 600ms ease;
        }

        .markets-page .market-line:hover::after {
          transform: scaleX(1);
        }

        .markets-page .image-zoom img {
          transition: transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .markets-page .image-zoom:hover img {
          transform: scale(1.07);
        }

        @media (prefers-reduced-motion: reduce) {
          .markets-page [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .markets-page .image-zoom img {
            transition: none;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        className="group relative flex min-h-[650px] items-center overflow-hidden bg-cover bg-center px-6 py-20 md:min-h-[720px] md:px-12"
        style={{
          backgroundImage: 'url("/images/market.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F0]/90 via-[#FFF9F0]/65 to-[#FFF9F0]/10" />

        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D58A28]/40 transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#0B5A49]/30 transition-transform duration-1000 group-hover:-rotate-12" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div
            data-reveal
            className="max-w-3xl rounded-2xl border border-white/50 bg-[#FFF9F0]/60 p-6 shadow-xl backdrop-blur-md sm:p-9 md:p-11"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#B9741C] sm:text-sm">
              Local Life · Shopping · Community
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#172B26] sm:text-5xl md:text-7xl">
              The Markets &amp;
              <span className="block text-[#0B5A49]">
                Lifestyle of Jattari
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#43564E] sm:text-base sm:leading-8 md:text-lg">
              Explore the everyday character of Jattari through its local
              markets, neighbourhood shops, agricultural connections, food
              culture, small businesses and the people who make the town
              what it is.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#market-areas"
                className="group/btn inline-flex items-center gap-3 rounded-xl bg-[#06483D] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg"
              >
                Discover Jattari Markets
                <span className="transition-transform duration-300 group-hover/btn:translate-x-2" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#daily-life"
                className="inline-flex items-center gap-3 rounded-xl border border-[#06483D]/30 bg-[#FFF9F0] px-6 py-3.5 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C]"
              >
                Explore Local Lifestyle
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#06483D]/15 pt-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#64736D]">
                  Location
                </p>
                <p className="mt-1 text-sm font-bold text-[#172B26]">
                  Jattari, Uttar Pradesh
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#64736D]">
                  Discover
                </p>
                <p className="mt-1 text-sm font-bold text-[#172B26]">
                  Markets &amp; Businesses
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#64736D]">
                  Experience
                </p>
                <p className="mt-1 text-sm font-bold text-[#172B26]">
                  Everyday Local Life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div data-reveal="left">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Understanding the Town
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl md:text-5xl">
              More than shopping. A town built around everyday connections.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-[#64736D] sm:text-base">
              <p>
                Local markets are an important part of Jattari's everyday
                identity. They connect households with groceries, clothing,
                food, agricultural supplies, construction materials and
                other essential products.
              </p>

              <p>
                The town's local economy also connects with surrounding
                villages and settlements. Residents may visit Jattari for
                shopping, work, services and other everyday requirements.
                This relationship between the town and its surrounding
                rural areas helps explain the role of its local markets.
              </p>

              <p>
                From small independent shops to food outlets and
                agriculture-related businesses, each part of the local
                economy contributes to the experience of living in Jattari.
              </p>
            </div>
          </div>

          <div data-reveal="right" className="relative">
            <div className="image-zoom overflow-hidden">
              <img
                src="/images/market.jpeg"
                alt="Local market atmosphere in Jattari"
                className="h-[390px] w-full object-cover sm:h-[470px]"
              />
            </div>

            <div className="relative -mt-12 ml-auto mr-4 max-w-[290px] border-l-4 border-[#D58A28] bg-[#06483D] p-6 text-white shadow-xl transition-transform duration-500 hover:-translate-y-2 sm:mr-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2AE45]">
                The Local Experience
              </p>
              <p className="mt-3 text-xl font-bold leading-snug">
                Where everyday needs meet community life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET AREAS */}
      <section
        id="market-areas"
        className="scroll-mt-24 bg-[#F3EBDD] px-6 py-16 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
                Explore the Shopping Areas
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#172B26] sm:text-4xl md:text-5xl">
                Get to know Jattari's markets
              </h2>
              <p className="mt-4 text-sm leading-8 text-[#64736D] sm:text-base">
                Different roads and market pockets contribute to local
                shopping. Here are some market locations and business
                areas mentioned in online local listings.
              </p>
            </div>

            <span className="text-sm font-semibold text-[#0B5A49]">
              Local Market Guide · 01—04
            </span>
          </div>

          <div className="mt-12 border-t border-[#06483D]/20">
            {marketAreas.map((market, index) => (
              <article
                key={market.number}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={{ transitionDelay: `${index * 100}ms` }}
                className="market-line group grid gap-5 border-b border-[#06483D]/20 py-7 transition-all duration-500 hover:bg-[#FFF9F0]/70 sm:grid-cols-[90px_1fr_220px] sm:items-center sm:gap-8 sm:px-5"
              >
                <span className="text-3xl font-light text-[#B9741C] transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110">
                  {market.number}
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B5A49]">
                    {market.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#B9741C] sm:text-2xl">
                    {market.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#64736D]">
                    {market.description}
                  </p>
                </div>

                <div className="border-l-2 border-[#D58A28] pl-4 transition-all duration-300 group-hover:border-l-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B9741C]">
                    Area Reference
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#172B26]">
                    {market.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p data-reveal className="mt-6 text-xs leading-6 text-[#64736D]">
            Market names and locations are based on available online
            listings. This is not a complete official market directory.
            Local business locations should be confirmed before visiting.
          </p>
        </div>
      </section>

      {/* SHOPPING CATEGORIES */}
      <section className="bg-[#FFF9F0] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Inside the Local Economy
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#172B26] sm:text-4xl md:text-5xl">
              What can you find in Jattari?
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              The local business ecosystem covers more than everyday
              shopping. Explore different categories that support
              households, farmers, businesses and property owners.
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {shoppingCategories.map((item, index) => (
              <article
                key={item.number}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={{ transitionDelay: `${(index % 3) * 110}ms` }}
                className="group border-t border-[#06483D]/20 py-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D58A28] sm:py-9"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-block text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-[#B9741C] transition-transform duration-300 group-hover:translate-x-1">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64736D] sm:text-base">
                  {item.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0B5A49]">
                    Local examples in online listings
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.examples.map((example) => (
                      <li
                        key={example}
                        className="border border-[#06483D]/15 bg-[#F3EBDD] px-3 py-2 text-xs font-medium text-[#43564E] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:bg-white hover:text-[#0B5A49]"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AGRICULTURE FEATURE */}
      <section className="relative overflow-hidden bg-[#06483D] px-6 py-16 text-white md:px-12 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#F2AE45]/20" />

        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div data-reveal="left">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2AE45] sm:text-sm">
              Agriculture &amp; Rural Connections
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              The connection between the town and its fields.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/80 sm:text-base">
              Jattari's identity is connected with the wider agricultural
              landscape of western Uttar Pradesh. Farming-related shops
              and suppliers serve an important practical role by providing
              access to agricultural inputs and products.
            </p>

            <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
              Seed and fertiliser shops are examples of how local trade
              supports farming activities. Seasonal requirements,
              agricultural work and connections with nearby villages
              contribute to the relationship between rural life and the
              town's markets.
            </p>

            <div className="mt-8 border-l-2 border-[#D58A28] pl-5 transition-all duration-500 hover:translate-x-2">
              <p className="text-sm font-semibold text-[#F2AE45]">
                Local business examples
              </p>
              <p className="mt-2 text-sm leading-7 text-white/80">
                Poonam Enterprises, Kumar Agriculture Store and Pandit Ji
                Beej Bhandar appear in available local business listings.
              </p>
            </div>
          </div>

          <div data-reveal="right" className="image-zoom relative overflow-hidden">
            <img
              src="/images/market.jpeg"
              alt="Local commerce and agricultural connections around Jattari"
              className="h-[350px] w-full object-cover sm:h-[440px]"
            />
            <div className="absolute bottom-5 left-5 bg-[#FFF9F0] px-5 py-4 text-[#172B26] shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#B9741C]">
                Local Economy
              </p>
              <p className="mt-1 text-lg font-bold">
                Farming · Trade · Community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADS & CONNECTIVITY */}
      <section className="bg-[#F3EBDD] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div data-reveal="left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
                Roads &amp; Local Access
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
                The roads that connect local life
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
                Road connections help residents access shops, workplaces,
                services and nearby settlements. These road names also
                provide useful reference points when exploring Jattari.
              </p>
            </div>

            <div className="border-t border-[#06483D]/20">
              {localRoads.map((road, index) => (
                <div
                  key={road.name}
                  data-reveal="right"
                  style={{ transitionDelay: `${index * 90}ms` }}
                  className="group grid gap-2 border-b border-[#06483D]/20 py-5 transition-all duration-300 hover:bg-[#FFF9F0]/60 sm:grid-cols-[45px_1fr] sm:px-4"
                >
                  <span className="text-sm font-bold text-[#B9741C] transition-transform duration-300 group-hover:translate-x-2">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#B9741C]">
                      {road.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#64736D]">
                      {road.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DAILY LIFESTYLE */}
      <section
        id="daily-life"
        className="scroll-mt-24 bg-[#FFF9F0] px-6 py-16 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Life in Jattari
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#172B26] sm:text-4xl md:text-5xl">
              A closer look at everyday life
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              A town is not defined only by its shops and roads. Its
              character also comes from everyday routines, family
              relationships, local traditions and the connections
              between neighbourhoods.
            </p>
          </div>

          <div className="mt-12 grid gap-0 md:grid-cols-2">
            {lifestyleMoments.map((moment, index) => (
              <article
                key={moment.number}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group border-t border-[#06483D]/20 py-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28] sm:py-10 ${
                  index % 2 === 0 ? "md:mr-8 md:pr-8" : "md:ml-8 md:pl-8"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-block text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                    {moment.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-[#B9741C]">
                    {moment.number}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49] sm:text-2xl">
                  {moment.title}
                </h3>
                <p className="mt-3 text-sm leading-8 text-[#64736D] sm:text-base">
                  {moment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS DIRECTORY */}
      <section className="bg-[#F3EBDD] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
                Local Business Guide
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#172B26] sm:text-4xl">
                Some local business references
              </h2>
              <p className="mt-4 text-sm leading-8 text-[#64736D] sm:text-base">
                These examples help visitors understand the variety of
                businesses listed in Jattari. They are not a verified
                complete directory.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0B5A49]">
              Local Listings
            </span>
          </div>

          <div className="mt-10 overflow-hidden border-t border-[#06483D]/20">
            {businessExamples.map((business, index) => (
              <div
                key={business.name}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
                className="group grid gap-2 border-b border-[#06483D]/20 py-5 transition-all duration-300 hover:bg-[#FFF9F0]/70 sm:grid-cols-[60px_1.2fr_1fr_1fr] sm:items-center sm:gap-5 sm:px-4"
              >
                <span className="text-sm font-bold text-[#B9741C]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-bold text-[#172B26] transition-colors duration-300 group-hover:text-[#B9741C]">
                  {business.name}
                </p>
                <p className="text-sm text-[#64736D]">
                  {business.type}
                </p>
                <p className="text-sm font-medium text-[#0B5A49]">
                  {business.area}
                </p>
              </div>
            ))}
          </div>

          <p data-reveal className="mt-5 text-xs leading-6 text-[#64736D]">
            Business names and categories are based on available online
            directory references. Current operating status, exact addresses,
            opening hours and product availability should be confirmed
            independently before visiting.
          </p>
        </div>
      </section>

      {/* VISITOR TIPS */}
      <section className="bg-[#FFF9F0] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div data-reveal="left">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              A Practical Guide
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
              A few things to know before exploring.
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              Whether you are a resident, a visitor or someone exploring
              Jattari for the first time, these simple tips can make local
              shopping easier.
            </p>
          </div>

          <div className="border-t border-[#06483D]/20">
            {marketTips.map((tip, index) => (
              <div
                key={tip}
                data-reveal="right"
                style={{ transitionDelay: `${index * 80}ms` }}
                className="group flex gap-4 border-b border-[#06483D]/15 py-5 transition-all duration-300 hover:translate-x-2 hover:bg-[#F3EBDD]/60"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#06483D] text-xs font-bold text-white transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#D58A28]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-[#43564E] sm:text-base">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="relative overflow-hidden bg-[#06483D] px-6 py-16 text-white md:px-12 md:py-20">
        <div className="pointer-events-none absolute -right-20 -bottom-40 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-6xl">
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2AE45] sm:text-sm">
              Continue Exploring
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              Discover more sides of Jattari.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <Link
              href="/explore/food"
              data-reveal="left"
              className="group border border-white/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F2AE45] hover:bg-white/5 hover:shadow-xl"
            >
              <span className="inline-block text-2xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                🍲
              </span>
              <h3 className="mt-4 text-xl font-bold">
                Food &amp; Local Eateries
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Discover food options, local eateries and everyday flavours.
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#F2AE45] transition-transform duration-300 group-hover:translate-x-2">
                Explore Food →
              </span>
            </Link>

            <Link
              href="/explore/travel-tips"
              data-reveal="scale"
              className="group border border-white/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F2AE45] hover:bg-white/5 hover:shadow-xl"
            >
              <span className="inline-block text-2xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                🧭
              </span>
              <h3 className="mt-4 text-xl font-bold">
                Travel Tips
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Prepare for your visit and explore the area with useful tips.
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#F2AE45] transition-transform duration-300 group-hover:translate-x-2">
                Plan Your Visit →
              </span>
            </Link>

            <Link
              href="/explore/history-culture"
              data-reveal="right"
              className="group border border-white/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#F2AE45] hover:bg-white/5 hover:shadow-xl"
            >
              <span className="inline-block text-2xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                🏛️
              </span>
              <h3 className="mt-4 text-xl font-bold">
                History &amp; Culture
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Learn about Jattari's history, heritage and community.
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#F2AE45] transition-transform duration-300 group-hover:translate-x-2">
                Discover History →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCES & DISCLAIMER */}
      <section className="bg-[#FFF9F0] px-6 py-8 md:px-12">
        <div data-reveal className="mx-auto max-w-6xl border-t border-[#06483D]/15 pt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B9741C]">
            Research &amp; Information Note
          </p>
          <p className="mt-3 text-xs leading-7 text-[#64736D]">
            This guide uses local business-directory references and
            location information as starting points for exploring Jattari.
            Business listings may change and should not be treated as an
            official or complete directory. Market history, weekly market
            schedules, business opening dates, agricultural production
            figures and current transport timings require further local
            verification.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold">
            <a
              href="https://aligarh.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5A49] underline underline-offset-4 transition-colors hover:text-[#B9741C]"
            >
              District Aligarh Official Website
            </a>
            <a
              href="https://www.justdial.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5A49] underline underline-offset-4 transition-colors hover:text-[#B9741C]"
            >
              Local Business Directory
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
