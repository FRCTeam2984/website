import React from "react"
import { graphql } from "gatsby"

import Post from "../components/post"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => <Post key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog Posts</h1>
      <div>{Posts}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { glob: "./**/blog/*.md" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "YYYY-MM-DD")
            path
            title
            subtitle
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`

export default SecondPage
