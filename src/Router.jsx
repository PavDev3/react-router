import { Children, useEffect, useState } from 'react'
import { EVENT } from './const'
import { match } from 'path-to-regexp'

// eslint-disable-next-line react/prop-types
export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>Error 404</h1>}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
      window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENT.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENT.POPSTATE, onLocationChange)
        window.removeEventListener(EVENT.POPSTATE, onLocationChange)
      }
      
    }, [])
  
    let routeParams = {}
    // Añadimos rutas del children
    const routesFromChildren = Children.map(children,({ props, type }) => {
      const { name } = type
      const isRoute = name === 'Route'
      return isRoute ? props : null
    })
    
    const routesToUse = routes.concat(routesFromChildren)



    const Page = routesToUse.find(({ path }) => {
      if (path === currentPath) return true

      // Path to regexp para detectar rutas dinámicas
      const matcherUrl = match(path, { decode: decodeURIComponent })
      const matched = matcherUrl(currentPath)

      if (!matched) return false

    // Guardar parámetros de la url que eran dinámicos
    // en un objeto llamado routeParams
    // Ejemplo:
    // 
    // /search/:query
    // 
    // matched.params = { query: 'react' }

    routeParams = matched.params
    return true

    
  })?.Component

    return Page ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
  }
  