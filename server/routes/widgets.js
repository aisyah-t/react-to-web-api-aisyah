const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', function (req, res) {
  db.getWidgets()
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
    .then(widget => {
      res.status(201).json(widget)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
