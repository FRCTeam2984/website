import React from "react"
import { IconContext } from "react-icons"

const Icon = ({ children, color, size, margin }) => (
  <div
    style={{
      display: "inline-block",
      margin: margin,
      color: color,
    }}
  >
    <IconContext.Provider value={{ size: size }}>
      {children}
    </IconContext.Provider>
  </div>
)

export default Icon
