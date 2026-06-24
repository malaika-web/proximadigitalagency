import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const accentMap = {
  purple: {
    border: 'group-hover:border-[#8b00ff]/40',
    text: 'text-[#a33bff]',
    glow: 'from-[#8b00ff]/20 to-fuchsia-500/0',
    badge: 'border-[#8b00ff]/30 text-[#a33bff] bg-[#8b00ff]/10',
  },
  blue: {
    border: 'group-hover:border-blue-500/40',
    text: 'text-blue-400',
    glow: 'from-blue-500/20 to-blue-500/0',
    badge: 'border-blue-500/30 text-blue-300 bg-blue-500/10',
  },
  fuchsia: {
    border: 'group-hover:border-fuchsia-500/40',
    text: 'text-fuchsia-400',
    glow: 'from-fuchsia-500/20 to-purple-500/0',
    badge: 'border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-500/10',
  },
  emerald: {
    border: 'group-hover:border-emerald-500/40',
    text: 'text-emerald-400',
    glow: 'from-emerald-500/20 to-emerald-500/0',
    badge: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
  },
  amber: {
    border: 'group-hover:border-amber-500/40',
    text: 'text-amber-400',
    glow: 'from-amber-500/20 to-amber-500/0',
    badge: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
  },
  cyan: {
    border: 'group-hover:border-cyan-500/40',
    text: 'text-cyan-400',
    glow: 'from-cyan-500/20 to-cyan-500/0',
    badge: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
  },
};

function LeadershipCard({ member, index }) {
  const accent = accentMap[member.accent] || accentMap.purple;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-[28px] overflow-hidden bg-[#161520] border border-white/[0.06] ${accent.border} hover:shadow-[0_20px_50px_rgba(139,0,255,0.12)] transition-all duration-500`}
    >
      <div className={`absolute -inset-1 bg-gradient-to-br ${accent.glow} opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 pointer-events-none`} />

      <div className="relative aspect-[4/4.2] overflow-hidden bg-gradient-to-br from-[#1a1028] to-[#0c0618]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0618] via-transparent to-transparent" />

        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-black text-white/80 z-10">
          {member.initials}
        </div>
      </div>

      <div className="relative p-5 md:p-6">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest ${accent.badge}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {member.role}
        </span>
        <h3 className="mt-3 text-lg md:text-xl font-black text-white tracking-tight group-hover:text-[#a33bff] transition-colors">
          {member.name}
        </h3>
        <p className="mt-2 text-sm text-white/55 leading-relaxed font-normal">
          {member.specialty}
        </p>

        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-widest">
            Specialist · Proxima Digital
          </span>
          <a
            href="https://www.linkedin.com/company/proxima-digital-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all ${accent.text}`}
            aria-label={`${member.name} on LinkedIn`}
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default LeadershipCard;
