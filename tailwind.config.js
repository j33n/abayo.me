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
      team: {
        unknown: "var(--color-team-unknown)",
        current: "var(--color-team-current)",
        yellow: "var(--color-team-yellow)",
        blue: "var(--color-team-blue)",
        red: "var(--color-team-red)",
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
                  color: theme("colors.team.blue"),
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
                  color: theme("colors.team.current"),
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
                  color: theme("colors.team.current"),
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
