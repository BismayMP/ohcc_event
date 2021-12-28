import { graphql } from 'gatsby'
import React from 'react'
import { Table } from 'react-bootstrap'
import { BaseBlockContent } from '../utils/richText'

const Cronograma = ({ data: { sanityCalendar } }) => {
  return (
    <section>
      <div className="text-content">
        <div className="title">
          {sanityCalendar && sanityCalendar._rawTitle && (
            <BaseBlockContent blocks={sanityCalendar._rawTitle} />
          )}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Horario</th>
              <th>Descripción</th>
              <th>Participantes</th>
            </tr>
          </thead>
          <tbody>
            {sanityCalendar.body.map((item, index) => {
              const date = new Date(item.startDate)
              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{date.toLocaleString()}</td>
                  <td>
                    <BaseBlockContent blocks={item._rawDescription} />
                  </td>
                  <td>
                    {item.participants.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default Cronograma

export const pageQuery = graphql`
  query {
    sanityCalendar(_id: { in: ["drafts.calendarPage", "calendarPage"] }) {
      _rawTitle(resolveReferences: { maxDepth: 10 })
      body {
        _rawDescription(resolveReferences: { maxDepth: 10 })
        participants
        startDate
        title
      }
    }
  }
`
