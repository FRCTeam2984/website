import React from "react"
import { Link } from "gatsby"
import Container from "../container"
import logo from "../../icons/logo.svg"
import HeaderLink from "./headerLink"
import { colors } from "../theme"
import { Global, css } from "@emotion/core"
import Icon from "../Helpers/icon"
import { MdMenu } from "react-icons/md"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: "" }
  }

  toggleNavbar = e => {
    let isActive = this.state.active === "active" ? "" : "active"
    this.setState({ active: isActive })
    console.log(this.state.active)
  }

  mobileCollapse = e => {
    if (this.state.active === "active") {
      this.setState({ active: "" })
    }
  }

  render() {
    return (
      <header
        style={{
          backgroundColor: colors.lightlightgray,
          border: "1px solid " + colors.lightgray,
          borderTopStyle: "none",
          borderRightStyle: "none",
          borderBottomStyle: "solid",
          borderLeftStyle: "none",
          position: "fixed",
          zIndex: 100,
          width: "100%",
          top: 0,
          left: 0,
        }}
      >
        <Container>
          <Global
            styles={css`
              .active {
                display: flex !important;
                @media (max-width: 992px) {
                  max-height: 360px !important;
                }
              }

              .collapsible-navbar-content {
                @media (max-width: 992px) {
                  max-height: 0;
                }
                transition: max-height 0.2s ease-out;
              }
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: stretch;
              @media (min-width: 993px) {
                height: 60px;
                flex-direction: row;
              }
              @media (max-width: 992px) {
                flex-direction: column;
              }
            `}
          >
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <h1 style={{ marginBottom: "auto", marginTop: "auto" }}>
                  <Link
                    to="/"
                    style={{
                      display: "flex",
                      height: "100%",
                      alignItems: "center",
                    }}
                    onClick={this.mobileCollapse}
                  >
                    <img
                      src={logo}
                      height="40"
                      alt="logo"
                      style={{ margin: "auto" }}
                    />
                    <span
                      css={css`
                        margin-left: 10px;
                        font-size: 24pt;
                        font-weight: 600;
                        @media (max-width: 475px) {
                          display: none;
                        }
                      `}
                    >
                      Vikings Robotics
                    </span>
                  </Link>
                </h1>
              </div>
              <div
                className="col navbar-toggle"
                onClick={this.toggleNavbar}
                css={css`
                  padding-top: 8px;
                  display: flex;
                  text-align: right;
                  color: #666666;
                  transition: color 0.2s ease-in-out;
                  @media (max-width: 992px) {
                    display: block;
                  }
                  @media (min-width: 993px) {
                    display: none;
                  }
                  :hover {
                    cursor: pointer;
                    color: #222222;
                  }
                `}
              >
                <Icon size="48px">
                  <MdMenu />
                </Icon>
              </div>
            </div>

            <nav
              className={this.state.active + " collapsible-navbar-content"}
              css={css`
                display: flex;
                align-items: stretch;
                justify-content: flex-end;
                overflow: hidden;

                @media (max-width: 992px) {
                  flex-direction: column;
                }
                @media (min-width: 993px) {
                  flex-direction: row;
                }
              `}
              onClick={this.mobileCollapse}
            >
              <HeaderLink to="/join">Join</HeaderLink>
              <HeaderLink to="/page-2/">Blog</HeaderLink>
              <HeaderLink to="/sponsors">Sponsors</HeaderLink>
              <HeaderLink to="/community">Outreach</HeaderLink>
              <HeaderLink to="/resources">Resources</HeaderLink>
              <HeaderLink to="/calendar">Calendar</HeaderLink>
            </nav>
          </div>
        </Container>
      </header>
    )
  }
}
