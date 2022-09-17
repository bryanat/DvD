import { Router } from 'express';
import { users } from '../om/om-client.js'

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

