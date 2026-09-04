/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background:
          "rgb(var(--color-background) / <alpha-value>)",

        surface:
          "rgb(var(--color-surface) / <alpha-value>)",

        foreground:
          "rgb(var(--color-foreground) / <alpha-value>)",

        "muted-foreground":
          "rgb(var(--color-muted-foreground) / <alpha-value>)",

        primary:
          "rgb(var(--color-primary) / <alpha-value>)",

        "primary-foreground":
          "rgb(var(--color-primary-foreground) / <alpha-value>)",

        border:
          "rgb(var(--color-border) / <alpha-value>)",

        danger:
          "rgb(var(--color-danger) / <alpha-value>)",

        "danger-foreground":
          "rgb(var(--color-danger-foreground) / <alpha-value>)",
      },
    },
  },

  plugins: [],
};