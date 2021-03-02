import { deleteReview, getReviews, addReview, updateReview, getReviewByPropertyId, addImageReview, getReviewsWithOffsetAndLimit, incrementHelpfulScore } from '../apis/reviews'

export const SET_REVIEWS = 'SET_REVIEWS'
export const SET_REVIEWS_BY_PROP_ID = 'SET_REVIEWS_BY_PROP_ID'
export const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const SET_SPECIFIC_REVIEWS = 'SET_SPECIFIC_REVIEWS'
export const OFFSET_ID_LIMIT = 'OFFSET_ID_LIMIT'
export const INCREMENT_HELPFUL_SCORE = 'INCREMENT_HELPFUL_SCORE'

export function setReviews(reviews) {
  return {
    type: SET_REVIEWS,
    reviews
  }
}

export function setReviewsByPropId(reviews) {
  return {
    type: SET_REVIEWS_BY_PROP_ID,
    reviews
  }
}
export function addNewReview(reviews) {
  return {
    type: ADD_NEW_REVIEW,
    reviews
  }
}

export function setSpecificReviews(reviews) {
  return {
    type: SET_SPECIFIC_REVIEWS,
    reviews
  }
}


export function fetchReviews() {
  return dispatch => {
    return getReviews()
      .then(reviews => {
        dispatch(setReviews(reviews))
        return null
      })
  }
}

export function deleteReviews(id) {
  return dispatch => {
    return deleteReview(id)
      .then(() => {
        dispatch(fetchReviews())
        return null
      })
  }
}

export function addReviewAction(review) {
  return dispatch => {
    return addReview(review)
      .then(() => {
        dispatch(fetchReviewsByPropertyId(review.propsId))
        return null
      })
  }
}

//testing addThePropsWithImage
export function addReviewWithImage(image, review) {
  return dispatch => {
    return addImageReview(image)
      .then(fileUrl => {
        review.image = fileUrl
        return addReview(review)
          .then(reviewId => {
            dispatch(fetchReviewsByPropertyId(review.propsId))
            return null
          })
      })
  }
}

export function addReviewWithDefaultImage(review) {
  return dispatch => {
    review.img = ''
    return addReview(review)
      .then(reviewId => {
        dispatch(fetchReviewsByPropertyId(review.propsId))
        // dispatch(fetchProperties())
        return null
      })
  }
}

export function updateReviewAction(review) {
  return dispatch => {
    return updateReview(review)
      .then(() => {
        dispatch(fetchReviews())
        return null
      })
  }
}

export function fetchReviewsByPropertyId(id) {
  return dispatch => {
    return getReviewByPropertyId(id)
      .then(reviews => {
        dispatch(setReviewsByPropId(reviews))
        return null
      })
  }
}

export function fetchReviewsWithOffsetAndLimit(offset, limit, id) {
  return dispatch => {
    // return fetchReviewsByPropertyId(id)
    // .then(reviews=> {
    return getReviewsWithOffsetAndLimit(offset, limit, id)
      .then(reviews => {
        dispatch(setSpecificReviews(reviews))
        return null
      })
    // })
  }
}


export function reviewOffsetLimitAndId(offset, limit, id) {
  return {
    type: OFFSET_ID_LIMIT,
    offLimId: {
      offset,
      limit,
      id,
    }

  }
}

export function incrementTheHelpfulScore(score, id){
  return {
    type: INCREMENT_HELPFUL_SCORE,
    score: score,
    id: id
  }
}

export function incrementingTheHelpfulScore(score, id, propertyId) {
  return dispatch => {
    return incrementHelpfulScore(score, id)
    .then(() => {
      dispatch(fetchReviewsByPropertyId(propertyId))
      return null
    })
  }
}