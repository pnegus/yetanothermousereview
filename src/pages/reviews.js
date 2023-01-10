import React from "react"
import {graphql} from 'gatsby'
import PostLink from "../components/post-link"
import Layout from "../components/layout.js"

const ReviewPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <div>{Posts}</div>
    </Layout>
  )
}
export default ReviewPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
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
  }`