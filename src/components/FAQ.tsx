
"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Where is Jattari located?",
    answer:
      "Jattari is in the Khair area of Aligarh district, Uttar Pradesh, India.",
  },
  {
    question: "What information can I explore on this website?",
    answer:
      "You can explore information about Jattari, local facilities, connectivity, property research, the gallery, and local updates.",
  },
  {
    question: "How can I check routes to Jattari?",
    answer:
      "Use an up-to-date map service to check routes, travel times, and current road conditions from your starting point.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-soft-accent px-4 py-2 text-sm font-semibold text-primary">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Got questions about
            <span className="block text-primary">Jattari?</span>
          </h2>

          <p className="mt-4 leading-7 text-muted">
            Here are a few common questions. Visit our FAQ page for more answers.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>

                  <span className="text-xl text-primary" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-border px-5 py-4 sm:px-6">
                    <p className="text-sm leading-7 text-muted">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/explore/faq"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover"
          >
            View All FAQs
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
