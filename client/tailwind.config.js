/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050706',
        surface: {
          DEFAULT: '#0C110E',
          elevated: '#111813',
          card: '#101612',
          border: '#1E2A22',
          borderHover: '#2E4135',
        },
        lime: {
          primary: '#B7FF6A',
          secondary: '#7DDB48',
          glow: 'rgba(183, 255, 106, 0.15)',
        },
        violet: {
          cool: '#A8A2FF',
          subtle: 'rgba(168, 162, 255, 0.12)',
        },
        blue: {
          electric: '#75ADFF',
          subtle: 'rgba(117, 173, 255, 0.12)',
        },
        text: {
          primary: '#F5F7F4',
          secondary: '#89928E',
          muted: '#5A635F',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.05em',
        widest: '0.12em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
