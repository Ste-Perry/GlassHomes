import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect, useStore } from 'react-redux'

function AdminPortal(props) {

	const propertyCount = props.properties

	const lastestPropertListings = (propertyCount.length - 5)
	console.log(lastestPropertListings)

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
							<p className="title">439k</p>
							<p className="subtitle">Users</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">59k</p>
							<p className="subtitle">Reviews</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">{propertyCount.length}</p>
							<p className="subtitle">properties</p>
						</article>
					</div>'
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">3.4k</p>
							<p className="subtitle">New Reviews</p>
						</article>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">19</p>
							<p className="subtitle">New Properties</p>
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
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>41 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>42 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>43 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>44 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>45 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<footer className="card-footer">
							<a href="#" className="card-footer-item">View All</a>
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
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>41 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>42 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>43 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>44 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
										<tr>
											<td width="5%"><i className="fa fa-bell-o"></i></td>
											<td>45 Placeholder Street</td>
											<td className="level-right"><a className="button is-small is-success" href="#">Check</a></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<footer className="card-footer">
							<a href="#" className="card-footer-item">View All</a>
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
	}
}

export default connect(mapStateToProps)(AdminPortal)