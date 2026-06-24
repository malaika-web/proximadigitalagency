/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ========== DARK HERO/HEADER/FOOTER PALETTE (preserved) ==========
        background: '#0B0A13',
        'surface-dark': '#161520',
        'surface-mid': '#1E1D2B',
        'surface-light': '#252436',
        'hero-primary': '#8b00ff',
        'hero-primary-light': '#a33bff',
        'hero-primary-dark': '#6b00bf',
        'hero-primary-glow': 'rgba(139, 0, 255, 0.25)',
        'hero-primary-subtle': 'rgba(139, 0, 255, 0.08)',
        'on-background': '#FFFFFF',
        'on-surface': '#FFFFFF',
        'on-surface-variant': 'rgba(255, 255, 255, 0.6)',
        'on-primary': '#FFFFFF',
        'error': '#ef4444',

        // ========== NEW LIGHT THEME PALETTE ==========
        // Primary palette (buttons, links, accents, icons)
        primary: '#7B2FBE',
        'primary-light': '#9B59D4',
        'primary-tint': '#F0E8FF',
        // Dark base (headings, footer bg)
        'dark-base': '#1A0533',
        // Page background, section fills
        'page-bg': '#F7F5FF',
        // Surface (cards, navbar, forms)
        surface: '#FFFFFF',
        // Body text
        'body-text': '#5C4D72',
        // Muted text
        'muted-text': '#7E6B99',
        // Border
        border: '#C9B8E8',
        // Divider
        divider: '#E0D8F0',

        // Light mode helper tokens
        'light-bg': '#F7F5FF',
        'light-surface': '#FFFFFF',
        'light-border': '#E0D8F0',
        'light-text': '#5C4D72',
        'light-text-secondary': '#7E6B99',
        'light-heading': '#1A0533',
      },

      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        full: '9999px',
      },

      spacing: {
        'section-gap-lg': '120px',
        'section-gap-md': '80px',
        'container-max-width': '1280px',
        gutter: '32px',
        'margin-mobile': '20px',
      },

      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        alt: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-lg': ['64px', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-xl': ['42px', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['36px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'headline-md': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-lg': ['13px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-md': ['11px', { lineHeight: '1.2', letterSpacing: '0.1em', fontWeight: '700' }],
        'label-sm': ['9px', { lineHeight: '1.2', letterSpacing: '0.12em', fontWeight: '700' }],
      },

      boxShadow: {
        'purple-soft': '0 20px 60px -15px rgba(123, 47, 190, 0.15)',
        'purple-glow': '0 0 30px rgba(123, 47, 190, 0.25)',
        'purple-glow-lg': '0 0 60px rgba(123, 47, 190, 0.3)',
        'card': '0 4px 30px rgba(123, 47, 190, 0.08)',
        'card-hover': '0 8px 40px rgba(123, 47, 190, 0.15)',
        'glass': '0 8px 32px rgba(123, 47, 190, 0.08)',
        'glass-lg': '0 16px 48px rgba(123, 47, 190, 0.12)',
        'elevated': '0 20px 60px -15px rgba(123, 47, 190, 0.15)',
        'elevated-lg': '0 32px 80px -20px rgba(123, 47, 190, 0.2)',
        'soft-light': '0 4px 20px rgba(123, 47, 190, 0.06)',
        'soft-light-hover': '0 8px 30px rgba(123, 47, 190, 0.12)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      },

      animation: {
        'marquee': 'marquee 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'spin-reverse': 'spin 20s linear infinite reverse',
        'drift': 'drift 8s ease-in-out infinite',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(123, 47, 190, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(123, 47, 190, 0.3)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(10px, -10px)' },
          '66%': { transform: 'translate(-5px, 5px)' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-glow': 'linear-gradient(135deg, #7B2FBE 0%, #9B59D4 50%, #7B2FBE 100%)',
        'brand-subtle': 'linear-gradient(135deg, rgba(123, 47, 190, 0.1) 0%, rgba(155, 89, 212, 0.05) 100%)',
      },

      backdropBlur: {
        xs: '2px',
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
