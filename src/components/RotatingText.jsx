import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * RotatingText
 * A reusable component that cycles through a list of strings
 * with a smooth slide-up + fade animation and a blinking cursor.
 *
 * Props:
 *  - texts: Array<string>          — words to rotate through
 *  - interval: number (ms)         — how long each word stays (default 2800)
 *  - className: string             — extra classes for sizing / color
 *  - gradient: boolean             — apply brand gradient text
 */
export default function RotatingText({
  texts = [],
  interval = 2800,
  className = '',
  gradient = true,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, interval);
    return () => clearInterval(id);
  }, [texts, interval]);

  const current = texts[index] || '';

  return (
    <span
      className={`relative inline-flex items-baseline align-baseline whitespace-nowrap ${className}`}
    >
      <span className="relative inline-block overflow-hidden align-baseline" style={{ minWidth: '1ch' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${
              gradient
                ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-purple-600 bg-clip-text text-transparent'
                : ''
            }`}
          >
            {current}
          </motion.span>
        </AnimatePresence>
      </span>

      {/* Blinking cursor */}
      <motion.span
        aria-hidden="true"
        className="ml-1 inline-block w-[3px] h-[0.95em] translate-y-[2px] bg-gradient-to-b from-fuchsia-400 to-purple-600 rounded-sm"
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </span>
  );
}
