import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

function FounderCard({ founder, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute -inset-[1.5px] rounded-[36px] bg-gradient-to-br from-amber-300/40 via-purple-500/30 to-fuchsia-500/40 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />
      <div className="absolute -inset-[3px] rounded-[38px] bg-gradient-to-br from-amber-400/0 via-purple-500/20 to-fuchsia-400/0 opacity-40 group-hover:opacity-80 transition-opacity duration-700 blur-md" />

      <div className="relative rounded-[35px] overflow-hidden border border-amber-200/15 bg-gradient-to-br from-[#1a1028] via-[#0d0818] to-[#0a0612] p-1.5">
        <div className="rounded-[30px] overflow-hidden bg-gradient-to-br from-[#120822] via-[#0c0618] to-[#080510] relative">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-300/40 rounded-tl-[30px] pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-300/40 rounded-tr-[30px] pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-amber-300/40 rounded-bl-[30px] pointer-events-none z-10" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-300/40 rounded-br-[30px] pointer-events-none z-10" />

          <div className="relative aspect-[4/5] overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${founder.accent} mix-blend-overlay z-10`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080510] via-transparent to-transparent z-10" />
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute top-5 right-5 z-20">
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15, type: 'spring', stiffness: 200 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.6)]"
              >
                <Crown className="w-6 h-6 text-[#1a1028]" strokeWidth={2.2} />
              </motion.div>
            </div>

            <div className="absolute top-5 left-5 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-amber-300/30 text-[10px] font-bold text-amber-200 uppercase tracking-widest">
                <Crown className="w-3 h-3" /> Co-Founder
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/60 to-transparent z-10" />
          </div>

          <div className="relative p-6 md:p-8 bg-gradient-to-b from-[#0c0618] to-[#0a0612]">
            <p className="text-[10px] font-mono font-bold text-amber-300/80 uppercase tracking-[0.2em] mb-2">
              {founder.tag}
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              {founder.name}
            </h3>
            <p className="text-sm text-amber-100/70 font-medium mt-1.5 leading-snug">
              {founder.role}
            </p>

            <div className="h-[1px] bg-gradient-to-r from-amber-300/30 via-purple-500/20 to-transparent my-5" />

            <p className="text-sm text-white/60 leading-relaxed font-normal">
              {founder.bio}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="text-center py-3 rounded-xl bg-white/[0.03] border border-amber-300/10">
                <p className="text-base md:text-lg font-black text-amber-200">5+</p>
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider mt-0.5">Years</p>
              </div>
              <div className="text-center py-3 rounded-xl bg-white/[0.03] border border-purple-500/20">
                <p className="text-base md:text-lg font-black text-purple-300">100+</p>
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider mt-0.5">Clients</p>
              </div>
              <div className="text-center py-3 rounded-xl bg-white/[0.03] border border-fuchsia-500/20">
                <p className="text-base md:text-lg font-black text-fuchsia-300">Elite</p>
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider mt-0.5">Tier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default FounderCard;
