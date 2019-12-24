//provides the hover styling of a link
//wrap it around an element to give it the styling

import React from "react"
import { colors } from "../theme"

const LinkStyle = ({ children }) => (
  <span
    css={{
      color: colors.black,
      transition: "color 0.2s ease-in-out",
      ":hover": {
        color: colors.red,
        cursor: "pointer",
      },
    }}
  >
    {children}
  </span>
)

export default LinkStyle
