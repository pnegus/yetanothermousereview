import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as previewStyles from "../components/previewStyle.module.css"

const ArticlePreview = ({ post }) => (
  <div className = {previewStyles.PreviewBox}>
    <div className = {previewStyles.PreviewImg}>
      <StaticImage
        layout="constrained"
        src="../images/p4.png"
        placeholder="blurred"
        alt="Site logo"
        height={50}
      />
    </div>
    
    <div className = {previewStyles.PreviewTitle}>
      {post.frontmatter.title}
    </div>
  
    <div className = {previewStyles.PreviewText}>
      {post.excerpt}
      ...
    </div>
    <Link to={post.frontmatter.slug} className = {previewStyles.PreviewMore}>
      Read more
    </Link>
  </div>
)

export default ArticlePreview