
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SuggestionForm from "@/components/SuggestionForm";

import {
  ArrowLeft,
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

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#DBEAFE]/70 via-white to-[#F5F7FA]" />

        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border border-blue-100 sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -right-8 -top-12 -z-10 h-52 w-52 rounded-full border border-blue-100/80 sm:h-72 sm:w-72" />

        <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-12 lg:pb-20">
          <Link
            href="/explore/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#4B5563] shadow-sm transition hover:border-[#2563EB]/30 hover:text-[#2563EB]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>

          <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[1fr_280px] lg:gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] sm:text-sm">
                <HelpCircle className="h-4 w-4" />
                Your Questions, Answered
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#1F2937] sm:text-5xl md:text-6xl lg:text-7xl">
                Everything you
                <span className="block text-[#2563EB]">
                  need to know.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#6B7280] sm:text-lg sm:leading-8">
                Looking for information about Jattari? Find helpful answers
                about local places, culture, travel, facilities and using
                our neighbourhood guide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#4B5563]">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
                  Quick answers
                </span>
                <span className="inline-flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#2563EB]" />
                  Local information
                </span>
              </div>
            </div>

            <div className="hidden md:flex md:justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-[2rem] border border-[#DBEAFE] bg-white shadow-[0_20px_60px_rgba(37,99,235,0.10)] lg:h-64 lg:w-64">
                <div className="absolute inset-5 rounded-[1.5rem] border border-dashed border-[#BFDBFE]" />
                <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-[#2563EB] text-white shadow-lg shadow-blue-200 lg:h-32 lg:w-32">
                  <MessageCircle className="h-14 w-14 lg:h-16 lg:w-16" strokeWidth={1.5} />
                </div>
                <span className="absolute right-5 top-7 flex h-10 w-10 items-center justify-center rounded-xl border border-[#DBEAFE] bg-[#EFF6FF] text-[#2563EB]">
                  <BookOpen className="h-5 w-5" />
                </span>
                <span className="absolute bottom-7 left-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#DBEAFE] bg-[#EFF6FF] text-[#2563EB]">
                  <MapPin className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-14">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              FAQ DIRECTORY
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Find your answer
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#6B7280]">
              Choose a topic or search for a specific question.
            </p>

            <div className="mt-6 space-y-2">
              {categories.map((category) => {
                const selected = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={selected}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition ${
                      selected
                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-200"
                        : "border border-transparent bg-white text-[#4B5563] hover:border-[#DBEAFE] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                    }`}
                  >
                    <span>{category}</span>
                    {selected && <ArrowRight className="h-4 w-4 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-[#DBEAFE] bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold">Still need help?</h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                Send us a question or suggestion using the contact form.
              </p>
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] transition hover:gap-3"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>

          {/* Questions */}
          <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                  COMMON QUESTIONS
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Frequently asked questions
                </h2>
              </div>

              <span className="text-sm font-medium text-[#6B7280]">
                {filteredFaqs.length}{" "}
                {filteredFaqs.length === 1 ? "question" : "questions"}
              </span>
            </div>

            <label className="mt-6 flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3.5 shadow-sm transition focus-within:border-[#93C5FD] focus-within:ring-4 focus-within:ring-[#DBEAFE]/70">
              <Search className="h-5 w-5 shrink-0 text-[#9CA3AF]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Search your question..."
                aria-label="Search frequently asked questions"
                className="w-full bg-transparent text-sm text-[#1F2937] outline-none placeholder:text-[#9CA3AF]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="rounded-full p-1 text-[#6B7280] hover:bg-[#F3F4F6]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>

            <div className="mt-5 space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <article
                    key={faq.q}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.07)]"
                        : "border-[#E5E7EB] hover:border-[#BFDBFE] hover:shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start gap-4 px-4 py-5 text-left sm:items-center sm:px-6 sm:py-5"
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition ${
                          isOpen
                            ? "bg-[#2563EB] text-white"
                            : "bg-[#EFF6FF] text-[#2563EB]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-bold leading-6 text-[#1F2937] sm:text-base">
                          {faq.q}
                        </span>
                        <span className="mt-1.5 block text-xs font-semibold text-[#6B7280]">
                          {faq.category}
                        </span>
                      </span>

                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "rotate-180 bg-[#DBEAFE] text-[#2563EB]"
                            : "bg-[#F3F4F6] text-[#6B7280]"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={answerId}
                        className="border-t border-[#E5E7EB] px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pl-[4.75rem]"
                      >
                        <p className="text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="mt-5 rounded-2xl border border-dashed border-[#BFDBFE] bg-white px-5 py-12 text-center">
                <Search className="mx-auto h-9 w-9 text-[#93C5FD]" />
                <h3 className="mt-4 text-lg font-bold">
                  No matching questions
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Try another search term or select a different category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All Questions");
                    setOpenIndex(null);
                  }}
                  className="mt-5 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
                >
                  Clear filters
                </button>
              </div>
            )}

            <p className="mt-5 text-xs leading-5 text-[#6B7280]">
              Please independently verify time-sensitive details such as
              opening hours, travel arrangements and service availability.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom contact banner */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1E40AF] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -right-4 -top-12 h-44 w-44 rounded-full border border-white/15" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                WE ARE HERE TO HELP
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
                Didn&apos;t find what you were looking for?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                Have a question, suggestion or correction about Jattari?
                Share it with us through the contact form.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1D4ED8] transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E40AF]"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
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
            className="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-2xl sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                  GET IN TOUCH
                </p>
                <h2
                  id="contact-modal-title"
                  className="mt-2 text-2xl font-extrabold text-[#1F2937] sm:text-3xl"
                >
                  Contact Jattari Explorer
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Share your question, suggestion or feedback.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact form"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-xl text-[#6B7280] transition hover:bg-[#F5F7FA] hover:text-[#1F2937]"
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
