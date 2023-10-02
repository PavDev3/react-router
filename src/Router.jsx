import { useEffect, useState } from 'react'
import { EVENT } from './const'
import { match } from 'path-to-regexp'

// eslint-disable-next-line react/prop-types
export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>Error 404</h1>}){
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

    const Page = routes.find(({ path }) => {
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
    : <DefaultComponent />
  }
  