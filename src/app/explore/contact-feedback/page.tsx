"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  ClipboardCheck,
  Compass,
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

const feedbackOptions = [
  {
    title: "Suggestions & Ideas",
    description:
      "Recommend useful features, topics or improvements that can make Jattari Explorer better.",
    topic: "Website Suggestion",
    icon: Lightbulb,
    number: "01",
    link: "Share an idea",
  },
  {
    title: "Corrections & Updates",
    description:
      "Help us review information that may be incomplete, outdated or incorrect.",
    topic: "Incorrect Information",
    icon: ClipboardCheck,
    number: "02",
    link: "Report a correction",
  },
  {
    title: "Local Places",
    description:
      "Suggest markets, businesses, facilities and interesting places around Jattari.",
    topic: "Local Place or Business",
    icon: MapPin,
    number: "03",
    link: "Suggest a place",
  },
];

const faqs = [
  {
    question: "What can I share through this form?",
    answer:
      "You can share website suggestions, corrections, information about local places, questions or ideas that could make Jattari Explorer more helpful.",
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

const reveal =
  "reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none";

export default function ContactFeedbackPage() {
  const [topic, setTopic] = useState("General Feedback");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function selectFeedback(selectedTopic: string) {
    setTopic(selectedTopic);

    document
      .getElementById("feedback-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen scroll-smooth overflow-hidden bg-[#F4F8FA] text-[#10251F]">

      {/* HERO SECTION */}
      <section className="group/hero relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#F4F8FA] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[760px] md:px-12">
        <img
          src="/images/jattari.jpeg"
          alt="Jattari town overview"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-95 transition-transform duration-[12000ms] ease-out group-hover/hero:scale-105 motion-reduce:transition-none motion-reduce:group-hover/hero:scale-100"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-[#8FC8F1]/60 via-[#B7DDF4]/25 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 via-35% to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 hover:scale-125" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#10251F]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-28 pb-14 sm:px-8 sm:pt-32 sm:pb-18 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:pb-24">

          <div className={reveal}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D58A28]/30 bg-[#F4F8FA] px-4 py-2 text-sm font-semibold text-[#254C3C] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <MessageSquareText
                size={16}
                className="text-[#B9741C]"
              />
              Contact & Feedback
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-[#10251F] sm:text-5xl lg:text-6xl">
              Your Voice Can Make
              <span className="block text-[#254C3C]">
                Jattari Explorer Better.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#64736D] sm:text-lg">
              Have an idea, a question or useful local information to share?
              We welcome your suggestions and knowledge to help make this
              guide more meaningful for everyone exploring Jattari.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#feedback-form"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#D58A28] px-7 py-3 font-semibold text-white shadow-lg shadow-[#10251F]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#10251F]/20"
              >
                Share Your Feedback
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/explore/faq"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#D8CDBB] bg-[#F4F8FA] px-6 py-3 font-semibold text-[#10251F] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:bg-white hover:shadow-md"
              >
                Explore FAQs
                <MessageCircle
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-[#64736D]">
              <span className="inline-flex items-center gap-2 transition-colors hover:text-[#254C3C]">
                <CheckCircle2 size={17} className="text-[#B9741C]" />
                Suggestions welcome
              </span>

              <span className="inline-flex items-center gap-2 transition-colors hover:text-[#254C3C]">
                <ShieldCheck size={17} className="text-[#B9741C]" />
                Share only necessary details
              </span>
            </div>
          </div>

          {/* HERO VISUAL PANEL */}
          <div className={`relative mx-auto w-full max-w-md ${reveal}`}>
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D58A28]/10 blur-2xl transition-all duration-700 hover:bg-[#D58A28]/20" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#E7DCCB] bg-[#F4F8FA] p-6 shadow-[0_25px_70px_rgba(6,72,61,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(6,72,61,0.16)] sm:p-8">

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#B9741C]">
                    Your Voice Matters
                  </p>

                  <h2 className="mt-3 text-2xl font-bold leading-snug text-[#10251F] sm:text-3xl">
                    Every idea adds value to our community.
                  </h2>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#10251F] text-[#EAF2F6] transition-all duration-500 hover:rotate-12 hover:scale-110">
                  <Sparkles size={26} />
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="group flex items-center gap-4 rounded-2xl border border-[#EAE0D2] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28]/50 hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF2F6] text-[#254C3C] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#10251F] group-hover:text-white">
                    <Lightbulb size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#10251F]">
                      Share an idea
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#64736D]">
                      Tell us what could improve your experience.
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-2xl border border-[#EAE0D2] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28]/50 hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF2F6] text-[#254C3C] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#10251F] group-hover:text-white">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#10251F]">
                      Suggest a local place
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#64736D]">
                      Help others discover places around Jattari.
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-2xl border border-[#EAE0D2] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28]/50 hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF2F6] text-[#254C3C] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#10251F] group-hover:text-white">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#10251F]">
                      Report a correction
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#64736D]">
                      Point out details that may need checking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#D58A28]/25 bg-[#EAF2F6] p-4 transition-colors duration-300 hover:border-[#D58A28]/60">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#B9741C]"
                />

                <p className="text-sm leading-6 text-[#64736D]">
                  Please do not include passwords, financial details or other
                  sensitive personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEEDBACK OPTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className={`mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end ${reveal}`}>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B9741C]">
              Be a Part of the Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#10251F] sm:text-4xl">
              What Would You Like to Share?
            </h2>

            <p className="mt-4 leading-8 text-[#64736D]">
              Choose a topic below to get started. Your contribution can help
              us make local information more useful and accurate.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-sm font-semibold text-[#254C3C] md:flex">
            <Compass size={19} className="text-[#B9741C]" />
            Your local knowledge matters
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {feedbackOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`group relative overflow-hidden rounded-2xl border border-[#E7DCCB] bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D58A28]/60 hover:shadow-[0_18px_40px_rgba(6,72,61,0.10)] sm:p-7 ${reveal}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.15em] text-[#B9741C]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2F6] text-[#254C3C] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#10251F] group-hover:text-white">
                    <Icon size={23} />
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#10251F] transition-colors duration-300 group-hover:text-[#254C3C]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#64736D]">
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={() => selectFeedback(item.topic)}
                  className="group/link relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#254C3C] transition-all duration-300 hover:gap-3 hover:text-[#B9741C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
                >
                  {item.link}
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </button>

                <div className="pointer-events-none absolute -bottom-12 -right-10 h-28 w-28 rounded-full border-[18px] border-[#EAF2F6]/70 transition-transform duration-500 group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </section>

      {/* FEEDBACK FORM */}
      <section
        id="feedback-form"
        className="scroll-mt-24 border-y border-[#E7DCCB] bg-[#EAF2F6]"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-12">

          <div className={`lg:sticky lg:top-28 ${reveal}`}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B9741C]">
              Get Involved
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#10251F] sm:text-4xl">
              Let&apos;s Start a Conversation.
            </h2>

            <p className="mt-5 leading-8 text-[#64736D]">
              Whether you want to suggest an improvement, share local
              information or report a correction, use the form to tell us
              about it.
            </p>

            <div className="mt-9 space-y-6">
              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10251F] text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <MessageSquareText size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#10251F]">
                    Clear communication
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-[#64736D]">
                    Add a useful subject and enough context to explain your
                    message.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10251F] text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#10251F]">
                    Protect your information
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-[#64736D]">
                    Only enter details that are needed to explain your
                    feedback.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#D58A28]/30 bg-[#F4F8FA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold leading-7 text-[#254C3C]">
                  Your feedback helps us keep Jattari Explorer informative,
                  relevant and community-focused.
                </p>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className={`rounded-[2rem] border border-[#E7DCCB] bg-[#F4F8FA] p-5 shadow-[0_20px_60px_rgba(6,72,61,0.07)] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(6,72,61,0.12)] sm:p-8 lg:p-10 ${reveal}`}>

            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center animate-in">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E6F0E9] text-[#254C3C] transition-transform duration-500 hover:scale-110">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#10251F] sm:text-3xl">
                  Thank You for Your Feedback!
                </h3>

                <p className="mt-4 max-w-md leading-8 text-[#64736D]">
                  The form has been validated in this demo. Your message has
                  not been sent or saved because a submission service is not
                  connected yet.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="group mt-8 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-lg"
                >
                  Write Another Message
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 border-b border-[#E7DCCB] pb-6">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#B9741C]">
                    We&apos;re Listening
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#10251F] sm:text-3xl">
                    Feedback Form
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#64736D]">
                    Fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="group">
                      <label
                        htmlFor="feedback-name"
                        className="mb-2 block text-sm font-bold text-[#10251F]"
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
                        placeholder="Enter your name"
                        className="min-h-[54px] w-full rounded-xl border border-[#DDD2C1] bg-white px-4 py-3 text-base text-[#10251F] outline-none transition-all duration-300 placeholder:text-[#9A9F99] hover:border-[#C5B69F] focus:border-[#254C3C] focus:ring-4 focus:ring-[#10251F]/10"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="feedback-email"
                        className="mb-2 block text-sm font-bold text-[#10251F]"
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
                        className="min-h-[54px] w-full rounded-xl border border-[#DDD2C1] bg-white px-4 py-3 text-base text-[#10251F] outline-none transition-all duration-300 placeholder:text-[#9A9F99] hover:border-[#C5B69F] focus:border-[#254C3C] focus:ring-4 focus:ring-[#10251F]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="feedback-topic"
                      className="mb-2 block text-sm font-bold text-[#10251F]"
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
                        className="min-h-[54px] w-full appearance-none rounded-xl border border-[#DDD2C1] bg-white px-4 py-3 pr-11 text-base text-[#10251F] outline-none transition-all duration-300 hover:border-[#C5B69F] focus:border-[#254C3C] focus:ring-4 focus:ring-[#10251F]/10"
                      >
                        {feedbackTopics.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={19}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64736D] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="feedback-message"
                      className="mb-2 block text-sm font-bold text-[#10251F]"
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
                      className="w-full resize-y rounded-xl border border-[#DDD2C1] bg-white px-4 py-3 text-base leading-7 text-[#10251F] outline-none transition-all duration-300 placeholder:text-[#9A9F99] hover:border-[#C5B69F] focus:border-[#254C3C] focus:ring-4 focus:ring-[#10251F]/10"
                    />

                    <p className="mt-2 text-xs leading-5 text-[#64736D]">
                      Minimum 10 characters, maximum 2,000 characters.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3 font-bold text-white shadow-lg shadow-[#10251F]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#10251F]/20 active:translate-y-0"
                  >
                    Submit Feedback
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <p className="text-center text-xs leading-6 text-[#64736D]">
                    Demo form only. Your message will not be sent or stored.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className={`mx-auto mb-10 max-w-2xl text-center ${reveal}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D58A28]/30 bg-[#EAF2F6] px-4 py-2 text-sm font-bold text-[#254C3C] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <MessageCircle size={16} className="text-[#B9741C]" />
            Helpful Information
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#10251F] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 leading-8 text-[#64736D]">
            A few quick answers to help you share feedback with Jattari
            Explorer.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#D58A28]/60 shadow-[0_10px_30px_rgba(6,72,61,0.08)]"
                    : "border-[#E7DCCB] hover:-translate-y-0.5 hover:border-[#D8C5A7] hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-[#F4F8FA] sm:px-6"
                >
                  <span className="font-bold leading-7 text-[#10251F] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#10251F] text-white"
                        : "bg-[#EAF2F6] text-[#254C3C]"
                    }`}
                  >
                    <ChevronDown size={19} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6">
                      <p className="border-t border-[#E7DCCB] pt-4 text-sm leading-8 text-[#64736D] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-9 text-center ${reveal}`}>
          <Link
            href="/explore/faq"
            className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#D8CDBB] bg-white px-6 py-3 font-bold text-[#10251F] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:bg-[#EAF2F6] hover:shadow-md"
          >
            Visit All FAQs
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[#D8E5E8] bg-[#F4F8FA]">
        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[45px] border-white/5 transition-transform duration-1000 hover:scale-125" />
        <div className="pointer-events-none absolute -bottom-32 left-[30%] h-64 w-64 rounded-full border-[35px] border-[#D58A28]/10" />

        <div className={`relative mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-16 ${reveal}`}>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E6B86F]">
              Discover More
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#10251F] sm:text-3xl">
              Keep Exploring Jattari.
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#10251F] font-medium sm:text-base">
              Discover local places, history, culture, markets and useful
              information about the area.
            </p>
          </div>

          <Link
            href="/explore"
            className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D58A28] px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl"
          >
            Explore Jattari
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
