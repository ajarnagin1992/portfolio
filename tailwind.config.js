module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#242333",
        secondary: "#FFFFFF",
        tertiary: { normal: "#01B0D3", hover: "#0187a2", accent: "#5de3fe" },
        background: "#e5e7eb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
