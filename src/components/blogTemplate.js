import React from "react"
import { graphql } from "gatsby"
import Container from "./container"
import Navbar from "./Header/navbar"
import Footer from "./Footer/footer"
import SEO from "./seo"
import { Global, css } from "@emotion/core"

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Global
        styles={css`
          main a {
            color: #000000;
            transition: color 0.2s ease-out;
          }

          main a:hover {
            color: #ff1919;
            cursor: pointer;
            text-decoration: underline;
          }

          main img {
            padding-bottom: 0.5em;
          }
        `}
      ></Global>
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
          <p css={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
            By {frontmatter.author}
          </p>
          <p css={{ fontWeight: "bold" }}>{frontmatter.date}</p>
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
        author
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
