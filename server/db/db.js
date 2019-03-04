const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget,
  updateWidget,
  deleteWidget
}

function getWidgets (db = connection) {
  return db('widgets')
    .select()
}

function saveWidget (widget, db = connection) {
  return db('widgets')
    .insert({
      name: widget.name,
      price: widget.price,
      mfg: widget.mfg,
      inStock: widget.inStock,
      rating: widget.rating
    })
}

function updateWidget (widget, db = connection) {
  return db('widgets')
    .where('id', widget.id)
    .update({
      name: widget.name,
      price: widget.price,
      mfg: widget.mfg,
      inStock: widget.inStock,
      rating: widget.rating
    })
}

function deleteWidget (widget, db = connection) {
  return db('widgets')
    .where('id', widget.id)
    .delete()
}
