
"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/khatu%20shyam.jpeg",
    title: "Discover Jattari.",
    highlight: "Explore New Possibilities.",
    description:
      "Discover Jattari, Uttar Pradesh — its location, connectivity, local facilities and opportunities around the area.",
    label: "Discover Jattari",
  },
  {
    image: "/images/skyline%20aerohomes.jpeg",
    title: "Explore Local",
    highlight: "Places & Connectivity.",
    description:
      "Explore local surroundings, roads, nearby places and useful information about Jattari.",
    label: "Skyline Aero Homes",
  },
  {
    image: "/images/skyline%20aerohomes.jpeg",
    title: "Explore Local",
    highlight: "Places & Connectivity.",
    description:
      "Explore local surroundings, roads, nearby places and useful information about Jattari.",
    label: "Skyline Aero Homes",
  },
  {
    image: "/images/anugrah.jpeg",
    title: "Spaces for Living.",
    highlight: "Possibilities for Growth.",
    description:
      "Explore property-related information and opportunities in and around Jattari.",
    label: "Anugrah Homes",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="home"
      aria-label="Discover Jattari"
      className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-background sm:min-h-[700px] lg:min-h-[760px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setIsPaused(false);
        }
      }}
    >
      {/* Background slideshow */}
      {slides.map((slide, index) => (
        <div
          key={`${slide.image}-${index}`}
          aria-hidden="true"
          className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {!imageErrors.includes(slide.image) ? (
            <img
              src={slide.image}
              alt=""
              fetchPriority={index === 0 ? "high" : "auto"}
              className="absolute inset-0 h-full w-full object-cover object-center"
              onError={() => {
                setImageErrors((previous) =>
                  previous.includes(slide.image)
                    ? previous
                    : [...previous, slide.image]
                );
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-primary text-white">
              <p className="px-6 text-center">
                Image load nahi hui: {slide.image}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Theme-matched image overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[#0B3D3E]/35" />

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0B3D3E]/85 via-[#0F5257]/45 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0B3D3E]/65 via-transparent to-[#0F5257]/15" />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 z-10 h-72 w-72 rounded-full border border-[#B9D8C8]/25 sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-36 z-10 h-52 w-52 rounded-full border border-[#B9D8C8]/20 sm:h-72 sm:w-72"
      />

      {/* Hero content */}
      <div className="container-site relative z-20 w-full py-20 sm:py-24 lg:py-28">
        <div key={currentSlide.label} className="hero-text-in max-w-4xl">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#B9D8C8]/40 bg-[#0B3D3E]/55 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:text-sm">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B9D8C8] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B9D8C8]" />
            </span>

            Jattari Explorer

            <span className="text-white/60">/</span>

            Uttar Pradesh
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]">
            {currentSlide.title}

            <span className="mt-2 block text-[#B9D8C8]">
              {currentSlide.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-9">
            {currentSlide.description}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#explore"
              className="button-primary group min-h-12 w-full justify-center px-6 shadow-lg shadow-[#0B3D3E]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9D8C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3D3E] sm:w-auto"
            >
              Explore Jattari

              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="#about"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-[#B9D8C8]/70 bg-[#0B3D3E]/35 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#B9D8C8] hover:bg-[#B9D8C8] hover:text-[#0B3D3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9D8C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3D3E] sm:w-auto"
            >
              About Jattari

              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Slider indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12">
            <div className="flex items-center gap-2.5">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.label}-${index}`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${slide.label}`}
                  aria-pressed={index === activeSlide}
                  className={`min-h-6 rounded-full p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9D8C8] ${
                    index === activeSlide ? "w-14" : "w-8"
                  }`}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      index === activeSlide
                        ? "bg-[#B9D8C8]"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                </button>
              ))}
            </div>

            <span
              aria-live="polite"
              className="ml-1 text-xs font-bold tracking-[0.2em] text-white"
            >
              0{activeSlide + 1}
              <span className="mx-2 text-[#B9D8C8]/70">/</span>
              0{slides.length}
            </span>
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B9D8C8]">
            {currentSlide.label}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to learn about Jattari"
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-white/80 transition hover:text-[#B9D8C8] md:flex"
      >
        <span>SCROLL TO EXPLORE</span>

        <span className="hero-scroll-line block h-8 w-px bg-[#B9D8C8]/80" />
      </a>

      {/* Text and scroll animations */}
      <style jsx>{`
        .hero-text-in {
          animation: textReveal 700ms ease-out both;
        }

        .hero-scroll-line {
          transform-origin: top;
          animation: scrollLine 1.8s ease-in-out infinite;
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollLine {
          0%,
          100% {
            transform: scaleY(0.55);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-text-in,
          .hero-scroll-line {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
