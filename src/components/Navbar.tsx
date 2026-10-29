
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  title: string;
  href: string;
};

type NavItem = {
  title: string;
  href: string;
  special?: boolean;
  children?: MenuItem[];
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },

{
  title: "Explore Jattari",
  href: "/explore",
  children: [
    { title: "About Jattari", href: "/explore" },
    // { title: "Introduction", href: "/explore/introduction" },
    { title: "History & Culture", href: "/explore/history-culture" },
    { title: "Lifestyle & Markets", href: "/explore/lifestyle-markets" },
    { title: "Gallery", href: "/explore/gallery" },
    { title: "FAQ", href: "/explore/faq" },
    { title: "Contact & Feedback", href: "/explore/contact-feedback" },
    { title: "Attractions & Places to Visit", href: "/explore/attractions-places-to-visit" },
    { title: "Food & Local Eateries", href: "/explore/food-local-eateries" },
    { title: "Local Markets", href: "/explore/local-markets" },
    { title: "Travel Tips", href: "/explore/travel-tips" },
  ],
},

  {
    title: "Education",
    href: "/education",
    children: [
      { title: "All Education", href: "/education" },
      { title: "Schools", href: "/education/schools" },
      { title: "Colleges", href: "/education/colleges" },
      { title: "Tuition Classes", href: "/education/tuition-classes" },
      { title: "Coaching Centres", href: "/education/coaching-centres" },
      { title: "Libraries", href: "/education/libraries" },
    ],
  },
  {
    title: "Health",
    href: "/health",
    children: [
      { title: "All Health Facilities", href: "/health" },
      { title: "Nearby Hospitals", href: "/health/hospitals" },
      { title: "Clinics & Doctors", href: "/health/clinics" },
      { title: "Medical Stores", href: "/health/medical-stores" },
      { title: "Diagnostic Labs", href: "/health/diagnostic-labs" },
      { title: "Emergency Services", href: "/health/emergency-services" },
    ],
  },
  {
    title: "Real Estate",
    href: "/real-estate",
    children: [
      { title: "All Property Information", href: "/real-estate" },
      { title: "Projects", href: "/real-estate/projects" },
      { title: "Residential Plots", href: "/real-estate/residential-plots" },
      { title: "Commercial Plots", href: "/real-estate/commercial-plots" },
      { title: "Buying Checklist", href: "/real-estate/buying-checklist" },
      { title: "Property Enquiries", href: "/real-estate/property-enquiries" },
    ],
  },
  {
    title: "News & Updates",
    href: "/news-updates",
    children: [
      { title: "All Updates", href: "/news-updates" },
      { title: "Local Developments", href: "/news-updates/local-developments" },
      { title: "Road & Connectivity Updates", href: "/news-updates/connectivity" },
      { title: "Local Announcements", href: "/news-updates/announcements" },
    ],
  },
  {
    title: "Location",
    href: "/location-connectivity",
    special: true,
  },
];

function MapPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ChevronIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const regularItems = navItems.filter((item) => !item.special);
  const specialItems = navItems.filter((item) => item.special);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const regularLinkClass = (active: boolean, open = false) =>
    `flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-3 text-[14px] font-bold transition duration-200 2xl:px-4 2xl:text-[15px] ${
      active || open
        ? "bg-soft-accent text-primary"
        : "text-foreground hover:bg-soft-accent hover:text-primary"
    }`;

  const locationLinkClass = (active: boolean) =>
    `flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-extrabold transition duration-200 2xl:px-5 ${
      active
        ? "border-primary bg-primary text-white shadow-md"
        : "border-border bg-soft-accent text-primary hover:border-primary hover:bg-primary hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 shadow-sm backdrop-blur-xl">
      <div className="flex min-h-[82px] items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-7 2xl:px-10">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="Jattari Explorer Home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-md transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5.5 9.5V21h13V9.5" />
              <path d="M9 21v-7h6v7" />
              <path d="M3 21h18" />
            </svg>
          </div>

          <div className="leading-tight">
            <span className="block whitespace-nowrap text-[17px] font-extrabold tracking-tight text-foreground sm:text-xl">
              Jattari <span className="text-primary"></span>
            </span>
            <span className="mt-1 block whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.15em] text-muted sm:text-[10px]">
              Discover Your Neighbourhood
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
        >
          <div className="flex items-center justify-center gap-3 2xl:gap-4">
            {regularItems.map((item) => {
              const active = isActive(item.href);
              const dropdownOpen = activeDropdown === item.title;

              return (
                <div
                  key={item.title}
                  className="relative shrink-0"
                  onMouseEnter={() => {
                    if (item.children) setActiveDropdown(item.title);
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={item.children ? dropdownOpen : undefined}
                    onClick={() => setActiveDropdown(null)}
                    className={regularLinkClass(active, dropdownOpen)}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronIcon
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={`absolute left-1/2 top-full z-50 w-[390px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                        dropdownOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-border bg-background p-3 shadow-xl">
                        <div className="mb-2 border-b border-border px-3 pb-3 pt-1">
                          <p className="text-sm font-extrabold text-foreground">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-muted">
                            Explore information and services
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`rounded-lg px-3 py-2.5 text-[12px] font-medium leading-snug transition ${
                                isActive(child.href)
                                  ? "bg-soft-accent text-primary"
                                  : "text-foreground hover:bg-soft-accent hover:text-primary"
                              }`}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>

                        <Link
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="mt-2 flex items-center justify-between rounded-xl bg-soft-accent px-3 py-3 text-xs font-bold text-primary transition hover:opacity-80"
                        >
                          View all {item.title}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Location button */}
        <div className="hidden shrink-0 items-center xl:flex">
          {specialItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={locationLinkClass(isActive(item.href))}
            >
              <MapPinIcon className="h-[18px] w-[18px]" />
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground transition hover:bg-soft-accent hover:text-primary xl:hidden"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-border bg-background transition-all duration-300 xl:hidden ${
          mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="max-h-[85vh] space-y-1 overflow-y-auto px-4 py-4 sm:px-6"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            const expanded = mobileExpanded === item.title;

            if (item.special) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`${locationLinkClass(active)} w-full`}
                >
                  <MapPinIcon className="h-5 w-5" />
                  {item.title}
                </Link>
              );
            }

            return (
              <div key={item.title} className="overflow-hidden rounded-xl">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex-1 rounded-xl px-4 py-3.5 text-sm font-bold transition ${
                      active
                        ? "bg-soft-accent text-primary"
                        : "text-foreground hover:bg-soft-accent hover:text-primary"
                    }`}
                  >
                    {item.title}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(expanded ? null : item.title)
                      }
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${item.title} menu`}
                      aria-expanded={expanded}
                      className="ml-1 flex h-11 w-11 items-center justify-center rounded-xl text-muted transition hover:bg-soft-accent hover:text-primary"
                    >
                      <ChevronIcon
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && expanded && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-border py-1 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobileMenu}
                        className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                          isActive(child.href)
                            ? "bg-soft-accent font-semibold text-primary"
                            : "text-foreground hover:bg-soft-accent hover:text-primary"
                        }`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
