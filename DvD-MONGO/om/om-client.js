/*
import { MongoClient } from 'mongodb';

// create mongo client 
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

async function main() {
  // client connect to server before proceeding
  await client.connect()
  console.log('mongo client connected...')
  
  // alias the database name as db
  const db = client.db('dvd')
  // instantiate variables for collections
  const users = db.collection('users')
  const versus = db.collection('versus')

  // 

  return 'done'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
*/