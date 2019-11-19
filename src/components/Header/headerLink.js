import { Link } from "gatsby"
import React from "react"
import { colors } from "../theme"

const HeaderLink = ({ title, to }) => (
  <h2
    style={{
      marginTop: "auto",
      marginBottom: "auto",
      paddingLeft: "4%",
      fontWeight: 450,
      fontSize: "18px",
    }}
  >
    <Link
      to={to}
      activeStyle={{
        outline: 0,
        color: colors.red,
      }}
      style={{
        color: colors.black,
        ":hover": {
          color: colors.red,
        },
      }}
      partiallyActive={true}
    >
      {title}
    </Link>
  </h2>
)

export default HeaderLink
