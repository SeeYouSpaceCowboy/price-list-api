const express = require('/express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send([{ message: "Hello!" }])
})

var port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on ${ port }...`))
