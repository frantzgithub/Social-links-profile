/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xm: '375px',
      xl: '1440px',
    },
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        cgrey: "hsl(0, 0%, 20%)",
        cDkGrey: "hsl(0, 0%, 12%)",
        cOffBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

