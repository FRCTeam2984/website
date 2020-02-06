//provides the hover styling of a link
//wrap it around an element to give it the styling

import React from "react"
import { colors } from "../theme"

export const LinkStyle = ({ children }) => (
  <span
    css={{
      color: colors.black,
      transition: "color 0.2s ease-out",
      ":hover": {
        color: colors.red,
        cursor: "pointer",
      },
    }}
  >
    {children}
  </span>
)

//contains extra underline
export const TextLinkStyle = ({ children }) => (
  <span
    css={{
      color: colors.red,
      transition: "color 0.1s ease-out",
      ":hover": {
        color: colors.darkred,
        cursor: "pointer",
        textDecoration: "underline",
      },
    }}
  >
    {children}
  </span>
)
