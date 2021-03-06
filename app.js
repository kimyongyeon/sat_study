var express = require('express')
var app = express()

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/names', (req, res) => {
  res.send({
    name: '철수',
    phone: '2323234',
    addr: '산'
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
