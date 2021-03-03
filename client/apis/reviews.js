import request from 'superagent'

const rootUrl = '/api/v1/reviews/'

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

export function addReview (reviews){
  return request.post(rootUrl)
  .send ( reviews )
  .then(res => {
    return res.body
  })
}

export function updateReview(id, review){
  return request.patch(rootUrl + id)
      .send(review)
      .then(res => {
        return res.body})
}


export function deleteReview(id){
  return request.delete(rootUrl + '/' + id)
  .then(res => {
    console.log(res.body)
    return res.body})
}

export function getReviewByPropertyId(id){
  return request.get(rootUrl + "property/" + id)
  .then(res => res.body)
}

export function addImageReview (formData) {
  return request.post(rootUrl + 'image')
    .send(formData)
    .then(res => {
      return res.text
    })
}

export function getReviewsWithOffsetAndLimit(offset, limit, id) {
  return request.get(rootUrl + "property/" + limit + "/" + offset + "/" + id)
  .then(res => res.body)
}


export function getReviewsWithLimitForAdmin(offset, limit) {
  return request.get(rootUrl + "property/" + limit + "/" + offset)
  .then(res => res.body)
}


export function incrementHelpfulScore(score, id) {
  return request.patch(rootUrl + id)
  .send({helpful_score: score})
  .then(res => {
    return res.body
  })

}


// reviews/property/:offset/:limit
