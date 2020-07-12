import { NextApiRequest, NextApiResponse } from 'next'
import faunadb from 'faunadb'
import client from './client'
import { Beach } from '../../shared/types/beach'

type Response = {
  data: Beach[]
}

const {
  query: { Map: QMap, Paginate, Match, Index, Get },
} = faunadb

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { state } = req.query
  try {
    const matches = state
      ? Match(Index('beachesByState'), state)
      : Match(Index('allBeaches'))
    const paginated = Paginate(matches)
    const items = QMap(paginated, (ref) => Get(ref))

    const dbs = await client.query<Response>(items)

    res.status(200).json(dbs.data)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}
