import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ["Titillium Web", "Segoe UI", "Arial", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  googleFonts: [
    {
      name: "Titillium Web",
      styles: ["400", "600"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export default typography
