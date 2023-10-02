/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Link } from '../Link'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [routeParams.query])

  return (
    <>
      <h1>Has buscado {routeParams.query} y te devolvemos lo que encontramos aquí.</h1>
      <p>Si no encuentras lo que buscas, puedes volver a la página principal y buscar otra cosa.</p>
      <p>Gracias por tu preferencia.</p>
    <Link to="/">Home</Link>
    </>
  )
}