import React from 'react'
import './richText.scss'
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { Link } from 'gatsby'

const {
  GATSBY_SANITY_PROJECT_ID = 'vsasuerv',
  GATSBY_SANITY_DATASET = 'production',
} = process.env

const Figure = ({ node }) => {
  const imageData = getGatsbyImageData(
    node.asset._id,
    { placeholder: 'blurred' },
    { dataset: GATSBY_SANITY_DATASET, projectId: GATSBY_SANITY_PROJECT_ID },
  )

  return (
    <figure>
      <GatsbyImage
        image={imageData}
        alt={node.alt || 'birchbrook'}
        className="figure"
      />
    </figure>
  )
}

export const defaultSerializers = {
  marks: {
    em: (props) => (
      <span className="ivyprestoheadlinethinitalic">{props.children}</span>
    ),
    italic: (props) => (
      <span className="ivyprestoheadlinethinitalic">{props.children}</span>
    ),
    link: ({ mark, children }) => {
      const { href } = mark
      const docTypes = ['.pdf', '.doc', '.pages', '.ppt']
      const isDoc = docTypes.find((str) => href?.includes(str))
      return href && href?.charAt(0) === '/' && !isDoc ? (
        <Link to={href} className="link">
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener" className="link">
          {children}
        </a>
      )
    },
    code: (props) => (
      <code dangerouslySetInnerHTML={{ __html: props.children }} />
    ),
    color: (props) => (
      <span style={{ color: props.mark.hex }}>{props.children}</span>
    ),
    highlight: (props) => <mark>{props.children}</mark>,
    AlignCenter: (props) => (
      <div style={{ textAlign: 'center' }}>{props.children}</div>
    ),
    AlignJustify: (props) => (
      <div style={{ textAlign: 'justify' }}>{props.children}</div>
    ),
    AlignLeft: (props) => (
      <div style={{ textAlign: 'left' }}>{props.children}</div>
    ),
    AlignRight: (props) => (
      <div style={{ textAlign: 'right' }}>{props.children}</div>
    ),
  },
  types: {
    code: (props) => (
      <code dangerouslySetInnerHTML={{ __html: props.children }} />
    ),
    italic: ({ node }) => (
      <span className="ivyprestoheadlinethinitalic">{node.text}</span>
    ),
    reference: () => <div></div>,
    mainImage: Figure,
  },
}

export const BaseBlockContent = ({ blocks, serializers, className }) => {
  const serializersDict = serializers || defaultSerializers

  return (
    <BlockContent
      serializers={serializersDict}
      blocks={blocks}
      className={`block-content ${className}`}
    />
  )
}
