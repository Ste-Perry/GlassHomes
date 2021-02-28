import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchReviewsByPropertyId } from '../actions/reviews'
import Review from './Review'
import AddReview from './AddReview'

function PropertyReviews(props) {

	const id = props.propertyId


	useEffect(() => {
		props.dispatch(fetchReviewsByPropertyId(id))
	}, [])

	return (
		<>
			{props.reviewByProperty.map((review) => {
				return (
					<div>
						<Review key={review.id} review={review} />
					</div>
				)
			})}
      
		</>
	)
}

const mapStateToProps = ({ reviewByProperty }) => {
	return {
		reviewByProperty,
	}
}

export default connect(mapStateToProps)(PropertyReviews)
