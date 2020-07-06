const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget,
  deleteWidget
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
  return db('widgets')
    .where('id', widgetId)
    .del()
}

// function editWidget(id, db = connection) {
//   return db('widgets')
//     .where('id', id)
//     .insert()
// }
