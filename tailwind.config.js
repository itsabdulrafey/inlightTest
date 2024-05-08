module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700: "#ffffff",
          A700_19: "#ffffff19",
          A700_33: "#ffffff33",
          A700_b2: "#ffffffb2",
          A700_66: "#ffffff66",
          A700_e5: "#ffffffe5",
        },
        black: { 900: "#000000", "900_89": "#00000089", "900_b2": "#000000b2" },
        gray: { 200: "#efefef", 800: "#444444", 900: "#222222", "900_01": "#2a2a2a", "900_02": "#202124" },
        blue_gray: { 400: "#888888", 600: "#4f805d", 900: "#001d48", "900_01": "#333333" },
        lime: { 900: "#a46a1f" },
        indigo: { 50: "#e4eaf0", A700: "#1111ff" ,900: "#1e1678", A200: "#627eea"},
        orange: { A200: "#ea9e52" },
        green: { 500: "#5ad446", A700: "#00ac47" },
        blue: { 50: "#eff1ff", 100: "#c2dbff", A200: "#4d90f0","300_60": "#6ea8ff60" },
        purple: { 500: "#b9238f" },
        gray_300: "#dadada",
        gray_900_99: "#2a2a2a99",
        gray_500: "#959595",
      },
      boxShadow: {
        xs: "0px 10px  15px 0px #4f805d33",
        sm: "0px 1px  8px 0px #6e6e6e19",
        md: "1px 0px  1px 0px #dadce0",
        lg: "0px 4px  4px 0px #0000003f",
      },
      fontFamily: { helvetica: "Helvetica", roboto: "Roboto", poppins: "Poppins", inter: "Inter", audiowide: "Audiowide", segoeui: "Segoe UI" },
      backgroundImage: {
         gradient: "linear-gradient(134deg, #ff9123,#b9b9b9)",
      gradient1: "linear-gradient(90deg, #0f0c29,#1e1578,#24243e)",

    },
      textShadow: { ts: "0px 10px  15px #4f805d33" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
