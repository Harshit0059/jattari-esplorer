"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SuggestionForm from "@/components/SuggestionForm";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Compass,
  HelpCircle,
  MapPin,
  MessageCircle,
  Search,
  X,
} from "lucide-react";

const categories = [
  "All Questions",
  "About Jattari",
  "Exploring",
  "Travel & Local Life",
  "Website Help",
] as const;

type Category = (typeof categories)[number];

const faqs: {
  q: string;
  a: string;
  category: Exclude<Category, "All Questions">;
}[] = [
  {
    q: "Where is Jattari located?",
    a: "Jattari is a town in Uttar Pradesh, India, in the Aligarh district. You can use the Location page to explore its location and learn about connectivity to nearby areas.",
    category: "About Jattari",
  },
  {
    q: "What can I explore on this website?",
    a: "This guide brings together information about Jattari, its history and culture, local markets, food, attractions, education, healthcare, real estate and local updates.",
    category: "About Jattari",
  },
  {
    q: "How can I find places to visit in Jattari?",
    a: "Visit the Attractions & Places to Visit page under Explore Jattari. Check local information before travelling, as access and opening hours may change.",
    category: "Exploring",
  },
  {
    q: "Where can I learn about Jattari's history and culture?",
    a: "Open the History & Culture page to explore introductory information about the area's traditions, heritage and community life.",
    category: "Exploring",
  },
  {
    q: "Can I find local food and shopping information?",
    a: "Yes. Visit the Food & Local Eateries and Local Markets pages for introductory information about local food and shopping options.",
    category: "Travel & Local Life",
  },
  {
    q: "Are opening hours and travel details always up to date?",
    a: "Not necessarily. Transport options, opening hours and local services can change. Confirm important details directly with the relevant local business or service before travelling.",
    category: "Travel & Local Life",
  },
  {
    q: "Where can I find schools, colleges and healthcare facilities?",
    a: "Use the Education and Health sections in the main navigation to explore information about schools, colleges, clinics, hospitals and other listed facilities. Confirm availability and details independently.",
    category: "Exploring",
  },
  {
    q: "Where can I read local announcements and development updates?",
    a: "Visit News & Updates to explore local announcements, development information and road and connectivity updates. Check the original source for confirmation of important updates.",
    category: "Exploring",
  },
  {
    q: "How can I share a suggestion or report incorrect information?",
    a: "Use the Contact Us button on this page to open the feedback form. Share the page or information you are referring to and explain the correction or suggestion.",
    category: "Website Help",
  },
  {
    q: "Does this website guarantee the availability of listed services or properties?",
    a: "No. Listings and introductory information should be independently verified. Contact the relevant provider or property representative to confirm availability, terms and current details.",
    category: "Website Help",
  },
];

const reveal =
  "reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Questions");

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.q.toLowerCase().includes(query) ||
        faq.a.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".reveal-on-scroll"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.remove("opacity-0", "translate-y-8");
        element.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  return (
    <main className="min-h-screen scroll-smooth overflow-hidden bg-[#FFF9F0] text-[#172B26]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-[#06483D]/10 bg-[#F3EBDD]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#D58A28]/20 transition-transform duration-1000 hover:scale-110"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-14 h-72 w-72 rounded-full border border-[#06483D]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#D58A28]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pb-24">
          <div className="mt-14 grid items-center gap-12 md:mt-16 md:grid-cols-[1fr_300px] lg:gap-20">

            <div className={reveal}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D58A28]/30 bg-[#FFF9F0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B9741C] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:text-sm">
                <HelpCircle className="h-4 w-4" />
                Your Questions, Answered
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#172B26] sm:text-5xl md:text-6xl lg:text-7xl">
                Everything you
                <span className="block text-[#0B5A49]">
                  need to know.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#64736D] sm:text-lg">
                Looking for information about Jattari? Find helpful answers
                about local places, culture, travel, facilities and using
                our neighbourhood guide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-semibold text-[#43564E]">
                <span className="inline-flex items-center gap-2 transition-colors hover:text-[#0B5A49]">
                  <CheckCircle2 className="h-4 w-4 text-[#B9741C]" />
                  Quick answers
                </span>

                <span className="inline-flex items-center gap-2 transition-colors hover:text-[#0B5A49]">
                  <Compass className="h-4 w-4 text-[#B9741C]" />
                  Local information
                </span>
              </div>
            </div>

            {/* FAQ DECORATIVE ILLUSTRATION */}
            <div className={`hidden justify-center md:flex ${reveal}`}>
              <div className="group relative flex h-64 w-64 items-center justify-center rounded-[2.5rem] border border-[#06483D]/15 bg-[#FFF9F0] shadow-[0_25px_70px_rgba(6,72,61,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(6,72,61,0.16)] lg:h-72 lg:w-72">
                <div className="absolute inset-5 rounded-[2rem] border border-dashed border-[#D58A28]/40 transition-transform duration-700 group-hover:rotate-6" />

                <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#06483D] text-[#FFF9F0] shadow-xl shadow-[#06483D]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 lg:h-36 lg:w-36">
                  <MessageCircle
                    className="h-16 w-16 transition-transform duration-500 group-hover:scale-110 lg:h-[72px] lg:w-[72px]"
                    strokeWidth={1.4}
                  />
                </div>

                <span className="absolute right-5 top-7 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D58A28]/30 bg-[#F3EBDD] text-[#B9741C] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-12">
                  <BookOpen className="h-5 w-5" />
                </span>

                <span className="absolute bottom-7 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#06483D]/15 bg-[#F3EBDD] text-[#06483D] transition-all duration-500 group-hover:translate-y-2 group-hover:-rotate-12">
                  <MapPin className="h-5 w-5" />
                </span>

                <span className="absolute -right-3 bottom-12 rounded-full bg-[#D58A28] px-4 py-2 text-xs font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  Jattari Guide
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">

          {/* SIDEBAR */}
          <aside className={`lg:sticky lg:top-28 ${reveal}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9741C]">
              FAQ DIRECTORY
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#172B26] sm:text-3xl">
              Find your answer
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#64736D]">
              Choose a topic or search for a specific question.
            </p>

            <div className="mt-6 space-y-2">
              {categories.map((category, index) => {
                const selected = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={selected}
                    style={{ transitionDelay: `${index * 35}ms` }}
                    className={`group flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 hover:translate-x-1 ${
                      selected
                        ? "bg-[#06483D] text-white shadow-lg shadow-[#06483D]/15"
                        : "border border-[#06483D]/10 bg-white text-[#43564E] hover:border-[#D58A28]/50 hover:bg-[#F3EBDD] hover:text-[#06483D]"
                    }`}
                  >
                    <span>{category}</span>

                    {selected && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#F2AE45] animate-in" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* HELP CARD */}
            <div className="group mt-8 border border-[#06483D]/15 bg-[#F3EBDD] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28]/50 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#06483D] text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <MessageCircle className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-bold text-[#172B26]">
                Still need help?
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#64736D]">
                Send us a question or suggestion using the contact form.
              </p>

              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="group/link mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:gap-3 hover:text-[#B9741C]"
              >
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </button>
            </div>
          </aside>

          {/* QUESTIONS AREA */}
          <div className={`min-w-0 ${reveal}`}>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9741C]">
                  COMMON QUESTIONS
                </p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#172B26] sm:text-3xl">
                  Frequently asked questions
                </h2>
              </div>

              <span className="rounded-full border border-[#D58A28]/25 bg-[#F3EBDD] px-4 py-2 text-sm font-semibold text-[#64736D] transition-all duration-300">
                {filteredFaqs.length}{" "}
                {filteredFaqs.length === 1 ? "question" : "questions"}
              </span>
            </div>

            {/* SEARCH */}
            <label className="mt-6 flex items-center gap-3 rounded-2xl border border-[#06483D]/15 bg-white px-4 py-4 shadow-sm transition-all duration-300 focus-within:border-[#D58A28] focus-within:shadow-md focus-within:ring-4 focus-within:ring-[#D58A28]/10 hover:border-[#D58A28]/50">
              <Search className="h-5 w-5 shrink-0 text-[#B9741C] transition-transform duration-300" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Search your question..."
                aria-label="Search frequently asked questions"
                className="w-full bg-transparent text-sm text-[#172B26] outline-none placeholder:text-[#9CA39B]"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setOpenIndex(null);
                  }}
                  aria-label="Clear search"
                  className="rounded-full p-1 text-[#64736D] transition-all duration-300 hover:rotate-90 hover:bg-[#F3EBDD] hover:text-[#06483D]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>

            {/* ACCORDION */}
            <div className="mt-6 space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <article
                    key={faq.q}
                    style={{ transitionDelay: `${Math.min(index * 35, 210)}ms` }}
                    className={`group overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-0.5 ${
                      isOpen
                        ? "border-[#D58A28]/60 shadow-[0_12px_35px_rgba(6,72,61,0.07)]"
                        : "border-[#06483D]/10 hover:border-[#D58A28]/50 hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start gap-4 px-4 py-5 text-left transition-colors duration-300 hover:bg-[#FFFDF8] sm:items-center sm:px-6 sm:py-6"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center text-xs font-extrabold transition-all duration-300 ${
                          isOpen
                            ? "scale-105 bg-[#06483D] text-[#F2AE45]"
                            : "bg-[#F3EBDD] text-[#B9741C] group-hover:bg-[#06483D] group-hover:text-white"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-bold leading-6 text-[#172B26] transition-colors duration-300 group-hover:text-[#0B5A49] sm:text-base">
                          {faq.q}
                        </span>

                        <span className="mt-1.5 block text-xs font-semibold text-[#B9741C]">
                          {faq.category}
                        </span>
                      </span>

                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#06483D] text-[#F2AE45]"
                            : "bg-[#F3EBDD] text-[#64736D] group-hover:bg-[#D58A28]/15"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>

                    <div
                      id={answerId}
                      aria-hidden={!isOpen}
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#06483D]/10 bg-[#FFFDF8] px-4 pb-6 pt-5 sm:px-6 sm:pl-[4.75rem]">
                          <p className="text-sm leading-8 text-[#64736D] sm:text-[15px]">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* EMPTY SEARCH RESULT */}
            {filteredFaqs.length === 0 && (
              <div className="mt-5 border border-dashed border-[#D58A28]/50 bg-white px-5 py-14 text-center animate-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3EBDD] text-[#B9741C]">
                  <Search className="h-9 w-9" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#172B26]">
                  No matching questions
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#64736D]">
                  Try another search term or select a different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All Questions");
                    setOpenIndex(null);
                  }}
                  className="mt-5 rounded-xl bg-[#06483D] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg"
                >
                  Clear filters
                </button>
              </div>
            )}

            <p className="mt-6 border-l-2 border-[#D58A28] pl-4 text-xs leading-6 text-[#64736D]">
              Please independently verify time-sensitive details such as
              opening hours, travel arrangements and service availability.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className={`relative mx-auto max-w-7xl overflow-hidden bg-[#06483D] px-6 py-11 shadow-[0_20px_60px_rgba(6,72,61,0.12)] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(6,72,61,0.20)] sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${reveal}`}>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/15 transition-transform duration-1000 hover:scale-125"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 h-44 w-44 rounded-full border border-[#D58A28]/30"
          />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2AE45]">
                WE ARE HERE TO HELP
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
                Didn&apos;t find what you were looking for?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
                Have a question, suggestion or correction about Jattari?
                Share it with us through the contact form.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-[#D58A28] px-6 py-3 text-sm font-bold text-[#172B26] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6A443] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:self-center"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#172B26]/70 p-4 backdrop-blur-sm animate-in"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setContactOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-[#D58A28]/20 bg-[#FFF9F0] p-5 shadow-2xl animate-in sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9741C]">
                  GET IN TOUCH
                </p>

                <h2
                  id="contact-modal-title"
                  className="mt-2 text-2xl font-extrabold text-[#172B26] sm:text-3xl"
                >
                  Contact Jattari Explorer
                </h2>

                <p className="mt-2 text-sm leading-7 text-[#64736D]">
                  Share your question, suggestion or feedback.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact form"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#06483D]/15 text-[#64736D] transition-all duration-300 hover:rotate-90 hover:bg-[#F3EBDD] hover:text-[#06483D]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div id="contact-form">
              <SuggestionForm />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}