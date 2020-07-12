import { useEffect, useState } from 'react'
import { getStates } from '../services/states'

export default () => {
  const [states, setStates] = useState<string[]>([])

  useEffect(() => {
    getStates()
      .then((data) => setStates(data))
      .catch((error) => {
        throw error
      })
  }, [])

  return { states }
}
