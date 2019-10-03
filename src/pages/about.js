import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <h3> i'm frontend developer</h3>
      <p>need developer <Link to="/contect">contect me</Link></p>
    </Layout>
  )
}

export default About
