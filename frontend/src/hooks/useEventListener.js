import { useEffect, useRef } from "react"
import {useLocation} from 'react-router-dom';
function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef()
  const location = useLocation();
  
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, location])
}

export default useEventListener