const colors = require("tailwindcss/colors");

module.exports = {
  //mode: "jit",
  darkMode: "class", // it's 'media' by default as of v3
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.500"), textDecoration: "none" },
              strong: { color: theme("colors.gray.300") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.400"),
                borderLeftColor: theme("colors.gray.200"),
              },
              h1: { color: theme("colors.gray.500") },
              h2: { color: theme("colors.gray.500") },
              h3: { color: theme("colors.gray.500") },
              h4: { color: theme("colors.gray.500") },
              code: { color: theme("colors.gray.500") },
              "a code": { color: theme("colors.gray.500") },
              pre: {
                color: theme("colors.gray.400"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.500"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            },
          },
        };
      },
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
  // variants: {
  //   extend: {
  //     typography: ["dark"],
  //     display: ["responsive", "hover", "focus", "group-hover"],
  //     animation: ["hover"],
  //   },
  // },
  plugins: [require("@tailwindcss/typography")],
  //plugins: [require("@tailwindcss/ui")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
