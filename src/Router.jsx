import { useEffect, useState } from 'react'
import { EVENT } from './const'
// import { Page404 } from './Pages/404'

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
  
    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page /> : <DefaultComponent />
  }
  