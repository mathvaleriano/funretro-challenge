import { Client } from 'faunadb'

const secret = process.env.FAUNADB_SECRET_KEY as string
export default new Client({ secret })
