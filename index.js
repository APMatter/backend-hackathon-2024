const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/matter', function (req, res) {
    res.send('Matter')
  })

app.listen(3000)