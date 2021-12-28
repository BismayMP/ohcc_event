import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import { BaseBlockContent } from '../utils/richText'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

// markup
const IndexPage = ({ data: { sanityHome }, location }) => {
  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data, sanityHome.password)
    if (data.password === sanityHome.password) {
      console.log('password ok')
    }
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section>
      <div className="alert-container">
        {sanityHome.alert &&
          sanityHome.alert.length > 0 &&
          sanityHome?.alert.map((alert, index) => (
            <Alert key={index} variant={alert.type}>
              <Alert.Heading>{alert.title}</Alert.Heading>
              <BaseBlockContent blocks={alert._rawDescription} />
            </Alert>
          ))}
      </div>
      <div className="text-content">
        <div className="title">
          {sanityHome && sanityHome._rawTitle && (
            <BaseBlockContent blocks={sanityHome._rawTitle} />
          )}
        </div>
        {sanityHome && sanityHome._rawBody && (
          <BaseBlockContent blocks={sanityHome._rawBody} />
        )}
        <Link to="/cronograma">Mirar Cronograma</Link>
        <div className="btn-container">
          <Button onClick={handleShow}> Upload your Work</Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="string"
              placeholder="Nombre"
              {...register('name')}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email')}
            />
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Seleccione los archivos</Form.Label>
            <Form.Control type="file" multiple {...register('files')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña (consultar con el administrador)</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password?.message && (
              <span>La contraseña es incorrecta</span>
            )}
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    sanityHome(_id: { in: ["drafts.homePage", "homePage"] }) {
      uploadPassword
      _rawTitle(resolveReferences: { maxDepth: 10 })
      _rawBody(resolveReferences: { maxDepth: 10 })
      alert {
        title
        type
        _rawDescription(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`
