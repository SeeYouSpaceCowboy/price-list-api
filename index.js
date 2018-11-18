import cors from './middleware/cors'
import index from './routes/index'
import items from './routes/items'
import mongoose from 'mongoose'
import express from 'express'
const app = express()

mongoose.connect('mongodb://localhost/price-list')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...'))

app.use(express.json())
app.use(cors)
app.use(index)
app.use('/api/v1/items', items)

var port = process.env.PORT || 4001
app.listen(port, () => console.log(`Listening on ${ port }...`))
