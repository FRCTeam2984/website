import { Link } from "gatsby"
import React from "react"
import { colors } from "../theme"

const HeaderLink = ({ title, to }) => (
  <h2
    style={{
      marginTop: "20px",
      marginBottom: "auto",
      paddingLeft: "4%",
      fontWeight: 450,
      fontSize: "18px",
    }}
  >
    <Link
      to={to}
      activeStyle={{
        color: colors.red,
        boxShadow: "0px 2px " + colors.red,
      }}
      activeClassName="active"
      //css instead of style to get :hover to work (uses glamor plugin)
      css={{
        color: colors.black,
        transition: "color 0.2s ease-in-out",
        height: "38px",
        display: "inline-block",
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