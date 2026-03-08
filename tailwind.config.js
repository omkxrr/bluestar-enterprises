/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C2B5A',
          50: '#EEF0F7',
          100: '#D5D9E8',
          200: '#A8B0CF',
          300: '#7B87B6',
          400: '#4E5E9D',
          500: '#1C2B5A',
          600: '#172349',
          700: '#121B38',
          800: '#0D1327',
          900: '#080B16',
        },
        accent: {
          DEFAULT: '#8B2332',
          50: '#FCE8EB',
          100: '#F5C4CC',
          200: '#E68D9B',
          300: '#D7566A',
          400: '#B83349',
          500: '#8B2332',
          600: '#731D29',
          700: '#5B1720',
          800: '#431117',
          900: '#2B0B0E',
        },
        secondary: {
          DEFAULT: '#4A5568',
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#4A5568',
          600: '#2D3748',
          700: '#1A202C',
          800: '#171923',
          900: '#0D1117',
        },
        surface: '#F8FAFD',
        gold: '#C8A961',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'floatDelayed 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'star-pulse': 'starPulse 3s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'morph': 'morph 12s ease-in-out infinite',
        'morph-delayed': 'morph 15s ease-in-out infinite 3s reverse',
        'orbit': 'orbit 15s linear infinite',
        'orbit-reverse': 'orbit 20s linear infinite reverse',
        'tilt-float': 'tiltFloat 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(2deg)' },
          '66%': { transform: 'translateY(-14px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        starPulse: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.25', transform: 'scale(1.05)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        morph: {
          '0%':   { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%':  { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%':  { borderRadius: '50% 60% 30% 40% / 40% 70% 60% 50%' },
          '75%':  { borderRadius: '60% 30% 50% 40% / 70% 40% 60% 30%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        orbit: {
          '0%':   { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
        tiltFloat: {
          '0%, 100%': { transform: 'perspective(800px) rotateX(5deg) rotateY(-5deg) translateY(0)' },
          '50%':      { transform: 'perspective(800px) rotateX(-3deg) rotateY(5deg) translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(28, 43, 90, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 43, 90, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
    },
  },
  plugins: [],
};
