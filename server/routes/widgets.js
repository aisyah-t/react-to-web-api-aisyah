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
  console.log('-----server side request body ' , req.body)
  // console.log(req.body)

  db.saveWidget(req.body)
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})



module.exports = router
