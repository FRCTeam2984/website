import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import fluidImage from "../components/fluidImage"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      teamPhoto: file(relativePath: { eq: "team-photo-2019.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          marginBottom: "25px",
        }}
      >
        <Img fluid={data.teamPhoto.childImageSharp.fluid} alt="Team Photo" />
      </div>
      <h1>Hi people</h1>
      <p>We are a student run team from La Jolla High school.</p>
      <p>
        Many people believe you have to have experience building or programming
        to join our club. That couldn’t be further from the truth!
      </p>
      <p>
        Most of our members have no prior knowledge when they join our team; the
        skills that people learn through FIRST Robotics can’t be easily taught
        in a classroom or learned at home. Because our robot is built entirely
        from the ground up we machine our own parts, do our own wiring, and
        write our own code.
      </p>
      <p>
        Most team members continue to use what they have learned into college,
        going on to pursue STEM degrees at engineering focused colleges such as
        Cal Tech, MIT, UC Berkeley, and Cal Poly SLO.
      </p>
      <p>
        Our team gives back to the community by volunteering to get kids
        interested in robotics.
      </p>
      <h1>What Do We Do?</h1>
      <p>
        Every year we participate in the First Robotics Competition, in which
        teams have 6 weeks to design and build a robot that competes in a
        sport-like event. At the end of the build season we attend regional
        competitions with teams from around the world in San Diego. At the 2018
        San Diego Regional we competed with teams from Chile, Denmark,
        Netherlands and Brazil.
      </p>
      <p>
        Our entire season is planned out to the day. We hold an entire meeting
        just to determine our strategy for the annual game.
      </p>
      <p>
        Mechanical focuses on creating the parts of the robot as well as parts
        of the field for practice.
      </p>
      <p>
        Electrical and software create our code that drives the robot as well as
        all the wiring the robot needs to function.
      </p>
      <p>
        Communications deals with all our fundraising and website development.
      </p>
      <p>Logistics handles budgeting and travel arrangements.</p>
      <p>
        Robotics isn’t just for STEM oriented students, we need a variety of
        people…including you!
      </p>
      <h1>Why not Join?</h1>
      <p>
        All you need to join is a want to have fun and a drive to learn. While
        our season starts early January and goes until late February, there are
        off-season meetings that are required members are required to attend to
        gain the skills necessary for the season. During the season we meet
        everyday except for Sundays. On weekdays we meet from 2:50pm to 6:00pm
        and on Saturdays from 10am-6pm. It is not necessary to be at every
        meeting to be part of the team.
      </p>
      <p>
        We meet in Room 908 every Wednesday. Feel free to come after this season
        ends if you have any interest in joining.
      </p>
      <p>
        We work on fundraising and recruiting new members year round! Our team
        hosts a table at Club Day and Welcome to LJHS events. We also visit
        local our local elementary and middle schools to provide information and
        foster an interest in engineering in younger students.
      </p>
    </Layout>
  )
}

export default IndexPage
