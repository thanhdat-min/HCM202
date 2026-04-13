/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        museum: {
          bg: "#140d0a",
          panel: "#221510",
          card: "#2f1d17",
          cream: "#f6eddb",
          gold: "#d7b56d",
          red: "#a61d24",
          rose: "#c44b4f",
          ink: "#7c6b63",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(215, 181, 109, 0.18), 0 20px 60px rgba(0, 0, 0, 0.35)",
        soft: "0 14px 40px rgba(0, 0, 0, 0.18)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(215,181,109,0.18), transparent 25%), radial-gradient(circle at 80% 10%, rgba(166,29,36,0.24), transparent 30%), radial-gradient(circle at 50% 80%, rgba(244,230,200,0.12), transparent 25%)",
      },
    },
  },
  plugins: [],
};
