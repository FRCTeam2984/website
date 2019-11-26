import React from "react"
import { Link } from "gatsby"
import Container from "../container"
import logo from "../../icons/logo.svg"
import HeaderLink from "./headerLink"
import { colors } from "../theme"

const Navbar = () => (
  <header
    style={{
      backgroundColor: colors.lightlightgray,
      border: "1px solid " + colors.lightgray,
      borderTopStyle: "none",
      borderRightStyle: "none",
      borderBottomStyle: "solid",
      borderLeftStyle: "none",
      position: "fixed",
      zIndex: 10,
      width: "100%",
      top: 0,
      left: 0,
    }}
  >
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          height: 60,
        }}
      >
        {/* Use h1 to use the header font */}
        <h1 style={{ marginBottom: "auto", marginTop: "auto" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
            }}
          >
            <img src={logo} height="40" alt="logo" style={{ margin: "auto" }} />
            <span
              style={{
                marginLeft: 10,
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              Vikings Robotics
            </span>
          </Link>
        </h1>
        <nav
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "flex-end",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          <HeaderLink title="Blog" to="/page-2/"></HeaderLink>
          <HeaderLink title="Sponsors" to="/page-3/"></HeaderLink>
          <HeaderLink title="Community Outreach" to="/community"></HeaderLink>
          <HeaderLink title="Resources" to="/resources"></HeaderLink>
        </nav>
      </div>
    </Container>
  </header>
)

export default Navbar
