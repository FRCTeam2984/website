import React from "react"
import { graphql } from "gatsby"
import Container from "./container"
import Navbar from "./Header/navbar"
import Footer from "./Footer/footer"
import SEO from "./seo"

import "../styles/markdown-pages.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <Navbar />
      <Container>
        <main
          style={{
            marginTop: "100px",
            marginBottom: "50px",
            minHeight: "calc(100vh - 355px)",
          }}
        >
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
      </Container>
      <Footer />
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
