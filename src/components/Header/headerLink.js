import { Link } from "gatsby"
import React from "react"
import { colors } from "../theme"

const HeaderLink = ({ children, to }) => (
  <h2
    style={{
      marginTop: "20px",
      marginBottom: "auto",
      paddingLeft: "4%",
      fontWeight: 500,
      fontSize: "18px",
    }}
  >
    <Link
      to={to}
      activeStyle={{
        color: colors.red,
        boxShadow: "0px 3px " + colors.red,
      }}
      activeClassName="active"
      //css instead of style to get :hover to work (uses glamor plugin)
      css={{
        color: colors.black,
        transition: "color 0.2s ease-in-out",
        height: "37px",
        display: "inline-block",
        ":hover": {
          color: colors.red,
        },
      }}
      partiallyActive={true}
    >
      {children}
    </Link>
  </h2>
)

export default HeaderLink
