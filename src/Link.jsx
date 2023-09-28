import { EVENT } from './const'

export function navigate (href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENT.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }


  export function Link ({target, to, ...props}) {
    const handleClick = (event) => {
        event.preventDefault()

        const isMainEvent = event.button === 0 
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent)
        event.preventDefault()
        navigate(to)
      return false;
    
    }

    return <a onClick={handleClick} href={to} target={target} {...props}></a>
  }