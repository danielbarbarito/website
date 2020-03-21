/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Written by <strong>{author}</strong> who lives and works as a Senior
        Strategy Consultant and Full Stack Developer at IBM in New York City.
        You should follow him on{" "}
        <a href={`https://github.com/${social.github}`}>GitHub</a> and connect
        with him on{" "}
        <a href={`https://linkedin.com/in/${social.linkedin}`}>LinkedIn</a>.
      </p>
    </div>
  )
}

export default Bio
