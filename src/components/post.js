import React from "react"
import { Link } from "gatsby"
import { colors } from "./theme"

const Post = ({ post }) => (
  <Link to={post.frontmatter.path}>
    <div
      css={{
        padding: "0.5rem",
        border: "1px solid lightgray",
        borderRadius: "2px",
        marginBottom: "1rem",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",

        ":hover": {
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
          color: colors.red,
        },
      }}
    >
      <h2 css={{ marginBottom: "0.5rem" }}>{post.frontmatter.title}</h2>
      <h3 css={{ marginBottom: "1rem" }}>{post.frontmatter.subtitle}</h3>
      <h5 css={{ marginBottom: "0.5rem", color: "rgba(0, 0, 0, 0.8)" }}>
        by {post.frontmatter.author}
      </h5>
      <h5 css={{ marginBottom: "1rem", color: "rgba(0, 0, 0, 0.8)" }}>
        {post.frontmatter.date}
      </h5>
      <p css={{ color: "rgba(0, 0, 0, 0.6)" }}>{post.excerpt}</p>
    </div>
  </Link>
)
export default Post
