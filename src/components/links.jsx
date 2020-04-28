/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const LinkContainer = styled.div`
  display: flex;

  & > div > a:hover {
    transform: scale(1.1);
  }
`

const Links = ({ style }) => {
  const data = useStaticQuery(graphql`
    query LinksQuery {
      site {
        siteMetadata {
          otherLinks {
            name
            link
          }
        }
      }
    }
  `)

  const { otherLinks } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        border: "1px solid #efefef",
        borderLeft: "none",
        borderRight: "none",
        paddingBottom: 10,
        paddingTop: 10,
        ...style,
      }}
    >
      <LinkContainer>
        {otherLinks.map((l, i) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                style={{
                  fontFamily: `Montserrat, sans-serif`,
                  display: "block",
                  color: "#333",
                  fontWeight: "300",
                  boxShadow: "none",
                  transition: "all .5s",
                }}
                target="_blank"
                href={l.link}
              >
                {l.name}
              </a>
              {i != otherLinks.length - 1 ? (
                <span
                  style={{
                    color: "#afafaf",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  |
                </span>
              ) : null}
            </div>
          )
        })}
      </LinkContainer>
    </div>
  )
}

export default Links
