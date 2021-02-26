import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, deleteTheProperties } from '../actions/index'

function Properties(props) {

	useEffect(() => {
		props.dispatch(fetchProperties())
	}, [])


	const deleteOneProperty = (id) => {
		return props.dispatch(deleteTheProperties(id))
	}

	return (
		<>
			<section className="hero is-info is-medium is-bold" style={{ backgroundImage: 'url(/images/vic.jpg)' }}>
				<div className="hero-body"></div>
			</section>
			<Link to='/addproperty'>Add new property</Link>
			<ul>
				<section className="articles">
					<div className="column is-8 is-offset-2">
						<div className="container has-text-centered">
							<div className="card article">
								<div className="card-content">

									<div className="column is-12">
										<h3 className="title has-text-black">Properties</h3>
										<hr className="login-hr"></hr>
										<p className="subtitle has-text-black">Have a looksie.</p>

										{props.properties.map(prp => {
											return (
												<>
												<Link key={prp.id} to={`/property/${prp.id}`}>
													<div className="card article">
														<div className="card-content">
															<div className="media">
																<div className="media-content has-text-centered">

																	<p className="title article-title">{prp.address}</p>
																	<li key={prp.id}>Address: {prp.suburb} {prp.address} Bedrooms: {prp.bedrooms} Bathrooms: {prp.bathrooms} Parking spaces: {prp.parking}
															
																	</li>
																</div>
															</div>
														</div>
													</div>
													<br></br>
													<br></br>
												</Link>
												<button type='button' onClick={() => deleteOneProperty(prp.id)}>Delete</button>
												</>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>

				</section>


			</ul>




		</>
	)

}

const mapStateToProps = ({ properties }) => {
	return {
		properties,
	}
}

export default connect(mapStateToProps)(Properties)