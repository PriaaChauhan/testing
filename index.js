const express = require('express')
require("dotenv").config()
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('<h1>Log in your Account</h1>')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 