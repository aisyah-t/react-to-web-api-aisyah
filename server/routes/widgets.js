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

router.post('/add', (req, res) => {
  console.log("I'm Alive!")
  db.saveWidget()
    .then(() => {
      return db.getWidgets()
        .then(widgets => {
          res.send(widgets)
        })
        .catch(err => {
          res.status(500).send(err.message)
        })
    })
})


module.exports = router
