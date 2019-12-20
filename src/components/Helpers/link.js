//provides the hover styling of a link

import React from "react"
import { colors } from "../theme"

const Link = ({ children }) => (
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

export default Link
