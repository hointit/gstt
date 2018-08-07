const express = require('express')
const path = require('path')
const port = process.env.PORT || 6969
var app = express()
app.use(express.static(__dirname))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.listen(port)
console.log(port)
console.log ('started')
