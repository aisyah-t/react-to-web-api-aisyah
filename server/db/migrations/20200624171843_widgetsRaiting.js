
exports.up = function(knex) {

  return knex.schema.table('widgets', (table)=>{

    table.integer('rating')
  })
  
};

exports.down = function(knex) {
  return knex.schema.table('widgets', (table)=>{
   
    table.dropColumn('rating')

  })

};
