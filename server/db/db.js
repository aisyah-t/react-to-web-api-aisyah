const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget,
  deletewid
}

function getWidgets(db = connection) {
  return db('widgets').select()
}

function saveWidget(widget, db = connection) {
  
  console.log("adding data to data base")
  console.log(widget.body.name)
  return db('widgets')
    .insert({
      name: widget.body.name,
      price: widget.body.price,
      mfg: widget.body.mfg,
      inStock: widget.body.inStock
  })
}

function deletewid(stuff, db = connection) {
  console.log("running delete db func")
  console.log(stuff.data)
  return db('widgets').where("id", stuff.data).delete()
}