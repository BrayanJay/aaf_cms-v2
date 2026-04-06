/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '0' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        scaleDown: {
          "100%": { transform: "scale(1)" },
          "0%": { transform: "scale(0.5)" },
        },
        zoomIn: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        zoomOut: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)" },
        },
      },
      animation: {
        blink: 'blink 2s infinite alternate',
        zoomInOut: 'zoomInOut 2s infinite alternate',
        scaleUp: "scaleUp 1s ease-in-out",
        scaleDown: "scaleDown 0.5s ease-in-out",
      },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      sinhala_sans: ['Noto Sans Sinhala', 'sans-serif'],
      tamil_sans: ['Noto Sans Tamil', 'sans-serif'],
    },
    colors: {
      "primary": "#193569",
      "secondary": "#3167D1",
      "tartiary": "#333333",
      "l-blue": "#F4FBFF",
      "red": "#C00000"
    },
    background: {
      'custom-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
      'custom-gradient2': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    },
    backgroundImage: {
      'bluegradient': 'linear-gradient(to top, #3558D4 0%, #0085FF 100%)',
      'darkbluegradient': 'linear-gradient(to top, #0D288A 0%, #3558D4 100%)',
      'bluegoldgradient': 'linear-gradient(to bottom 0%, #004FC6, #FFB800 100%)',
      'goldgradient': 'linear-gradient(to top, #E69800 0%, #FFD600 100%)',
      'lightbluegradient': 'linear-gradient(to right, #3558D4 0%, #0085FF 100%)',
      'custom-gradient2': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      'bgdesign': "url('./media/contactPage/design.svg')",
      'leadwaveBg': "url('./media/leadwave/bg.webp')",
      'footerBg': "url('/media/footer/footer.webp')",
      'mvgImg' : "url('/media/aboutPage/AAF_HO.webp')"
    },
    scrollBehavior: {
      smooth: 'smooth',
    },
    width:{
      'custom-size': '400px',
      'logo':'200px',
    },
    height:{
      'custom-height': '503px',
      'footer': '94px',
    },
    },
  },
  plugins: [
    aspectRatio,

  ],
}

