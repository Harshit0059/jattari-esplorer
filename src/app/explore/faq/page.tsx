"use client";

import Link from "next/link";
import { useState } from "react";
import SuggestionForm from "@/components/SuggestionForm";

const faqs = [
  {
    q: "Where is Jattari located?",
    a: "Jattari is a town in Aligarh district, Uttar Pradesh, India.",
  },
  {
    q: "What can I explore on this website?",
    a: "You can explore information about Jattari, its lifestyle, culture, local markets, places, food, and travel tips.",
  },
  {
    q: "How can I learn about local places?",
    a: "Browse the attractions and places page, and confirm current details locally before planning your visit.",
  },
  {
    q: "Can I find local food and shopping information?",
    a: "Yes. Visit the Food & Local Eateries and Local Markets pages for introductory information.",
  },
  {
    q: "Are opening hours and travel details guaranteed to be current?",
    a: "Not necessarily. Opening hours, transport options, and local services can change, so verify them before travelling.",
  },
  {
    q: "How can I share feedback?",
    a: "Click Contact Us to open the contact form directly on this page and send your question or feedback.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-foreground">
      {/* HERO SECTION */}
      <section className="border-b border-border bg-white px-6 py-12 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/explore/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover"
          >
            <span aria-hidden="true">←</span>
            Gallery
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-primary sm:mt-10 sm:text-sm">
            Helpful Information
          </p>

          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
            Quick answers to common questions about exploring Jattari and
            using this guide.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-4xl bg-white px-6 py-10 sm:py-14 md:py-16">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
            FAQs
          </p>

          <h2 className="mt-2 text-2xl font-bold text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
            What would you like to know?
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={faq.q}
              className="overflow-hidden rounded-xl border border-border bg-white transition-shadow duration-300 hover:shadow-sm sm:rounded-2xl"
            >
              <button
                type="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold text-foreground transition hover:bg-background sm:gap-5 sm:p-5 md:p-6 md:text-base"
              >
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft-accent text-xl font-medium text-primary"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="border-t border-border px-4 py-4 text-sm leading-7 text-muted sm:px-5 sm:py-5 md:px-6"
                >
                  {faq.a}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* KEEP EXPLORING / CONTACT FORM POPUP */}
        <div className="mt-8 rounded-2xl border border-border bg-white p-5 sm:mt-10 sm:p-7 md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Keep Exploring
          </p>

          <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
            Have questions about Jattari?
          </h2>

          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
            Visit the FAQ section or share your feedback through our contact
            form. Click below to open the form without leaving this page.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
            <Link
              href="/explore/faq"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-background"
            >
              Read FAQs
            </Link>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Contact Us <span className="ml-2" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM MODAL */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setContactOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-white p-5 shadow-2xl sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Get in Touch
                </p>
                <h2
                  id="contact-modal-title"
                  className="mt-2 text-2xl font-bold text-foreground sm:text-3xl"
                >
                  Contact Jattari Explorer
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Share your question, suggestion, or feedback with us.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact form"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-xl text-muted transition hover:bg-background hover:text-foreground"
              >
                ×
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
