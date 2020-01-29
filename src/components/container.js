//
import React from "react"

const Container = ({ children }) => (
  <div
    style={{
      paddingLeft: 10,
      paddingRight: 10,
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      maxWidth: 1200,
    }}
  >
    {children}
  </div>
)

export default Container
