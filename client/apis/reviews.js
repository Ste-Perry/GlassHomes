import request from 'superagent'

const rootUrl = '/api/v1/reviews'

export function getReviews () {
  return request.get(rootUrl )
    .then(res => {
      return res.body.reviews
    })
}

export function getReviewById (id) {
  return request.get(rootUrl + id)
  .then(res => res.body)
}

export function addReview (){
  return request.post(rootUrl)
  .send ({
    title: title,
    comments:comments,
    pros:pros,
    cons:cons,
    rating:rating,
    year_of_tenancy:year_of_tenancy
  })
  .then(res => {
    return res.body
  })
}



export function updateReview(review){
  return request.patch(baseUrl)
      .send(review)
      .then(res => res.body)
}


export function deleteReview(){
  return request.delete(rootUrl)
  .send(review)
  .then(res => res.body)
}