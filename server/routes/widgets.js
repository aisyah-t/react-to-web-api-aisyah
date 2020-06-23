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

  db.saveWidget(widget)
  .then(() => {
    return db.getWidgets()
  })
  .then(widgets => {
    res.send(widgets)
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteWidget(id)
  .then(() => {
    res.sendStatus(200)
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})


module.exports = router
