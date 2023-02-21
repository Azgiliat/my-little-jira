const colors = require("tailwindcss/colors");

module.exports = {
  content: ["index.html", "./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.gray,
        error: colors.red,
        warning: colors.orange
      }
    }
  },
  safelist: [
    {
      pattern: /bg-(primary|secondary|error|warning)-(\d\d\d)/
    }
  ]
};
