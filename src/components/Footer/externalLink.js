import React from "react"
import { LinkStyle } from "../Helpers/linkStyle"

const ExternalLink = ({ children, href }) => (
  <LinkStyle>
    <a href={href}>{children}</a>
  </LinkStyle>
)

export default ExternalLink
