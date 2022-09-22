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
  console.log(`the email query is: ${queryEmail}`)
  // find the mongo user login object via email
  const result = await (await logins.find({email: {$eq: queryEmail}}).toArray()).pop()
  // if a user is found (because result is not undefined)
  if (result != undefined) {
    // check that password (from client) matches email password (from mongo server)
    if (result.password == req.body.password) {
      console.log({log: 'username and password found and match', authenticated: true})
      res.send({log: 'username and password found and match', authenticated: true})
    } else {
      res.send({log: `incorrent password for ${req.body.email},`, authenticated: false})
      console.log(`client password ${req.body.password} does not match server password`)
    }
  } 
  // if a user is not found, guide to go to signup screen 
  else {
    console.log(`The client entered username ${queryEmail} does not match any server user`)
    res.send({log: 'username was not found', authenticated: false})
  }
})

// C (create/insert/put) user login into logins collection
router.put('/putLogin', async (req, res) => {
  const result = await logins.insertOne({
    email: req.body.email ?? null,
    password: req.body.password ?? null,
  })
  res.send({ log: `Successfully added user ${req.body.email}` })
})







//////////////////////////////////////////////////
// dev route, will be deleted
router.get('/putLoginTest', async (req, res) => {
  const result = await logins.insertOne({
    email: 'test1@gmail.com',
    password: 'pass123'
  })
  res.send({ log: 'Successfully added user' })
})