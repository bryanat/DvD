// FUTURE: encrypt & salt the passwords (bcrypt)

import { Router } from 'express'
// logins is collection accessed through Mongo client
import { logins } from '../om/om-client.js'

export const router = Router()


// R (read/find/get) user login from logins collection
router.get('/getLogin', async (req, res) => {
  const result = await logins.find({}).toArray()[0]
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
router.get('/getLoginTest', async (req, res) => {
  const result = await logins.find({}).toArray()
  res.send(result)
})

// dev route, will be deleted
router.get('/putLoginTest', async (req, res) => {
  const result = await logins.insertOne({
    email: 'test1@gmail.com',
    password: 'pass123'
  })
  res.send({ log: 'Successfully added user' })
})