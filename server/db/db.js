const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getWidgets(db = connection) {
  return db('widgets').select()
}

function getWidget(id, db = connection) {
  return db('widgets')
  .where("id", id)
  .first()
}

function saveWidget(widget, db = connection) {
  return db('widgets')
  .insert({
    name: widget.name,
    price: widget.price,
    mfg: widget.mfg,
    inStock: widget.inStock,
  })
}

function updateWidget(id, widget, db = connection) {
  return db('widgets')
  .where('id', id)
  .update(widget)
}


function deleteWidget(id, db = connection) {
  return db('widgets')
  .where('id', id)
  .del()
}

module.exports = {
  getWidgets,
  getWidget,
  saveWidget,
  updateWidget,
  deleteWidget,
}