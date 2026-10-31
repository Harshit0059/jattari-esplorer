"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const templeImage = "/images/temple.png";
const TITLE_LETTERS = ["J", "A", "T", "T", "A", "R", "I"];

interface ScrollLetterProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

/**
 * ScrollLetter:
 * findrealestate.com style letter-by-letter printing animation.
 * Sequential staggered reveal on scroll.
 */
function ScrollLetter({
  char,
  index,
  total,
  scrollYProgress,
}: ScrollLetterProps) {
  const start = 0.20 + (index / total) * 0.30;
  const end = start + 0.08;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], ["105%", "0%"]);
  const scale = useTransform(scrollYProgress, [start, end], [0.75, 1]);
  const rotate = useTransform(scrollYProgress, [start, end], [5, 0]);

  return (
    <span className="relative inline-flex overflow-hidden">
      <motion.span
        style={{
          opacity,
          y,
          scale,
          rotate,
          backgroundImage: `url("${templeImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
        }}
        className="inline-block text-[17vw] sm:text-[16vw] lg:text-[14vw] font-black leading-[0.82] select-none tracking-[-0.04em] drop-shadow-[0_14px_30px_rgba(0,0,0,0.3)] transform-gpu will-change-transform"
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 1. BUILDING SCROLL ANIMATION (findrealestate.com style)
  const templeHeight = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["45vh", "95vh"]
  );

  const templeScale = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1.02, 1.12]
  );

  // Bottom stays safely below the screen floor (12vh minimum), hiding the base completely
  const templeY = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["48vh", "12vh"]
  );

  // Stays clearly visible longer up to 0.65, then softly fades between 0.65 and 0.88
  const templeOpacity = useTransform(
    scrollYProgress,
    [0, 0.20, 0.65, 0.88],
    [1, 1, 0.85, 0]
  );

  // 2. BACKGROUND CLOUD PARALLAX
  const cloudBackLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-35%"]
  );

  const cloudBackRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "35%"]
  );

  const cloudBackMiddle = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  // 3. CLOUDS AROUND & IN FRONT OF TEMPLE (Layered over the building)
  const cloudAroundLeft = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["0%", "16%", "-30%"]
  );

  const cloudAroundRight = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["0%", "-16%", "30%"]
  );

  const cloudAroundSpire = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-12%", "14%", "28%"]
  );

  // 4. NAME REVEAL EXTRAS
  const badgeOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.24],
    [0, 1]
  );

  const badgeY = useTransform(
    scrollYProgress,
    [0.16, 0.24],
    [25, 0]
  );

  const descOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.58],
    [0, 1]
  );

  const descY = useTransform(
    scrollYProgress,
    [0.48, 0.58],
    [25, 0]
  );

  // 5. SKY CAMERA PARALLAX
  const skyScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.18]
  );

  const skyY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-8%"]
  );

  // 6. INITIAL HERO CONTENT (Fully visible at rest below navbar, fades only when scrolling past 0.15)
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.28],
    [1, 1, 0]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.28],
    ["0px", "-45px"]
  );

  // 7. SCROLL INDICATOR
  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.10],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Discover Jattari"
      className="relative h-[160vh] w-full bg-sky-300"
    >
      {/* STICKY CINEMATIC STAGE */}
      <div className="sticky top-0 h-[100svh] min-h-[600px] w-full overflow-hidden select-none">

        {/* SKY BACKGROUND */}
        <motion.div
          style={{
            scale: skyScale,
            y: skyY,
          }}
          className="absolute -inset-[15%] z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#8FC8F1_0%,#B7DDF4_42%,#E4EDF0_100%)]" />

          {/* Warm sunlight glow */}
          <div className="absolute -left-[10%] top-[15%] h-[65vh] w-[65vw] rounded-full bg-[radial-gradient(ellipse,rgba(255,216,174,0.65),transparent_70%)] blur-3xl" />

          {/* Sun disc glow */}
          <div className="absolute right-[5%] top-[10%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.7),transparent_70%)] blur-3xl" />
        </motion.div>

        {/* BACKGROUND CLOUDS (BEHIND TEMPLE - z-[1]) */}
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">

          {/* Left background clouds */}
          <motion.div
            style={{ x: cloudBackLeft }}
            className="absolute -left-[15%] top-[18%] h-44 w-[65vw] rounded-full bg-[#FFF0D0]/75 blur-[65px] sm:h-60"
          />

          <motion.div
            style={{ x: cloudBackLeft }}
            className="absolute left-[2%] top-[34%] h-36 w-[45vw] rounded-full bg-[#FFEAC2]/65 blur-[55px]"
          />

          {/* Right background clouds */}
          <motion.div
            style={{ x: cloudBackRight }}
            className="absolute -right-[15%] top-[22%] h-48 w-[65vw] rounded-full bg-[#FFF1D8]/70 blur-[70px] sm:h-64"
          />

          {/* Middle background clouds */}
          <motion.div
            style={{ x: cloudBackMiddle }}
            className="absolute left-[28%] top-[10%] h-36 w-[48vw] rounded-full bg-[#FFF4DF]/65 blur-[60px]"
          />

          {/* Animated lower floating clouds */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { x: [0, 45, 0], y: [0, -12, 0] }
            }
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[25%] left-[-10%] h-36 w-[55vw] rounded-full bg-[#FFE9C5]/60 blur-[65px]"
          />

          <motion.div
            animate={
              reduceMotion
                ? {}
                : { x: [0, -40, 0], y: [0, 10, 0] }
            }
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[28%] right-[-10%] h-40 w-[55vw] rounded-full bg-[#FFF0D6]/65 blur-[70px]"
          />
        </div>

        {/* SOFT ATMOSPHERIC HAZE */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[35%] bg-gradient-to-t from-white/30 to-transparent" />

        {/* INITIAL HERO CONTENT (CLEARLY VISIBLE BELOW NAVBAR - z-30) */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="absolute inset-x-0 top-0 z-30 flex justify-center px-4 pt-24 text-center sm:pt-28 lg:pt-32 pointer-events-auto"
        >
          <div className="mx-auto w-full max-w-[1450px]">

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D58A28] sm:text-sm"
            >
              CULTURE &amp; TRADITIONS
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-[#10251F] sm:text-7xl md:text-8xl lg:text-[104px]"
            >
              Discover Jattari
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#263D3A] sm:text-lg sm:leading-8 md:text-xl"
            >
              Explore the places, people, culture and traditions that make
              Jattari a special place to discover.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex justify-center sm:mt-8"
            >
              <Link
                href="/explore-jattari"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#10251F] px-8 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#254C3C] hover:shadow-2xl sm:min-h-14 sm:px-9 sm:text-base"
              >
                Explore Jattari

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* BUILDING / TEMPLE SCROLL FOREGROUND (z-[3]) */}
        <motion.div
          style={{
            height: templeHeight,
            opacity: templeOpacity,
          }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] overflow-hidden"
        >
          <motion.div
            style={{
              scale: templeScale,
              y: templeY,
            }}
            className="absolute inset-x-0 bottom-0 h-[92vh] origin-bottom transform-gpu"
          >
            <Image
              src={templeImage}
              alt="Andeshwar Mahadev Temple, Jattari"
              fill
              priority
              sizes="100vw"
              className="object-contain object-bottom"
            />
          </motion.div>

          {/* Base mist mask: ensures base is never seen */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#E4EDF0] via-[#E4EDF0]/70 to-transparent" />
        </motion.div>

        {/* FOREGROUND CLOUDS MOVING AROUND & IN FRONT OF TEMPLE (z-[4]) */}
        <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden">

          {/* Cloud drifting across left of temple */}
          <motion.div
            style={{ x: cloudAroundLeft }}
            animate={
              reduceMotion
                ? {}
                : { y: [-6, 6, -6], scale: [1, 1.04, 1] }
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[20%] -left-[10%] h-44 w-[52vw] rounded-full bg-white/45 blur-[45px] sm:h-56 sm:w-[44vw]"
          />

          {/* Cloud drifting across right of temple */}
          <motion.div
            style={{ x: cloudAroundRight }}
            animate={
              reduceMotion
                ? {}
                : { y: [8, -8, 8], scale: [1, 1.05, 1] }
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[26%] -right-[8%] h-48 w-[55vw] rounded-full bg-[#FFF4DF]/50 blur-[50px] sm:h-60 sm:w-[48vw]"
          />

          {/* Floating cloud wisp wrapping around temple spire */}
          <motion.div
            style={{ x: cloudAroundSpire }}
            animate={
              reduceMotion
                ? {}
                : { y: [-10, 10, -10], opacity: [0.35, 0.55, 0.35] }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[48%] left-[20%] h-28 w-[45vw] rounded-full bg-white/40 blur-[38px] sm:h-36 sm:w-[35vw]"
          />

          {/* Glowing mist across the temple base */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
        </div>

        {/* NAME PRINT REVEAL ("JATTARI" printed letter-by-letter on scroll - z-20) */}
        {/* Remains visible on screen, no blank fade-out */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[10%] sm:bottom-[12%] z-20 flex flex-col items-center px-4 text-center">

          {/* Top Badge */}
          <motion.p
            style={{
              opacity: badgeOpacity,
              y: badgeY,
            }}
            className="mb-3 text-xs font-semibold tracking-[0.3em] text-white drop-shadow-md sm:text-sm"
          >
            DISCOVER THE CULTURE
          </motion.p>

          {/* Staggered Letter-by-Letter Printing Reveal */}
          <div className="flex items-center justify-center gap-[0.02em]">
            {TITLE_LETTERS.map((char, index) => (
              <ScrollLetter
                key={`${char}-${index}`}
                char={char}
                index={index}
                total={TITLE_LETTERS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Bottom Subtitle */}
          <motion.p
            style={{
              opacity: descOpacity,
              y: descY,
            }}
            className="mt-4 max-w-xl text-xs leading-5 text-white/95 drop-shadow-sm sm:text-sm sm:leading-6"
          >
            A closer look at the heritage, community and everyday life of
            Jattari.
          </motion.p>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          style={{ opacity: scrollOpacity }}
          className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold tracking-widest text-white sm:bottom-7"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
}
