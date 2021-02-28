
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
        {id: 5, username: 'john2016', first_name:'John', last_name:' Smith', password:'john'},

        {id: 6, username: 'bigJ99', first_name:'Richard', last_name:'Johnson', password:'Richard'},
        {id: 7, username: 'fabalicious', first_name:'Fabio', last_name: 'Lanzoni', password:'Fabio'},
        {id: 8, username: 'jimmy3K', first_name:'James', last_name: 'Beam', password:'james'},
        {id: 9, username: 'crateboi', first_name:'Carlos', last_name:'Ghosn', password:'carlos'},
        {id: 10, username: 'milanit247', first_name:'Giorgio', last_name:'Armani', password:'giorgio'},
        
        {id: 11, username: 'westlyf', first_name:'Kanye', last_name:'Best', password:'kanye'},
        {id: 12, username: 'sUpErSiCk', first_name:'Ash', last_name: 'Bloomfield', password:'ash'},
        {id: 13, username: 'MiniMan', first_name:'Austin', last_name: 'Minor', password:'austin'},
        {id: 14, username: 'Awkward88', first_name:'Nora', last_name:'Lum', password:'nora'},
        {id: 15, username: 'PininIt', first_name:'Battista', last_name:'Farina', password:'battista'},

        {id: 16, username: 'laid-back', first_name:'Isatta', last_name:'Sheriff', password:'isatta'},
        {id: 17, username: 'DOOM20', first_name:'Dan', last_name:'Dumile', password:'daniel'},
        {id: 18, username: 'stnawalol', first_name:'Sarah', last_name:'Vaughan', password:'sarah'},
        {id: 19, username: 'chassin', first_name:'Masayo', last_name:'Minowa', password:'masayo'},
        {id: 20, username: 'Special', first_name:'Som', last_name:'Sang', password:'som'}
      ]);
    });
};
