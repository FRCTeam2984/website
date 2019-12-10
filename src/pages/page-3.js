import React from "react"

import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import logo from "../icons/logo.svg"

import Container from "../components/container"
import { FlexBox, FlexItem } from "../components/Helpers/flexBox"

import SVGWrapper from "../components/Helpers/svgWrapper"
import Boat from "../images/boat.svg"
import LightBlueWave from "../images/lightbluewave.svg"
import DarkBlueWave from "../images/darkbluewave.svg"
import BlueWave from "../images/bluewave.svg"

const ThirdPage = () => (
  <HomeLayout>
    <SEO title="Page two" />
    <div
      css={{
        marginTop: "60px",
        marginBottom: "50px",
        paddingTop: "100px",
        height: "calc(100vh - 60px)",
        background: "rgb(91,188,221)",
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
        <FlexItem>
          <h1>Our Values</h1>
        </FlexItem>
        <FlexItem>
          <ul>
            <li>some random stuff</li>
            <li>some random stuff</li>
            <li>some random stuff</li>
            <li>some random stuff</li>
          </ul>
        </FlexItem>
      </FlexBox>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </Container>
  </HomeLayout>
)

export default ThirdPage
