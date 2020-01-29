import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Navbar from "./Header/navbar"
import Footer from "./Footer/footer"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
