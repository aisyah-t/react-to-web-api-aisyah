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
  const newWidget = req.body

  db.saveWidget(newWidget)
    .then(widgetId => {
      res.send(widgetId)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const widgetId = req.params.id
  
  db.deleteWidget(widgetId)
    .then(() => {
      // res.send(JSON.stringify({}))
      res.json({})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  db.getWidget(req.params.id)
    .then(widget => {
      res.send(widget)
    })
})

router.patch('/:id', (req, res) => {
  const widgetId = req.params.id
  const widget = req.body
  
  db.updateWidget(widgetId, widget)
    .then(() => {
      return db.getWidget(widgetId)
    })
    .then(widget => {
      res.json(widget)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
