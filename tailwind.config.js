/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "100%": {
            filter: "blur(0)",
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "phase-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "phase-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 1.05s forwards ease-in",
        "phase-out": "phase-out 500ms forwards ease-in",
        "phase-in": "phase-in 500ms forwards ease-in",
      },
    },
  },
  plugins: [],
};
