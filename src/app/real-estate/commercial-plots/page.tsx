
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const considerations = [
  {
    number: "01",
    title: "Location & Visibility",
    description:
      "Review road access, visibility, surrounding activity, and convenient access for customers and suppliers.",
  },
  {
    number: "02",
    title: "Permitted Land Use",
    description:
      "Verify that the land's approved use permits your intended commercial activity before proceeding.",
  },
  {
    number: "03",
    title: "Plot Dimensions & Access",
    description:
      "Check plot measurements, frontage, approach roads, access rights, and the practical needs of your business.",
  },
  {
    number: "04",
    title: "Documents & Approvals",
    description:
      "Independently check ownership, applicable approvals, title records, and any restrictions or encumbrances.",
  },
];

const checks = [
  "Verify ownership and title documents with a qualified professional.",
  "Confirm permitted commercial use and relevant local approvals.",
  "Check plot dimensions, frontage, access, and boundary details.",
  "Calculate registration costs, applicable taxes, and development charges.",
  "Review the agreement and payment terms before making a commitment.",
];

export default function CommercialPlotsPage() {
  return (
    <main className="overflow-hidden bg-[#F5F7FA] text-[#1F2937]">
      {/* HERO */}
      <section className="relative flex min-h-[590px] items-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/commercial.jpeg')",
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
            Jattari Commercial Property Guide
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Space for Your
            <br />
            Next Business Move.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Explore the factors that matter when considering commercial plots
            around Jattari—from location and access to permitted land use and
            property documentation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/real-estate/property-enquiries?type=Commercial%20Plot"
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
              Commercial Plots
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Choose a location that works for your plans.
            </h2>

            <div className="mt-7 h-1 w-20 bg-blue-600" />
          </div>

          <div className="space-y-5 text-base leading-8 text-[#6B7280]">
            <p>
              Commercial property can support different business needs,
              depending on the location, permitted use, plot size, and
              surrounding infrastructure. The right choice starts with
              understanding how the site fits your business requirements.
            </p>

            <p>
              When evaluating commercial land around Jattari, consider
              customer access, transportation, nearby development, utility
              availability, and the documents associated with the property.
              Verify actual site conditions before making a decision.
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

      {/* PROPERTY CONSIDERATIONS */}
      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Evaluate the Essentials
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              What makes a commercial site suitable?
            </h2>

            <p className="mt-5 leading-8 text-[#6B7280]">
              Your intended business activity should guide your property
              search. Review each factor before shortlisting a plot.
            </p>
          </div>

          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {considerations.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 py-8 sm:grid-cols-[70px_0.8fr_1.2fr] sm:gap-8"
              >
                <span className="text-sm font-bold tracking-wider text-blue-600">
                  {item.number}
                </span>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="leading-7 text-[#6B7280]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Building2 size={34} className="mb-6 text-blue-600" />

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Plan for Your Purpose
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Think about how the land will be used.
            </h2>

            <p className="mt-5 leading-8 text-[#6B7280]">
              Different businesses have different space, access, and
              infrastructure requirements. Shortlist properties according
              to your intended use and verify that the relevant permissions
              allow it.
            </p>
          </div>

          <div className="space-y-0">
            <div className="border-t-2 border-blue-600 py-6">
              <h3 className="text-xl font-semibold">Retail & Showrooms</h3>
              <p className="mt-3 leading-7 text-[#6B7280]">
                Consider frontage, customer access, visibility, parking
                arrangements, and surrounding commercial activity.
              </p>
            </div>

            <div className="border-t border-[#E5E7EB] py-6">
              <h3 className="text-xl font-semibold">
                Offices & Professional Spaces
              </h3>
              <p className="mt-3 leading-7 text-[#6B7280]">
                Review accessibility, utilities, surrounding services,
                and suitability for the intended office use.
              </p>
            </div>

            <div className="border-t border-[#E5E7EB] py-6">
              <h3 className="text-xl font-semibold">
                Storage & Other Commercial Uses
              </h3>
              <p className="mt-3 leading-7 text-[#6B7280]">
                Check road access, loading requirements, utility needs,
                and whether the proposed use is permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DUE-DILIGENCE CHECKLIST */}
      <section className="bg-[#EAF1FB]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <ShieldCheck size={32} className="mb-6 text-blue-700" />

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
                Before You Commit
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                A careful buyer checks the details.
              </h2>

              <p className="mt-5 leading-8 text-[#596579]">
                Property advertisements are only a starting point. Verify
                the records and terms independently before making payments.
              </p>

              <Link
                href="/real-estate/buying-checklist"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
              >
                View Complete Buying Checklist
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="divide-y divide-blue-200 border-y border-blue-200">
              {checks.map((item, index) => (
                <div key={item} className="flex gap-5 py-6">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-blue-700"
                  />

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Check {index + 1}
                    </span>
                    <p className="mt-2 leading-7 text-[#374151]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBTLE, TEXT-ONLY BRAND MENTIONS */}
      <section className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6B7280]">
            Property Enquiry Resources
          </p>

          <div className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-2">
            <div className="border-l-2 border-blue-600 pl-5">
              <p className="text-base font-semibold text-[#1F2937]">
                Anugrah Homes
              </p>

              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                Looking into commercial property around Jattari? You can
                explore project information and make a property enquiry.
              </p>

              <Link
                href="/real-estate/property-enquiries?brand=Anugrah%20Homes&type=Commercial%20Plot"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Property information
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="border-l-2 border-blue-600 pl-5">
              <p className="text-base font-semibold text-[#1F2937]">
                Skyline Aero Homes
              </p>

              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                For commercial plot enquiries, request relevant location,
                availability, and project details for review.
              </p>

              <Link
                href="/real-estate/property-enquiries?brand=Skyline%20Aero%20Homes&type=Commercial%20Plot"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Explore enquiry details
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
