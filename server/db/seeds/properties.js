
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {id: 1, suburb: 'Newtown', address: '87 Wilson Street', bedrooms: 3, bathrooms: 2, parking: 0 , avg_score: 5, img: ''},
        {id: 2, suburb: 'Woburn', address: '2/12 Trevethick Grove', bedrooms: 2, bathrooms: 1, parking: 1,avg_score: 5,  img: ''},
        {id: 3, suburb: 'Trentham', address: '25 Ward Street', bedrooms: 2, bathrooms: 1, parking: 1,avg_score: 5,  img: ''},
        {id: 4, suburb: 'Trentham', address: '2/25A Ward Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: ''},
        {id: 5, suburb: 'Ebdentown', address: '18 Ebdentown Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: ''}
      ])
    })
};
