import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchReviewsByPropertyId } from '../actions/reviews'
import Review from './Review'
// import AddReview from './AddReview'
import ReactPaginate from 'react-paginate'

//conditionally render index of the array of reviews, upon button press render the next 5 - only have a next page button if there are more reviews (reviews.length)

function PropertyReviews(props) {

	const id = props.propertyId
	const [data, setData] = useState([])
	const [offset, setOffset] = useState(0)
	const [pageCount, setPageCount] = useState(0)
	// const [count , setCount] = useState(0)

	useEffect(() => {
		props.dispatch(fetchReviewsByPropertyId(id))
	}, [])

	const handlePageClick = (data) => {
		console.log(data)
		let selected = data
		setOffset(Math.ceil(selected * limitPerPage))
	}
	
	let limitPerPage = 2
	let totalPages = Math.ceil(props.reviewByProperty.length/limitPerPage)
	// const updateCount = () => {
	// 	setCount(count++)
	// }

	// let currentPage = 1
	// filteredReviews = props.reviewByProperty.slice(0, limitPerPage)

	// let reviewNodes = props.reviewByProperty.map((review, index) => {
	// 	return <div key={index}>{review.title}</div>
	// })

	return (
			
		<>
		{/* {reviewNodes} */}
			{/* if there are more than 5 reviews, show 5 at a time */}
			{/* {totalPages = Math.ceil(props.reviewByProperty.length/limitPerPage)} */}
			{/* {console.log(totalPages)} */}
			{props.reviewByProperty.length > 5 //limitPerPage
			//if
			? props.reviewByProperty.map((review) => {
				return (
					<>
					<div>
						{/* <Review key={review.id} review={review} /> */}
					</div>
					<div>
					
					</div>
					</>
				)
			})
			//else
			: props.reviewByProperty.map((review) => {
				// {updateCount}
				return (
					<div key={review.id} >
						<Review key={review.id} review={review} />
					</div>
				)
			})
			}
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

const mapStateToProps = ({ reviewByProperty }) => {
  console.log(reviewByProperty.length)
	return {
		reviewByProperty,
	}
}

export default connect(mapStateToProps)(PropertyReviews)
