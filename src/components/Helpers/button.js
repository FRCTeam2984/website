import React from "react"

const Button = ({ children }) => (
  <div
    style={{
      width: "fit-content",
      padding: "0.25em 0.5em",
      borderWidth: "1px",
      borderStyle: "solid",
    }}
  >
    {children}
  </div>
)

export default Button
