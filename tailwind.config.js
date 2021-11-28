module.exports = {
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      colors: {
        primario: "#252f3f",
        secundario: "#0276df",
        terciario: "#02b3dd",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "hover", "focus", "group-hover"],
      animation: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/ui")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
