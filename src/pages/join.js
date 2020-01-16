import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FlexBox, FlexItem } from "../components/Helpers/flexBox"
import { colors } from "../components/theme"
import { TextLinkStyle } from "../components/Helpers/linkStyle"

const Join = () => (
  <Layout>
    <SEO title="Join" />
    <h1>How To Join The Team</h1>
    <p>Please fill out the 3 forms below and complete the safety test.</p>
    <p>Refer to the team handbook for more information.</p>
    <ul>
      <li>
        <TextLinkStyle>
          <a href="#">Team Handbook</a>
        </TextLinkStyle>
      </li>
    </ul>
    <h3>Forms</h3>
    <ol>
      <li>
        <TextLinkStyle>
          <a href="https://goo.gl/forms/SaWoLMADZkbF0iLp1">Sign Up Form</a>
        </TextLinkStyle>
      </li>

      <li>
        <TextLinkStyle>Emergency Contact Form</TextLinkStyle>
      </li>

      <li>
        <TextLinkStyle>Parental Agreement Form</TextLinkStyle>
      </li>
    </ol>
    <h3>Safety Test</h3>
    <p>First, read the safety test study guide.</p>
    <ul>
      <li>
        <TextLinkStyle>Safety Test Study Guide</TextLinkStyle>
      </li>
    </ul>
    <p>Then, complete the safety test.</p>
    <p>
      Do Problems 1 - 59, 70 - 79, 89, 94 - 95. (don't print){" "}
      <strong>or</strong> complete the online safety test.
    </p>
    <ul>
      <li>
        <TextLinkStyle>Safety Test</TextLinkStyle>
      </li>
      <li>
        <TextLinkStyle>
          <a href="https://goo.gl/forms/Talu6hhVzd3b8G7l2">
            Online Safety Test
          </a>
        </TextLinkStyle>
      </li>
    </ul>
  </Layout>
)

export default Join
