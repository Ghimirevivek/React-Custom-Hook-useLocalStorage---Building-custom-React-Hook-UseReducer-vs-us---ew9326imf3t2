import { useEffect } from 'react'
import { useState } from 'react'

const useLocalStorage = (stateVar, value) => {
  const [state, setState] = useState(() => {
    const getKeyValue = localStorage.getItem(stateVar)
    if (getKeyValue !== null) {
      return JSON.parse(getKeyValue)
    } else {
      return value
    }
  })
  useEffect(() => {
    localStorage.setItem(stateVar, JSON.stringify(state))
  }, [stateVar, setState])

  return [state, setState]
}

export default useLocalStorage
