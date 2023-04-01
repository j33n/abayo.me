const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {
      primary: "#5c6ac4",
      secondary: "#ecc94b",
      transparent: "transparent",
      current: "currentColor",
      white: "var(--color-white)",
      black: "var(--color-black)",
      // light overlay
      blackA1: "var(--color-blackA1)",
      blackA2: "var(--color-blackA2)",
      blackA3: "var(--color-blackA3)",
      blackA4: "var(--color-blackA4)",
      blackA5: "var(--color-blackA5)",
      blackA6: "var(--color-blackA6)",
      blackA7: "var(--color-blackA7)",
      blackA8: "var(--color-blackA8)",
      blackA9: "var(--color-blackA9)",
      blackA10: "var(--color-blackA10)",
      blackA11: "var(--color-blackA11)",
      blackA12: "var(--color-blackA12)",
      // light overlay
      whiteA1: "var(--color-whiteA1)",
      whiteA2: "var(--color-whiteA2)",
      whiteA3: "var(--color-whiteA3)",
      whiteA4: "var(--color-whiteA4)",
      whiteA5: "var(--color-whiteA5)",
      whiteA6: "var(--color-whiteA6)",
      whiteA7: "var(--color-whiteA7)",
      whiteA8: "var(--color-whiteA8)",
      whiteA9: "var(--color-whiteA9)",
      whiteA10: "var(--color-whiteA10)",
      whiteA11: "var(--color-whiteA11)",
      whiteA12: "var(--color-whiteA12)",
      beige: {
        100: "var(--color-beige-100)",
        200: "var(--color-beige-200)",
        300: "var(--color-beige-300)",
        400: "var(--color-beige-400)",
      },
      pink: {
        500: "var(--color-pink-500)",
      },
      green: {
        100: "var(--color-green-100)",
        500: "var(--color-green-500)",
        600: "var(--color-green-600)",
      },
      blue: {
        500: "var(--color-blue-500)",
      },
      yellow: {
        500: "var(--color-yellow-500)",
        600: "var(--color-yellow-500-dark)",
        "500-inverted": "var(--color-yellow-500-inverted)",
      },
      gray: {
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Exo 2", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: [
              {
                a: {
                  textDecoration: "none",
                  color: theme("colors.blue.500"),
                },
                "a:hover,a:focus": {
                  textDecoration: "underline",
                  outline: "none",
                },
              },
            ],
          },
          light: {
            css: [
              {
                color: theme("colors.gray.500"),
                a: {
                  color: theme("colors.blue.500"),
                },
                strong: {
                  color: theme("colors.black"),
                },
                hr: {
                  borderColor: theme("colors.gray.200"),
                },
                code: {
                  color: theme("colors.gray.800"),
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: theme("colors.black"),
                },
                blockquote: {
                  color: theme("colors.gray.500"),
                  backgroundColor: theme("colors.gray.100"),
                },
                "thead, tbody tr": {
                  borderBottomColor: theme("colors.gray.200"),
                },
              },
            ],
          },
          dark: {
            css: [
              {
                color: theme("colors.slate.500"),
                a: {
                  color: theme("colors.blue.500"),
                },
                strong: {
                  color: theme("colors.white"),
                },
                hr: {
                  borderColor: theme("colors.gray.600"),
                },
                code: {
                  color: theme("colors.gray.100"),
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: theme("colors.white"),
                },
                blockquote: {
                  color: theme("colors.slate.500"),
                  backgroundColor: theme("colors.gray.800"),
                },
                "thead, tbody tr": {
                  borderBottomColor: theme("colors.gray.600"),
                },
              },
            ],
          },
        };
      },
    },
  },
  plugins: [],
};
