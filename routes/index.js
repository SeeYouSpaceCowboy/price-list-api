const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ response: "Hello! Welcome to the root(/) path of Price List API!" })
})

module.exports = router
