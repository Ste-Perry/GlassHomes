import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchReviews, fetchReviewsByPropertyId, fetchReviewsWithOffsetAndLimit } from '../actions/reviews'
import Review from './Review'
// import AddReview from './AddReview'
import ReactPaginate from 'react-paginate'

//conditionally render index of the array of reviews, upon button press render the next 5 - only have a next page button if there are more reviews (reviews.length)

function PropertyReviews(props) {

	const id = props.propertyId
	const [limit, setLimit] = useState(2)
	const [offset, setOffset] = useState(0)
	// const [pageCount, setPageCount] = useState(0)
	// const [count , setCount] = useState(0)

	useEffect(() => {
		// props.dispatch(fetchReviewsByPropertyId(id))
		props.dispatch(fetchReviewsWithOffsetAndLimit(offset, limit, id))
	}, [])

	
	let limitPerPage = 2

	const handlePageClick = (data) => {
		let selected = data.selected
		setOffset(Math.ceil(selected * 2))
	}
	
	let totalPages = Math.ceil(props.paginationReviews.length/limitPerPage)

	return (
			
		<>
			{props.paginationReviews.map((review) => {
				return (
					<div key={review.id} >
						<Review key={review.id} review={review} />
					</div>
				)
			})}
			
			<ReactPaginate
          				previousLabel={'previous'}
          				nextLabel={'next'}
          				breakLabel={'...'}
          				// breakClassName={'break-me'}
          				pageCount={totalPages}
          				// marginPagesDisplayed={2}
          				// pageRangeDisplayed={5}
          				onPageChange={handlePageClick}
          				// containerClassName={'pagination'}
          				// subContainerClassName={'pages pagination'}
          				// activeClassName={'active'}
       					 />
			
			{/* {console.log(count)} */}
		</>
	)
}

const mapStateToProps = ({ reviewByProperty, paginationReviews }) => {
	return {
		reviewByProperty,
		paginationReviews
	}
}

export default connect(mapStateToProps)(PropertyReviews)
