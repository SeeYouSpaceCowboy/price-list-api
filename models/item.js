import mongoose from 'mongoose'

const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  price: Number,
  unitPrice: Number,
  unit: String,
  location: String,
  date: Date,
  active: Boolean
}))

export { Item }
