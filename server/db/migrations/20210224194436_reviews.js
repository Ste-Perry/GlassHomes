exports.up = function (knex) {
    return knex.schema.createTable('reviews', table => {
      table.increments('id')
      table.string('username')
      table.string('title') 
      table.integer('user_ID')
      table.integer('property_ID')
      table.text('comments') 
      table.string('pros') 
      table.string('cons') 
      table.integer('rating')
      table.integer('year_of_tenancy')
      table.integer('helpful_score')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('reviews')
  }
  