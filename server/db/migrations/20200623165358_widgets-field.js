exports.up = (knex, Promise) => {
    return knex.schema.table('widgets', (table) => {
      table.integer('rating')
    })
  }

exports.down = (knex, Promise) => {
return knex.schema.table('widgets', (table) => {
    table.dropColumn('rating')
    })
}
