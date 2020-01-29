import React from "react"

const Button = ({ children, display, margin }) => (
  <div
    style={{
      width: "fit-content",
      padding: "0.25em 0.5em",
      borderWidth: "1px",
      borderStyle: "solid",
      display: display || "inline-block",
      margin: margin || "0",
    }}
  >
    {children}
  </div>
)

export default Button
