const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/test', (req, res) => {
  res.json({"foo": "bar"})
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));