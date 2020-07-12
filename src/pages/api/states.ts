import { NextApiRequest, NextApiResponse } from 'next'
import faunadb from 'faunadb'
import client from './client'

const {
  query: { Map: QMap, Distinct, Paginate, Match, Index },
} = faunadb

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const matches = Match(Index('allStates'))
    const paginated = Paginate(Distinct(matches))
    const items = QMap(paginated, (ref) => ref)

    const dbs = (await client.query(items)) as { data: any }

    res.status(200).json(dbs.data)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}
