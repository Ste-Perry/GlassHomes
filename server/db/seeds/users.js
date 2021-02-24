
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'superste63', first_name:'Stephen', last_name:' Perry', password:'stephen'},
        {id: 2, username: 'samar1990', first_name:'Samardeep', last_name: 'Gill', password:'samardeep'},
        {id: 3, username: 'poonam89', first_name:'Poonam', last_name: 'Sharma', password:'poonam'},
        {id: 4, username: 'booby63', first_name:'Booby', last_name:' Grey', password:'booby'},
        {id: 5, username: 'john2016', first_name:'John', last_name:' Smith', password:'john'}
      ]);
    });
};
