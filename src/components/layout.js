import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Navbar from "./Header/navbar"
import Footer from "./Footer/footer"
import Container from "./container"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet defer={false}>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
      </Helmet>
      <Navbar />
      <Container>
        <main
          style={{
            marginTop: "100px",
            marginBottom: "50px",
            minHeight: "calc(100vh - 355px)",
          }}
        >
          {children}
        </main>
      </Container>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

//smooth scroll for links with '#'
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default Layout
