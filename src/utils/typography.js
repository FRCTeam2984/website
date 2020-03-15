import Typography from "typography"
const typography = new Typography({
  baseFontSize: "19px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Oxygen", "Segoe UI", "Arial", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  googleFonts: [
    {
      name: "Oxygen",
      styles: ["400", "700"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export default typography
