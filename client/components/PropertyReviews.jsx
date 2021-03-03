import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchReviews, fetchReviewsByPropertyId, fetchReviewsWithOffsetAndLimit, reviewOffsetLimitAndId } from '../actions/reviews'
import Review from './Review'
import { Link } from 'react-router-dom'
// import AddReview from './AddReview'
import ReactPaginate from 'react-paginate'

//conditionally render index of the array of reviews, upon button press render the next 5 - only have a next page button if there are more reviews (reviews.length)

function PropertyReviews(props) {

	const id = props.propertyId
	const [limit, setLimit] = useState(3)
	const [offset, setOffset] = useState(0)
	// const [pageCount, setPageCount] = useState(0)
	// const [count , setCount] = useState(0)

	//refactor to use store
	useEffect(() => {
		props.dispatch(fetchReviewsByPropertyId(id))
		props.dispatch(fetchReviewsWithOffsetAndLimit(offset, limit, id))
		props.dispatch(reviewOffsetLimitAndId(offset, limit, id))
	}, [offset, id])

	const refresh = () => {
		props.dispatch(fetchReviewsByPropertyId(id))
		props.dispatch(fetchReviewsWithOffsetAndLimit(offset, limit, id))
		props.dispatch(reviewOffsetLimitAndId(offset, limit, id))
	}

	const handleLimitChange = (e) => {
		// console.log("handleChange",e.target.value)
		setLimit(e.target.value)
		// props.dispatch(fetchReviewsWithOffsetAndLimit(offset, limit, id))
		// props.dispatch(reviewOffsetLimitAndId(offset, limit, id))
	}

	const handleLimitSubmit = (e) => {
		e.preventDefault()
		props.dispatch(fetchReviewsWithOffsetAndLimit(offset, limit, id))
		props.dispatch(reviewOffsetLimitAndId(offset, limit, id))

		// setLimit(e.target.value)

	}

	// let limitPerPage = 3

	const handlePageClick = (data) => {
		let selected = data.selected
		setOffset(Math.ceil(selected * limit))
		// props.dispatch(fetchReviewsWithOffsetAndLimit(offset, limit, id))

	}

	let totalPages = Math.ceil(props.reviewByProperty.length / limit)

	return (

		<>
			<div className="has-text-centered">
				<form onSubmit={handleLimitSubmit} >
					<label className="column is-12 is-medium">
						Reviews per page:
				<select className="select is-small is-info" onChange={handleLimitChange}>
							<option value="3">3</option>
							<option value="5">5</option>
							<option value="10">10</option>
						</select>
					</label>
					<input type="submit" value="submit" />
				</form>
				<br />

				{!props.auth.isAuthenticated &&
					<>
						<br /><p> <Link to="/login">Login </Link> or  <Link to='/register'>Register</Link> to add a review</p>
					</>
				}
				{props.paginationReviews.map((review) => {
					return (
						<div key={review.id} >
							<Review key={review.id} review={review} refresh={refresh} />
						</div>
					)
				})}

				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					pageCount={totalPages}
					// marginPagesDisplayed={2}
					// pageRangeDisplayed={5}
					onPageChange={handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>

				{/* {console.log(count)} */}
			</div>
		</>
	)
}

const mapStateToProps = ({ reviewByProperty, paginationReviews, auth }) => {
	return {
		reviewByProperty,
		paginationReviews,
		auth
	}
}

export default connect(mapStateToProps)(PropertyReviews)
