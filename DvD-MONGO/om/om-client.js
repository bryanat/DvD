// FUTURE: om with mongoose

import { MongoClient,ServerApiVersion } from 'mongodb';

// create mongo client 
const url = 'mongodb+srv://ebbuni1023:Wldud1023!@cluster0.n3ll4jg.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// useNewUrlParser: true,
// useUnifiedTopology: true,

// client connect to server before proceeding
await client.connect()
console.log('mongo client connected...')

// alias the database name as db
const db = client.db('dvd')
// instantiate variables for collections
export const users = db.collection('users')
// logins could be merged under users, consider query performance
export const versus = db.collection('versus')

export default client
