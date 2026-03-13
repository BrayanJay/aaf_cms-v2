/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.3)',
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.25)',
        'glass-dark': 'rgba(0, 0, 0, 0.25)',
        // AAF Brand colors with dark mode variants
        'aaf': {
          'primary': '#1e40af', // Blue 700
          'primary-dark': '#3b82f6', // Blue 500
          'secondary': '#059669', // Emerald 600
          'secondary-dark': '#10b981', // Emerald 500
          'accent': '#dc2626', // Red 600
          'accent-dark': '#ef4444', // Red 500
        },
        // Theme-aware background colors
        'bg': {
          'light': '#ffffff',
          'light-secondary': '#f8fafc',
          'dark': '#0f172a', // Slate 900
          'dark-secondary': '#1e293b', // Slate 800
        },
        // Theme-aware text colors
        'text': {
          'light': '#1f2937', // Gray 800
          'light-secondary': '#6b7280', // Gray 500
          'dark': '#f1f5f9', // Slate 100
          'dark-secondary': '#cbd5e1', // Slate 300
        }
      }
    },
  },
  plugins: [],
}

