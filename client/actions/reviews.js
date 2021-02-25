import { deleteReview, getReviews, addReview, updateReview} from '../apis/reviews'

export const SET_REVIEWS = 'SET_REVIEWS'

export function setReviews (reviews) {
  return {
    type: SET_REVIEWS,
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
