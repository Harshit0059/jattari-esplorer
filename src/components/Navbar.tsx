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

const JATTARI_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Jattari%2C%20Uttar%20Pradesh%2C%20India";

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Explore Jattari",
    href: "/explore",
    children: [
      { title: "About Jattari", href: "/explore" },
      { title: "History & Culture", href: "/explore/history-culture" },
      { title: "Lifestyle & Markets", href: "/explore/lifestyle-markets" },
      { title: "FAQ", href: "/explore/faq" },
      { title: "Contact & Feedback", href: "/explore/contact-feedback" },
      {
        title: "Attractions & Places to Visit",
        href: "/explore/attractions-places-to-visit",
      },
      { title: "Food & Local Eateries", href: "/explore/food-local-eateries" },
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
      { title: "Coaching Centres", href: "/education/coaching-centres" },
      { title: "Libraries", href: "/education/libraries" },
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
      {
        title: "Road & Connectivity Updates",
        href: "/news-updates/connectivity",
      },
      { title: "Local Announcements", href: "/news-updates/announcements" },
    ],
  },
  {
    title: "Location",
    href: JATTARI_MAP_URL,
    special: true,
  },
];

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

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

  // Search states
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const regularItems = navItems.filter((item) => !item.special);
  const specialItems = navItems.filter((item) => item.special);

  // All navbar pages and subpages available for search
  const searchablePages = navItems
    .filter((item) => !item.special)
    .flatMap((item) => [
      { title: item.title, href: item.href },
      ...(item.children || []),
    ]);

  // Search matching pages
  const searchResults = searchQuery.trim()
    ? searchablePages
        .filter(
          (page, index, self) =>
            self.findIndex((p) => p.href === page.href) === index &&
            page.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
        )
        .slice(0, 7)
    : [];

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    const cleanHref = href.replace(/\/+$/, "") || "/";
    return cleanPath === cleanHref;
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const toggleSearch = () => {
    setSearchOpen((open) => !open);
    setSearchQuery("");
    setActiveDropdown(null);
  };

  const regularLinkClass = (active: boolean, open = false) =>
    `flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-3 text-[14px] font-bold transition duration-200 2xl:px-4 2xl:text-[15px] ${
      active
        ? "bg-white text-[#10251F] shadow-sm"
        : open
        ? "bg-white/80 text-[#10251F]"
        : "text-[#10251F] hover:bg-white/60 hover:text-[#10251F]"
    }`;

  const locationLinkClass = (active: boolean) =>
    `flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-extrabold transition duration-200 2xl:px-5 ${
      active
        ? "border-[#D58A28] bg-[#D58A28] text-white shadow-md"
        : "border-[#D58A28] bg-[#FFF0D8] text-[#10251F] hover:border-[#B9741C] hover:bg-[#D58A28] hover:text-white"
    }`;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-[#8FC8F1]/65 via-[#B7DDF4]/30 to-transparent border-none">
      {/* Main Navbar */}
      <div className="flex min-h-[82px] items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-7 2xl:px-10">

        {/* Brand */}
        <Link
          href="/"
          onClick={() => {
            closeMobileMenu();
            closeSearch();
          }}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="Jattari Explorer Home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10251F] text-white shadow-md transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
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
            <span className="block whitespace-nowrap text-[17px] font-extrabold tracking-tight text-[#10251F] sm:text-xl">
              Jattari <span className="text-[#D58A28]">Explorer</span>
            </span>
            <span className="mt-1 block whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.15em] text-[#5A736C] sm:text-[10px]">
              Discover Your Neighbourhood
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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
                      <div className="overflow-hidden rounded-2xl border border-[#D8E5E8] bg-white p-3 shadow-xl">
                        <div className="mb-2 border-b border-[#D8E5E8] px-3 pb-3 pt-1">
                          <p className="text-sm font-extrabold text-[#10251F]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-[#5A736C]">
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
                                  ? "bg-[#E8F2F6] text-[#10251F]"
                                  : "text-[#10251F] hover:bg-[#E8F2F6] hover:text-[#10251F]"
                              }`}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>

                        <Link
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="mt-2 flex items-center justify-between rounded-xl bg-[#FFF0D8] px-3 py-3 text-xs font-bold text-[#10251F] transition hover:bg-[#D58A28] hover:text-white"
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

        {/* Desktop Search and Location */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${
              searchOpen
                ? "border-[#10251F] bg-[#E8F2F6] text-[#10251F]"
                : "border-[#D8E5E8] bg-white text-[#10251F] hover:bg-[#E8F2F6]"
            }`}
          >
            <SearchIcon />
          </button>

          {specialItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={locationLinkClass(false)}
              aria-label="View Jattari location on Google Maps"
            >
              <MapPinIcon className="h-[18px] w-[18px]" />
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Search and Menu Buttons */}
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${
              searchOpen
                ? "border-[#10251F] bg-[#E8F2F6] text-[#10251F]"
                : "border-[#D8E5E8] bg-white text-[#10251F] hover:bg-[#E8F2F6]"
            }`}
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D8E5E8] bg-white text-[#10251F] transition hover:bg-[#E8F2F6]"
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
      </div>

      {/* Floating Search Popup */}
      {searchOpen && (
        <div className="absolute right-4 top-full z-[60] w-[calc(100%-32px)] max-w-[540px] pt-3 sm:right-6 xl:right-[190px]">
          <div className="overflow-hidden rounded-2xl border border-[#D8E5E8] bg-white shadow-2xl shadow-[#10251F]/15">

            {/* Search Input */}
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-3 rounded-2xl border border-[#B8D3DD] bg-[#F4F8FA] px-4 py-3.5 transition focus-within:border-[#10251F] focus-within:ring-2 focus-within:ring-[#10251F]/10">
                <SearchIcon className="h-5 w-5 shrink-0 text-[#10251F]" />

                <input
                  type="search"
                  autoFocus
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") closeSearch();
                  }}
                  placeholder="Search Jattari, education, properties, news..."
                  aria-label="Search website pages"
                  className="w-full bg-transparent text-sm text-[#10251F] outline-none placeholder:text-[#7A938C]"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="shrink-0 text-xs font-semibold text-[#5A736C] transition hover:text-[#10251F]"
                  >
                    Clear
                  </button>
                )}

                <button
                  type="button"
                  onClick={closeSearch}
                  aria-label="Close search"
                  className="shrink-0 text-xl leading-none text-[#5A736C] transition hover:text-[#10251F]"
                >
                  ×
                </button>
              </div>

              {/* Popular Searches and Results */}
              <div className="mt-4">
                {!searchQuery.trim() ? (
                  <>
                    <p className="mb-3 text-xs font-semibold text-[#5A736C]">
                      Popular Searches
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Schools",
                        "Colleges",
                        "Property",
                        "Markets",
                        "Healthcare",
                      ].map((keyword) => (
                        <button
                          key={keyword}
                          type="button"
                          onClick={() => setSearchQuery(keyword)}
                          className="rounded-full bg-[#E8F2F6] px-3.5 py-2 text-xs font-medium text-[#10251F] transition hover:bg-[#D4E7EF]"
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>

                    <div className="my-4 border-t border-[#D8E5E8]" />

                    <p className="mb-2 text-xs font-bold text-[#10251F]">
                      Quick Links
                    </p>

                    <div className="space-y-1">
                      {[
                        { title: "Home", href: "/" },
                        { title: "Explore Jattari", href: "/explore" },
                        { title: "Education", href: "/education" },
                        { title: "Real Estate", href: "/real-estate" },
                        { title: "News & Updates", href: "/news-updates" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeSearch}
                          className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-[#10251F] transition hover:bg-[#E8F2F6] hover:text-[#10251F]"
                        >
                          <span>{item.title}</span>
                          <span className="text-[#5A736C]">›</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : searchResults.length > 0 ? (
                  <>
                    <p className="mb-2 px-1 text-xs font-semibold text-[#5A736C]">
                      Search Results
                    </p>

                    <div className="overflow-hidden rounded-xl border border-[#D8E5E8]">
                      {searchResults.map((result) => (
                        <Link
                          key={result.href}
                          href={result.href}
                          onClick={closeSearch}
                          className="flex items-center justify-between border-b border-[#E8EFF2] px-4 py-3 text-sm font-medium text-[#10251F] transition last:border-0 hover:bg-[#E8F2F6] hover:text-[#10251F]"
                        >
                          <span>{result.title}</span>
                          <span className="text-[#D58A28]">→</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="rounded-xl bg-[#F4F8FA] px-4 py-4 text-sm text-[#5A736C]">
                    No pages found for &quot;{searchQuery}&quot;. Try another keyword.
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="flex items-center gap-2 bg-[#E8F2F6] px-5 py-3 text-xs font-medium text-[#10251F]">
              <MapPinIcon className="h-4 w-4" />
              Search for anything about Jattari
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#D8E5E8] bg-white transition-all duration-300 xl:hidden ${
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
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className={`${locationLinkClass(false)} w-full`}
                  aria-label="View Jattari location on Google Maps"
                >
                  <MapPinIcon className="h-5 w-5" />
                  {item.title}
                </a>
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
                        ? "bg-[#E8F2F6] text-[#10251F]"
                        : "text-[#10251F] hover:bg-[#E8F2F6] hover:text-[#10251F]"
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
                      className="ml-1 flex h-11 w-11 items-center justify-center rounded-xl text-[#5A736C] transition hover:bg-[#E8F2F6] hover:text-[#10251F]"
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
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-[#D8E5E8] py-1 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobileMenu}
                        className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                          isActive(child.href)
                            ? "bg-[#E8F2F6] font-semibold text-[#10251F]"
                            : "text-[#10251F] hover:bg-[#E8F2F6] hover:text-[#10251F]"
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
