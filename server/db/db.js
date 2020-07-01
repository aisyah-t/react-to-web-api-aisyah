const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget,
  deleteWidget,
  updateWidget
}

function getWidgets(db = connection) {
  return db('widgets').select()
}

function saveWidget(widget, db = connection) {
  return db('widgets')
    .insert({
      name: widget.name,
      price: widget.price,
      mfg: widget.mfg,
      inStock: widget.inStock,
      rating: widget.rating
    })
}

function deleteWidget(widgetId, db = connection) {
  console.log("db delete function hit")
  return db('widgets')
    .where('id', widgetId)
    .del()
}

function updateWidget(widgetId, widget, db = connection) {
  console.log("db update function hit")
  return db('widgets')
    .where('id', widgetId)
    .update({
      name: widget.name,
      price: widget.price,
      mfg: widget.mfg,
      inStock: widget.inStock,
      rating: widget.rating
    })
}