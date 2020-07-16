import { useCallback, useEffect, useReducer } from 'react'
import { Beach } from '../types/beach'
import { getBeaches } from '../services/beaches'

enum ACTION_TYPES {
  SET_BEACHES,
  FILTER_BEACHES,
}

type State = {
  beaches: Beach[]
  filteredBeaches: Beach[]
}

type Action =
  | {
      type: ACTION_TYPES.SET_BEACHES
      payload: Beach[]
    }
  | {
      type: ACTION_TYPES.FILTER_BEACHES
      payload?: string
    }

const initialState: State = {
  beaches: [],
  filteredBeaches: [],
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_BEACHES:
      return {
        ...state,
        beaches: action.payload,
        filteredBeaches: action.payload,
      }
    case ACTION_TYPES.FILTER_BEACHES:
      return {
        ...state,
        filteredBeaches: action.payload
          ? state.beaches.filter((beach) => beach.state === action.payload)
          : state.beaches,
      }
    default:
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleFilter = useCallback(
    (state?: string) => {
      dispatch({ type: ACTION_TYPES.FILTER_BEACHES, payload: state })
    },
    [dispatch]
  )

  useEffect(() => {
    const handler = () => {
      getBeaches()
        .then((data) =>
          dispatch({ type: ACTION_TYPES.SET_BEACHES, payload: data })
        )
        .catch((error) => {
          throw error
        })
    }

    handler()
  }, [])

  return {
    beaches: state.filteredBeaches,
    handleFilter,
  }
}
