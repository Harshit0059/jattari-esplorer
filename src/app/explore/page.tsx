
// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const places = [
//   {
//     number: "01",
//     title: "Location & Connectivity",
//     description:
//       "Explore Jattari's geographical location, nearby towns, road routes, transport options, and regional connectivity.",
//     href: "/location-connectivity",
//     label: "Explore location",
//   },
//   {
//     number: "02",
//     title: "Attractions & Places to Visit",
//     description:
//       "Discover parks, historic landmarks, cultural destinations, and places to explore around Jattari and the Aligarh region.",
//     href: "/explore/attractions",
//     label: "Explore attractions",
//   },
//   {
//     number: "04",
//     title: "History & Culture",
//     description:
//       "Discover the wider Aligarh region's historical background, local traditions, and everyday life.",
//     href: "/explore/history-culture",
//     label: "Explore history & culture",
//   },
//   {
//     number: "05",
//     title: "Food & Local Eateries",
//     description:
//       "Explore regional food traditions and learn more about local eating experiences.",
//     href: "/explore/food",
//     label: "Explore food",
//   },
//   {
//     number: "06",
//     title: "Lifestyle & Markets",
//     description:
//       "Learn about shopping areas, small businesses, local services, and daily activities.",
//     href: "/explore/lifestyle-markets",
//     label: "Explore lifestyle",
//   },
//   {
//     number: "07",
//     title: "Travel Tips",
//     description:
//       "Prepare for your visit with practical information to help you explore the area.",
//     href: "/explore/travel-tips",
//     label: "View travel tips",
//   },
// ];

// const revealClass =
//   "explore-reveal translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none";

// export default function ExplorePage() {
//   useEffect(() => {
//     const elements = document.querySelectorAll<HTMLElement>(
//       ".explore-reveal"
//     );

//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     const reveal = (element: HTMLElement) => {
//       element.classList.remove("translate-y-8", "opacity-0");
//       element.classList.add("translate-y-0", "opacity-100");
//     };

//     if (reduceMotion || !("IntersectionObserver" in window)) {
//       elements.forEach((element) => reveal(element));
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             reveal(entry.target as HTMLElement);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -40px 0px",
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
//       {/* HERO SECTION */}
//       <section className="group/hero relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#06483D] sm:min-h-[500px] md:min-h-[540px] md:px-12">
//         <Image
//           src="/images/explore-jattari.jpeg"
//           alt="Explore Jattari and its surrounding area"
//           fill
//           priority
//           sizes="100vw"
//           className="z-0 object-cover object-center transition-transform duration-[12000ms] ease-out group-hover/hero:scale-105 motion-reduce:transition-none motion-reduce:group-hover/hero:scale-100"
//         />

//         {/* Image overlays */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#06483D]/80 via-[#06483D]/45 to-[#06483D]/10"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#06483D]/50 via-transparent to-[#06483D]/20"
//         />

//         {/* Decorative elements */}
//         <div className="pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full border border-[#FFF9F0]/20 transition-transform duration-1000 group-hover/hero:rotate-45" />

//         <div className="pointer-events-none absolute -bottom-28 left-1/3 z-10 h-72 w-72 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 group-hover/hero:scale-125" />

//         {/* Hero content */}
//         <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-16 md:px-0 md:py-20">
//           <div className="max-w-4xl">
//             <p
//               className={`${revealClass} mt-12 text-xs font-bold uppercase tracking-[0.3em] text-[#F2AE45] sm:text-sm`}
//             >
//               Discover the Region
//             </p>

//             <h1
//               className={`${revealClass} mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl`}
//               style={{ transitionDelay: "100ms" }}
//             >
//               Explore Jattari
//               <span className="mt-2 block text-[#F2AE45]">
//                 Places, People &amp; Everyday Life
//               </span>
//             </h1>

//             <p
//               className={`${revealClass} mt-6 max-w-2xl text-sm leading-7 text-white/90 drop-shadow sm:text-base sm:leading-8 md:text-lg`}
//               style={{ transitionDelay: "200ms" }}
//             >
//               Discover Jattari in Aligarh district, Uttar Pradesh. Explore its
//               location, nearby attractions, local facilities, markets, culture,
//               food, and useful information for visitors.
//             </p>

//             <a
//               href="#explore-topics"
//               className={`${revealClass} mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2AE45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06483D]`}
//               style={{ transitionDelay: "300ms" }}
//             >
//               Start Exploring
//               <span
//                 aria-hidden="true"
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               >
//                 →
//               </span>
//             </a>

//             <div
//               className={`${revealClass} mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-6 text-sm text-white/90`}
//               style={{ transitionDelay: "400ms" }}
//             >
//               <span>
//                 <strong className="text-white">Location</strong>
//                 <span className="mx-2 text-[#F2AE45]">/</span>
//                 Jattari
//               </span>

//               <span>
//                 <strong className="text-white">Region</strong>
//                 <span className="mx-2 text-[#F2AE45]">/</span>
//                 Western Uttar Pradesh
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRODUCTION */}
//       <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
//         <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
//           <div className={revealClass}>
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
//               Get to Know Jattari
//             </p>

//             <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
//               A closer look at the town and its surroundings
//             </h2>

//             <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
//               Every place has its own character. Explore Jattari through its
//               location, nearby destinations, local markets, essential
//               services, regional history, and everyday experiences.
//             </p>

//             <p className="mt-4 text-sm leading-8 text-[#64736D] sm:text-base">
//               Use these guides to find helpful information about the area.
//               Details such as opening hours, routes, available services, and
//               local facilities should be checked before travelling.
//             </p>

//             <Link
//               href="/explore/introduction"
//               className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-colors duration-300 hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
//             >
//               Get introduced to Jattari
//               <span
//                 aria-hidden="true"
//                 className="transition-transform duration-300 group-hover:translate-x-2"
//               >
//                 →
//               </span>
//             </Link>
//           </div>

//           <div
//             className={`${revealClass} relative border-l-4 border-[#D58A28] py-3 pl-6 transition-all duration-500 hover:translate-x-2 sm:pl-8`}
//             style={{ transitionDelay: "150ms" }}
//           >
//             <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
//               Explore at your pace
//             </span>

//             <h3 className="mt-4 text-2xl font-bold leading-snug text-[#172B26] sm:text-3xl">
//               Understand the location. Discover the community.
//             </h3>

//             <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
//               From practical visitor information to regional attractions,
//               each guide gives you another way to learn about Jattari.
//             </p>

//             <div className="mt-5 h-1 w-16 rounded-full bg-[#D58A28] transition-all duration-500 hover:w-28" />
//           </div>
//         </div>
//       </section>
// {/* JATTARI STREET VIEW */}
// <section className="relative overflow-hidden bg-[#F3EBDD] px-6 py-14 sm:py-16 md:px-12 md:py-20">
//   <div className="mx-auto max-w-6xl">
//     <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
//       {/* LEFT CONTENT */}
//       <div className="explore-reveal">
//         <div className="inline-flex items-center gap-2 rounded-full border border-[#06483D]/15 bg-[#FFF9F0] px-3 py-1.5">
//           <span className="h-2 w-2 rounded-full bg-[#D58A28]" />
//           <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#06483D]">
//             Explore Jattari in 360°
//           </span>
//         </div>

//         <h2 className="mt-5 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
//           Take a closer look
//           <span className="mt-1 block text-[#0B5A49]">at Jattari</span>
//         </h2>

//         <p className="mt-5 max-w-md text-sm leading-7 text-[#64736D] sm:text-base">
//           Explore a real Google Street View panorama from Jattari, Aligarh
//           district. Move around the 360° view and get a street-level glimpse
//           of the selected location.
//         </p>

//         <div className="mt-7 flex items-start gap-3 border-t border-[#06483D]/15 pt-5">
//           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06483D] text-[#FFF9F0]">
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="h-5 w-5"
//             >
//               <path
//                 d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
//                 stroke="currentColor"
//                 strokeWidth="1.7"
//               />
//               <circle
//                 cx="12"
//                 cy="9"
//                 r="2.3"
//                 stroke="currentColor"
//                 strokeWidth="1.7"
//               />
//             </svg>
//           </div>

//           <div>
//             <p className="text-sm font-bold text-[#172B26]">
//               Jattari, Aligarh District
//             </p>
//             <p className="mt-1 text-xs leading-5 text-[#64736D]">
//               Uttar Pradesh, India
//             </p>
//           </div>
//         </div>

//         <a
//           href="https://www.google.com/maps/place/Jattari,+Uttar+Pradesh+202137/@28.0288648,77.65919,215a,75y,51.02h,90.18t/data=!3m7!1e1!3m5!1sV8isf-s3muwJvyYN7ikvKw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.1793921534147529%26panoid%3DV8isf-s3muwJvyYN7ikvKw%26yaw%3D51.022305053157666!7i16384!8i8192!4m15!1m8!3m7!1s0x39734c0092e80951:0x2a22db0dec9bebb0!2sJattari,+Uttar+Pradesh+202137!3b1!8m2!3d28.0233337!4d77.656476!16z%2Fm%2F0f50_f!3m5!1s0x39734c0092e80951:0x2a22db0dec9bebb0!8m2!3d28.0233337!4d77.656476!16z%2Fm%2F0f50_f?entry=ttu"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-[#06483D] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B5A49] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//         >
//           Explore 360° View
//           <span
//             aria-hidden="true"
//             className="transition-transform duration-300 group-hover:translate-x-1"
//           >
//             ↗
//           </span>
//         </a>
//       </div>

//       {/* STREET VIEW FRAME */}
//       <div
//         className="explore-reveal"
//         style={{ transitionDelay: "150ms" }}
//       >
//         <div className="group relative rounded-2xl border border-[#06483D]/10 bg-white p-2.5 shadow-[0_16px_45px_rgb(23_43_38_/_12%)] sm:p-3">
//           {/* Small top label */}
//           <div className="flex items-center justify-between gap-3 px-2 pb-3">
//             <div className="flex items-center gap-2">
//               <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F0E9] text-[#06483D]">
//                 <svg
//                   aria-hidden="true"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   className="h-4 w-4"
//                 >
//                   <circle
//                     cx="12"
//                     cy="12"
//                     r="8.5"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                   />
//                   <path
//                     d="M3.8 12h16.4M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5s-1 6.1-3.2 8.5c-2.2-2.4-3.2-5.2-3.2-8.5s1-6.1 3.2-8.5Z"
//                     stroke="currentColor"
//                     strokeWidth="1.4"
//                   />
//                 </svg>
//               </span>

//               <span className="text-xs font-bold text-[#172B26] sm:text-sm">
//                 Google Street View
//               </span>
//             </div>

//             <span className="rounded-full bg-[#FFF0D8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#975D15] sm:text-[11px]">
//               360° Panorama
//             </span>
//           </div>

//           <div className="relative overflow-hidden rounded-xl bg-[#E8E1D5]">
//             <iframe
//               title="Google Street View of Jattari, Aligarh District"
//               src="https://www.google.com/maps/embed?pb=!4v0!6m8!1m7!1sV8isf-s3muwJvyYN7ikvKw!2m2!1d28.0288648!2d77.65919!3f51.02!4f0!5f0.7820865974627469"
//               width="100%"
//               height="420"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="block h-[280px] w-full sm:h-[360px] lg:h-[420px]"
//             />
//           </div>

//           <div className="flex items-center justify-between gap-3 px-2 pt-3">
//             <p className="text-xs text-[#64736D]">
//               Move around to explore the surroundings
//             </p>
//             <span className="shrink-0 text-xs font-semibold text-[#0B5A49]">
//               Jattari, UP
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//       {/* EXPLORE TOPICS */}
//       <section
//         id="explore-topics"
//         className="scroll-mt-24 border-y border-[#06483D]/15 bg-[#F3EBDD] px-6 py-14 sm:py-16 md:px-12 md:py-20"
//       >
//         <div className="mx-auto max-w-6xl">
//           <div className={revealClass}>
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
//               Explore by Topic
//             </p>

//             <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
//               What would you like to discover?
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
//               Choose a topic to explore information about Jattari and its
//               surrounding region.
//             </p>
//           </div>

//           <div className="mt-9 border-t border-[#06483D]/20">
//             {places.map((place, index) => (
//               <article
//                 key={place.number}
//                 className={`${revealClass} group grid gap-4 border-b border-[#06483D]/15 py-6 transition-all duration-300 hover:bg-[#FFF9F0]/70 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-6 sm:px-4`}
//                 style={{
//                   transitionDelay: `${Math.min(index * 70, 350)}ms`,
//                 }}
//               >
//                 <span className="text-sm font-bold tracking-widest text-[#B9741C] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#06483D]">
//                   {place.number}
//                 </span>

//                 <div>
//                   <h3 className="text-lg font-bold text-[#172B26] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0B5A49] sm:text-xl">
//                     {place.title}
//                   </h3>

//                   <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64736D] transition-colors duration-300 group-hover:text-[#435B51]">
//                     {place.description}
//                   </p>
//                 </div>

//                 <Link
//                   href={place.href}
//                   className="inline-flex items-center gap-2 justify-self-start text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:text-[#B9741C] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] sm:justify-self-end"
//                 >
//                   {place.label}
//                   <span
//                     aria-hidden="true"
//                     className="transition-transform duration-300 group-hover:translate-x-2"
//                   >
//                     →
//                   </span>
//                 </Link>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CLOSING SECTION */}
//       <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
//         <div
//           className={`${revealClass} mx-auto max-w-6xl border-t border-[#06483D]/15 pt-8 sm:pt-10`}
//         >
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
//             Your Jattari Guide
//           </p>

//           <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-[#172B26] sm:text-3xl md:text-4xl">
//             Keep exploring and learn more about the area.
//           </h2>

//           <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64736D] sm:text-base">
//             Browse the available guides to learn about local facilities,
//             regional culture, attractions, shopping, and practical travel
//             information.
//           </p>

//           <div className="mt-7 flex flex-wrap gap-3">
//             <Link
//               href="/location-connectivity"
//               className="group inline-flex items-center gap-2 rounded-xl bg-[#06483D] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//             >
//               Location &amp; Connectivity
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>

//             <Link
//               href="/explore/attractions"
//               className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//             >
//               Attractions &amp; Places to Visit
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>

//             <Link
//               href="/explore/contact-feedback"
//               className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//             >
//               Contact &amp; Feedback
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }





















// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const places = [
//   {
//     number: "01",
//     title: "Location & Connectivity",
//     description:
//       "Explore Jattari's geographical location, nearby towns, road routes, transport options, and regional connectivity.",
//     href: "/location-connectivity",
//     label: "Explore location",
//   },
//   {
//     number: "02",
//     title: "Attractions & Places to Visit",
//     description:
//       "Discover parks, historic landmarks, cultural destinations, and places to explore around Jattari and the Aligarh region.",
//     href: "/explore/attractions",
//     label: "Explore attractions",
//   },
//   {
//     number: "04",
//     title: "History & Culture",
//     description:
//       "Discover the wider Aligarh region's historical background, local traditions, and everyday life.",
//     href: "/explore/history-culture",
//     label: "Explore history & culture",
//   },
//   {
//     number: "05",
//     title: "Food & Local Eateries",
//     description:
//       "Explore regional food traditions and learn more about local eating experiences.",
//     href: "/explore/food",
//     label: "Explore food",
//   },
//   {
//     number: "06",
//     title: "Lifestyle & Markets",
//     description:
//       "Learn about shopping areas, small businesses, local services, and daily activities.",
//     href: "/explore/lifestyle-markets",
//     label: "Explore lifestyle",
//   },
//   {
//     number: "07",
//     title: "Travel Tips",
//     description:
//       "Prepare for your visit with practical information to help you explore the area.",
//     href: "/explore/travel-tips",
//     label: "View travel tips",
//   },
// ];

// const revealClass =
//   "explore-reveal translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none";

// const googleMapsUrl =
//   "https://www.google.com/maps/place/Jattari,+Uttar+Pradesh+202137/@28.0288648,77.65919,215a,75y,51.02h,90.18t/data=!3m7!1e1!3m5!1sV8isf-s3muwJvyYN7ikvKw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.1793921534147529%26panoid%3DV8isf-s3muwJvyYN7ikvKw%26yaw%3D51.022305053157666!7i16384!8i8192!4m15!1m8!3m7!1s0x39734c0092e80951:0x2a22db0dec9bebb0!2sJattari,+Uttar+Pradesh+202137!3b1!8m2!3d28.0233337!4d77.656476!16z%2Fm%2F0f50_f!3m5!1s0x39734c0092e80951:0x2a22db0dec9bebb0!8m2!3d28.0233337!4d77.656476!16z%2Fm%2F0f50_f?entry=ttu";

// const streetViewEmbedUrl =
//   "https://www.google.com/maps/embed?pb=!4v0!6m8!1m7!1sV8isf-s3muwJvyYN7ikvKw!2m2!1d28.0288648!2d77.65919!3f51.02!4f0!5f0.7820865974627469";

// const googleMapEmbedUrl =
//   "https://maps.google.com/maps?q=Jattari%2C%20Uttar%20Pradesh%20202137&z=14&output=embed";
// export default function ExplorePage() {
//   const [streetViewLoading, setStreetViewLoading] = useState(false);
//   const [streetViewOpen, setStreetViewOpen] = useState(false);

//   useEffect(() => {
//     const elements = document.querySelectorAll<HTMLElement>(
//       ".explore-reveal"
//     );

//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     const reveal = (element: HTMLElement) => {
//       element.classList.remove("translate-y-8", "opacity-0");
//       element.classList.add("translate-y-0", "opacity-100");
//     };

//     if (reduceMotion || !("IntersectionObserver" in window)) {
//       elements.forEach((element) => reveal(element));
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             reveal(entry.target as HTMLElement);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -40px 0px",
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!streetViewLoading) return;

//     const timeout = window.setTimeout(() => {
//       setStreetViewLoading(false);
//       setStreetViewOpen(true);
//     }, 5000);

//     return () => window.clearTimeout(timeout);
//   }, [streetViewLoading]);

//   const handleOpenStreetView = () => {
//     setStreetViewOpen(false);
//     setStreetViewLoading(true);
//   };

//   const handleCloseStreetView = () => {
//     setStreetViewOpen(false);
//     setStreetViewLoading(false);
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
//       {/* HERO SECTION */}
//       <section className="group/hero relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#06483D] sm:min-h-[500px] md:min-h-[540px] md:px-12">
//         <Image
//           src="/images/explore-jattari.jpeg"
//           alt="Explore Jattari and its surrounding area"
//           fill
//           priority
//           sizes="100vw"
//           className="z-0 object-cover object-center transition-transform duration-[12000ms] ease-out group-hover/hero:scale-105 motion-reduce:transition-none motion-reduce:group-hover/hero:scale-100"
//         />

//         {/* Image overlays */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#06483D]/80 via-[#06483D]/45 to-[#06483D]/10"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#06483D]/50 via-transparent to-[#06483D]/20"
//         />

//         {/* Decorative elements */}
//         <div className="pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full border border-[#FFF9F0]/20 transition-transform duration-1000 group-hover/hero:rotate-45" />

//         <div className="pointer-events-none absolute -bottom-28 left-1/3 z-10 h-72 w-72 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 group-hover/hero:scale-125" />

//         {/* Hero content */}
//         <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-16 md:px-0 md:py-20">
//           <div className="max-w-4xl">
//             <p
//               className={`${revealClass} mt-12 text-xs font-bold uppercase tracking-[0.3em] text-[#F2AE45] sm:text-sm`}
//             >
//               Discover the Region
//             </p>

//             <h1
//               className={`${revealClass} mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl`}
//               style={{ transitionDelay: "100ms" }}
//             >
//               Explore Jattari
//               <span className="mt-2 block text-[#F2AE45]">
//                 Places, People &amp; Everyday Life
//               </span>
//             </h1>

//             <p
//               className={`${revealClass} mt-6 max-w-2xl text-sm leading-7 text-white/90 drop-shadow sm:text-base sm:leading-8 md:text-lg`}
//               style={{ transitionDelay: "200ms" }}
//             >
//               Discover Jattari in Aligarh district, Uttar Pradesh. Explore its
//               location, nearby attractions, local facilities, markets, culture,
//               food, and useful information for visitors.
//             </p>

//             <a
//               href="#explore-topics"
//               className={`${revealClass} mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2AE45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06483D]`}
//               style={{ transitionDelay: "300ms" }}
//             >
//               Start Exploring
//               <span
//                 aria-hidden="true"
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               >
//                 →
//               </span>
//             </a>

//             <div
//               className={`${revealClass} mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-6 text-sm text-white/90`}
//               style={{ transitionDelay: "400ms" }}
//             >
//               <span>
//                 <strong className="text-white">Location</strong>
//                 <span className="mx-2 text-[#F2AE45]">/</span>
//                 Jattari
//               </span>

//               <span>
//                 <strong className="text-white">Region</strong>
//                 <span className="mx-2 text-[#F2AE45]">/</span>
//                 Western Uttar Pradesh
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRODUCTION */}
//       <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
//         <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
//           <div className={revealClass}>
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
//               Get to Know Jattari
//             </p>

//             <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
//               A closer look at the town and its surroundings
//             </h2>

//             <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
//               Every place has its own character. Explore Jattari through its
//               location, nearby destinations, local markets, essential
//               services, regional history, and everyday experiences.
//             </p>

//             <p className="mt-4 text-sm leading-8 text-[#64736D] sm:text-base">
//               Use these guides to find helpful information about the area.
//               Details such as opening hours, routes, available services, and
//               local facilities should be checked before travelling.
//             </p>

//             <Link
//               href="/explore/introduction"
//               className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-colors duration-300 hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
//             >
//               Get introduced to Jattari
//               <span
//                 aria-hidden="true"
//                 className="transition-transform duration-300 group-hover:translate-x-2"
//               >
//                 →
//               </span>
//             </Link>
//           </div>

//           <div
//             className={`${revealClass} relative border-l-4 border-[#D58A28] py-3 pl-6 transition-all duration-500 hover:translate-x-2 sm:pl-8`}
//             style={{ transitionDelay: "150ms" }}
//           >
//             <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
//               Explore at your pace
//             </span>

//             <h3 className="mt-4 text-2xl font-bold leading-snug text-[#172B26] sm:text-3xl">
//               Understand the location. Discover the community.
//             </h3>

//             <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
//               From practical visitor information to regional attractions,
//               each guide gives you another way to learn about Jattari.
//             </p>

//             <div className="mt-5 h-1 w-16 rounded-full bg-[#D58A28] transition-all duration-500 hover:w-28" />
//           </div>
//         </div>
//       </section>

//       {/* JATTARI STREET VIEW */}
//       <section className="relative overflow-hidden bg-[#F3EBDD] px-6 py-14 sm:py-16 md:px-12 md:py-20">
//         <div className="mx-auto max-w-6xl">
//           <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
//             {/* LEFT CONTENT */}
//             <div className="explore-reveal">
//               <div className="inline-flex items-center gap-2 rounded-full border border-[#06483D]/15 bg-[#FFF9F0] px-3 py-1.5">
//                 <span className="h-2 w-2 rounded-full bg-[#D58A28]" />
//                 <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#06483D]">
//                   Explore Jattari in 360°
//                 </span>
//               </div>

//               <h2 className="mt-5 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
//                 Take a closer look
//                 <span className="mt-1 block text-[#0B5A49]">at Jattari</span>
//               </h2>

//               <p className="mt-5 max-w-md text-sm leading-7 text-[#64736D] sm:text-base">
//                 Explore a real Google Street View panorama from Jattari,
//                 Aligarh district. Move around the 360° view and get a
//                 street-level glimpse of the selected location.
//               </p>

//               <div className="mt-7 flex items-start gap-3 border-t border-[#06483D]/15 pt-5">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06483D] text-[#FFF9F0]">
//                   <svg
//                     aria-hidden="true"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     className="h-5 w-5"
//                   >
//                     <path
//                       d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
//                       stroke="currentColor"
//                       strokeWidth="1.7"
//                     />
//                     <circle
//                       cx="12"
//                       cy="9"
//                       r="2.3"
//                       stroke="currentColor"
//                       strokeWidth="1.7"
//                     />
//                   </svg>
//                 </div>

//                 <div>
//                   <p className="text-sm font-bold text-[#172B26]">
//                     Jattari, Aligarh District
//                   </p>
//                   <p className="mt-1 text-xs leading-5 text-[#64736D]">
//                     Uttar Pradesh, India
//                   </p>
//                 </div>
//               </div>

//               {/* Street View controls */}
//               {!streetViewOpen && !streetViewLoading && (
//                 <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
//                   <button
//                     type="button"
//                     onClick={handleOpenStreetView}
//                     className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#06483D] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B5A49] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//                   >
//                     Explore in 360°
//                     <span
//                       aria-hidden="true"
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     >
//                       ↗
//                     </span>
//                   </button>

//                   <a
//                     href={googleMapsUrl}
//                   >
//                     Explore in Google Maps
//                     <span aria-hidden="true">↗</span>
//                   </a>
//                 </div>
//               )}

//               {/* Blueprint loading animation */}
//               {streetViewLoading && (
//                 <div
//                   className="blueprint-loader mt-7 overflow-hidden rounded-2xl border border-[#168BFF]/50 bg-[#061B3A] p-5 text-[#8CCBFF] shadow-[0_0_35px_rgba(20,130,255,0.18)]"
//                   role="status"
//                   aria-live="polite"
//                   aria-label="Preparing the 360 degree Street View"
//                 >
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="text-xs font-bold uppercase tracking-[0.22em]">
//                       Street View initializing
//                     </span>
//                     <span className="blueprint-pulse h-2 w-2 rounded-full bg-[#48B5FF]" />
//                   </div>

//                   <div className="blueprint-grid relative mt-5 h-28 overflow-hidden rounded-lg border border-[#258BDE]/40">
//                     <div className="blueprint-scan absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#63C6FF] to-transparent shadow-[0_0_15px_#39AFFF]" />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <svg
//                         aria-hidden="true"
//                         viewBox="0 0 120 70"
//                         fill="none"
//                         className="h-20 w-32 text-[#5DBBFF]"
//                       >
//                         <path
//                           d="M12 58 36 35 57 45 84 16 108 31M12 58h96M36 35V58M57 45V58M84 16V58M20 22h20M90 8h18"
//                           stroke="currentColor"
//                           strokeWidth="1.2"
//                           strokeDasharray="4 3"
//                         />
//                         <circle cx="84" cy="16" r="5" stroke="currentColor" />
//                         <circle cx="84" cy="16" r="1.5" fill="currentColor" />
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between text-[11px] font-semibold tracking-wide">
//                     <span>Mapping panorama coordinates…</span>
//                     <span className="blueprint-count">360°</span>
//                   </div>
//                   <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#12365D]">
//                     <div className="blueprint-progress h-full rounded-full bg-gradient-to-r from-[#168BFF] to-[#76D7FF]" />
//                   </div>
//                   <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#5EA9DE]">
//                     Please wait · 5 seconds
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* STREET VIEW PANEL */}
//             <div
//               className={`min-w-0 ${
//                 streetViewOpen
//                   ? "streetview-panel-open"
//                   : "hidden"
//               }`}
//               aria-hidden={!streetViewOpen}
//             >
//               {streetViewOpen && (
//                 <div className="group relative rounded-2xl border border-[#06483D]/10 bg-white p-2.5 shadow-[0_16px_45px_rgb(23_43_38_/_12%)] sm:p-3">
//                   <div className="flex items-center justify-between gap-3 px-2 pb-3">
//                     <div className="flex items-center gap-2">
//                       <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F0E9] text-[#06483D]">
//                         <svg
//                           aria-hidden="true"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           className="h-4 w-4"
//                         >
//                           <circle
//                             cx="12"
//                             cy="12"
//                             r="8.5"
//                             stroke="currentColor"
//                             strokeWidth="1.6"
//                           />
//                           <path
//                             d="M3.8 12h16.4M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5s-1 6.1-3.2 8.5c-2.2-2.4-3.2-5.2-3.2-8.5s1-6.1 3.2-8.5Z"
//                             stroke="currentColor"
//                             strokeWidth="1.4"
//                           />
//                         </svg>
//                       </span>
//                       <span className="text-xs font-bold text-[#172B26] sm:text-sm">
//                         Google Street View
//                       </span>
//                     </div>

//                     <span className="rounded-full bg-[#FFF0D8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#975D15] sm:text-[11px]">
//                       360° Panorama
//                     </span>
//                   </div>

//                   <div className="relative overflow-hidden rounded-xl bg-[#E8E1D5]">
//                     <iframe
//                       title="Google Street View of Jattari, Aligarh District"
//                       src={streetViewEmbedUrl}
//                       width="100%"
//                       height="420"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       className="block h-[280px] w-full sm:h-[360px] lg:h-[420px]"
//                     />
//                   </div>

//                   <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-3">
//                     <p className="text-xs text-[#64736D]">
//                       Move around to explore the surroundings
//                     </p>
//                     <button
//                       type="button"
//                       onClick={handleCloseStreetView}
//                       className="inline-flex items-center gap-2 rounded-lg border border-[#06483D]/15 px-3 py-2 text-xs font-bold text-[#06483D] transition-colors hover:border-[#D58A28] hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
//                     >
//                       Close View
//                       <span aria-hidden="true">×</span>
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EXPLORE TOPICS */}
//       <section
//         id="explore-topics"
//         className="scroll-mt-24 border-y border-[#06483D]/15 bg-[#F3EBDD] px-6 py-14 sm:py-16 md:px-12 md:py-20"
//       >
//         <div className="mx-auto max-w-6xl">
//           <div className={revealClass}>
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
//               Explore by Topic
//             </p>

//             <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
//               What would you like to discover?
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
//               Choose a topic to explore information about Jattari and its
//               surrounding region.
//             </p>
//           </div>

//           <div className="mt-9 border-t border-[#06483D]/20">
//             {places.map((place, index) => (
//               <article
//                 key={place.number}
//                 className={`${revealClass} group grid gap-4 border-b border-[#06483D]/15 py-6 transition-all duration-300 hover:bg-[#FFF9F0]/70 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-6 sm:px-4`}
//                 style={{
//                   transitionDelay: `${Math.min(index * 70, 350)}ms`,
//                 }}
//               >
//                 <span className="text-sm font-bold tracking-widest text-[#B9741C] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#06483D]">
//                   {place.number}
//                 </span>

//                 <div>
//                   <h3 className="text-lg font-bold text-[#172B26] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0B5A49] sm:text-xl">
//                     {place.title}
//                   </h3>

//                   <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64736D] transition-colors duration-300 group-hover:text-[#435B51]">
//                     {place.description}
//                   </p>
//                 </div>

//                 <Link
//                   href={place.href}
//                   className="inline-flex items-center gap-2 justify-self-start text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:text-[#B9741C] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] sm:justify-self-end"
//                 >
//                   {place.label}
//                   <span
//                     aria-hidden="true"
//                     className="transition-transform duration-300 group-hover:translate-x-2"
//                   >
//                     →
//                   </span>
//                 </Link>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CLOSING SECTION */}
//       <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
//         <div
//           className={`${revealClass} mx-auto max-w-6xl border-t border-[#06483D]/15 pt-8 sm:pt-10`}
//         >
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
//             Your Jattari Guide
//           </p>

//           <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-[#172B26] sm:text-3xl md:text-4xl">
//             Keep exploring and learn more about the area.
//           </h2>

//           <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64736D] sm:text-base">
//             Browse the available guides to learn about local facilities,
//             regional culture, attractions, shopping, and practical travel
//             information.
//           </p>

//           <div className="mt-7 flex flex-wrap gap-3">
//             <Link
//               href="/location-connectivity"
//               className="group inline-flex items-center gap-2 rounded-xl bg-[#06483D] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//             >
//               Location &amp; Connectivity
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>

//             <Link
//               href="/explore/attractions"
//               className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//             >
//               Attractions &amp; Places to Visit
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>

//             <Link
//               href="/explore/contact-feedback"
//               className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
//             >
//               Contact &amp; Feedback
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .blueprint-grid {
//           background-color: #061b3a;
//           background-image:
//             linear-gradient(rgba(52, 150, 235, 0.14) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(52, 150, 235, 0.14) 1px, transparent 1px);
//           background-size: 18px 18px;
//         }

//         .blueprint-scan {
//           animation: blueprintScan 1.35s linear infinite;
//         }

//         .blueprint-progress {
//           width: 0%;
//           animation: blueprintProgress 5s linear forwards;
//         }

//         .blueprint-pulse {
//           animation: blueprintPulse 1s ease-in-out infinite alternate;
//         }

//         .streetview-panel-open {
//           animation: streetViewEnter 700ms cubic-bezier(0.2, 1.35, 0.45, 1) both;
//         }

//         @keyframes blueprintScan {
//           from {
//             transform: translateY(0);
//           }
//           to {
//             transform: translateY(112px);
//           }
//         }

//         @keyframes blueprintProgress {
//           from {
//             width: 0%;
//           }
//           to {
//             width: 100%;
//           }
//         }

//         @keyframes blueprintPulse {
//           from {
//             opacity: 0.35;
//             box-shadow: 0 0 0 0 rgba(72, 181, 255, 0.15);
//           }
//           to {
//             opacity: 1;
//             box-shadow: 0 0 0 6px rgba(72, 181, 255, 0.08);
//           }
//         }

//         @keyframes streetViewEnter {
//           0% {
//             opacity: 0;
//             transform: translateX(70px) scale(0.96);
//           }
//           70% {
//             opacity: 1;
//             transform: translateX(-8px) scale(1.015);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .blueprint-scan,
//           .blueprint-progress,
//           .blueprint-pulse,
//           .streetview-panel-open {
//             animation-duration: 0.01ms;
//             animation-iteration-count: 1;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }




























"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const places = [
  {
    number: "01",
    title: "Location & Connectivity",
    description:
      "Explore Jattari's geographical location, nearby towns, road routes, transport options, and regional connectivity.",
    href: "/location-connectivity",
    label: "Explore location",
  },
  {
    number: "02",
    title: "Attractions & Places to Visit",
    description:
      "Discover parks, historic landmarks, cultural destinations, and places to explore around Jattari and the Aligarh region.",
    href: "/explore/attractions",
    label: "Explore attractions",
  },
  {
    number: "04",
    title: "History & Culture",
    description:
      "Discover the wider Aligarh region's historical background, local traditions, and everyday life.",
    href: "/explore/history-culture",
    label: "Explore history & culture",
  },
  {
    number: "05",
    title: "Food & Local Eateries",
    description:
      "Explore regional food traditions and learn more about local eating experiences.",
    href: "/explore/food",
    label: "Explore food",
  },
  {
    number: "06",
    title: "Lifestyle & Markets",
    description:
      "Learn about shopping areas, small businesses, local services, and daily activities.",
    href: "/explore/lifestyle-markets",
    label: "Explore lifestyle",
  },
  {
    number: "07",
    title: "Travel Tips",
    description:
      "Prepare for your visit with practical information to help you explore the area.",
    href: "/explore/travel-tips",
    label: "View travel tips",
  },
];

const revealClass =
  "explore-reveal translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none";

const googleMapsEmbedUrl =
  "https://maps.google.com/maps?q=Jattari%2C%20Uttar%20Pradesh%20202137&output=embed";

const streetViewEmbedUrl =
  "https://www.google.com/maps/embed?pb=!4v0!6m8!1m7!1sV8isf-s3muwJvyYN7ikvKw!2m2!1d28.0288648!2d77.65919!3f51.02!4f0!5f0.7820865974627469";

export default function ExplorePage() {
  const [streetViewLoading, setStreetViewLoading] = useState(false);
  const [streetViewOpen, setStreetViewOpen] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Reveal sections as they enter the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".explore-reveal"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const reveal = (element: HTMLElement) => {
      element.classList.remove("translate-y-8", "opacity-0");
      element.classList.add("translate-y-0", "opacity-100");
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Full-screen 5-second Street View preparation animation.
  useEffect(() => {
    if (!streetViewLoading) return;

    setScanProgress(0);

    const startTime = Date.now();
    const duration = 5000;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);

      setScanProgress(progress);

      if (elapsed >= duration) {
        window.clearInterval(interval);
        setScanProgress(100);
        setStreetViewLoading(false);
        setStreetViewOpen(true);
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [streetViewLoading]);

  const handleOpenStreetView = () => {
    setStreetViewOpen(false);
    setScanProgress(0);
    setStreetViewLoading(true);
  };

  const handleCloseStreetView = () => {
    setStreetViewOpen(false);
    setStreetViewLoading(false);
    setScanProgress(0);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F0] text-[#172B26]">
      {/* HERO SECTION */}
      <section className="group/hero relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#06483D] sm:min-h-[500px] md:min-h-[540px] md:px-12">
        <Image
          src="/images/explore-jattari.jpeg"
          alt="Explore Jattari and its surrounding area"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-center transition-transform duration-[12000ms] ease-out group-hover/hero:scale-105 motion-reduce:transition-none motion-reduce:group-hover/hero:scale-100"
        />

        {/* Image overlays */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#06483D]/80 via-[#06483D]/45 to-[#06483D]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#06483D]/50 via-transparent to-[#06483D]/20"
        />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full border border-[#FFF9F0]/20 transition-transform duration-1000 group-hover/hero:rotate-45" />

        <div className="pointer-events-none absolute -bottom-28 left-1/3 z-10 h-72 w-72 rounded-full bg-[#D58A28]/10 blur-3xl transition-transform duration-1000 group-hover/hero:scale-125" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-16 md:px-0 md:py-20">
          <div className="max-w-4xl">
            <p
              className={`${revealClass} mt-12 text-xs font-bold uppercase tracking-[0.3em] text-[#F2AE45] sm:text-sm`}
            >
              Discover the Region
            </p>

            <h1
              className={`${revealClass} mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl`}
              style={{ transitionDelay: "100ms" }}
            >
              Explore Jattari
              <span className="mt-2 block text-[#F2AE45]">
                Places, People &amp; Everyday Life
              </span>
            </h1>

            <p
              className={`${revealClass} mt-6 max-w-2xl text-sm leading-7 text-white/90 drop-shadow sm:text-base sm:leading-8 md:text-lg`}
              style={{ transitionDelay: "200ms" }}
            >
              Discover Jattari in Aligarh district, Uttar Pradesh. Explore its
              location, nearby attractions, local facilities, markets, culture,
              food, and useful information for visitors.
            </p>

            <a
              href="#explore-topics"
              className={`${revealClass} mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D58A28] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9741C] hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2AE45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06483D]`}
              style={{ transitionDelay: "300ms" }}
            >
              Start Exploring
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <div
              className={`${revealClass} mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-6 text-sm text-white/90`}
              style={{ transitionDelay: "400ms" }}
            >
              <span>
                <strong className="text-white">Location</strong>
                <span className="mx-2 text-[#F2AE45]">/</span>
                Jattari
              </span>

              <span>
                <strong className="text-white">Region</strong>
                <span className="mx-2 text-[#F2AE45]">/</span>
                Western Uttar Pradesh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          <div className={revealClass}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Get to Know Jattari
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
              A closer look at the town and its surroundings
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#64736D] sm:text-base">
              Every place has its own character. Explore Jattari through its
              location, nearby destinations, local markets, essential
              services, regional history, and everyday experiences.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#64736D] sm:text-base">
              Use these guides to find helpful information about the area.
              Details such as opening hours, routes, available services, and
              local facilities should be checked before travelling.
            </p>

            <Link
              href="/explore/introduction"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B5A49] transition-colors duration-300 hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
            >
              Get introduced to Jattari
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          </div>

          <div
            className={`${revealClass} relative border-l-4 border-[#D58A28] py-3 pl-6 transition-all duration-500 hover:translate-x-2 sm:pl-8`}
            style={{ transitionDelay: "150ms" }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B9741C]">
              Explore at your pace
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-[#172B26] sm:text-3xl">
              Understand the location. Discover the community.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              From practical visitor information to regional attractions,
              each guide gives you another way to learn about Jattari.
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#D58A28] transition-all duration-500 hover:w-28" />
          </div>
        </div>
      </section>

      {/* JATTARI STREET VIEW */}
      <section className="relative overflow-hidden bg-[#F3EBDD] px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="explore-reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#06483D]/15 bg-[#FFF9F0] px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#D58A28]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#06483D]">
                  Explore Jattari in 360°
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
                Take a closer look
                <span className="mt-1 block text-[#0B5A49]">at Jattari</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#64736D] sm:text-base">
                Explore a real Google Street View panorama from Jattari,
                Aligarh district. Move around the 360° view and get a
                street-level glimpse of the selected location.
              </p>

              <div className="mt-7 flex items-start gap-3 border-t border-[#06483D]/15 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06483D] text-[#FFF9F0]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.3"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#172B26]">
                    Jattari, Aligarh District
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#64736D]">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Street View button */}
              {!streetViewOpen && !streetViewLoading && (
                <button
                  type="button"
                  onClick={handleOpenStreetView}
                  className="group mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-[#06483D] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B5A49] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
                >
                  Explore in 360°
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </button>
              )}
            </div>

            {/* MAP AREA */}
            <div className="min-w-0">
              {/* Google Map is visible when the page loads */}
              {!streetViewOpen && !streetViewLoading && (
                <div className="overflow-hidden rounded-2xl border border-[#06483D]/10 bg-white p-2.5 shadow-[0_16px_45px_rgb(23_43_38_/_12%)] sm:p-3">
                  <div className="flex items-center justify-between gap-3 px-2 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F0E9] text-[#06483D]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M3 6.5 8.5 4l7 2.5L21 4v13.5L15.5 20l-7-2.5L3 20V6.5Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.5 4v13.5M15.5 6.5V20"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                        </svg>
                      </span>

                      <span className="text-xs font-bold text-[#172B26] sm:text-sm">
                        Google Maps · Jattari
                      </span>
                    </div>

                    <span className="rounded-full bg-[#E8F0E9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#06483D] sm:text-[11px]">
                      Map View
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-[#E8E1D5]">
                    <iframe
                      title="Google Map of Jattari, Aligarh District"
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="420"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block h-[280px] w-full sm:h-[360px] lg:h-[420px]"
                    />
                  </div>

                  <p className="px-2 pt-3 text-xs text-[#64736D]">
                    Explore the location of Jattari on Google Maps
                  </p>
                </div>
              )}

              {/* Street View panel appears after animation */}
              {streetViewOpen && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-700 rounded-2xl border border-[#06483D]/10 bg-white p-2.5 shadow-[0_16px_45px_rgb(23_43_38_/_12%)] sm:p-3">
                  <div className="flex items-center justify-between gap-3 px-2 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F0E9] text-[#06483D]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="8.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M3.8 12h16.4M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5s-1 6.1-3.2 8.5c-2.2-2.4-3.2-5.2-3.2-8.5s1-6.1 3.2-8.5Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                        </svg>
                      </span>

                      <span className="text-xs font-bold text-[#172B26] sm:text-sm">
                        Google Street View
                      </span>
                    </div>

                    <span className="rounded-full bg-[#FFF0D8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#975D15] sm:text-[11px]">
                      360° Panorama
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-[#E8E1D5]">
                    <iframe
                      title="Google Street View of Jattari, Aligarh District"
                      src={streetViewEmbedUrl}
                      width="100%"
                      height="420"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block h-[280px] w-full sm:h-[360px] lg:h-[420px]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-3">
                    <p className="text-xs text-[#64736D]">
                      Move around to explore the surroundings
                    </p>

                    <button
                      type="button"
                      onClick={handleCloseStreetView}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#06483D]/15 px-3 py-2 text-xs font-bold text-[#06483D] transition-colors hover:border-[#D58A28] hover:text-[#B9741C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28]"
                    >
                      Close View
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE TOPICS */}
      <section
        id="explore-topics"
        className="scroll-mt-24 border-y border-[#06483D]/15 bg-[#F3EBDD] px-6 py-14 sm:py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className={revealClass}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
              Explore by Topic
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172B26] sm:text-4xl">
              What would you like to discover?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#64736D] sm:text-base">
              Choose a topic to explore information about Jattari and its
              surrounding region.
            </p>
          </div>

          <div className="mt-9 border-t border-[#06483D]/20">
            {places.map((place, index) => (
              <article
                key={place.number}
                className={`${revealClass} group grid gap-4 border-b border-[#06483D]/15 py-6 transition-all duration-300 hover:bg-[#FFF9F0]/70 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-6 sm:px-4`}
                style={{
                  transitionDelay: `${Math.min(index * 70, 350)}ms`,
                }}
              >
                <span className="text-sm font-bold tracking-widest text-[#B9741C] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#06483D]">
                  {place.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-[#172B26] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0B5A49] sm:text-xl">
                    {place.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64736D] transition-colors duration-300 group-hover:text-[#435B51]">
                    {place.description}
                  </p>
                </div>

                <Link
                  href={place.href}
                  className="inline-flex items-center gap-2 justify-self-start text-sm font-bold text-[#0B5A49] transition-all duration-300 hover:text-[#B9741C] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] sm:justify-self-end"
                >
                  {place.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="px-6 py-14 sm:py-16 md:px-12 md:py-20">
        <div
          className={`${revealClass} mx-auto max-w-6xl border-t border-[#06483D]/15 pt-8 sm:pt-10`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B9741C] sm:text-sm">
            Your Jattari Guide
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-[#172B26] sm:text-3xl md:text-4xl">
            Keep exploring and learn more about the area.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64736D] sm:text-base">
            Browse the available guides to learn about local facilities,
            regional culture, attractions, shopping, and practical travel
            information.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/location-connectivity"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#06483D] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B5A49] hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Location &amp; Connectivity
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/explore/attractions"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Attractions &amp; Places to Visit
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/explore/contact-feedback"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#06483D]/20 bg-[#FFF9F0] px-6 py-3 text-sm font-semibold text-[#06483D] transition-all duration-300 hover:-translate-y-1 hover:border-[#D58A28] hover:text-[#B9741C] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D58A28] focus-visible:ring-offset-2"
            >
              Contact &amp; Feedback
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FULL-SCREEN 5-SECOND ANIMATION */}
      {streetViewLoading && (
        <div
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF9F0] px-6"
          role="status"
          aria-live="polite"
          aria-label="Preparing Google Street View"
        >
          {/* Theme background decoration */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(213,138,40,0.12),_transparent_55%)]"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[min(85vw,650px)] w-[min(85vw,650px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#06483D]/10"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[min(65vw,480px)] w-[min(65vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D58A28]/20"
          />

          <div className="relative z-10 w-full max-w-xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#06483D] shadow-[0_20px_60px_rgba(6,72,61,0.22)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                fill="none"
                className="h-12 w-12 text-[#FFF9F0]"
              >
                <path
                  d="M24 42s14-10.4 14-24a14 14 0 1 0-28 0c0 13.6 14 24 14 24Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="24"
                  cy="18"
                  r="4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M24 2v5M46 18h-5M7 18H2"
                  stroke="#D58A28"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-[#B9741C]">
              Jattari Explorer
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#06483D] sm:text-4xl">
              Preparing your 360° view
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#64736D] sm:text-base">
              Scanning the surroundings and preparing a street-level view of
              Jattari.
            </p>

            {/* Theme-colored scanning animation */}
            <div className="relative mx-auto mt-9 h-28 max-w-md overflow-hidden rounded-2xl border border-[#06483D]/15 bg-white/70 shadow-inner">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(rgba(6,72,61,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(6,72,61,0.07)_1px,transparent_1px)] bg-[size:18px_18px]"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 180 80"
                  fill="none"
                  className="h-20 w-44 text-[#06483D]"
                >
                  <path
                    d="M12 65 42 38 70 50 106 18 145 42 168 28M12 65h156M42 38v27M70 50v15M106 18v47M145 42v23"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="106"
                    cy="18"
                    r="6"
                    stroke="#D58A28"
                    strokeWidth="2"
                  />
                  <circle cx="106" cy="18" r="2" fill="#D58A28" />
                </svg>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D58A28] to-transparent shadow-[0_0_14px_rgba(213,138,40,0.6)] transition-[top] duration-75 ease-linear"
                style={{ top: `${scanProgress}%` }}
              />
            </div>

            {/* Progress bar */}
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#06483D]/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#06483D] via-[#0B5A49] to-[#D58A28] transition-[width] duration-75 ease-linear"
                style={{ width: `${scanProgress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#D58A28]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06483D]">
                Mapping panorama coordinates
              </span>
            </div>

            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8B968F]">
              Please wait · 5 seconds
            </p>
          </div>
        </div>
      )}
    </main>
  );
}