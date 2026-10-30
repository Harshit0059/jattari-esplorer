
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
  },
  {
    number: "02",
    title: "Skyline Aero Homes",
    description:
      "Discover property options and explore real estate opportunities.",
    website: "https://www.skylineaerohomes.com/",
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
  "property-reveal translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none";

const inputClasses =
  "w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted/70 hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/15";

export default function PropertyInvestment() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(
    null
  );

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  // Scroll reveal animation
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "#property .property-reveal"
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      sections.forEach((section) => {
        section.classList.remove("translate-y-8", "opacity-0");
        section.classList.add("translate-y-0", "opacity-100");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.remove("translate-y-8", "opacity-0");
        section.classList.add("translate-y-0", "opacity-100");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "translate-y-8",
              "opacity-0"
            );
            entry.target.classList.add(
              "translate-y-0",
              "opacity-100"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Modal keyboard and background scroll handling
  useEffect(() => {
    if (!selectedCompany) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting) {
        setSelectedCompany(null);
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
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
      className="overflow-hidden bg-white py-10 sm:py-14 lg:py-16"
    >
      <div className="container-site">
        {/* Introduction and investment research */}
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className={revealClasses}>
            <span className="inline-flex rounded-full bg-soft-accent px-3 py-1.5 text-xs font-semibold text-primary transition-transform duration-300 hover:scale-105">
              Real Estate & Investment
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Make informed
              <span className="block text-primary">
                property decisions
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Explore real estate investment options, understand the
              property market, and compare opportunities before making
              an investment decision.
            </p>

            <a
              href="#investment-options"
              className="button-primary mt-5 inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Opportunities
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div
            className={`${revealClasses} rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6`}
          >
            <h3 className="text-lg font-bold text-foreground">
              Before You Invest
            </h3>

            <p className="mt-1 text-sm leading-6 text-muted">
              Important checks to include in your property research.
            </p>

            <div className="mt-5 space-y-4">
              {propertyPoints.map((point) => (
                <div
                  key={point.number}
                  className="group flex gap-3 rounded-xl p-2 transition-all duration-300 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft-accent text-sm font-bold text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    {point.number}
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {point.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real estate investment options */}
        <div
          id="investment-options"
          className="mt-12 scroll-mt-24 sm:mt-14"
        >
          <div className={`${revealClasses} mx-auto max-w-2xl text-center`}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
              Find Your Next Investment
            </span>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Explore Real Estate
              <span className="block text-primary">
                Investment Opportunities
              </span>
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Discover property investment options, explore real estate
              opportunities, and connect with us to discuss your
              requirements.
            </p>
          </div>

          {/* Company cards */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <article
                key={company.number}
                className={`${revealClasses} group flex h-full flex-col rounded-xl border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl sm:p-6`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-soft-accent text-sm font-bold text-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    {company.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-primary transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
                  >
                    →
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {company.title}
                </h4>

                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {company.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openForm(company.title)}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Enquire Now
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>

                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary transition-all duration-300 hover:translate-x-1 hover:text-primary-hover focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      Website ↗
                    </a>
                  ) : (
                    <span className="text-xs text-muted">
                      Contact through inquiry
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-muted">
            Submit your inquiry using our website form. The form sends
            leads to the website owner's configured email address.
          </p>
        </div>

        {/* General guidance disclaimer */}
        <p
          className={`${revealClasses} mt-8 rounded-xl border border-border bg-background p-4 text-xs leading-6 text-muted transition-colors duration-300 hover:border-primary/30`}
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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm motion-safe:animate-[fadeIn_200ms_ease-out]"
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
            className="my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/20 bg-white p-5 shadow-2xl motion-safe:animate-[modalIn_300ms_ease-out] sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Real Estate Inquiry
                </span>

                <h3
                  id="investment-form-title"
                  className="mt-1 text-xl font-bold text-foreground"
                >
                  {selectedCompany}
                </h3>

                <p className="mt-1 text-sm text-muted">
                  Tell us about your property investment requirements.
                </p>
              </div>

              <button
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
                className="mt-6 rounded-xl border border-primary/20 bg-soft-accent p-5"
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
                  className="button-primary mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="lead-name"
                    className="mb-1 block text-sm font-medium text-foreground"
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
                    className="mb-1 block text-sm font-medium text-foreground"
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
                    className="mb-1 block text-sm font-medium text-foreground"
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
                    className="mb-1 block text-sm font-medium text-foreground"
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
                    className="mb-1 block text-sm font-medium text-foreground"
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
                    className="mb-1 block text-sm font-medium text-foreground"
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
                    className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="button-primary flex w-full items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Investment Inquiry →"}
                </button>

                <p className="text-xs leading-5 text-muted">
                  Your inquiry will be sent to the website owner's
                  configured email address, not to the selected company's
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
