import { Router } from 'express';
import { Collection } from 'mongodb';

////////////////////////////////////////////////
/////// MOVE TO om-client.js //////////////////

import { MongoClient } from 'mongodb';

// create mongo client 
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

// client connect to server before proceeding
await client.connect()
console.log('mongo client connected...')

// alias the database name as db
const db = client.db('dvd')
// instantiate variables for collections
const users = db.collection('users')
const versus = db.collection('versus')

////////////////////////////////////////////////

export const router = Router()

// C (create) put user into users collection
router.put('/putUSER', async(req, res) => {
  const userReq = req.body
  const insertResult = await users.insertOne({
    name: req.body.name ?? 'UNKNOWN',
    age: req.body.age ?? null,
    weight: req.body.weight ?? null,
    height: req.body.height ?? null,
    color: req.body.color ?? null,
  })
  console.log(`Created document: ${insertResult}`)
  res.send({log: `Created mongo document _id: ${insertResult.insertedId}`})
})

// R (read) get user from users collection
router.get('/getUSER', async (req, res) => {
  // note the [brackets] get first array result
  const [fetchResult] = await users.aggregate([
    //{ $match: { age: 25}},
    { $sample: { size: 1}}
  ]).toArray()
  //const fetchResult = await users.findOne({})
  console.log(fetchResult)
  res.send(fetchResult)
})

// R (read) get user from users collection
router.get('/getUSER2', async (req, res) => {
  // note the [brackets] get first array result
  const [fetchResult] = await users.aggregate([
    //{ $match: { age: 25}},
    { $sample: { size: 1}}
  ]).toArray()
  //const fetchResult = await users.findOne({})
  console.log(fetchResult)
  res.send(fetchResult)
})

// R (read) get user from users collection
router.get('/id34234', async (req, res) => {
  const findResults = await Collection.find({})
  console.log(`Read document: ${findResults}`)
})

router.get('/test', async (req, res) => {
  console.log("TEST ROUTE HIT")
  res.send({"testfield": "testvalue"})
})

