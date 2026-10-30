
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  MapPin,
  Wallet,
  Scale,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const checklist = [
  {
    number: "01",
    title: "Verify ownership and title",
    description:
      "Check the seller's ownership documents and confirm that the person selling the property has the legal authority to do so.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Check land-use permissions",
    description:
      "Confirm the property's permitted use and verify applicable approvals with the relevant local development or revenue authority.",
    icon: Scale,
  },
  {
    number: "03",
    title: "Review the plot boundaries",
    description:
      "Match the plot dimensions, boundaries and location with the available site plan and official property records.",
    icon: Ruler,
  },
  {
    number: "04",
    title: "Understand the location",
    description:
      "Evaluate road access, nearby facilities, connectivity and the area's suitability for your intended use.",
    icon: MapPin,
  },
  {
    number: "05",
    title: "Calculate the complete budget",
    description:
      "Account for the property price, registration charges, applicable stamp duty, taxes, legal fees and any additional development costs.",
    icon: Wallet,
  },
  {
    number: "06",
    title: "Review the agreement",
    description:
      "Read the payment schedule, possession terms, cancellation conditions and all commitments before signing or paying.",
    icon: ShieldCheck,
  },
];

const documents = [
  "Ownership and title documents",
  "Relevant land and revenue records",
  "Approved layout or site plan, where applicable",
  "Land-use permissions and required approvals",
  "Encumbrance or dispute checks, as applicable",
  "Sale agreement and payment receipts",
  "Identity and registration documents",
];

export default function BuyingChecklistPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] text-[#172B26]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-[#073B32]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/residentails.jpeg')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073B32]/95 via-[#073B32]/75 to-[#073B32]/30" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 lg:px-12">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#F2B85B]">
            Jattari Property Guide
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Buying Property in Jattari? Start with the Right Checklist.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            A practical guide to checking documents, understanding costs and
            evaluating a property before making a decision.
          </p>

          <Link
            href="/real-estate/property-enquiries"
            className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-[#D58A28] px-6 py-3.5 text-sm font-semibold text-[#172B26] transition hover:bg-[#B9741C] hover:text-white"
          >
            Discuss a Property Enquiry
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-20 lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
            Before You Buy
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#073B32] sm:text-4xl">
            Make an informed property decision.
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-[#D58A28]" />
        </div>

        <div className="space-y-5 text-base leading-8 text-[#68756F]">
          <p>
            Whether you are considering a residential plot, commercial land or
            a property for long-term use, careful verification is an important
            part of the buying process.
          </p>
          <p>
            Property requirements can differ depending on the location, land
            category and transaction. Use this checklist as a starting point
            and have the relevant documents reviewed by a qualified property
            lawyer or appropriate authority before committing funds.
          </p>
        </div>
      </section>

      {/* Main checklist */}
      <section className="border-y border-[#E8E1D5] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
              Six Essential Checks
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#073B32] sm:text-4xl">
              What to verify before making a payment
            </h2>
            <p className="mt-4 leading-7 text-[#68756F]">
              Take time to review each point and clarify any questions before
              moving forward with a property transaction.
            </p>
          </div>

          <div className="mt-12 divide-y divide-[#E8E1D5]">
            {checklist.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="grid gap-5 py-8 sm:grid-cols-[76px_1fr] sm:gap-8"
                >
                  <div className="flex items-start gap-4 sm:block">
                    <span className="text-2xl font-bold text-[#D58A28]">
                      {item.number}
                    </span>
                    <Icon
                      className="mt-1 text-[#06483D] sm:mt-4"
                      size={25}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#073B32]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-7 text-[#68756F]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Document checklist */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20 lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
            Document Review
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#073B32] sm:text-4xl">
            Documents to discuss with your legal adviser
          </h2>
          <p className="mt-5 leading-7 text-[#68756F]">
            The exact documents depend on the property and transaction. Confirm
            which records and approvals are applicable before proceeding.
          </p>

          <Link
            href="/real-estate/property-enquiries"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-[#06483D] transition hover:text-[#D58A28]"
          >
            Ask about a property
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="border-t border-[#E8E1D5]">
          {documents.map((document, index) => (
            <div
              key={document}
              className="flex items-start gap-4 border-b border-[#E8E1D5] py-5"
            >
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#287A6D]"
              />
              <div>
                <p className="font-medium text-[#172B26]">{document}</p>
                <p className="mt-1 text-sm leading-6 text-[#68756F]">
                  Verify relevance, validity and completeness for the specific
                  property.
                </p>
              </div>
              <span className="ml-auto text-sm text-[#A49C8F]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Budget section */}
      <section className="bg-[#EAF2ED] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
              Plan Your Budget
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#073B32] sm:text-4xl">
              Look beyond the quoted plot price.
            </h2>
            <p className="mt-5 leading-7 text-[#52665D]">
              Include applicable stamp duty, registration charges, legal
              consultation, financing costs and any site development expenses.
              Confirm current charges with the relevant authorities before
              finalising your budget.
            </p>
          </div>

          <Link
            href="/real-estate/property-enquiries"
            className="inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#06483D] px-6 py-3.5 font-semibold text-white transition hover:bg-[#04382F]"
          >
            Make an Enquiry
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Contextual brand mentions */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
          Property Enquiry Resources
        </p>

        <div className="mt-6 grid gap-8 border-t border-[#E8E1D5] pt-7 md:grid-cols-2 md:gap-14">
          <div>
            <h3 className="text-lg font-semibold text-[#073B32]">
              Anugrah Homes
            </h3>
            <p className="mt-2 leading-7 text-[#68756F]">
              If you are exploring residential land options around Jattari,
              include your location and plot requirements when making an
              enquiry through Anugrah Homes.
            </p>
            <Link
              href="/real-estate/property-enquiries?brand=Anugrah%20Homes&type=Buying%20Checklist"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#06483D] transition hover:text-[#D58A28]"
            >
              Enquire about property
              <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#073B32]">
              Skyline Aero Homes
            </h3>
            <p className="mt-2 leading-7 text-[#68756F]">
              For a property discussion through Skyline Aero Homes, clarify
              the plot category, intended use, budget and documentation
              requirements before proceeding.
            </p>
            <Link
              href="/real-estate/property-enquiries?brand=Skyline%20Aero%20Homes&type=Buying%20Checklist"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#06483D] transition hover:text-[#D58A28]"
            >
              Enquire about property
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="border-t border-[#E8E1D5] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <h2 className="text-xl font-bold text-[#073B32]">
              Explore more property options
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#68756F]">
              Compare residential and commercial plot information before
              deciding on your next step.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/real-estate/residential-plots"
              className="rounded-[10px] border border-[#E8E1D5] px-4 py-3 text-sm font-semibold text-[#06483D] transition hover:border-[#D58A28] hover:bg-[#FFF0D8]"
            >
              Residential Plots
            </Link>

            <Link
              href="/real-estate/commercial-plots"
              className="rounded-[10px] border border-[#E8E1D5] px-4 py-3 text-sm font-semibold text-[#06483D] transition hover:border-[#D58A28] hover:bg-[#FFF0D8]"
            >
              Commercial Plots
            </Link>

            <Link
              href="/real-estate/property-enquiries"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#06483D] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#04382F]"
            >
              Property Enquiries
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
