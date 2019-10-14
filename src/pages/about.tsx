import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Site } from '../graphql'

interface AboutProps {
  data: {
    site: Site
  }
}

interface Data {
  site: Site
}

// const About = ({ data }: AboutProps) => {
const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  ) as Data
  return (
    <div>
      <h1>About</h1>
      <h2>site title: {data.site.siteMetadata!.title}</h2>
    </div>
  )
}

export default About
