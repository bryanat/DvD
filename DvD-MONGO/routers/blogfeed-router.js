import { Router } from 'express'
import { users } from '../om/om-client.js'

export const router = Router() 

// get list of users dietPostHistory sorted by time
router.get('/blogtestdata', async (req, res) => {
  //res.send(Array[{mongo objects}, {mongo objects}, ...])
})

// get image from disk from matching metadata _id 
router.get('/blogtestimage:id', async (req, res) => {
  //res.download('../path/to/image')
})
