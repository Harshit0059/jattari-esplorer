
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Building2, X } from "lucide-react";

export default function ConnectivityPromotionPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 25000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  function closePopup() {
    setIsVisible(false);
  }

  return (
    <aside
      aria-label="Property promotions"
      aria-hidden={!isVisible}
      className={`fixed bottom-5 right-4 z-[9999] w-[calc(100%-2rem)] max-w-[390px] transition-all duration-700 ease-out sm:bottom-7 sm:right-7 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-[120%] opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-slate-900/20">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Jattari Property Spotlight
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Explore your options
            </p>
          </div>

          <button
            type="button"
            onClick={closePopup}
            aria-label="Close property promotion"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition hover:bg-gray-100 hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-[100px_1fr] gap-3">
            <div className="relative min-h-[112px] overflow-hidden rounded-xl">
              <Image
                src="/images/anugrah.jpeg"
                alt="Anugrah Homes"
                fill
                sizes="100px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <span className="text-xs font-semibold text-primary">
                Property Spotlight 01
              </span>
              <h3 className="mt-1 text-base font-bold text-foreground">
                Anugrah Homes
              </h3>
              <p className="mt-1 text-xs leading-5 text-muted">
                Explore property options and check location details around
                Jattari.
              </p>
              <Link
                href="/real-estate/projects"
                onClick={closePopup}
                className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2"
              >
                Explore Projects <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="my-4 border-t border-dashed border-border" />

          <div className="grid grid-cols-[100px_1fr] gap-3">
            <div className="relative min-h-[112px] overflow-hidden rounded-xl">
              <Image
                src="/images/skyline%20aerohomes.jpeg"
                alt="Skyline Aero Homes"
                fill
                sizes="100px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <span className="text-xs font-semibold text-primary">
                Property Spotlight 02
              </span>
              <h3 className="mt-1 text-base font-bold text-foreground">
                Skyline Aero Homes
              </h3>
              <p className="mt-1 text-xs leading-5 text-muted">
                Discover the project and verify its location, connectivity
                and property details.
              </p>
              <Link
                href="/real-estate/projects"
                onClick={closePopup}
                className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2"
              >
                View Details <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#F5F7FA] px-5 py-3 text-xs text-muted">
          <Building2 size={15} className="shrink-0 text-primary" />
          Research the location and verify details before deciding.
        </div>
      </div>
    </aside>
  );
}
