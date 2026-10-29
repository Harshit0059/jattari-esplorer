"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937]">
      <section className="bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#2563EB] px-6 py-20 text-white md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/explore/faq"
            className="text-sm text-[#DBEAFE] transition hover:text-white"
          >
            ← Frequently Asked Questions
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#DBEAFE]">
            We Would Love to Hear From You
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Contact &amp; Feedback
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-white/85">
            Have a suggestion, correction, or question about this Jattari guide?
            Use the form to prepare your feedback.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-12 md:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2563EB]">
            Get in Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Help us improve this guide
          </h2>

          <p className="mt-5 leading-8 text-[#6B7280]">
            Local knowledge helps make a community guide more useful. Share
            feedback about information that needs clarification or topics you
            would like to see covered.
          </p>

          <div className="mt-8 space-y-4">
            {[
              ["✉", "Questions", "Ask about the information on this website."],
              ["↗", "Suggestions", "Suggest a topic or page to improve."],
              ["✓", "Corrections", "Point out details that may need checking."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] text-xl text-[#2563EB]">
                  {icon}
                </span>

                <div>
                  <h3 className="font-bold text-[#1F2937]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-9"
        >
          <h2 className="text-2xl font-bold">Send Your Feedback</h2>

          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            Fill in the details below.
          </p>

          <label
            className="mt-6 block text-sm font-semibold"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
            placeholder="Enter your name"
          />

          <label
            className="mt-5 block text-sm font-semibold"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
            placeholder="you@example.com"
          />

          <label
            className="mt-5 block text-sm font-semibold"
            htmlFor="topic"
          >
            Feedback topic
          </label>
          <select
            id="topic"
            name="topic"
            className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
          >
            <option>General question</option>
            <option>Suggestion</option>
            <option>Correction</option>
            <option>Places to visit</option>
            <option>Other</option>
          </select>

          <label
            className="mt-5 block text-sm font-semibold"
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
            placeholder="Write your message..."
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#2563EB] px-6 py-4 font-semibold text-white transition hover:bg-[#1D4ED8]"
          >
            Prepare Feedback →
          </button>

          {submitted && (
            <p
              role="status"
              className="mt-4 rounded-xl border border-[#BFDBFE] bg-[#DBEAFE] p-4 text-sm leading-6 text-[#1F2937]"
            >
              Your form is filled, but this website has not sent your message.
              Connect a backend or email service to enable actual submission.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}