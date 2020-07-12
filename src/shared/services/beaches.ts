import { Beach } from '../types/beach'

type Response = {
  data: Beach
  ref: {
    '@ref': {
      id: string
    }
  }
}[]

const parseReponse = (res: Response = []): Beach[] => {
  return res.map(({ data, ref: { '@ref': { id } } }) => ({ ...data, id }))
}

export const getBeaches = async (state?: string) => {
  const queryParams = state ? `?state=${state}` : ''
  const res = await fetch(`/api${queryParams}`)
  const data: Response = await res.json()

  return data.length > 0 ? parseReponse(data) : []
}
