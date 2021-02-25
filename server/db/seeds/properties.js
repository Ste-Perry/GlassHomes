
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
        {id: 5, suburb: 'Newtown', address: '88 Wilson Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: ''},
        {id: 6, suburb: 'Newtown', address: '179 Daniell Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: ''},
        {id: 7, suburb: 'Mount Victoria', address: '20 Queen Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: ''},
        {id: 8, suburb: 'Mount Victoria', address: '20 Elizabeth Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: ''},
        {id: 9, suburb: 'Woburn', address: '14 St Albans Grov', bedrooms: 1, bathrooms: 1, parking: 2,avg_score: 5, img: ''},
        {id: 10, suburb: 'Newtown', address: '10 Green Street', bedrooms: 2, bathrooms: 1, parking: 0,avg_score: 5, img: ''}
      ])
    })
};
