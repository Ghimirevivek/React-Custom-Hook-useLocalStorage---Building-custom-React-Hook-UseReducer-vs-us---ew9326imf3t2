import { useEffect } from 'react'
import { useState } from 'react'

const useLocalStorage = (stateVar, value) => {
  const [state, setState] = useState(value)
  useEffect(() => {
    localStorage.setItem(stateVar, state)
  }, [state])

  return [state, setState]
}

export default useLocalStorage
