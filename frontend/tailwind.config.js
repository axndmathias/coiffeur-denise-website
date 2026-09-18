/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        "cream-2": "#FAF4ED",
        onyx: "#1C1917",
        gold: "#C5A880",
        "rose-gold": "#D4A373",
        blush: "#E8B4B8",
        "soft-pink": "#F3E0E2",
      },
      fontFamily: {
        serif: ['Cinzel', 'Cormorant Garamond', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        script: ['Inspiration', 'cursive'],
        sans: ['Plus Jakarta Sans', 'Open Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s ease forwards',
        kenburns: 'kenburns 18s ease-out forwards',
      },
    },
  },
  plugins: [],
};
