const express = require("express");
const router = express.Router();

const db = require("../db/db");

router.get("/", (req, res) => {
  db.getWidgets()
    .then((widgets) => {
      res.send(widgets);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

router.post("/", (req, res) => {
  const widget = req.body;
  console.log(widget);

  db.saveWidget(widget)
    .then((widget) => {
      res.send(widget);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

router.delete('/:id', (req, res) => {
  db.deleteWidget(req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
})

module.exports = router;
