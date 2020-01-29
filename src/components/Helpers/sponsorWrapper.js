import React from "react"

const SponsorWrapper = ({ children, href }) => (
  <div
    css={{
      margin: "25px 1em",
      maxWidth: "300px",
    }}
  >
    <a href={href}>{children}</a>
  </div>
)

export default SponsorWrapper
