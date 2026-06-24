import React from 'react';
import { motion } from 'framer-motion';

/**
 * TrustSlider
 * Infinite, seamless, auto-scrolling marquee of client logos
 * on a LIGHT background with a subtle grid overlay.
 */
export default function TrustSlider({ logos = [] }) {
  // Duplicate so the marquee can loop seamlessly
  const looped = [...logos, ...logos];

  return (
    <section className="relative py-14 bg-[#F7F5FF] border-y border-[#E0D8F0] overflow-hidden">
      {/* Light grid overlay */}
      <div className="absolute inset-0 grid-overlay-light opacity-80 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[180px] bg-[#7B2FBE]/8 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[180px] bg-fuchsia-500/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#F7F5FF] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#F7F5FF] to-transparent" />

        <div className="flex w-max gap-5 animate-marquee will-change-transform">
          {looped.map((logo, i) => (
            <div
              key={i}
              className="group relative w-[160px] h-[72px] shrink-0 rounded-2xl border border-[#E0D8F0] bg-white/70 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-[#7B2FBE]/50 hover:bg-white hover:shadow-[0_0_25px_rgba(123,47,190,0.18)]"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(123,47,190,0.12), transparent 70%)',
                }}
              />
              <img
                src={logo}
                alt="client"
                draggable="false"
                className="relative w-[78%] h-[58%] object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
