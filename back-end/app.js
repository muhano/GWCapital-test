require('dotenv').config()
// console.log(process.env.BEARER_TOKEN, '<----------');
const express = require('express')
const cors = require('cors')
const app = express()
const controller = require('./twitter')

const port = 3000


app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/twitterfeeds', controller.fetchData)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})