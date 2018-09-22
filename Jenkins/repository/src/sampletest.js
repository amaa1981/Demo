var express = require('express')
var app = express()
var displayData = 'Sample node.js Express application'

app.get('/', (req, res) => res.send(displayData))

app.listen(3000, () => console.log('Example app listening on port 3000!'))