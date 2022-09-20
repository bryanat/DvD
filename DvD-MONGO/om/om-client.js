import { MongoClient } from 'mongodb';

// create mongo client 
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
// useNewUrlParser: true,
// useUnifiedTopology: true,

// client connect to server before proceeding
await client.connect()
console.log('mongo client connected...')

// alias the database name as db
const db = client.db('dvd')
// instantiate variables for collections
export const users = db.collection('users')
export const versus = db.collection('versus')

export default client