const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget,
  makeWidget,
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
      inStock: widget.inStock
    })
}

function makeWidget(newWidget, db = connection) {
  return db('widgets').insert(newWidget)
    .then(ids => {
      return db('widgets').where('id', ids[0]).first()
    })
}

function deleteWidget (id, db = connection) {
  return db('widgets').where('id', id).del()
}

function updateWidget(widget, db = connection) {
  return db('widgets').update(widget).where('id', widget.id)
}
