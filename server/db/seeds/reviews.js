
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, title: 'Good', user_ID: 2, property_ID: 3, comments: 'Awesome house',pros: 'Big Garden', cons: 'Junk in Garage cannot use for parking', rating: 4, start_of_tenancy: 2015, end_of_tenancy: 2018, helpful_score: 2},
        {id: 2, title: 'Moldy', user_ID: 1, property_ID: 4, comments: 'No windows open to air out the house',pros: 'Very quiet area', cons: 'No sun in untill late evening ', rating: 2, start_of_tenancy: 2017, end_of_tenancy: 2018, helpful_score: 1},
        {id: 3, title: 'Sunny', user_ID: 2, property_ID: 2, comments: 'Good house',pros: 'Nice Neighbours', cons: 'No big garden for kids', rating: 3, start_of_tenancy: 2016, end_of_tenancy: 2018, helpful_score: 4},
        {id: 4, title: 'Very small', user_ID: 4, property_ID: 5, comments: 'House is very small. All bedrooms can only fit a single bed',pros: 'Close to public transport', cons: 'Neighbours are a nightmare', rating: 2, start_of_tenancy: 2016,end_of_tenancy: 2018, helpful_score: 10},
        {id: 5, title: 'Love this House', user_ID: 1, property_ID: 1, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2017, end_of_tenancy: 2018, helpful_score: 22},
        {id: 6, title: 'Love this House', user_ID: 1, property_ID: 3, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22},
        {id: 7, title: 'Love this House', user_ID: 1, property_ID: 3, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22},
        {id: 8, title: 'Love this House', user_ID: 2, property_ID: 1, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22},
        {id: 9, title: 'Love this House', user_ID: 3, property_ID: 2, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22},
        {id: 10, title: 'Love this House', user_ID: 4, property_ID: 6, comments: 'This place this the best',pros: 'Big rooms, spa bath, balcony, big garden, fancy kitchen', cons: 'Some work needs to be done on the outside fence', rating: 4, start_of_tenancy: 2020, end_of_tenancy: 2020, helpful_score: 22},

        // {id: 11, title: 'test', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 12, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 13, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 14, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: ,end_of_tenancy: , helpful_score:  },
        // {id: 15, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 16, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 17, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 18, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 19, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 20, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },

        // {id: 21, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 22, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 23, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 24, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: ,end_of_tenancy: , helpful_score:  },
        // {id: 25, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 26, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 27, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 28, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 29, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 30, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },

        // {id: 31, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 32, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 33, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 34, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: ,end_of_tenancy: , helpful_score:  },
        // {id: 35, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 36, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 37, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 38, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 39, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 40, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },

        // {id: 41, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 42, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 43, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 44, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: ,end_of_tenancy: , helpful_score:  },
        // {id: 45, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 46, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 47, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 48, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 49, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: },
        // {id: 50, title: '', user_ID: , property_ID: , comments: '',pros: '', cons: '', rating: , start_of_tenancy: , end_of_tenancy: , helpful_score: }

        
      ]);
    });
};
