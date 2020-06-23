const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req,res) => {
  const widget = req.body
  db.saveWidget(widget)
    .then(() => {
      return db.getWidgets()
    })
    .then(widget => {
      res.send(widget)
    })
})

router.put('/', (req,res) => {
  const widget = req.body
  db.updateWidget(widget)
    .then(() => {
      return db.getWidgets()
    })
    .then(widget => {
      res.send(widget)
    })
})

router.delete('/', (req, res) => {
  const widget = req.body
  db.deleteWidget(widget)
    .then(() => {
      res.send({})
    })
})

module.exports = router
