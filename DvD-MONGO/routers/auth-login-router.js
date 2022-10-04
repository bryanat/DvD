// FUTURE: encrypt & salt the passwords (bcrypt)
// FUTURE: check that user email doesnt already exist before signup new email

import { Router } from 'express'
import jwt from 'jsonwebtoken'
// logins is collection accessed through Mongo client
import { logins } from '../om/om-client.js'

export const router = Router()

// R (read/find/get) user login from logins collection
router.post('/login', async (req, res) => {
  // find the mongo user login object via email
  const result = await (await logins.find({email: {$eq: req.body.email}}).toArray()).pop()
  // if a user is found (because result is not undefined)
  console.log(req.body)
  if (result != undefined) {
    // check that password (from client) matches email password (from mongo server)
    if (result.password == req.body.password) {
      console.log({log: 'username and password found and match', authenticated: true})
      res.send({log: 'username and password found and match', authenticated: true, token: jwt.sign({payload: 'value'}, 'secretKey')})
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

// C (create/insert/put) user login into logins collection
router.put('/signup', async (req, res) => {
  const result = await logins.insertOne({
    email: req.body.email ?? null,
    password: req.body.password ?? null,
  })
  res.send({ log: `Successfully added user ${req.body.email}` })
})

router.get('/testRoute', async (req, res) => {
  res.send({log: "TEST ROUTE HIT"})
})
