import { useEffect, useState } from 'react'
import { EVENT } from './const'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null}){
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
  