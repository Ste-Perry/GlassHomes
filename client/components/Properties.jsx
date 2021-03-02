import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, deleteTheProperties, fetchPropertiesWithSort } from '../actions/index'
import { fetchReviewsByPropertyId } from '../actions/reviews';

import Adverts from './Adverts'

function Properties(props) {

  // let totalReviewScore = 0;
  // let ratingLength = props.reviewByProperty.length;

  // console.log(ratingLength)
  // const averageRatingCalc = props.reviewByProperty.map(
  //   (review) => (totalReviewScore += review.rating)
  // )

  // let averageReviewScore = totalReviewScore/ratingLength

  
    const [sort, setSort] = useState('ASC')
    console.log(sort)

	useEffect(() => {
    props.dispatch(fetchPropertiesWithSort(sort))
  }, [sort])
  


	useEffect(() => {
    props.dispatch(fetchReviewsByPropertyId())
  }, [])
  

	const [suburb, setSuburb] = useState("")


	const deleteOneProperty = (id) => {
		return props.dispatch(deleteTheProperties(id))
	}

	const handleSuburbChange = (e) => {
		setSuburb(e.target.value)
	}

	const handleSuburbSubmit = (e) => {
		e.preventDefault()
		props.dispatch(fetchProperties())
	}

	//dropdown to filter by suburb


	return (
		<>
			<section className="hero is-info is-medium is-bold" id="hero-image">
				<div className="hero-body"></div>
			</section>
			{/* <Link to='/addproperty'>Add new property</Link> */}
			<form onSubmit={handleSuburbSubmit} >
				<label>
				Search by suburb:
				<select onChange={handleSuburbChange}>
				<option value="Aro Valley">Aro Valley</option>
				<option value="Berhampore">Berhampore</option>
				<option value="Broadmeadows">Broadmeadows</option>
				<option value="Brooklyn">Brooklyn</option>
				<option value="Churton Park">Churton Park</option>
				<option value="Crofton Downs">Crofton Downs</option>
				<option value="Glenside">Glenside</option>
				<option value="Grenada North">Grenada North</option>
				<option value="Grenada Village">Grenada Village</option>
				<option value="Haitaitai">Haitaitai</option>
				<option value="Highbury">Highbury</option>
				<option value="Horokiwi">10</option>
				<option value="Houghton Bay">Houghton Bay</option>
				<option value="Island Bay">Island Bay</option>
				<option value="Johnsonville">Johnsonville</option>
				<option value="Kaiwharawhara">Kaiwharawhara</option>
				<option value="Karaka Bay">Karaka Bay</option>
				<option value="Karori">Karori</option>
				<option value="Kelburn">Kelburn</option>
				<option value="Khandallah">Khandallah</option>
				<option value="Kilbirnie">Kilbirnie</option>
				<option value="Kingston">Kingston</option>
				<option value="Lyall Bay">Lyall Bay</option>
				<option value="Maupuia">Maupuia</option>
				<option value="Melrose">Melrose</option>
				<option value="Miramar">Miramar</option>
				<option value="Moa Point">Moa Point</option>
				<option value="Mornington">Mornington</option>
				<option value="Mount Cook">Mount Cook</option>
				<option value="Mount Victoria">Mount Victoria</option>
				<option value="Newlands">Newlands</option>
				<option value="Newtown">Newtown</option>
				<option value="Ngaio">Ngaio</option>
				<option value="Ngauranga">Ngauranga</option>
				<option value="Northland">Northland</option>
				<option value="Ohariu">Ohariu</option>
				<option value="Oriental Bay">Oriental Bay</option>
				<option value="Owhiro Bay">Owhiro Bay</option>
				<option value="Paparangi">Paparangi</option>
				<option value="Pipitea">Pipitea</option>
				<option value="Rongotai">Rongotai</option>
				<option value="Roseneath">Roseneath</option>
				<option value="Seatoun">Seatoun</option>
				<option value="Southgate">Southgate</option>
				<option value="Strathmore Park">Strathmore Park</option>
				<option value="Takapu Valley">Takapu Valley</option>
				<option value="Tawa">Tawa</option>
				<option value="Te Aro">Te Aro</option>
				<option value="Thorndon">Thorndon</option>
				<option value="Vogeltown">Vogeltown</option>
				<option value="Wadestown">Wadestown</option>
				<option value="Wellington Central">Wellington Central</option>
				<option value="Wilton">Wilton</option>
				<option value="Woodridge">Woodridge</option>
				</select>
				</label>
				<input type="submit" value="submit"/>
			</form>
			<ul>
				<section className="articles">
					<Adverts side="left" />
					<Adverts side="right" />
					<div className="column is-8 is-offset-2">
						<div className="container has-text-centered">

							<div className="card article">
								<div className="card-content">
									<div className="column is-12">
										<h3 className="title has-text-black">Properties</h3>
                    { sort == "ASC" ? 

                      <button class="button is-info is-light" onClick={()=> setSort('DESC')}>Sort by Descending Rating</button>

                      : 
                      <button class="button is-success is-light"onClick={()=> setSort('ASC')}>Sort by Ascending Rating</button>

                    }
										<hr className="login-hr"></hr>
  

										<p className="subtitle has-text-black">Have a looksie.</p>

										{props.properties.map(prp => {
											if(suburb == "") {
												return (
													<>
													<Link key={prp.id} to={`/property/${prp.id}`}>
													<div className="card article">
														<div className="card-content">
															<div className="media">
																<div className="media-content has-text-centered">
	
																	<p className="title article-title">{prp.address}</p>
																	<li key={prp.id}>Address: {prp.suburb} {prp.address} Bedrooms: {prp.bedrooms} Bathrooms: {prp.bathrooms} Parking spaces: {prp.parking} Average Rating: {prp.score.toFixed(2)}
															
																	</li>
																	
																</div>
															</div>
														</div>
													</div>
													<br></br>
													<br></br>
												</Link>
												</>
												)
											} else {
												if(prp.suburb == suburb) {
													return (
													<>
													
													<Link  key={prp.id} to={`/property/${prp.id}`}>
													<div className="card article">
														<div className="card-content">
															<div className="media">
																<div className="media-content has-text-centered">
	
																	<p className="title article-title">{prp.address}</p>
																	<li key={prp.id}>Address: {prp.suburb} {prp.address} Bedrooms: {prp.bedrooms} Bathrooms: {prp.bathrooms} Parking spaces: {prp.parking} Average Rating: {prp.score.toFixed(2)}
															
																	</li>
																	
																</div>
															</div>
														</div>
													</div>
													<br></br>
													<br></br>
												</Link>

												</>
													)
												}
											}
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