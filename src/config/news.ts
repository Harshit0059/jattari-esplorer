
export type NewsCategory = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export const newsPageConfig = {
  eyebrow: "JATTARI COMMUNITY",
  title: "News & Local Updates",
  description:
    "Stay informed about local developments, road connectivity, and community announcements in Jattari.",
  noticeTitle: "Reliable local information starts here",
  noticeDescription:
    "This page will share local updates as information becomes available and can be verified. No unverified news is presented as fact.",
  categories: [
    {
      title: "Local Developments",
      description:
        "Updates about local infrastructure, public facilities, and developments around Jattari.",
      href: "/news-updates/local-developments",
      label: "Explore developments",
    },
    {
      title: "Road & Connectivity",
      description:
        "Information about roads, transport links, and connectivity-related updates.",
      href: "/news-updates/connectivity",
      label: "Explore connectivity",
    },
    {
      title: "Local Announcements",
      description:
        "Community notices and local announcements, subject to verification.",
      href: "/news-updates/announcements",
      label: "View announcements",
    },
  ] satisfies NewsCategory[],
} as const;
