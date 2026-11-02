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
    <footer className="relative border-t border-[#D8E5E8] bg-white py-12 text-[#10251F] sm:py-16">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F2F6] border border-[#D58A28]/40 text-lg font-black text-[#D58A28] shadow-sm">
                J.
              </span>
              <span className="text-xl font-extrabold tracking-tight text-[#10251F]">
                Jattari <span className="text-[#D58A28]">Explorer</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#5C736D]">
              Your local guide to exploring Jattari, Uttar Pradesh — local
              heritage, community life, connectivity, and property research.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D58A28]">
              Explore
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#5C736D] transition hover:text-[#10251F]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D58A28]">
              Information
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5C736D]">
              Verify local details and property information through reliable
              sources before making decisions.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="text-[#5C736D] transition hover:text-[#10251F]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#5C736D] transition hover:text-[#10251F]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#D8E5E8] pt-6 text-xs text-[#7A938C]">
          © 2026 Jattari Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
