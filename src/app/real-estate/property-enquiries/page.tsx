
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

const brands = [
  "No preference",
  "Anugrah Homes",
  "Skyline Aero Homes",
  "Dreamnest Realtors",
  "Shiva Associates",
  "Jewar Lands",
];

const propertyTypes = [
  "General Property Enquiry",
  "Residential Plot",
  "Commercial Plot",
  "Property Project",
  "Other",
];

const budgets = [
  "Not decided yet",
  "Below ₹10 lakh",
  "₹10–25 lakh",
  "₹25–50 lakh",
  "₹50 lakh–₹1 crore",
  "Above ₹1 crore",
];

export default function PropertyEnquiriesPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "No preference",
    propertyType: "General Property Enquiry",
    budget: "Not decided yet",
    location: "Jattari",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
    setError("");
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanedPhone = form.phone.replace(/\D/g, "");

    if (cleanedPhone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const subject = encodeURIComponent(
      `Property Enquiry - ${form.propertyType}`
    );

    const body = encodeURIComponent(
      `New Property Enquiry

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Preferred Brand: ${form.brand}
Property Type: ${form.propertyType}
Budget: ${form.budget}
Preferred Location: ${form.location}

Requirements:
${form.message || "Not provided"}

Note: This enquiry was prepared through the Jattari Explorer website.`
    );

    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-[10px] border border-[#E8E1D5] bg-white px-4 py-3 text-[#172B26] outline-none transition placeholder:text-[#A49C8F] focus:border-[#06483D] focus:ring-2 focus:ring-[#EAF2ED]";

  const iconInputClass =
    "w-full rounded-[10px] border border-[#E8E1D5] bg-white py-3 pl-10 pr-4 text-[#172B26] outline-none transition placeholder:text-[#A49C8F] focus:border-[#06483D] focus:ring-2 focus:ring-[#EAF2ED]";

  return (
    <main className="min-h-screen bg-[#FFF9F0] text-[#172B26]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[390px] items-end overflow-hidden bg-[#073B32]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/skyline%20aerohomes.jpeg')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/75 to-[#073B32]/30" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 lg:px-12">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#F2B85B]">
            Property Enquiries · Jattari
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Tell Us What Property You Are Looking For.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Share your requirements for residential plots, commercial land or
            property projects around Jattari.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-16 lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
            Start a Conversation
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#073B32] sm:text-4xl">
            A property enquiry built around your needs.
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-[#D58A28]" />
        </div>

        <div className="space-y-4 leading-7 text-[#68756F]">
          <p>
            Tell us your preferred property type, budget and location so your
            enquiry clearly explains what you are looking for.
          </p>
          <p>
            Please verify property documents, permissions, pricing and
            transaction terms independently before making a payment or
            commitment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="border-y border-[#E8E1D5] bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
          <aside>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
              Enquiry Details
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#073B32] sm:text-4xl">
              Let&apos;s understand your requirements.
            </h2>

            <p className="mt-5 leading-7 text-[#68756F]">
              Complete the form with your contact details and property
              preferences. Fields marked with * are required.
            </p>

            <div className="mt-10 space-y-6 border-t border-[#E8E1D5] pt-7">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 shrink-0 text-[#06483D]"
                  size={22}
                />
                <div>
                  <h3 className="font-semibold text-[#073B32]">
                    Location focus
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#68756F]">
                    Jattari and nearby areas in Uttar Pradesh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ClipboardList
                  className="mt-1 shrink-0 text-[#06483D]"
                  size={22}
                />
                <div>
                  <h3 className="font-semibold text-[#073B32]">
                    Clear requirements
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#68756F]">
                    Include your preferred plot type, budget and intended use.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare
                  className="mt-1 shrink-0 text-[#06483D]"
                  size={22}
                />
                <div>
                  <h3 className="font-semibold text-[#073B32]">
                    Your enquiry
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#68756F]">
                    Review your details before sending them through your
                    configured email application.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 border-l-4 border-[#D58A28] bg-[#FFF0D8] p-5">
              <p className="text-sm font-semibold text-[#073B32]">
                Before submitting
              </p>
              <p className="mt-2 text-sm leading-6 text-[#68756F]">
                Keep your property preferences and contact information ready
                to make your enquiry more useful.
              </p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="min-w-0">
            <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <UserRound
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9F98]"
                  />
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Enter your full name"
                    className={iconInputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9F98]"
                  />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    value={form.phone}
                    onChange={(event) =>
                      updateField(
                        "phone",
                        event.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    placeholder="10-digit mobile number"
                    className={iconInputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="brand"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Preferred Brand
                </label>
                <select
                  id="brand"
                  name="brand"
                  value={form.brand}
                  onChange={(event) =>
                    updateField("brand", event.target.value)
                  }
                  className={inputClass}
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="propertyType"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  value={form.propertyType}
                  onChange={(event) =>
                    updateField("propertyType", event.target.value)
                  }
                  className={inputClass}
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Approximate Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value)
                  }
                  className={inputClass}
                >
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Preferred Location
                </label>
                <input
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={(event) =>
                    updateField("location", event.target.value)
                  }
                  placeholder="Jattari or nearby area"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#172B26]"
                >
                  Tell Us More About Your Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Plot size, intended use, preferred timeline or any questions..."
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            {submitted && (
              <div
                role="status"
                className="mt-5 flex items-start gap-3 border-l-4 border-[#287A6D] bg-[#EAF2ED] p-4 text-sm leading-6 text-[#36564A]"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#287A6D]"
                />
                <p>
                  Your email application has been requested to open with the
                  enquiry details. Please check that the email is ready and
                  send it to the intended recipient. The website has not
                  stored or submitted this enquiry to a server.
                </p>
              </div>
            )}

            <div className="mt-7 flex flex-col gap-4 border-t border-[#E8E1D5] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-[#68756F]">
                Your details should only be shared with the intended recipient
                after you review the email.
              </p>

              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#06483D] px-6 py-3.5 font-semibold text-white transition hover:bg-[#04382F] focus:outline-none focus:ring-2 focus:ring-[#287A6D] focus:ring-offset-2"
              >
                Prepare Enquiry Email
                <Send size={17} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* More property pages */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 border-b border-[#E8E1D5] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
              Continue Exploring
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#073B32]">
              Learn more before you decide.
            </h2>
          </div>

          <Link
            href="/real-estate/buying-checklist"
            className="inline-flex w-fit items-center gap-2 font-semibold text-[#06483D] transition hover:text-[#D58A28]"
          >
            View Buying Checklist
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 py-8 sm:grid-cols-2">
          <Link
            href="/real-estate/residential-plots"
            className="group border-b border-[#E8E1D5] pb-6 transition"
          >
            <p className="text-sm text-[#B9741C]">01 / Residential</p>
            <h3 className="mt-2 text-xl font-semibold text-[#073B32] transition group-hover:text-[#B9741C]">
              Residential Plots
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#68756F]">
              Review considerations for choosing residential land.
            </p>
          </Link>

          <Link
            href="/real-estate/commercial-plots"
            className="group border-b border-[#E8E1D5] pb-6 transition"
          >
            <p className="text-sm text-[#B9741C]">02 / Commercial</p>
            <h3 className="mt-2 text-xl font-semibold text-[#073B32] transition group-hover:text-[#B9741C]">
              Commercial Plots
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#68756F]">
              Explore points to consider for business-oriented land.
            </p>
          </Link>
        </div>


      </section>
    </main>
  );
}
