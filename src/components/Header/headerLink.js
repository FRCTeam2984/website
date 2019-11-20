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
        color: colors.red,
      }}
      //css instead of style to get :hover to work (uses glamor plugin)
      css={{
        color: colors.black,
        transition: 'color 0.2s ease-in-out',

        ':hover': {
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
