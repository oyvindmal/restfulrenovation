const express = require('express')
const app = express()
const port = 3000
var data = require('./data/vadso.js')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//console.log(data);

app.get('/test', (req, res) => {
  res.json(data)
})

/*app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));*/
	

app.listen(3000, 
	() => console.log("Server is running..."));