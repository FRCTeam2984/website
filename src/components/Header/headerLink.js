import { Link } from "gatsby"
import React from "react"
import { colors } from "../theme"
import { css } from "@emotion/core"
import { FaHandMiddleFinger } from "react-icons/fa"

const HeaderLink = ({ children, to }) => (
  <Link
    to={to}
    activeStyle={{
      color: colors.red,
      boxShadow: "0px 3px " + colors.red,
    }}
    activeClassName="active"
    //css instead of style to get :hover to work (uses glamor plugin)
    css={[
      {
        color: colors.black,
        transition: "color 0.2s ease-out",
        height: "57px",
        verticalAlign: "middle",
        display: "inline-block",
        marginLeft: "30px",

        ":hover": {
          color: colors.red,
        },
      },
      css`
        @media (max-width: 992px) {
          height: auto;
          border-top: 1px solid #dddddd;
          margin-left: 0px;
        }
      `,
    ]}
    partiallyActive={true}
  >
    <h2
      css={css`
        padding-top: 20px;
        padding-bottom: auto;
        font-weight: 500;
        font-size: 13.5pt;
        @media (max-width: 992px) {
          margin-bottom: 20px;
        }
      `}
    >
      {children}
    </h2>
  </Link>
)

export default HeaderLink
