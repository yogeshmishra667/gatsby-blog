
  
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import blogStyle from "../templates/blog.module.scss"

export const query = graphql`
   query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = ({data}) => {
  
    return (
      <Layout>
        <h1 className={blogStyle.head}>
          {data.markdownRemark.frontmatter.title}
        </h1>
        <p className={blogStyle.para}>{data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          className={blogStyle.data}
        ></div>
      </Layout>
    )
}

export default Blog


