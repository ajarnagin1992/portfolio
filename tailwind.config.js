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
        primaryaccent: "#3b3954",
        secondary: "#FFFFFF",
        tertiary: { normal: "#01B0D3", hover: "#0187a2", accent: "#5de3fe" },
        background: "#e5e7eb",
        textprimary: "#FFFFFF",
        textsecondary: "#000000",
        texttertiary: "#FAF9F6",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
