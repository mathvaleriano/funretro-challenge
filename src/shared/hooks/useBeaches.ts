import { useCallback, useState, useEffect } from 'react'
import { Beach } from '../types/beach'
import { getBeaches } from '../services/beaches'

export default () => {
  const [beaches, setBeaches] = useState<Beach[]>([])

  const handleFilter = useCallback(
    (state = '') => {
      getBeaches(state)
        .then((data) => setBeaches(data))
        .catch((error) => {
          throw error
        })
    },
    [setBeaches]
  )

  useEffect(() => {
    handleFilter()
  }, [handleFilter])

  return {
    beaches,
    handleFilter,
  }
}
