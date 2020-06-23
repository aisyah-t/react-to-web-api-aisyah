const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.post('/', (req, res) => {
  console.log("route is trying to save data")
  db.saveWidget(req)
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
        
      res.status(500).send(err.message)
    })
})


module.exports = router
