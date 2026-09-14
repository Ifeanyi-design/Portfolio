/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Single accent color — indigo. Used EVERYWHERE consistently.
        accent: {
          DEFAULT: '#6366F1',
          hover:   '#4F46E5',
          light:   '#818CF8',
          muted:   'rgba(99,102,241,0.12)',
        },
        // Dark surfaces
        surface: {
          DEFAULT:  '#09090B',   // page bg
          card:     '#111116',   // card bg
          elevated: '#18181F',   // raised panels
          border:   'rgba(255,255,255,0.07)',
          hover:    'rgba(255,255,255,0.04)',
        },
        // Text — white scale
        ink: {
          DEFAULT: '#FAFAFA',
          muted:   'rgba(250,250,250,0.55)',
          faint:   'rgba(250,250,250,0.22)',
        },
        // Semantic status colors (used sparingly)
        ok:   '#10B981',  // available / success
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        marquee:          'marquee 35s linear infinite',
        'marquee-reverse':'marquee-reverse 32s linear infinite',
        'fade-up':        'fadeUp 0.55s ease forwards',
        'pulse-slow':     'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow':    '0 0 0 1px rgba(99,102,241,0.4), 0 0 32px rgba(99,102,241,0.25)',
        'glow-sm': '0 0 0 1px rgba(99,102,241,0.3), 0 0 16px rgba(99,102,241,0.15)',
        'card':    '0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
};
