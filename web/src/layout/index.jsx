import React from 'react'
import '../styles/index.scss'
import favicon from '../assets/Imagotipo OHCC.jpg'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const { sanityLayout } = useStaticQuery(query)

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <GatsbyImage
        image={sanityLayout?.headerImage?.asset?.gatsbyImageData}
        alt={sanityLayout?.headerImage?.alt}
        className="banner-image"
        //imgStyle={{ objectFit: 'contain' }}
      />
      <Container>{children}</Container>
    </>
  )
}

export default Layout

const query = graphql`
  query {
    sanityLayout {
      title
      headerImage {
        alt
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
