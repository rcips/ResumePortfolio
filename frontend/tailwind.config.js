/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2E382E",
        panel: "#15233d",
        panel2: "#1c2e4e",
        accent: "#50C9CE",
        secondary: "#50C9CE",
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
