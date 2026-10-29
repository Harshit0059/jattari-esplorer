
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const checks = [
  "Verify the seller's identity and ownership documents.",
  "Check the approved layout and applicable land-use permissions.",
  "Confirm plot dimensions, boundaries, and access-road details.",
  "Review registration charges, applicable taxes, and other costs.",
  "Consult a qualified property lawyer before making payment.",
];

export default function ResidentialPlotsPage() {
  return (
    <main className="overflow-hidden bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO */}
      <section className="relative flex min-h-[580px] items-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/residentails.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/15" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <Link
            href="/real-estate/projects"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Real Estate
          </Link>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">
            Jattari Real Estate Guide
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Find Space for
            <br />
            Your Future.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Explore residential plot opportunities around Jattari.
            Understand the location, review important documents, and make
            informed decisions about your property journey.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/real-estate/property-enquiries?type=Residential%20Plot"
              className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Property Enquiries
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/real-estate/buying-checklist"
              className="inline-flex items-center gap-3 rounded-lg border border-white/60 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Buying Checklist
              <FileCheck2 size={18} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-blue-600" />
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Residential Plots
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              A thoughtful start to your homeownership journey.
            </h2>

            <div className="mt-7 h-1 w-20 bg-blue-600" />
          </div>

          <div className="space-y-5 text-base leading-8 text-[#6B7280]">
            <p>
              A residential plot offers flexibility to plan a home around
              your requirements. Before choosing a property, consider its
              location, approach roads, nearby facilities, surrounding
              development, and documentation.
            </p>

            <p>
              Explore options around Jattari carefully. Prices, approvals,
              availability, and development status can vary, so verify
              the relevant details independently before making a commitment.
            </p>

            <Link
              href="/location-connectivity"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
            >
              Explore Location & Connectivity
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROPERTY EVALUATION */}
      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Before You Decide
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Look beyond the location.
            </h2>

            <p className="mt-5 leading-8 text-[#6B7280]">
              A property decision involves more than its advertised price.
              Check the documents, infrastructure, and suitability of the
              location before proceeding.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            <div className="border-t-2 border-blue-600 pt-6">
              <MapPin className="mb-5 text-blue-600" size={28} />
              <h3 className="text-xl font-semibold">Location & Access</h3>
              <p className="mt-3 leading-7 text-[#6B7280]">
                Evaluate approach roads, nearby daily conveniences,
                transport options, and access to essential services.
              </p>
            </div>

            <div className="border-t-2 border-blue-600 pt-6">
              <ShieldCheck className="mb-5 text-blue-600" size={28} />
              <h3 className="text-xl font-semibold">Legal Verification</h3>
              <p className="mt-3 leading-7 text-[#6B7280]">
                Verify ownership, land-use permissions, applicable
                approvals, and any encumbrances before proceeding.
              </p>
            </div>

            <div className="border-t-2 border-blue-600 pt-6">
              <FileCheck2 className="mb-5 text-blue-600" size={28} />
              <h3 className="text-xl font-semibold">Plot Details</h3>
              <p className="mt-3 leading-7 text-[#6B7280]">
                Confirm the area, dimensions, boundaries, access-road
                details, and terms recorded in the documents.
              </p>
            </div>

            <div className="border-t-2 border-blue-600 pt-6">
              <CheckCircle2 className="mb-5 text-blue-600" size={28} />
              <h3 className="text-xl font-semibold">Total Budget</h3>
              <p className="mt-3 leading-7 text-[#6B7280]">
                Account for the plot price, registration, applicable taxes,
                development charges, and future construction costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYING CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Your Due-Diligence Guide
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Five checks worth completing.
            </h2>

            <p className="mt-5 leading-8 text-[#6B7280]">
              Review these points before paying a booking amount or
              signing a property agreement.
            </p>

            <Link
              href="/real-estate/buying-checklist"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
            >
              Read the Full Buying Checklist
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {checks.map((item, index) => (
              <div key={item} className="flex gap-5 py-6">
                <span className="pt-0.5 text-sm font-bold tabular-nums text-blue-600">
                  0{index + 1}
                </span>
                <p className="leading-7 text-[#4B5563]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBTLE BRAND MENTIONS — NO PROMOTIONAL CARDS */}
      <section className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6B7280]">
            Property Enquiry Resources
          </p>

          <div className="mt-6 flex flex-col gap-5 border-y border-[#E5E7EB] py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-[#1F2937]">
                Anugrah Homes
              </p>
              <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                For enquiries about residential property options around Jattari.
              </p>
            </div>

            <Link
              href="/real-estate/property-enquiries?brand=Anugrah%20Homes&type=Residential%20Plot"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
            >
              View Enquiry Details
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex flex-col gap-5 border-b border-[#E5E7EB] py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-[#1F2937]">
                Skyline Aero Homes
              </p>
              <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                Request project information and residential plot details.
              </p>
            </div>

            <Link
              href="/real-estate/property-enquiries?brand=Skyline%20Aero%20Homes&type=Residential%20Plot"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
            >
              View Enquiry Details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
