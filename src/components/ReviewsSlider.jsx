import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

/**
 * ReviewsSlider
 * Auto-cycling chat-style testimonial cards.
 * Dark background with a 3D-feel: bubble on the right (client message)
 * and a system message on the left. No big rectangles.
 */
export default function ReviewsSlider({ reviews = [] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused, reviews.length]);

  if (!reviews.length) return null;
  const current = reviews[index];

  const variants = {
    enter: { y: 30, opacity: 0, scale: 0.97 },
    center: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -30, opacity: 0, scale: 0.97 },
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1A0533] via-[#2a0f4a] to-[#1A0533] border-y border-[#7B2FBE]/20 overflow-hidden">
      {/* Decorative grid + glows */}
      <div className="absolute inset-0 grid-overlay-dark opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7B2FBE]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#8B00FF]/40 text-[11px] font-bold text-white/80 uppercase tracking-widest mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400" /> Client Success
          </span>
          <h2 className="text-[32px] md:text-[44px] font-black text-white tracking-tight">
            Trusted by Growth-Focused Businesses
          </h2>
          <p className="text-white/50 text-sm font-medium pt-2 max-w-2xl mx-auto">
            Real businesses. Real systems. Real revenue growth.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Chat window frame */}
          <div className="relative rounded-[28px] border border-[#7B2FBE]/30 bg-[#0c0816]/80 backdrop-blur-xl p-5 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            {/* Window dots */}
            <div className="flex items-center gap-1.5 mb-6 pb-4 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-[10px] font-mono text-white/40 tracking-wider uppercase">
                proxima / client-success.log
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500" />
                </span>
                <span className="text-[10px] font-mono text-fuchsia-400/80 tracking-wider uppercase">
                  live
                </span>
              </div>
            </div>

            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3"
                >
                  {/* System tag */}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    <span className="text-[#8B00FF]">●</span>
                    <span>incoming message verified</span>
                    <span className="text-white/30">- {current.tag}</span>
                  </div>

                  {/* Client chat bubble */}
                  <div className="flex items-end gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7B2FBE] to-[#9B59D4] flex items-center justify-center text-white font-black text-sm shadow-[0_8px_25px_rgba(123,47,190,0.4)]">
                      {current.author[0]}
                    </div>
                    <div className="relative max-w-[80%] rounded-2xl rounded-bl-md bg-gradient-to-br from-[#7B2FBE] to-[#9B59D4] px-5 py-3.5 shadow-[0_8px_30px_rgba(123,47,190,0.4)]">
                      <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-medium">
                        &ldquo;{current.quote}&rdquo;
                      </p>
                      {/* bubble tail */}
                      <div className="absolute -left-1.5 bottom-2 w-3 h-3 bg-[#7B2FBE] rotate-45 rounded-sm" />
                    </div>
                  </div>

                  {/* Stars + meta reply */}
                  <div className="flex items-center gap-2 pl-12">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-fuchsia-400/80 uppercase tracking-wider">
                      - {current.author}, {current.role}
                    </span>
                  </div>

                  {/* Bot reply (typing-like) */}
                  <div className="flex items-start gap-3 pl-2 pt-2">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-[10px] font-mono font-black text-fuchsia-400">
                        P
                      </span>
                    </div>
                    <div className="relative max-w-[70%] rounded-2xl rounded-bl-md bg-white/[0.04] border border-white/10 px-4 py-2.5 text-white/70 text-[13px]">
                      <span className="font-mono text-[10px] text-fuchsia-400/80 uppercase tracking-wider block mb-1">
                        Proxima Bot
                      </span>
                      Logged for {current.company}. Pipeline status:{' '}
                      <span className="text-fuchsia-400 font-bold">ACTIVE</span>. 🎯
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full border border-[#7B2FBE]/40 bg-white/[0.04] hover:bg-[#7B2FBE]/20 hover:border-[#7B2FBE] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % reviews.length)}
                aria-label="Next review"
                className="w-11 h-11 rounded-full border border-[#7B2FBE]/40 bg-white/[0.04] hover:bg-[#7B2FBE]/20 hover:border-[#7B2FBE] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className="relative h-1.5 rounded-full overflow-hidden bg-white/10 transition-all duration-500"
                  style={{ width: i === index ? 28 : 14 }}
                >
                  {i === index && (
                    <motion.div
                      key={`fill-${index}-${paused}`}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-fuchsia-400 to-[#9B59D4] rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: paused ? '0%' : '100%' }}
                      transition={{ duration: paused ? 0 : 5.5, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
