import { deleteReview, getReviews, addReview, updateReview, getReviewByPropertyId} from '../apis/reviews'

export const SET_REVIEWS = 'SET_REVIEWS'
export const SET_REVIEWS_BY_PROP_ID = 'SET_REVIEWS_BY_PROP_ID'

export function setReviews (reviews) {
  return {
    type: SET_REVIEWS,
    reviews
  }
}

export function setReviewsByPropId (reviews) {
  return {
    type: SET_REVIEWS_BY_PROP_ID,
    reviews
  }
}


export function fetchReviews () {
  return dispatch => {
    return getReviews()
      .then(reviews => {
        dispatch(setReviews(reviews))
        return null
      })
  }
}

export function deleteReviews (review) {
  return dispatch => {
    return deleteReview(review)
      .then(() => {
        dispatch(fetchReviews())
        return null
      })
  }
}

export function addReviewAction (review) {
  return dispatch => {
    return addReview(review)
      .then(() => {
        dispatch(fetchReviews())
        return null
      })
  }
}
export function updateReviewAction (review) {
  return dispatch => {
    return updateReview(review)
      .then(() => {
        dispatch(fetchReviews())
        return null
      })
  }
}

export function fetchReviewsByPropertyId (id) {
  return dispatch => {
    return getReviewByPropertyId(id)
      .then(reviews => {
        dispatch(setReviewsByPropId(reviews))
        return null
      })
  }
}