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
  db.saveWidget(req.body)
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/', (req, res) => {
  console.log('data in new server side route' , req.body)
  db.updateWidget(req.body)
    .then(updatedWidget => {
      res.send(updatedWidget)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})



module.exports = router
