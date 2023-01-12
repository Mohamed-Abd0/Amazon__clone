/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#ff9900",
      },
      screens: {
        max2xl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        maxxl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        maxlg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        maxmd: { max: "899px" },
        md: { min: "900px" },
        // => @media (max-width: 767px) { ... }
        maxsm: { max: "639px" },
        maxvarysm: {max : "450px"}
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
}
