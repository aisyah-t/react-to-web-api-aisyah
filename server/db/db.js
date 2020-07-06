const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget,
  deleteWidget,
  getWidget,
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
  return db('widgets')
    .where('id', widgetId)
    .del()
}

function getWidget(widgetId, db = connection) {
  return db('widgets')
    .where('id', widgetId)  
    .select()
    .first()
}


function updateWidget(widgetId, widget, db = connection) {
  return db('widgets')
    .where('id', widgetId)
    .update(widget)
}
