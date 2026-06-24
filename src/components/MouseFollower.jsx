import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseFollower() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const springX = useSpring(x, { damping: 25, stiffness: 220, mass: 0.5 });
  const springY = useSpring(y, { damping: 25, stiffness: 220, mass: 0.5 });

  const [variant, setVariant] = useState('default');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const t = e.target;
      if (
        t?.closest?.(
          'a, button, [data-hover="true"], input, textarea, select, [role="button"]'
        )
      ) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  const size = variant === 'hover' ? 70 : 34;

  return (
    <>
      {/* OUTER GLOW LAYER (strong visibility) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{ width: size, height: size }}
          transition={{ type: 'spring', damping: 20, stiffness: 250 }}
          className="rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(168,85,247,0.55) 0%, rgba(124,58,237,0.25) 35%, rgba(0,0,0,0) 70%)',
            boxShadow:
              '0 0 35px rgba(168,85,247,0.35), 0 0 80px rgba(124,58,237,0.15)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* MIDDLE RING (gives structure) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: variant === 'hover' ? 28 : 18,
            height: variant === 'hover' ? 28 : 18,
            opacity: variant === 'hover' ? 0.9 : 0.6,
          }}
          className="rounded-full border border-purple-400/60"
          style={{
            boxShadow: '0 0 10px rgba(168,85,247,0.25)',
            backdropFilter: 'blur(2px)',
          }}
        />
      </motion.div>

      {/* INNER DOT (always visible, high contrast) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: '#ffffff',
            boxShadow:
              '0 0 8px rgba(255,255,255,0.9), 0 0 12px rgba(168,85,247,0.6)',
          }}
        />
      </motion.div>

      {/* SOFT TRAIL PULSE (subtle premium feel) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{ scale: variant === 'hover' ? 2 : 1.4, opacity: 0.12 }}
          transition={{ duration: 0.4 }}
          className="w-10 h-10 rounded-full"
          style={{
            background: 'rgba(168,85,247,0.2)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>
    </>
  );
}