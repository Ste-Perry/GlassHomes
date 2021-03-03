
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {id: 1, suburb: 'Newtown', address: '87 Wilson Street', bedrooms: 3, bathrooms: 2, parking: 0 , avg_score: 5, img: '', time: "1614119400000"},
        {id: 2, suburb: 'Woburn', address: '2/12 Trevethick Grove', bedrooms: 2, bathrooms: 1, parking: 1,avg_score: 5,  img: '', time: "1614119400000"},
        {id: 3, suburb: 'Trentham', address: '25 Ward Street', bedrooms: 2, bathrooms: 1, parking: 1,avg_score: 5,  img: '', time: "1614119400000"},
        {id: 4, suburb: 'Trentham', address: '2/25A Ward Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        {id: 5, suburb: 'Newtown', address: '88 Wilson Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        {id: 6, suburb: 'Newtown', address: '179 Daniell Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        {id: 7, suburb: 'Mount Victoria', address: '20 Queen Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        {id: 8, suburb: 'Mount Victoria', address: '20 Elizabeth Street', bedrooms: 3, bathrooms: 1, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        {id: 9, suburb: 'Woburn', address: '14 St Albans Grov', bedrooms: 1, bathrooms: 1, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        
        {id: 10, suburb: 'Newtown', address: '10 Green Street', bedrooms: 2, bathrooms: 1, parking: 0,avg_score: 5, img: '', time: "1614119400000"},
        {id: 11, suburb: 'Churton Park', address: '15 Furlong Crescent', bedrooms: 4, bathrooms: 3, parking: 4,avg_score: 5, img: '', time: "1614119400000"},
        {id: 12, suburb: 'Featherston', address: '110 Brandon Street', bedrooms: 3, bathrooms: 1, parking: 20,avg_score: 5, img: '', time: "1614119400000"},
        {id: 13, suburb: 'Taradale', address: '115a Guppy Road', bedrooms: 3, bathrooms: 1, parking: 3,avg_score: 5, img: '', time: "1614119400000"},
        {id: 14, suburb: 'Khandallah', address: '32 Torwood Road', bedrooms: 4, bathrooms: 3, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        {id: 15, suburb: 'Newlands', address: '54 Colchester Crescent', bedrooms: 5, bathrooms: 2, parking: 5,avg_score: 3, img: '', time: "1614119400000"},
        {id: 16, suburb: 'Johnsonville', address: '16a Ceres Crescent', bedrooms: 2, bathrooms: 1, parking: 1,avg_score: 2, img: '', time: "1614119400000"},
        {id: 17, suburb: 'Churton Park', address: '72 Melksham Drive', bedrooms: 5, bathrooms: 3, parking: 4,avg_score: 5, img: '', time: "1614119400000"},
        {id: 18, suburb: 'Te Aro', address: '13 Garrett Street', bedrooms: 6, bathrooms: 1, parking: 0,avg_score: 0, img: '', time: "1614119400000"},
        {id: 19, suburb: 'Churton Park', address: '65 Abilene Crescent', bedrooms: 4, bathrooms: 3, parking: 2,avg_score: 5, img: '', time: "1614119400000"},
        {id: 20, suburb: 'Te Aro', address: '21 Marion Street', bedrooms: 4, bathrooms: 1, parking: 0,avg_score: 0, img: '', time: "1614119400000"},

        {id: 21, suburb: 'Te Aro', address: '101 Manners Street', bedrooms: 5, bathrooms: 2, parking: 0,avg_score: 1, img: '', time: "1614724412301"},
        {id: 22, suburb: 'Te Aro', address: '376 The Terrace', bedrooms: 4, bathrooms: 2, parking: 2,avg_score: 2, img: '', time: "1614724412301"},
        {id: 23, suburb: 'Berhampore', address: '2 Luxford Street', bedrooms: 5, bathrooms: 2, parking: 1,avg_score: 0, img: '', time: "1614724412301"},
        {id: 24, suburb: 'Riccarton', address: '81a Rattray Street', bedrooms:4 , bathrooms: 1, parking: 2,avg_score: 2, img: '', time: "1614724412301"},
      ])
    })
};
