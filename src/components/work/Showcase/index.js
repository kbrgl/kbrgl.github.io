import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Work = ({ title, description, cover, slug, link }) => {
  const content = (
    <div className={styles.work}>
      <Img className={styles.image} fluid={cover.childImageSharp.fluid} />
      <div className={styles.bottom}>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
  if (link)
    return (
      <a style={{ display: 'block' }} href={link}>
        {content}
      </a>
    )
  return <Link to={slug}>{content}</Link>
}

Work.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object,
    }),
  }).isRequired,
  link: PropTypes.string,
}
Work.defaultProps = {
  link: '',
}

const Showcase = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              description
              cover {
                childImageSharp {
                  fluid(maxWidth: 1080) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.wrapper}>
        {data.allMarkdownRemark.nodes.map(node => (
          <Work
            key={node.frontmatter.title}
            slug={node.fields.slug}
            {...node.frontmatter}
          />
        ))}
      </div>
    )}
  />
)

export default Showcase
