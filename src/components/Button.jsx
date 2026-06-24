import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable, consistent Button component used throughout the site.
 *
 * Variants:
 *  - primary (default): purple gradient, used as the main CTA
 *  - secondary: outlined glass button
 *  - light: solid white button for use on dark backgrounds
 *  - ghost: borderless translucent button
 *
 * Sizes:
 *  - sm | md (default) | lg
 *
 * Behavior:
 *  - If `to` is provided it renders a React Router Link
 *  - If `href` is provided it renders an <a> with target/rel defaults
 *  - Otherwise it renders a <button>
 */
function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  icon = false,
  iconPosition = 'right',
  showArrow = false,
  className = '',
  target,
  rel,
  onClick,
  disabled,
  type = 'button',
  ...rest
}) {
  const sizeMap = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-[15px]',
  };

  const variantMap = {
    primary:
      'bg-gradient-to-r from-[#8b00ff] to-[#6b00bf] text-white shadow-[0_4px_20px_rgba(139,0,255,0.3)] hover:shadow-[0_8px_30px_rgba(139,0,255,0.45)] hover:from-[#a33bff] hover:to-[#8b00ff]',
    secondary:
      'bg-white/[0.04] text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.08]',
    secondaryLight:
      'bg-[#F0E8FF] text-[#7B2FBE] border border-[#C9B8E8] hover:bg-[#E4D0FF] hover:border-[#7B2FBE]',
    light:
      'bg-white text-[#8b00ff] hover:bg-purple-50 shadow-[0_4px_20px_rgba(0,0,0,0.12)]',
    ghost: 'text-white/80 hover:text-white hover:bg-white/[0.04]',
  };

  const baseClasses = `group relative inline-flex items-center justify-center font-bold tracking-wide rounded-full overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${sizeMap[size]} ${variantMap[variant]} ${className}`;

  const inner = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
      <span className="relative flex items-center gap-2.5">
        {icon && iconPosition === 'left' && icon}
        {children}
        {(showArrow || (icon && iconPosition === 'right')) && (
          <ArrowRight
            className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...rest}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        className={baseClasses}
        onClick={onClick}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} disabled={disabled} {...rest}>
      {inner}
    </button>
  );
}

export default Button;
