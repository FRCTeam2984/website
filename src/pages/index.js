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

import Container from "../components/container"
import { FlexBox, FlexItem } from "../components/Helpers/flexBox"
import Button from "../components/Helpers/button"
import LinkStyle from "../components/Helpers/linkStyle"
import Icon from "../components/Helpers/icon"
import {
  FaWrench,
  FaCodeBranch,
  FaComments,
  FaMapMarkedAlt,
} from "react-icons/fa"
import { Link } from "gatsby"

import { colors } from "../components/theme"

const ThirdPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <div
      css={{
        marginTop: "60px",
        marginBottom: "50px",
        paddingTop: "100px",
        height: "calc(100vh - 60px)",
        background:
          "linear-gradient(rgba(91,188,221,1) 0%, rgba(225,232,224,1) 100%)",
      }}
    >
      <SVGWrapper
        left="-7%"
        top="70%"
        zIndex="1"
        scrollFactor="0.05"
        maxHeight="30%"
      >
        <BlueWave />
      </SVGWrapper>
      <SVGWrapper
        left="-10%"
        top="calc(70% + 30px)"
        maxHeight="calc(30% - 30px)"
        zIndex="2"
        scrollFactor="0"
      >
        <LightBlueWave />
      </SVGWrapper>
      <SVGWrapper
        left="calc(35vw)"
        bottom="calc(25% - 90px)"
        zIndex="3"
        scrollFactor="-0.15"
        width="35%"
        minWidth="400px"
      >
        <Boat />
      </SVGWrapper>
      <SVGWrapper
        left="-12%"
        top="calc(70% + 60px)"
        width="4800px"
        height="calc(30% - 60px)"
        zIndex="4"
        scrollFactor="-0.05"
      >
        <DarkBlueWave />
      </SVGWrapper>
      <div
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
          <img src={logo} height="72" alt="logo" style={{ margin: 0 }} /> | Team
          2984
        </h1>
      </div>
    </div>
    <Container>
      <FlexBox>
        <FlexItem flex="1">
          <h1>Our Mission</h1>
          <p>
            Vikings Robotics support the building of real world skills,
            instilling an appreciation for STEM fields in our members as well as
            giving back to the community through our outreach programs with
            local schools and groups.
          </p>
        </FlexItem>
        <FlexItem flex="1"></FlexItem>
      </FlexBox>
      <div css={{ marginTop: "50px" }}>
        <h1>Our Team</h1>
        <FlexBox>
          <FlexItem flex="1">
            <h1 css={{ color: colors.red }}>20</h1>
            <h3>Members</h3>
          </FlexItem>
          <FlexItem flex="1">
            <h1 css={{ color: colors.red }}>2</h1>
            <h3>Mentors</h3>
          </FlexItem>
          <FlexItem flex="1">
            <h1 css={{ color: colors.red }}>12</h1>
            <h3>Seasons</h3>
          </FlexItem>
          <FlexItem flex="1">
            <h1 css={{ color: colors.red }}>1</h1>
            <h3>Regional Wins</h3>
          </FlexItem>
        </FlexBox>
        <hr></hr>
        <FlexBox>
          <FlexItem flex="1" padding="0 10px 0 0">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaWrench />
            </Icon>
            <h3>Mechanical Team</h3>
            <p>
              Creates the parts of the robot as well as parts of the field for
              practice.
            </p>
          </FlexItem>
          <FlexItem flex="1" padding="0 10px 0 0">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaCodeBranch />
            </Icon>
            <h3>Software/Electrical Team</h3>
            <p>
              Writes the code that drives the robot as well as all the wiring
              the robot needs to function.
            </p>
          </FlexItem>
          <FlexItem flex="1" padding="0 10px 0 0">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaComments />
            </Icon>
            <h3>Communications Team</h3>
            <p>Deals with all our fundraising and website development.</p>
          </FlexItem>
          <FlexItem flex="1">
            <Icon size="32px" color={colors.red} margin="0 0 10px 0">
              <FaMapMarkedAlt />
            </Icon>
            <h3>Logistics Team</h3>
            <p>Handles budgeting and travel arrangements.</p>
          </FlexItem>
        </FlexBox>
        <LinkStyle>
          <Button>
            <p css={{ margin: "0" }}>Join Us</p>
          </Button>
        </LinkStyle>
      </div>
      <div css={{ marginTop: "50px" }}>
        <FlexBox>
          <FlexItem flex="2">
            <h1>First Robotics Competition</h1>
            <p
              css={{
                paddingRight: "25px",
                textAlign: "justify",
              }}
            >
              Every year we participate in the{" "}
              <LinkStyle>
                <a href="https://www.firstinspires.org/robotics/frc">
                  First Robotics Competition
                </a>
              </LinkStyle>
              , in which teams have 6 weeks to design and build a robot that
              competes in a sport-like event. At the end of the build season we
              attend regional competitions with teams from around the world in
              San Diego. At the 2018 San Diego Regional we competed with teams
              from Chile, Denmark, Netherlands and Brazil.
            </p>
          </FlexItem>
          <FlexItem flex="1">
            <LottieAnimation animationData={animationData}></LottieAnimation>
          </FlexItem>
        </FlexBox>
      </div>
      <div css={{ marginTop: "50px", textAlign: "center" }}>
        <h1>Our Sponsors</h1>
        <p>We rely on our sponsors for funding, allowing us to compete.</p>
        <LinkStyle>
          <Link to="/sponsors">
            <Button display="inline-block" margin="0 5px 0 0">
              See All Sponsors
            </Button>
          </Link>
        </LinkStyle>
        <LinkStyle>
          <Link to="/sponsors#become-a-sponsor">
            <Button display="inline-block" margin="0 0 0 5px">
              Become a Sponsor
            </Button>
          </Link>
        </LinkStyle>
      </div>
    </Container>
  </HomeLayout>
)

export default ThirdPage
