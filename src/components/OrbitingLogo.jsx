import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, MessageSquare, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

/**
 * OrbitingLogo
 * Hero centerpiece: the actual Proxima logo sits dead-center while
 * 4 service cards orbit around it on a perfect circular path.
 *
 * Layout strategy: each card is placed at an exact cardinal position
 * inside a square box (top/right/bottom/left) — then the whole
 * wrapper rotates continuously. The cards themselves counter-rotate
 * to remain upright.
 */
const SIZE = 460; // base square size in px
const RADIUS = 175; // distance from center to card

const orbitItems = [
  {
    Icon: Target,
    title: 'Outbound',
    sub: 'Targeted Sequences',
    angle: 0, // top
    accent: 'from-fuchsia-500 to-purple-600',
  },
  {
    Icon: BarChart3,
    title: 'Paid Ads',
    sub: 'Meta & Google',
    angle: 90, // right
    accent: 'from-purple-500 to-violet-600',
  },
  {
    Icon: MessageSquare,
    title: 'Funnels',
    sub: 'VSL & Landing',
    angle: 180, // bottom
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    Icon: Phone,
    title: 'CRM',
    sub: 'Automation',
    angle: 270, // left
    accent: 'from-fuchsia-500 to-pink-500',
  },
];

function polar(angleDeg, radius) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(a) * radius, y: Math.sin(a) * radius };
}

export default function OrbitingLogo() {
  return (
    <div
      className="relative mx-auto"
      style={{ width: SIZE, height: SIZE, maxWidth: '100%' }}
    >
      {/* Ambient halo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[70%] rounded-full bg-[#7B2FBE]/20 blur-[110px] animate-pulse" />
      </div>

      {/* Static decorative rings */}
      <div className="absolute inset-0 rounded-full border border-purple-500/10 pointer-events-none" />
      <div className="absolute inset-[14%] rounded-full border border-dashed border-fuchsia-500/20 pointer-events-none" />
      <div className="absolute inset-[32%] rounded-full border border-purple-400/10 pointer-events-none" />

      {/* Slowly spinning outer guide ring with marker */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_14px_rgba(232,121,249,0.9)]" />
      </motion.div>

      {/* Orbiting cards wrapper — rotates full 360deg */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {orbitItems.map((item, i) => {
          const { x, y } = polar(item.angle, RADIUS);
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <motion.div
                // Counter-rotate to keep card upright
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="group w-[150px] rounded-2xl border border-white/10 bg-[#0c0a16]/90 backdrop-blur-xl p-3 flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:border-[#8B00FF]/70 hover:shadow-[0_0_30px_rgba(139,0,255,0.5)] transition-all duration-300"
              >
                <div
                  className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-[0_4px_14px_rgba(139,0,255,0.4)]`}
                >
                  <item.Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-white text-[12px] font-bold leading-tight truncate">
                    {item.title}
                  </div>
                  <div className="text-white/45 text-[9px] font-mono tracking-wider uppercase mt-0.5 truncate">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Center logo block — perfectly centered, never moves */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-44 h-44 md:w-52 md:h-52 rounded-[36px] bg-[#07050d] border-2 border-[#8B00FF] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(139,0,255,0.6)]"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <img
            src={logo}
            alt="Proxima"
            draggable="false"
            className="h-14 md:h-16 object-contain"
          />
          <div className="mt-2 text-[8px] font-mono tracking-[0.4em] text-white/55 uppercase">
            Digital
          </div>
        </motion.div>
        <div
          className="absolute inset-2 rounded-[28px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(139,0,255,0.22), transparent 70%)',
          }}
        />
      </motion.div>
    </div>
  );
}
