import React from "react"
import { colors } from "../theme"

const ExternalLink = ({ children, href }) => (
  <a
    href={href}
    css={{
      ":hover": {
        color: colors.red,
      },
    }}
  >
    {children}
  </a>
)

export default ExternalLink
