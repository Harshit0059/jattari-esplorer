
"use client";

import {
  useEffect,
  useState,
  useRef,
  type FormEvent,
} from "react";

const companies = [
  {
    number: "01",
    title: "Anugrah Homes",
    description:
      "Explore residential plots and real estate investment opportunities.",
    website: "https://anugrahhomes.com/",
    featured: true,
  },
  {
    number: "02",
    title: "Skyline Aero Homes",
    description:
      "Discover property options and explore real estate opportunities.",
    website: "https://www.skylineaerohomes.com/",
    featured: true,
  },
  {
    number: "03",
    title: "Dreams N Realtors",
    description:
      "Explore property opportunities and investment options.",
  },
  {
    number: "04",
    title: "Jewar Lands",
    description:
      "Enquire about land and real estate investment opportunities.",
  },
  {
    number: "05",
    title: "Shiva Associates",
    description:
      "Discuss your property requirements and investment plans.",
  },
];

const propertyPoints = [
  {
    number: "01",
    title: "Understand the Location",
    description:
      "Research the area, access routes, and surrounding facilities before making a property decision.",
  },
  {
    number: "02",
    title: "Check the Documentation",
    description:
      "Verify ownership, land records, approvals, and applicable legal requirements independently.",
  },
  {
    number: "03",
    title: "Compare Your Options",
    description:
      "Compare prices, property details, connectivity, and long-term suitability before investing.",
  },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  investmentType: "Residential Plots",
  budget: "Not decided",
  message: "",
};

const revealClasses =
  "property-reveal translate-y-6 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted/70 hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/15";

export default function PropertyInvestment() {
  const [selectedCompany, setSelectedCompany] =
    useState<string | null>(null);

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Scroll reveal animation
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "#property .property-reveal"
    );

    const reveal = (section: HTMLElement) => {
      section.classList.remove("translate-y-6", "opacity-0");
      section.classList.add("translate-y-0", "opacity-100");
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      sections.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Modal keyboard and background scroll handling
  useEffect(() => {
    if (!selectedCompany) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting) {
        setSelectedCompany(null);
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusable =
          modalRef.current.querySelectorAll<HTMLElement>(
            'button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'
          );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const focusTimer = window.setTimeout(() => {
      modalRef.current
        ?.querySelector<HTMLElement>("input")
        ?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(focusTimer);

      previousFocusRef.current?.focus();
    };
  }, [selectedCompany, submitting]);

  function openForm(company: string) {
    setSelectedCompany(company);
    setForm(initialForm);
    setSuccess("");
    setError("");
  }

  function closeForm() {
    if (submitting) return;
    setSelectedCompany(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedCompany) return;

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/investment-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: selectedCompany,
          ...form,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to submit your inquiry. Please try again."
        );
      }

      setSuccess("Your inquiry has been submitted successfully!");
      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="property"
      className="overflow-hidden bg-background py-14 sm:py-20 lg:py-24"
    >
      <div className="container-site">

        {/* Editorial introduction */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          <div className={`${revealClasses} relative`}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Real Estate & Investment
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Make informed
              <span className="mt-2 block text-primary">
                property decisions
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Explore real estate investment options, understand the
              property market, and compare opportunities before making
              an investment decision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#investment-options"
                className="button-primary group"
              >
                Explore Opportunities

                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <span className="text-xs text-muted">
                Research before you invest
              </span>
            </div>

            {/* Decorative theme accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 left-0 h-px w-24 bg-accent/50"
            />
          </div>

          {/* Investment research panel */}
          <div
            className={`${revealClasses} relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8`}
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-soft-accent/70"
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Investment Guide
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                    Before You Invest
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    Important checks to include in your property research.
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-accent text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path
                      d="M4 19.5V8.5L12 4l8 4.5v11M8 19.5v-7h8v7M2.5 19.5h19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="mt-7 space-y-1">
                {propertyPoints.map((point, index) => (
                  <div
                    key={point.number}
                    className="group flex gap-4 rounded-xl px-3 py-4 transition-all duration-300 hover:bg-background"
                  >
                    <div className="flex shrink-0 flex-col items-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        {point.number}
                      </span>

                      {index !== propertyPoints.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="mt-2 h-full min-h-4 w-px bg-border"
                        />
                      )}
                    </div>

                    <div className="pb-1">
                      <h4 className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {point.title}
                      </h4>

                      <p className="mt-1.5 text-sm leading-6 text-muted">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Investment opportunities */}
        <div
          id="investment-options"
          className="mt-20 scroll-mt-24 sm:mt-28"
        >
          <div className={`${revealClasses} mb-10`}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Find Your Next Investment
                  </span>
                </div>

                <h3 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Explore Real Estate
                  <span className="block mt-2 text-primary">
                    Investment Opportunities
                  </span>
                </h3>
              </div>

              <p className="max-w-md text-sm leading-7 text-muted">
                Discover property investment options, explore real estate
                opportunities, and connect with us to discuss your
                requirements.
              </p>
            </div>
          </div>

          {/* Featured company directory */}
          <div className="grid gap-5 lg:grid-cols-2">

            {companies
              .filter((company) => company.featured)
              .map((company, index) => (
                <article
                  key={company.number}
                  className={`${revealClasses} group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-8`}
                >
                  {/* Decorative background number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-8 select-none text-[150px] font-bold leading-none text-soft-accent/70 transition-transform duration-700 group-hover:scale-110"
                  >
                    {company.number}
                  </span>

                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-soft-accent px-3 py-1.5 text-xs font-semibold text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                      Featured Opportunity
                    </span>

                    <span className="text-sm font-medium text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h4 className="max-w-sm text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {company.title}
                    </h4>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                      {company.description}
                    </p>
                  </div>

                  <div className="relative mt-auto flex flex-wrap items-center gap-4 pt-7">
                    <button
                      type="button"
                      onClick={() => openForm(company.title)}
                      className="button-primary group/button"
                    >
                      Enquire Now

                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover/button:translate-x-1"
                      >
                        →
                      </span>
                    </button>

                    {company.website && (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors duration-300 hover:text-accent"
                      >
                        Visit Website

                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
          </div>

          {/* Other company directory */}
          <div className={`${revealClasses} mt-12`}>
            <div className="mb-5 flex items-center justify-between gap-4">
              <h4 className="text-sm font-semibold text-foreground">
                More Property Opportunities
              </h4>

              <span className="text-xs text-muted">
                03 — 05
              </span>
            </div>

            <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {companies
                .filter((company) => !company.featured)
                .map((company) => (
                  <article
                    key={company.number}
                    className="group flex flex-col gap-4 p-5 transition-colors duration-300 hover:bg-soft-accent/40 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background text-xs font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        {company.number}
                      </span>

                      <div>
                        <h5 className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {company.title}
                        </h5>

                        <p className="mt-1 max-w-lg text-sm leading-6 text-muted">
                          {company.description}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openForm(company.title)}
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:ml-14"
                    >
                      Enquire Now

                      <span aria-hidden="true">→</span>
                    </button>
                  </article>
                ))}
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-muted">
            Submit your inquiry using our website form. The form sends
            leads to the website owner configured email address.
          </p>
        </div>

        {/* General guidance disclaimer */}
        <p
          className={`${revealClasses} mt-12 rounded-xl border border-border bg-surface px-5 py-4 text-xs leading-6 text-muted`}
        >
          Property information is for general guidance only and is not
          financial or legal advice. Independently verify property claims,
          ownership, approvals, and documents with qualified professionals
          before making an investment.
        </p>
      </div>

      {/* Company-specific inquiry modal */}
      {selectedCompany && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm motion-safe:animate-[fadeIn_200ms_ease-out]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeForm();
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="investment-form-title"
            className="my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-5 shadow-2xl motion-safe:animate-[modalIn_300ms_ease-out] sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Real Estate Inquiry
                </span>

                <h3
                  id="investment-form-title"
                  className="mt-1 text-xl font-bold text-foreground"
                >
                  {selectedCompany}
                </h3>

                <p className="mt-1 text-sm leading-6 text-muted">
                  Tell us about your property investment requirements.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeForm}
                disabled={submitting}
                aria-label="Close inquiry form"
                className="rounded-lg px-3 py-1 text-xl text-muted transition-all duration-300 hover:rotate-90 hover:bg-background hover:text-primary disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                ×
              </button>
            </div>

            {success ? (
              <div
                role="status"
                className="mt-6 rounded-xl border border-border bg-soft-accent p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                  ✓
                </div>

                <h4 className="mt-3 font-semibold text-foreground">
                  Thank You!
                </h4>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {success}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedCompany(null)}
                  className="button-primary mt-4"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="lead-name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Full Name *
                  </label>

                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="Enter your full name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Mobile Number *
                  </label>

                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={(event) =>
                      setForm({ ...form, phone: event.target.value })
                    }
                    placeholder="Enter your mobile number"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>

                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="Enter your email"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-interest"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Investment Type *
                  </label>

                  <select
                    id="lead-interest"
                    name="investmentType"
                    value={form.investmentType}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        investmentType: event.target.value,
                      })
                    }
                    className={inputClasses}
                  >
                    <option>Residential Plots</option>
                    <option>Commercial Property</option>
                    <option>Agricultural Land</option>
                    <option>Industrial Property</option>
                    <option>Investment Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="lead-budget"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Investment Budget
                  </label>

                  <select
                    id="lead-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(event) =>
                      setForm({ ...form, budget: event.target.value })
                    }
                    className={inputClasses}
                  >
                    <option>Not decided</option>
                    <option>Below ₹10 lakh</option>
                    <option>₹10–25 lakh</option>
                    <option>₹25–50 lakh</option>
                    <option>₹50 lakh+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="lead-message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Additional Requirements
                  </label>

                  <textarea
                    id="lead-message"
                    name="message"
                    rows={3}
                    maxLength={2000}
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    placeholder="Tell us what type of property you are looking for..."
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-border bg-background p-3 text-sm text-foreground"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="button-primary flex w-full items-center justify-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Investment Inquiry →"}
                </button>

                <p className="text-xs leading-5 text-muted">
                  Your inquiry will be sent to the website owner
                  configured email address, not to the selected company
                  external website.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
