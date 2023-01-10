import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import ArticlePreview from "../components/post-link"
import Layout from "../components/layout.js"

import * as indexStyles from "../components/index.module.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <ArticlePreview key={edge.node.id} post={edge.node} />)

  const firstPost = Posts[0]

  const links = [
    {
      text: "All Reviews",
      url: "reviews"
    },
    {
      text: "About",
      url: "about"
    }
  ] 

  return (
    <Layout>
      <div className = {indexStyles.NavBar}>
      <b>Sitemap:</b>{" "}
        {links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== links.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </div>

      <div className = {indexStyles.FeaturedReview}>
          {firstPost}
      </div>

      <div>{Posts}</div>
    </Layout>
  
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`