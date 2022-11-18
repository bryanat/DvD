import { Router } from 'express';
import { ObjectId, ReturnDocument } from 'mongodb';
import jwt from 'jsonwebtoken'
// users is a collection accessed through Mongo client
import { users } from '../om/om-client.js'

export const router = Router()

// C (create) put user into users collection
router.put('/userdata', async(req, res) => {
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

// D (delete) delete user by name from users collection
router.delete('/deleteUSER/:id', async(req, res) => {
  const deleteResult = await users.deleteOne({name: req.params.id})
  console.log(`Deleted mongo document ${deleteResult}`)
  res.send({log: `Deleted mongo document: ${deleteResult}`})
})

router.get('/test', async (req, res) => {
  console.log("TEST ROUTE HIT")
  res.send({"testfield": "testvalue"})
})

// put user data height and weight into users collection by user
router.put('/userdata/heightweight', async(req, res) => {
  const userReq = req.body
  //users.updateOne
  const insertResult = await users.updateOne(
    {_id: ObjectId(req.body.id)},
    {$set: {
      weight: req.body.weight ?? null,
      height: req.body.height ?? null,
    }}
  )
  console.log(`Created document: ${insertResult}`)
  res.send({log: `Updated mongo document _id: ${insertResult.insertedId}`})
})

// put user data goal weight into users collection by user
router.put('/userdata/goal', async(req, res) => {
  const userReq = req.body
  //users.updateOne
  const insertResult = await users.updateOne(
    {_id: ObjectId(req.body.id)},
    // {_id: ObjectId('6333ec2e28ac6c558456f404') }, 
    {$set: {
      goal: req.body.goal,
    }}
  )
  console.log(`Created document: ${insertResult}`)
  res.send({log: `Updated mongo document _id: ${insertResult.insertedId}`})
})

// put user data goal weight into users collection by user
router.put('/userdata/goalweight', async(req, res) => {
  const insertResult = await users.updateOne(
    {_id: ObjectId(req.body.id)},
    {$set: {
      goalweight: req.body.goalweight ?? null,
    }}
  )
  console.log(`Created document: ${insertResult}`)
  res.send({log: `Updated mongo document _id: ${insertResult.insertedId}`})
})

// put user data height and weight into users collection by user
router.put('/userdata/genderbirthday', async(req, res) => {
  const insertResult = await users.updateOne(
    {_id: ObjectId(req.body.id)}, 
    {$set: {
      gender: req.body.gender ?? null,
      birthday: req.body.birthday ?? null,
    }}
  )
  console.log(`Created document: ${insertResult}`)
  res.send({log: `Updated mongo document _id: ${insertResult.insertedId}`})
})

// put user data height and weight into users collection by user
router.put('/userdata/name', async(req, res) => {
  console.log(`hskjh ${req.body.name}`)
  const insertResult = await users.updateOne(
    {_id: ObjectId(req.body.id)}, 
    {$set: {
      name: req.body.name ?? null,
    }}
  )
  console.log(`/userdata/name route hit. updated document: ${insertResult}`)
  res.send({log: `Updated mongo document _id: ${insertResult.insertedId}`})
})




////////////////////////////////////////////////////

// LOGIN ROUTE IMPORT
// R (read/find/get) user login from users collection
router.post('/login', async (req, res) => {
  // find the mongo user login object via email
  const result = await (await users.find({email: {$eq: req.body.email}}).toArray()).pop()
  console.log("====dsf=sd=f=sdf=")
  console.log(result._id)
  // if a user is found (because result is not undefined)
  console.log(req.body)
  if (result != undefined) {
    // check that password (from client) matches email password (from mongo server)
    if (result.password == req.body.password) {
      console.log({log: 'username and password found and match', authenticated: true})
      // gotta integrate mongo _id ObjectId with jwt
      res.send({log: 'username and password found and match', authenticated: true, tokenID: result._id, token: jwt.sign({payload: 'value'}, 'secretKey')})
    } else {
      res.send({log: `incorrent password for ${req.body.email},`, authenticated: false})
      console.log(`client password ${req.body.password} does not match server password`)
    }
  } 
  // if a user is not found, guide to go to signup screen 
  else {
    console.log(`The client entered username ${req.body.email} does not match any server user`)
    res.send({log: 'username was not found', authenticated: false})
  }
})

// SIGNUP ROUTE IMPORT
// C (create/insert/put) user login into users collection
router.put('/signup', async (req, res) => {
  const result = await users.insertOne({
    email: req.body.email ?? null,
    password: req.body.password ?? null,
  })
  res.send({ log: `Successfully added user ${req.body.email}` })
})

router.get('/testRoute', async (req, res) => {
  res.send({log: "TEST ROUTE HIT"})
})
