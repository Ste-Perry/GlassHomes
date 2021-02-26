import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions/index'
import { getPropertyById } from '../apis/properties'
import PropertyReviews from './PropertyReviews'


function Property(props) {

	// useEffect(() => {
	//     props.dispatch(fetchProperties())
	// }, [])

	const [singleProperty, setSingleProperty] = useState(null)

	const propertyId = props.match.params.id

	const findSingleProperty = () => {
		if (propertyId) {
			getPropertyById(propertyId)
				.then(singProperty => {
					setSingleProperty(singProperty)
				})
		}
	}

	useEffect(() => {
		findSingleProperty()
	}, [props.match.params.id])

	return (
		<>



			{ singleProperty && (
				<>
					<Link to='/properties'>Back</Link>


					<section className="hero is-info is-medium is-bold" id="hero-image">
						<div className="hero-body"></div>
					</section>

					<div className="container">
						<section className="articles">
							<div className="column is-8 is-offset-2">
								<div className="card article">
									<div className="card-content">
										<div className="media">
											<div className="media-content has-text-centered">
												<p className="title article-title">Details for flat {singleProperty.address}</p>
											</div>
										</div>
										<div className="property-details">
											<div className="content article-body">


												<div className="icon-text"><i style={{ color: "grey" }} className="fa fa-map-marker"></i><span> Suburb: {singleProperty.suburb}</span></div>
												<div className="icon-text"><i style={{ color: "grey" }} className="fa fa-home"></i><span> Address: {singleProperty.address}</span></div>
												<div className="icon-text"><i style={{ color: "grey" }} className="fa fa-bed"></i><span> Bedrooms: {singleProperty.bedrooms}</span></div>
												<div className="icon-text"><i style={{ color: "grey" }} className="fa fa-bath"></i><span> Bathrooms: {singleProperty.bathrooms}</span></div>
	


												<h3 className="has-text-centered">Reviews</h3>
												<PropertyReviews propertyId={singleProperty.id} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</>
			)}

		</>
	)

}

const mapStateToProps = ({ properties }) => {
	return {
		properties
	}
}

export default connect(mapStateToProps)(Property)