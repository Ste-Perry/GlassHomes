import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, useStore } from 'react-redux'
import { fetchReviews, fetchReviewsWithOffsetAndLimitAdmin } from '../actions/reviews'
import { fetchPropertiesWithOffsetAndLimitAdmin } from '../actions'
import { fetchUsers } from '../actions/users'

function AdminPortal(props) {

	const properties = props.properties
	const reviews = props.reviews
	const users = props.users

	const [limit, setLimit] = useState(5)
	const [offsetReviews, setOffsetReviews] = useState(reviews.length - limit)
	const [offsetProperties, setOffsetProperties] = useState(properties.length - limit)

	useEffect(() => {
		props.dispatch(fetchReviews())
		props.dispatch(fetchUsers())
	}, [])

	

	// const[numberOfRecentReviews, setNumberOfRecentReviews] = useState(0)

	// 1614724216153
	
	let reviewsInLast7days = []
	if(reviews) {
		let currentTime = Date.now()
		reviewsInLast7days = reviews.filter(review => {
			if((currentTime - review.time) <= 604800000) {
				return review
			}
		})
	}

	let propertiesInLast7days = []
	if(properties) {
		let currentTime = Date.now()
		propertiesInLast7days = properties.filter(property => {
			if((currentTime - property.time) <= 604800000) {
				return property
			}
		})
	}

	let usersInLast7days = []
	if(users) {
		let currentTime = Date.now()
		usersInLast7days = users.filter(user => {
			if((currentTime - user.time) <= 604800000) {
				return user
			}
		})
	}

	return (
		<>
			{/* ADMIN BANNER */}
			<div className="container">
				<div className="columns">
					<div className="column is-12">
						<br /><br /><br /><br />
						<section className="hero is-info welcome is-small" id="welcome-admin">
							<div className="hero-body">
								<div className="container">
									<h1 className="title">Kia Ora, Admin.</h1>
									<h2 className="subtitle">I hope you are having a great day!</h2>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
			<br />

			{/* SUMMARY CARDS - add counting functionality*/}

			<section className="info-tiles column is-8 is-offset-2">
				<div className="tile is-ancestor has-text-centered">
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">{users.length}</p>
							<p className="subtitle">Total Users</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">{reviews.length}</p>
							<p className="subtitle">Total Reviews</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">{properties.length}</p>
							<p className="subtitle">Total properties</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">{usersInLast7days.length}</p>
							<p className="subtitle">New Users This Week</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							{/* {!numberOfRecentReviews == 0 && <> 
								<p className="title">{numberOfRecentReviews}</p>
								<p className="subtitle">New Reviews</p>
							</>
							} */}
							<p className="title">{reviewsInLast7days.length}</p>
								<p className="subtitle">New Reviews This Week</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">{propertiesInLast7days.length}</p>
							<p className="subtitle">New Properties This Week</p>
						</article>
					</div>
				</div>
			</section>

			{/* Latest Reviews Summary*/}

			<div className="columns">
				<div className="column is-4 is-offset-2">
					<div className="card events-card">
						<header className="card-header">
							<p className="card-header-title">Latest Reviews</p>
							<a href="#" className="card-header-icon" aria-label="more options">
								<span className="icon">
									<i className="fa fa-angle-down" aria-hidden="true"></i>
								</span>
							</a>
						</header>
						<div className="card-table">
							<div className="content">
								<table className="table is-fullwidth is-striped">
									<tbody>
										{props.adminReviews.map(
											review => {
												return (
													<tr key={review.id}>
														<td width="5%"><i className="fa fa-archive"></i></td>
														<td>{review.title}</td>
														<td className="level-right"><Link className="button is-small is-success" to={`/property/${review.property_ID}`} >Check</Link></td>
													</tr>
												)
											}
										)}

									</tbody>
								</table>
							</div>
						</div>
						<footer className="card-footer">
						<Link to="/reviews" className="card-footer-item">View All</Link>
						</footer>
					</div>
				</div>


				{/* Latest Properties Summary */}

				<div className="column is-4">
					<div className="card">
						<header className="card-header">
							<p className="card-header-title">Latest Property Listings</p>
							<a href="#" className="card-header-icon" aria-label="more options">
								<span className="icon">
									<i className="fa fa-angle-down" aria-hidden="true"></i>
								</span>
							</a>
						</header>
						<div className="card-table">
							<div className="content">
								<table className="table is-fullwidth is-striped">
									<tbody>
										{props.adminProperties.map(
											property => {
												return (
													<tr key={property.id}>
														<td width="5%"><i className="fa fa-archive"></i></td>
														<td>{property.address}</td>
														<td className="level-right"><Link className="button is-small is-success" to={`/property/${property.id}`} >Check</Link></td>
													</tr>
												)
											}
										)}
									</tbody>
								</table>
							</div>
						</div>
						<footer className="card-footer">
							<Link to="/properties" className="card-footer-item">View All</Link>
						</footer>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (globalState) => {
	return {
		auth: globalState.auth,
		properties: globalState.properties,
		users: globalState.users,
		reviews: globalState.reviews,
		adminReviews: globalState.adminReviews,
		adminProperties: globalState.adminProperties
	}
}

export default connect(mapStateToProps)(AdminPortal)