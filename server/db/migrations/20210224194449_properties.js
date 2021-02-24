exports.up = function (knex) {
    return knex.schema.createTable('properties', table => {
      table.increments('id')
      table.string('suburb')
      table.string('address') 
      table.integer('bedrooms')
      table.integer('bathrooms')
      table.integer('parking')
      table.string('img') 
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('properties')
  }
  