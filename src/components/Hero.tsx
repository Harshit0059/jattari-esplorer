"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Pause,
  Play,
} from "lucide-react";

const slides = [
  {
    image: "/images/anouncements.jpeg",
    alt: "Jattari local announcements",
    eyebrow: "WELCOME TO JATTARI",
    title: "Discover Jattari",
    description:
      "Explore the places, people, culture and everyday life that make Jattari a special place to discover.",
  },
  {
    image: "/images/skyline%20aerohomes.jpeg",
    alt: "Skyline Aero Homes",
    eyebrow: "A PLACE TO GROW",
    title: "A New Perspective on Living",
    description:
      "Discover residential opportunities and learn more about the changing landscape around Jattari.",
  },
  {
    image: "/images/explore-jattari.jpeg",
    alt: "Jattari local market",
    eyebrow: "LOCAL LIFE & MARKETS",
    title: "Experience Local Life",
    description:
      "Get to know local markets, everyday essentials, neighbourhood businesses and the community.",
  },
  {
    image: "/images/culture.jpeg",
    alt: "Jattari culture and temple",
    eyebrow: "CULTURE & TRADITIONS",
    title: "Discover Our Heritage",
    description:
      "Explore local traditions, cultural places and the stories that connect people with Jattari.",
  },
  {
    image: "/images/anugrah.jpeg",
    alt: "Anugrah Homes in Jattari",
    eyebrow: "EXPLORE PROPERTY OPTIONS",
    title: "Find Your Place in Jattari",
    description:
      "Learn about the area's location, connectivity and property opportunities before planning your next step.",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(
    () => new Set()
  );

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handleImageError = (image: string) => {
    setImageErrors((previous) => {
      const updated = new Set(previous);
      updated.add(image);
      return updated;
    });
  };

  const currentSlide = slides[activeSlide];

  return (
    <section
      aria-label="Discover Jattari"
      className="relative isolate flex min-h-[650px] w-full items-center overflow-hidden bg-[#0B3D3E] sm:min-h-[700px] lg:min-h-[760px]"
    >
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          aria-hidden="true"
          className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
            index === activeSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {!imageErrors.has(slide.image) ? (
            <>
              {/* Blurred background fills the entire hero */}
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="100vw"
                className="scale-110 object-cover object-center opacity-50 blur-2xl"
              />

              {/* Main image stays full width */}
              <div
                className={`absolute inset-x-0 top-0 w-full overflow-hidden ${
                  index === 0
                    ? "h-[80%] sm:h-[85%] lg:h-[90%]"
                    : "h-full"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-cover object-center"
                  onError={() => handleImageError(slide.image)}
                />
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D3E] via-[#0F5257] to-[#287A6D]" />
          )}
        </div>
      ))}

      {/* Overlay keeps text readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B3D3E]/90 via-[#0B3D3E]/65 to-[#0B3D3E]/25" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B3D3E]/70 via-transparent to-[#0B3D3E]/20" />

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 top-1/4 z-[1] h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -left-12 top-[30%] z-[1] h-44 w-44 rounded-full border border-white/10 sm:h-60 sm:w-60" />

      {/* Main content: separate spacing prevents overlap */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-36">
        <div className="max-w-3xl">
          {/* Location label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white backdrop-blur-sm sm:mb-7 sm:text-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>JATTARI, UTTAR PRADESH</span>
          </div>

          {/* Slide heading */}
          <p
            key={`eyebrow-${activeSlide}`}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B9D8C8] sm:mb-4 sm:text-sm"
          >
            {currentSlide.eyebrow}
          </p>

          <h1
            key={`title-${activeSlide}`}
            className="max-w-3xl break-words text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl"
          >
            {currentSlide.title}
          </h1>

          {/* Description stays below the heading */}
          <p
            key={`description-${activeSlide}`}
            className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl"
          >
            {currentSlide.description}
          </p>

          {/* Buttons stay in normal document flow */}
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/explore-jattari"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0B3D3E] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#B9D8C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3D3E] sm:min-h-14 sm:px-7 sm:text-base"
            >
              Explore Jattari
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>

            <Link
              href="/location-connectivity"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-14 sm:px-7 sm:text-base"
            >
              Explore Location
              <MapPin className="h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex items-center gap-3 sm:mt-12">
          <div
            className="flex items-center gap-2"
            aria-label="Choose hero slide"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3D3E] ${
                  index === activeSlide
                    ? "w-9 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <span className="ml-1 text-sm font-medium tabular-nums text-white/80">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={() => setIsPaused((previous) => !previous)}
            aria-label={isPaused ? "Resume automatic slideshow" : "Pause automatic slideshow"}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {isPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#main-content"
        aria-label="Scroll to main content"
        className="absolute bottom-5 right-5 z-10 hidden items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white sm:flex md:bottom-8 md:right-10"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}