import express from 'express'
const router = express.Router()

// Temp Data
var items = [
  {
    id: 1,
    name: "Apple",
    price: 0.59,
    unitPrice: 0.59,
    unit: "apple",
    location: "Ideals, 100-48",
    date: "18102018",
    active: true
  },
  {
    id: 2,
    name: "Beer",
    price: 13.75,
    unitPrice: 2.20,
    unit: "beer",
    location: "Ideals, 100-48",
    date: "18102018",
    active: false
  },
]

router.get("/", (req, res) => {
  res.send(items)
})

router.get("/:id", (req, res) => {
  const item = items.find(item => parseInt(req.params.id) === item.id)

  res.send(item)
})

router.post("/", (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
    price: req.body.price,
    unitPrice: req.body.unitPrice,
    unit: req.body.unit,
    location: req.body.location,
    date: req.body.date,
    active: true
  }

  items.push(item)

  res.send(item)
})

export default router
