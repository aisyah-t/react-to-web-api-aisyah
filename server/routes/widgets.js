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

router.post('/', (req, res) => {
  const widget = req.body
  console.log(widget)
  console.log("I'm Alive!")
  db.saveWidget(widget)
    .then(() => {
      db.getWidgets()
        .then(widgets => {
          res.json(widgets)
        })
        .catch(err => {
          res.status(500).send(err.message)
        })
    })
})


module.exports = router
