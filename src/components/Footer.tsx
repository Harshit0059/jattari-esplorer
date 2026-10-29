
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Jattari", href: "#about" },
  { label: "Explore", href: "#explore" },
  { label: "Local Facilities", href: "#facilities" },
  { label: "Location & Connectivity", href: "#location" },
  { label: "Property", href: "#property" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white sm:py-14">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                J.
              </span>
              <span className="text-xl font-bold">Jattari Explorer</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Your local guide to exploring Jattari, Uttar Pradesh — local
              information, facilities, connectivity, and property research.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Explore</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Information</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Verify local details and property information through reliable
              sources before making decisions.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="text-slate-300 transition hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-300 transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400">
          © 2026 Jattari Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
