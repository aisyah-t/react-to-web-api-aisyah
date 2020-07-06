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
  // console.log(newWidget)

  db.saveWidget(newWidget)
    .then(widgetId => {
      res.send(widgetId)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  // console.log(req.params.id)
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

module.exports = router
