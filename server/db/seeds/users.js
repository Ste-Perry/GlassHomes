const { generateHash } = require('authenticare/server')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      // return knex('users').insert
      return Promise.all(
        [
        {id: 1, username: 'admin', first_name:'GlassHomes', last_name:'Admin', password:'admin123', admin: true, time: "2021-02-19T01:04:50.492Z"},
        {id: 2, username: 'samar1990', first_name:'Samardeep', last_name: 'Gill', password:'samardeep', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 3, username: 'poonam89', first_name:'Poonam', last_name: 'Sharma', password:'poonam', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 4, username: 'booby63', first_name:'Booby', last_name:' Grey', password:'booby', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 5, username: 'john2016', first_name:'John', last_name:' Smith', password:'john', admin: false, time: "2021-02-19T01:04:50.492Z"},

        {id: 6, username: 'superste63', first_name:'Stephen', last_name:' Perry', password:'stephen', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 7, username: 'fabalicious', first_name:'Fabio', last_name: 'Lanzoni', password:'Fabio', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 8, username: 'jimmy3K', first_name:'James', last_name: 'Beam', password:'james', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 9, username: 'crateboi', first_name:'Carlos', last_name:'Ghosn', password:'carlos', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 10, username: 'milanit247', first_name:'Giorgio', last_name:'Armani', password:'giorgio', admin: false, time: "2021-02-19T01:04:50.492Z"},
        
        {id: 11, username: 'westlyf', first_name:'Kanye', last_name:'Best', password:'kanye', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 12, username: 'sUpErSiCk', first_name:'Ash', last_name: 'Bloomfield', password:'ash', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 13, username: 'MiniMan', first_name:'Austin', last_name: 'Minor', password:'austin', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 14, username: 'Awkward88', first_name:'Nora', last_name:'Lum', password:'nora', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 15, username: 'PininIt', first_name:'Battista', last_name:'Farina', password:'battista', admin: false, time: "2021-02-19T01:04:50.492Z"},

        {id: 16, username: 'laid-back', first_name:'Isatta', last_name:'Sheriff', password:'isatta', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 17, username: 'DOOM20', first_name:'Dan', last_name:'Dumile', password:'daniel', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 18, username: 'stnawalol', first_name:'Sarah', last_name:'Vaughan', password:'sarah', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 19, username: 'chassin', first_name:'Masayo', last_name:'Minowa', password:'masayo', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 20, username: 'Special', first_name:'Som', last_name:'Sang', password:'som', admin: false, time: "2021-02-19T01:04:50.492Z"},
        {id: 21, username: 'bigJ99', first_name:'Richard', last_name:'Johnson', password:'Richard', admin: false, time: "2021-02-19T01:04:50.492Z"}
      ].map(user => {
        return generateHash(user.password)
          .then(hash => {
            console.log(hash)
            user.password = hash
            // delete user.password
            return user
          })
      }))
      .then(users => {
        return knex('users').insert(users)
      })
  })
}
