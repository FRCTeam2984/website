import React from "react"

import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import logo from "../icons/logo.svg"

import SVGWrapper from "../components/Helpers/svgWrapper"
import Boat from "../images/boat.svg"
import LightBlueWave from "../images/lightbluewave.svg"
import DarkBlueWave from "../images/darkbluewave.svg"
import BlueWave from "../images/bluewave.svg"

import LottieAnimation from "../components/Helpers/lottieAnimation"
import animationData from "../assets/first.json"

import Wowee from "../images/sponsors/Wowee.svg"
import Qualcomm from "../images/sponsors/Qualcomm.svg"
import LockheedMartin from "../images/sponsors/LockheedMartin.svg"
import Verance from "../images/sponsors/Verance.svg"
import PerkinsCoie from "../images/sponsors/PerkinsCoie.svg"

import Container from "../components/container"
import Button from "../components/Helpers/button"
import { LinkStyle, TextLinkStyle } from "../components/Helpers/linkStyle"
import Icon from "../components/Helpers/icon"
import {
  FaWrench,
  FaCodeBranch,
  FaComments,
  FaMapMarkedAlt,
} from "react-icons/fa"
import { Link } from "gatsby"

import { css } from "@emotion/core"

import { colors } from "../components/theme"

const ThirdPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <div
      css={[
        {
          height: "calc(100vh - 60px)",
          marginTop: "60px",
          marginBottom: "30px",
          background:
            "linear-gradient(rgba(91,188,221,1) 0%, rgba(225,232,224,1) 100%)",
        },
        css`
          @media (max-width: 576px) {
            padding-top: 10%;
          }
          @media (min-width: 577px) {
            padding-top: 50px;
          }
          @media (min-width: 769px) {
            padding-top: 100px;
          }
        `,
      ]}
    >
      <SVGWrapper
        styles={{
          left: "-180px",
          top: "70vh",
          zIndex: "1",
          maxHeight: "30%",
        }}
        scrollFactor="0.05"
      >
        <BlueWave />
      </SVGWrapper>
      <SVGWrapper
        styles={{
          left: "-250px",
          top: "calc(70vh + 30px)",
          maxHeight: "calc(30vh - 30px)",
          zIndex: "2",
        }}
        scrollFactor="0"
      >
        <LightBlueWave />
      </SVGWrapper>
      <SVGWrapper
        styles={{
          marginLeft: "calc(-140px - 9vw)",
          left: "50%",
          top: "calc(70vh - 75px - 9vw)",
          // top="calc(70% - 18vw + 75px)"
          zIndex: "3",
          width: "calc(280px + 18vw)",
        }}
        scrollFactor="-0.15"
      >
        <Boat />
      </SVGWrapper>
      <SVGWrapper
        styles={{
          left: "-300px",
          top: "calc(70vh + 60px)",
          width: "4800px",
          height: "calc(30vh - 60px)",
          zIndex: "4",
        }}
        scrollFactor="-0.05"
      >
        <DarkBlueWave />
      </SVGWrapper>
      <div
        css={css`
          @media (max-width: 768px) {
            .desktop {
              display: none;
            }
            .mobile {
              display: block;
            }
          }
          @media (min-width: 769px) {
            .desktop {
              display: block;
            }
            .mobile {
              display: none;
            }
          }
        `}
      >
        <div
          className="desktop"
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72pt",
              verticalAlign: "middle",
              lineHeight: "100px",
              height: "100px",
            }}
          >
            <img src={logo} height="72" alt="logo" style={{ margin: 0 }} /> |
            Team 2984
          </h1>
        </div>
        <div
          className="mobile"
          style={{
            textAlign: "center",
          }}
        >
          <img src={logo} height="72" alt="logo" style={{ margin: 0 }} />
          <h1
            css={[
              {
                verticalAlign: "middle",
                lineHeight: "100px",
                height: "100px",
              },
              css`
                font-size: 64pt;
              `,
            ]}
          >
            Team 2984
          </h1>
        </div>
      </div>
    </div>
    <Container>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8">
          <h1>Our Mission</h1>
          <p>
            Vikings Robotics support the building of real world skills,
            instilling an appreciation for STEM fields in our members as well as
            giving back to the community through our outreach programs with
            local schools and groups.
          </p>
        </div>
      </div>
      <div css={{ marginTop: "50px" }}>
        <h1>Our Team</h1>
        <div className="row">
          <div className="col-6 col-md-3">
            <h1 css={{ color: colors.red }}>10</h1>
            <h3>Members</h3>
          </div>
          <div className="col-6 col-md-3">
            <h1 css={{ color: colors.red }}>3</h1>
            <h3>Mentors</h3>
          </div>
          <div className="col-6 col-md-3">
            <h1 css={{ color: colors.red }}>12</h1>
            <h3>Seasons</h3>
          </div>
          <div className="col-6 col-md-3">
            <h1 css={{ color: colors.red }}>1</h1>
            <h3>Regional Win</h3>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaWrench />
            </Icon>
            <h3>Mechanical Team</h3>
            <p>
              Creates the parts of the robot as well as parts of the field for
              practice.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaCodeBranch />
            </Icon>
            <h3>Software/Electrical Team</h3>
            <p>
              Writes the code that drives the robot as well as all the wiring
              the robot needs to function.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaComments />
            </Icon>
            <h3>Communications Team</h3>
            <p>Deals with all our fundraising and website development.</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaMapMarkedAlt />
            </Icon>
            <h3>Logistics Team</h3>
            <p>Handles budgeting and travel arrangements.</p>
          </div>
        </div>
        <LinkStyle>
          <Link to="/join">
            <Button>Join Us</Button>
          </Link>
        </LinkStyle>
      </div>
      <div className="row" css={{ marginTop: "50px" }}>
          <h1>FIRST Robotics Competition</h1>
          <p
            css={{
              textAlign: "justify",
            }}
          >
            Every year we participate in the{" "}
            <TextLinkStyle>
              <a href="https://www.firstinspires.org/robotics/frc">
                FIRST Robotics Competition
              </a>
            </TextLinkStyle>
            , in which teams have 6 weeks to design and build a robot that
            competes in a sport-like event. At the end of the build season we
            attend regional competitions with teams from around the world in San
            Diego. At the 2018 San Diego Regional, we competed with teams from
            Chile, Denmark, Netherlands and Brazil.
          </p>
          {/* <h1>FIRST Robotics Competition</h1>
          <p
            css={{
              textAlign: "justify",
            }}
          >
            This year we are competing in the {" "}
            <TextLinkStyle>
              <a href="https://www.firstinspires.org/robotics/ftc">
                FIRST Robotics Competition
              </a>
            </TextLinkStyle>
            . The competition involves a period to build our robot using various 
            pieces of software, motors, sensors, and CAD-designed parts, followed 
            by a period of competitions where we can refine our robot.
          </p> */}
        {/* <div className="col-8 col-sm-6 col-lg-4">
          <LottieAnimation animationData={animationData}></LottieAnimation>
        </div> */}
      </div>
      <div
        css={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
      >
        <h1>Our Sponsors</h1>
        <p>We rely on our sponsors for funding, allowing us to compete.</p>
        <LinkStyle>
          <Link to="/sponsors">
            <Button display="inline-block" margin="5px">
              See All Sponsors
            </Button>
          </Link>
        </LinkStyle>
        <LinkStyle>
          <Link to="/sponsors#become-a-sponsor">
            <Button display="inline-block" margin="5px">
              Become a Sponsor
            </Button>
          </Link>
        </LinkStyle>
        <div
          className="row align-items-center"
          css={{
            marginTop: "30px",
            "& svg": {
              width: "100%",
              height: "auto",
            },
          }}
        >
          <div className="col">
            <Wowee />
          </div>
          <div className="col">
            <Qualcomm />
          </div>
          <div className="col">
            <LockheedMartin />
          </div>
          <div className="col">
            <Verance />
          </div>
          <div className="col">
            <PerkinsCoie />
          </div>
        </div>
      </div>
    </Container>
  </HomeLayout>
)

export default ThirdPage
