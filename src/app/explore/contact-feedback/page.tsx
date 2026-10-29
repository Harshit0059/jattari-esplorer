
"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const feedbackTopics = [
  "General Feedback",
  "Website Suggestion",
  "Incorrect Information",
  "Local Place or Business",
  "Education or Healthcare",
  "Real Estate Information",
  "News or Local Announcement",
  "Other Question",
];

const faqs = [
  {
    question: "What can I share through this form?",
    answer:
      "You can share website suggestions, corrections, information about local places, questions, or ideas that could make Jattari Explorer more helpful.",
  },
  {
    question: "How should I report incorrect information?",
    answer:
      "Select Incorrect Information as the topic and describe the page or detail that needs checking. Include enough context to help identify the information.",
  },
  {
    question: "Can I suggest a local business or place?",
    answer:
      "Yes. Select Local Place or Business and provide the place name and relevant details in your message.",
  },
  {
    question: "Will my feedback be sent automatically?",
    answer:
      "Not yet. This page currently demonstrates the form interface only. A backend or form service must be connected before messages can be delivered or stored.",
  },
];

export default function ContactFeedbackPage() {
  const [topic, setTopic] = useState("General Feedback");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FA] text-[#1F2937]">
      {/* Page Hero */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -bottom-32 left-[25%] h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <MessageSquareText size={16} />
              Contact & Feedback
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Make{" "}
              <span className="text-blue-600">Jattari Explorer</span> Better
              Together
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg">
              Your ideas, questions, and local knowledge matter. Help us make
              this guide more useful for people discovering Jattari and its
              neighbourhood.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#feedback-form"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Share Feedback
                <ArrowRight size={18} />
              </a>

              <Link
                href="/explore/faq"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 font-semibold text-[#1F2937] transition hover:border-blue-200 hover:bg-blue-50"
              >
                Read FAQs
                <MessageCircle size={18} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Suggestions welcome
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="text-blue-600" />
                Share only necessary details
              </span>
            </div>
          </div>

          {/* Hero Illustration Panel */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/60 blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    Your Voice Matters
                  </p>
                  <h2 className="mt-2 text-2xl font-bold leading-snug">
                    Every suggestion helps us improve.
                  </h2>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Sparkles size={24} />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-[#F5F7FA] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <MessageSquareText size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Share an idea</h3>
                    <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                      Tell us what would improve your experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-[#F5F7FA] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Suggest a local place</h3>
                    <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                      Help people discover places around Jattari.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-[#F5F7FA] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Report a correction</h3>
                    <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                      Point out information that may need checking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm leading-6 text-blue-800">
                  Please do not include passwords, financial details, or other
                  sensitive personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Information */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            How You Can Help
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What Would You Like to Share?
          </h2>
          <p className="mt-4 leading-7 text-[#6B7280]">
            Choose the kind of feedback you want to provide, then tell us the
            details using the form below.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <MessageCircle size={23} />
            </div>
            <h3 className="mt-5 text-xl font-bold">Suggestions & Ideas</h3>
            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Recommend useful features, topics, or improvements for the
              website.
            </p>
            <button
              type="button"
              onClick={() => {
                setTopic("Website Suggestion");
                document
                  .getElementById("feedback-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Suggest an idea <ArrowRight size={16} />
            </button>
          </div>

          <div className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <ShieldCheck size={23} />
            </div>
            <h3 className="mt-5 text-xl font-bold">Corrections & Updates</h3>
            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Let us know if a page contains details that should be reviewed or
              updated.
            </p>
            <button
              type="button"
              onClick={() => {
                setTopic("Incorrect Information");
                document
                  .getElementById("feedback-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Report a correction <ArrowRight size={16} />
            </button>
          </div>

          <div className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <MapPin size={23} />
            </div>
            <h3 className="mt-5 text-xl font-bold">Local Places</h3>
            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Share information about local markets, facilities, businesses,
              or places worth exploring.
            </p>
            <button
              type="button"
              onClick={() => {
                setTopic("Local Place or Business");
                document
                  .getElementById("feedback-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Suggest a place <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="feedback-form"
        className="scroll-mt-24 border-y border-[#E5E7EB] bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Get Involved
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Send Us Your Feedback
            </h2>
            <p className="mt-5 leading-8 text-[#6B7280]">
              Complete the form with your message. Clear details help explain
              your suggestion or question.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={21} />
                </div>
                <div>
                  <h3 className="font-bold">Clear communication</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                    Add a useful subject and enough context to your message.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <h3 className="font-bold">Protect your information</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                    Only enter details that are needed to explain your
                    feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-[#F5F7FA] p-5 sm:p-8 lg:p-9">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={35} />
                </div>
                <h3 className="mt-6 text-2xl font-bold">
                  Thank You for Your Feedback!
                </h3>
                <p className="mt-3 max-w-md leading-7 text-[#6B7280]">
                  The form has been validated in this demo. Your message has
                  not been sent or saved because a submission service is not
                  connected yet.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Write Another Message <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h3 className="text-2xl font-bold">Feedback Form</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="feedback-name"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Full Name *
                      </label>
                      <input
                        id="feedback-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        placeholder="Your name"
                        className="min-h-[52px] w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="feedback-email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email Address *
                      </label>
                      <input
                        id="feedback-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        placeholder="you@example.com"
                        className="min-h-[52px] w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="feedback-topic"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Feedback Topic *
                    </label>
                    <div className="relative">
                      <select
                        id="feedback-topic"
                        name="topic"
                        value={topic}
                        onChange={(event) => setTopic(event.target.value)}
                        required
                        className="min-h-[52px] w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 pr-11 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        {feedbackTopics.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="feedback-message"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="feedback-message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={6}
                      placeholder="Tell us what you would like to share..."
                      className="w-full resize-y rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base leading-7 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                    <p className="mt-2 text-xs leading-5 text-[#6B7280]">
                      Minimum 10 characters, maximum 2,000 characters.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    Submit Feedback
                    <Send size={18} />
                  </button>

                  <p className="text-center text-xs leading-5 text-[#6B7280]">
                    Demo form only. Your message will not be sent or stored.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <MessageCircle size={16} />
            Helpful Information
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Common Questions
          </h2>
          <p className="mt-4 leading-7 text-[#6B7280]">
            Find quick answers about sharing feedback with Jattari Explorer.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? "border-blue-200 shadow-[0_8px_25px_rgba(15,23,42,0.05)]"
                    : "border-[#E5E7EB]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold leading-7 sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-blue-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6">
                    <p className="border-t border-[#E5E7EB] pt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/explore/faq"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 font-semibold transition hover:border-blue-200 hover:bg-blue-50"
          >
            Visit All FAQs <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <h2 className="text-2xl font-bold">
              Keep Exploring Jattari
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-[#6B7280]">
              Discover local places, history, culture, markets, and useful
              information about the area.
            </p>
          </div>

          <Link
            href="/explore"
            className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Explore Jattari <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
