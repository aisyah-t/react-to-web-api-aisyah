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

//need to fix this to make update work
router.put('/:id', (req,res) => {
  const widget = req.body
  const id = req.params.id
  console.log(id, widget)
  db.updateWidget(id, widget)
    .then(() => {
      return db.getWidget(id)
    })
    .then(widget => {
      res.json(widget)
    })
})

//id being passed in from delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteWidget(id)
    .then(() => {
      return db.getWidget(id)
    })
    .then(widget => {
      res.json(widget)
    })
})

module.exports = router
