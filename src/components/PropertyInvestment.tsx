
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
    category: "Residential Plots & Enquiries",
    description:
      "Explore residential plots and real estate investment opportunities.",
    website: "https://anugrahhomes.com/",
    image: "/images/anugrah.jpeg",
  },
  {
    number: "02",
    title: "Skyline Aero Homes",
    category: "Modern Living Township",
    description:
      "Discover property options and explore real estate opportunities.",
    website: "https://www.skylineaerohomes.com/",
    image: "/images/skyline%20aerohomes.jpeg",
  },
  {
    number: "03",
    title: "Dreams N Realtors",
    category: "Property Advisory & Plots",
    description:
      "Explore property opportunities and investment options.",
    image: "/images/residentails.jpeg",
  },
  {
    number: "04",
    title: "Jewar Lands",
    category: "Jewar-Region Land Opportunities",
    description:
      "Enquire about land and real estate investment opportunities.",
    image: "/images/commercial.jpeg",
  },
  {
    number: "05",
    title: "Shiva Associates",
    category: "Commercial & Strategic Plots",
    description:
      "Discuss your property requirements and investment plans.",
    image: "/images/developments.jpeg",
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

        {/* Investment opportunities */}
        <div
          id="investment-options"
          className="scroll-mt-24"
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

          {/* Company directory - All 5 projects shown in the exact same card format with images */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <article
                key={company.number}
                className={`${revealClasses} group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl`}
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-muted/20 sm:h-52">
                  <img
                    src={company.image}
                    alt={company.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10251F]/70 via-black/20 to-transparent" />

                  {/* Badge & Number on Image */}
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#10251F] shadow-sm backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Featured Opportunity
                    </span>
                    <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-bold text-white backdrop-blur-sm">
                      {company.number}
                    </span>
                  </div>

                  {/* Category tag on image bottom */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-medium text-white/95 drop-shadow">
                      {company.category}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                      {company.title}
                    </h4>

                    <p className="mt-2.5 text-sm leading-6 text-muted">
                      {company.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-5">
                    <button
                      type="button"
                      onClick={() => openForm(company.title)}
                      className="button-primary group/button !px-5 !py-2.5 !text-sm"
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
                </div>
              </article>
            ))}
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
