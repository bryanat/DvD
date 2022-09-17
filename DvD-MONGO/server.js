import 'dotenv/config'
import express from 'express'

// FUTURE: import users router
import { router as usersRouter } from './routers/users-router.js'

// create express app including json middleware
const app = new express()
app.use(express.json())

// FUTURE add users router to express app
app.use('/users', usersRouter)

// start the express server
app.listen(8088)
