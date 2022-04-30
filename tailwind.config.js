const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // it's 'media' by default as of v3
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        tema: "var(--tg-color-scheme)",
        bgcolor: "var(--tg-theme-bg-color)",
        textcolor: "var(--tg-theme-text-color)",
        hint: "var(--tg-theme-hint-color)",
        link: "var(--tg-theme-link-color)",
        button: "var(--tg-theme-button-color)",
        buttontext: "var(--tg-theme-button-text-color)",
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
