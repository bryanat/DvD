// FUTURE: encrypt & salt the passwords (bcrypt)

import { Router } from 'express'
// logins is collection accessed through Mongo client
import { logins } from '../om/om-client.js'

export const router = Router()


// R (read/find/get) user login from logins collection
router.put('/getLogin', async (req, res) => {
  console.log(`== Express req.body result below ==`)
  console.log(req.body)
  const queryEmail = req.body.email
  // find the mongo user login object via email
  const result = await (await logins.find({}).toArray()).pop()
  //const result = await logins.find({email: {$exists: queryEmail}}).toArray()[0]
  console.log("== Mongo logins.find() result below ==")
  console.log(result)
  // check that password matches email
  res.send(result)
})

// C (create/insert/put) user login into logins collection
router.put('/putLogin', async (req, res) => {
  const result = await logins.insertOne({
    email: req.body.email ?? null,
    password: req.body.password ?? null,
  })
  res.send({ log: `Successfully added user ${req.body.email}` })
})

// dev route, will be deleted
router.get('/putLoginTest', async (req, res) => {
  const result = await logins.insertOne({
    email: 'test1@gmail.com',
    password: 'pass123'
  })
  res.send({ log: 'Successfully added user' })
})