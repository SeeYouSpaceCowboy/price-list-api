import { Item } from '../models/item'
import express from 'express'
const router = express.Router()

router.get("/", async (req, res) => {
  const items = await Item.find().sort('price')
  res.send(items)
})

router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id)

  if (!item) return res.status(404).send('Item Id given not found.');
  res.send(item)
})

router.post("/", async (req, res) => {
  let item = new Item({
    name: req.body.name,
    price: req.body.price,
    unitPrice: parseFloat(req.body.price) / parseInt(req.body.unitAmount),
    unit: req.body.unit,
    location: req.body.location,
    date: req.body.date,
    active: true
  })
  item = await item.save()

  res.send(item)
})

router.put('/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    price: req.body.price,
    unitPrice: req.body.unitPrice,
    unit: req.body.unit,
    location: req.body.location,
    date: req.body.date,
    active: true
  }, { new: true })

  res.send(item)
})

router.delete('/:id', async (req, res) => {
  debugger
  const item = await Item.findByIdAndRemove(req.params.id);

  if (!item) return res.status(404).send('Item Id was not found.');

  res.send(item);
})

export default router
