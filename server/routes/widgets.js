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
  db.makeWidget(widget)
  .then(newWidget => {
    res.send(newWidget)
  })
})

router.delete('/:id', (req, res) => {
  db.deleteWidget(req.params.id)
  .then(widget => console.log(widget))
  .catch(err => {
    res.status(500).send(err.message)
  })
})

router.put('/', (req, res) => {
  db.updateWidget(req.body)
  .then(widget => console.log(widget))
  .catch(err => {
    res.status(500).send(err.message)
  })
})


module.exports = router
