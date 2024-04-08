/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f3f3f3",
        primary: "#404e67",
        secundary: "#4d5d7a",
      },
      animation: {
        fade_InUp: "fadeInUp 1s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translate3d(0,25%,0)" },
          "100%": { opacity: 1, transform: "translateZ(0)" },
        },
      },
    },
    plugins: [],
  },
};
