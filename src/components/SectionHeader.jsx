import { motion } from 'framer-motion';

/**
 * Reusable section header used across pages to maintain
 * a consistent visual rhythm and tone.
 *
 * Props:
 *  - badge: small uppercase label
 *  - title: string OR ReactNode for the main heading
 *  - subtitle: optional description below the heading
 *  - align: 'left' | 'center' (default: 'left')
 *  - tone: 'dark' | 'light' (default: 'dark')
 *  - icon: optional lucide icon component
 */
function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  icon: Icon,
  children,
}) {
  const isLight = tone === 'light';
  const containerAlign = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = isLight ? 'text-[#111827]' : 'text-white';
  const subtitleColor = isLight ? 'text-[#6B7280]' : 'text-white/50';
  const badgeClasses = isLight
    ? 'badge badge-light'
    : 'badge';

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      className={`max-w-4xl ${containerAlign} mb-14 md:mb-20`}
    >
      {badge && (
        <motion.div variants={fadeUp} className={`${badgeClasses} inline-flex mb-5`}>
          {Icon && <Icon className="w-3.5 h-3.5" />}
          {badge}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className={`text-[32px] md:text-[44px] lg:text-[52px] font-black tracking-tight leading-[1.08] ${titleColor}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base md:text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleColor} leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </motion.div>
  );
}

export default SectionHeader;
