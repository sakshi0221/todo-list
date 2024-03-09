module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 900: "#242320", "900_01": "#1b1a17" },
        deep_orange: { 900: "#a35709" },
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9" },
        orange: { 600: "#ff8303" },
        lime: { 100: "#f0e3ca", "100_a3": "#f0e3caa3" },
      },
      boxShadow: {},
      fontFamily: { roboto: "Roboto", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
