import React from "react"
import { Link } from "gatsby"

const Post = ({ post }) => (
  <Link to={post.frontmatter.path}>
    <div
      css={{
        borderBottom: "1px dotted black",
        marginBottom: "1rem",
      }}
    >
      <h2 css={{ marginBottom: "0.5rem" }}>{post.frontmatter.title}</h2>
      <h3 css={{ marginBottom: "1rem" }}>{post.frontmatter.subtitle}</h3>
      <h4 css={{ marginBottom: "0.5rem", color: "rgba(0, 0, 0, 0.8)" }}>
        by {post.frontmatter.author}
      </h4>
      <h4 css={{ marginBottom: "1rem", color: "rgba(0, 0, 0, 0.8)" }}>
        {post.frontmatter.date}
      </h4>
      <p css={{ color: "rgba(0, 0, 0, 0.6)" }}>{post.excerpt}</p>
    </div>
  </Link>
)
export default Post
