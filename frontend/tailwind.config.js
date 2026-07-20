/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        panel: "#15233d",
        panel2: "#1c2e4e",
        accent: "#EB2424",
        secondary: "#EB2424",
        accentDeep: "#7A1212",
        muted: "#94A3B8",
      },
      fontFamily: {
        display: ['"Anton"', "sans-serif"],
        body: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
