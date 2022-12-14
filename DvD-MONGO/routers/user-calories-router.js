  import { Router } from 'express';
// users is a collection accessed through Mongo client
import { users } from '../om/om-client.js'

export const router = Router()

//////// MONGO MODEL OF USER WITH DIET HEALTH HISTORY //////// 
// priority of model is to maximize query speed / data access, as processing bandwidth is more expensive than storage
// mongo database models revolve around the {object}, so how to best store calorie data in user {object}
// current method: calories stored under user, with each caloric entry associated with a datetime 
// {_id: '874928374', user: 'john doe', calorieHistory: [{time: 312983238, weight: 165}, {time: 312238723, calories: 1590}], postHistory: [{time: 312034398, imageid:63336600950cbc5a159b027a}, {time: 312844398, imageid: 632d5969ae1b2bb20331a536}, ]} 
// calories are stored under user as they will be queried by {user}, aggregations will revolve around {user} for user stats/ranks

// R (read) get user calories entries from calorieHistory
router.get('/getUserCalories', async (req, res) => {
  // const lastTwoWeeksWeight = users.aggregate return 14 days weight.toArray()
  // res.send(lastTwoWeeksWeight) // [array of ?jsonobjects?]
})

// U (update) post new user calorie entries from calorieHistory
router.post('/postUserCalories', async (req, res) => {
  // add calories to users calorieHistory with a timestamp
})

router.get('/getUserWeights', async (req, res) => {
  //
})

router.post('/postUserWeights', async (req, res) => {
  //
})
