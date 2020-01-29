import React from "react"
import ExternalLink from "./externalLink"
import { IconContext } from "react-icons"

const ExternalLinkIcon = ({ children, href, size, marginRight }) => (
  <div
    style={{
      display: "inline-block",
      marginRight: marginRight,
    }}
  >
    <ExternalLink href={href}>
      <IconContext.Provider value={{ size: size }}>
        {children}
      </IconContext.Provider>
    </ExternalLink>
  </div>
)

export default ExternalLinkIcon
