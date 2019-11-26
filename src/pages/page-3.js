import React from "react"

import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import Boat from "../images/boat.svg"
import LightBlueWave from "../images/lightbluewave.svg"
import DarkBlueWave from "../images/darkbluewave.svg"
import BlueWave from "../images/bluewave.svg"
import SVGWrapper from "../components/svgWrapper"
import logo from "../icons/logo.svg"

const ThirdPage = () => (
  <HomeLayout>
    <SEO title="Page two" />
    <div
      css={{
        marginTop: "60px",
        marginBottom: 0,
        paddingTop: "100px",
        height: "calc(100vh - 60px)",
        background: "rgb(91,188,221)",
        background:
          "linear-gradient(rgba(91,188,221,1) 0%, rgba(225,232,224,1) 100%)",
      }}
    >
      <SVGWrapper left="-7%" bottom="230px" zIndex="1" scrollFactor="0.05">
        <BlueWave />
      </SVGWrapper>
      <SVGWrapper left="-10%" bottom="200px" zIndex="2" scrollFactor="0">
        <LightBlueWave />
      </SVGWrapper>
      <SVGWrapper left="35vw" bottom="225px" zIndex="3" scrollFactor="-0.15">
        <Boat />
      </SVGWrapper>
      <SVGWrapper left="-12%" bottom="0" zIndex="4" scrollFactor="-0.05">
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
  </HomeLayout>
)

export default ThirdPage
