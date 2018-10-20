const items = require('./routes/items')
const express = require('express')
const app = express()

app.use(express.json())
app.use('/api/items', items)

app.get('/', (req, res) => {
  res.send([{ message: "Hello! Welcome to the Price List API!" }])
})

var port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on ${ port }...`))
