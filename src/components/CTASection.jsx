import { motion } from 'framer-motion';
import Button from './Button';

/**
 * Premium reusable CTA banner used at the bottom of pages.
 * Matches the design language established on the Home page.
 */
function CTASection({
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  tone = 'dark',
  className = '',
}) {
  const isLight = tone === 'light';
  const headingColor = isLight ? 'text-[#111827]' : 'text-white';
  const subtitleColor = isLight ? 'text-[#6B7280]' : 'text-white/50';
  const badgeColor = isLight ? 'badge badge-light' : 'badge';
  const highlightColor = isLight
    ? 'text-[#8b00ff]'
    : 'text-gradient-purple';

  // Split title on "|" to color a part if needed
  let titlePrefix = title;
  let highlightSuffix = null;
  if (typeof title === 'string' && title.includes('|')) {
    [titlePrefix, highlightSuffix] = title.split('|');
  }

  return (
    <section className={`section-padding-lg relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] bg-fuchsia-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(11,15,25,0.25)] border border-purple-500/10"
          style={{
            background: isLight
              ? 'linear-gradient(135deg, #FFFFFF 0%, #F4F0F8 100%)'
              : 'linear-gradient(135deg, #0b0f19 0%, #151028 100%)',
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[60px]" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            {badge && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${badgeColor} inline-flex mx-auto`}
              >
                {badge}
              </motion.span>
            )}
            <h2 className={`text-[32px] md:text-[48px] font-black tracking-tight leading-tight text-balance ${headingColor}`}>
              {titlePrefix}{' '}
              {highlightSuffix && <span className={highlightColor}>{highlightSuffix}</span>}
            </h2>
            {subtitle && (
              <p className={`${subtitleColor} text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed`}>
                {subtitle}
              </p>
            )}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <Button
                  variant={isLight ? 'primary' : 'primary'}
                  size="lg"
                  href={primaryButton.href}
                  to={primaryButton.to}
                  onClick={primaryButton.onClick}
                  showArrow
                >
                  {primaryButton.label}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  variant={isLight ? 'secondaryLight' : 'secondary'}
                  size="lg"
                  href={secondaryButton.href}
                  to={secondaryButton.to}
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.label}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
