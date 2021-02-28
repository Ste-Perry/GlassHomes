import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addReviewAction, addReviewWithImage, fetchReviews } from '../actions/reviews'

function AddReview(props) {
	const propsId = props.propsId

	useEffect(() => {
		fetchReviews()
	}, [])

	const [reviewImage, setReviewImage] = useState(null)

	const [formData, setFormData] = useState({
		title: '',
		comments: '',
		pros: '',
		cons: '',
		rating: '',
		start_of_tenancy: '',
		end_of_tenancy: '',
	})

	const onChangeFile = (e) => {
		setReviewImage(e.target.files[0])
	}

	const handleChange = (e) => {
		setFormData((currentFormData) => {
			return {
				...currentFormData,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		let { title, comments, pros, cons, rating, start_of_tenancy, end_of_tenancy } = formData
		props.dispatch(
			addReviewAction({
				title,
				comments,
				pros,
				cons,
				rating,
				start_of_tenancy,
				end_of_tenancy,
				propsId,
			})
		)
		const formImage = new FormData()
		formImage.append('img', reviewImage)
		props.dispatch(
			addReviewWithImage(formImage, {
				title: formData.title,
				comments: formData.comments,
				pros: formData.pros,
				cons: formData.cons,
				rating: formData.rating,
				start_of_tenancy: formData.start_of_tenancy,
				end_of_tenancy: formData.end_of_tenancy,
				propsId,
			})
		)

		e.target.reset()
		props.history.push('/reviews')
	}

	const handleClick = (e) => {
		setFormData({ ...formData, rating: e.target.value })
  }
  
  const handleCheck = (e) => {

     e.target.checked &&
		setFormData({ ...formData, end_of_tenancy: "ongoing" })
	}

	// const getDropList = () => {
	//   const year = new Date().getFullYear();
	//   return (
	//     Array.from( new Array(75), (v,i) =>
	//       <option key={i} value={year-i}>{year-i}</option>
	//     )
	//   )
	// }

	const year = new Date().getFullYear()

	console.log(formData)

	return (
		<>
			<div className="column is-8 is-offset-2">
				<div className="container has-text-centered">
					<div className="card article">
						<div className="card-content">
							<div>
								<h3 className="title has-text-black">Add a review</h3>
								<form onSubmit={handleSubmit}>
									<hr />

									<div className="field">
										<div className="control">
											<label className="column is-6 label is-offset-3 label is-large has-text-centered">
												Title
												<input
													required
													className="input is-large has-text-centered is-medium"
													placeholder="Title"
													type="text"
													name="title"
													onChange={handleChange}
													value={formData.title}
												/>
											</label>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<label className="column is-6 label is-offset-3 label is-large has-text-centered">
												Pros
												<input
													required
													className="input is-large has-text-centered is-fullwidth"
													placeholder="Pros"
													type="text"
													name="pros"
													onChange={handleChange}
													value={formData.pros}
												/>
											</label>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<label className="column is-6 label is-offset-3 label is-large has-text-centered">
												Cons
												<input
													required
													className="input is-large has-text-centered is-fullwidth"
													placeholder="Cons"
													type="cons"
													name="cons"
													autoComplete="cons"
													onChange={handleChange}
													value={formData.cons}
												/>
											</label>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<label className="column is-6 label is-offset-3 label is-large has-text-centered">
												Start of Tenancy
												<input
													min="1900"
													max={year}
													required
													className="input is-large has-text-centered is-fullwidth"
													placeholder="2020"
													type="number"
													name="start_of_tenancy"
													autoComplete="start_of_tenancy"
													onChange={handleChange}
													value={formData.start_of_tenancy}
												/>
											</label>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<label className="column is-6 label is-offset-3 label is-large has-text-centered">
												End of Tenancy
												<input
													min="1900"
													max={year}
													className="input is-large has-text-centered is-fullwidth"
													placeholder="2020"
													type="number"
													name="end_of_tenancy"
													autoComplete="end_of_tenancy"
													onChange={handleChange}
													value={formData.end_of_tenancy}
												/>
											</label>
											<label>
												Ongoing
												<input
													onChange={handleCheck}
                          type="checkbox"
                          name="end_of_tenancy"
													value="ongoing"
												></input>
											</label>
										</div>
									</div>

									{/* <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        Start of Tenancy:
                        <div>
                          <select onChange={handleChange}>
                          {getDropList()}
                          
                          </select>
                      </div>
                      
                        </label>
                    </div>
                  </div>
                  
                  <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        End of Tenancy:
                        <div>
                          <select onChange={handleChange}>
                          <option>Currently live here</option>
                          {getDropList()}
                          </select>
                      </div>
                        </label>
                    </div>
                  </div> */}
									<div>
										<label className="" htmlFor="img">
											<span className="">Review image </span>
											<input type="file" name="img" onChange={onChangeFile} />
										</label>
									</div>

									<div class="rating">
										<input
											onClick={(e) => handleClick(e)}
											type="radio"
											id="star5"
											name="rating"
											value="5"
										/>
										<label class="star" for="star5" title="Awesome" aria-hidden="true"></label>
										<input
											onClick={(e) => handleClick(e)}
											type="radio"
											id="star4"
											name="rating"
											value="4"
										/>
										<label class="star" for="star4" title="Great" aria-hidden="true"></label>
										<input
											onClick={(e) => handleClick(e)}
											type="radio"
											id="star3"
											name="rating"
											value="3"
										/>
										<label class="star" for="star3" title="Very good" aria-hidden="true"></label>
										<input
											onClick={(e) => handleClick(e)}
											type="radio"
											id="star2"
											name="rating"
											value="2"
										/>
										<label class="star" for="star2" title="Good" aria-hidden="true"></label>
										<input
											onClick={(e) => handleClick(e)}
											type="radio"
											id="star1"
											name="rating"
											value="1"
										/>
										<label class="star" for="star1" title="Bad" aria-hidden="true"></label>
									</div>
									<br></br>
									<br></br>
									<input
										className="button is-success is-large is-half"
										value="Submit"
										type="submit"
									/>
									<br></br>
									<br></br>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

		//                     {/* <form onSubmit={handleSubmit}>
		//             <label> */}

		//                 {/* <input className='form' type='text' name='title' placeholder='Title ' onChange={(e) => handleChange(e)}/> */}

		//                 {/* <input className='form' type='text' name='pros' placeholder='Pros ' onChange={(e) => handleChange(e)}/>

		//                 <input className='form' type='text' name='cons' placeholder='cons ' onChange={(e) => handleChange(e)}/>

		//                 <input className='form' type='text' name='comments' placeholder='Comments' onChange={(e) => handleChange(e)}/>

		//                 <input className='form' type='text' name='rating' placeholder='Rating' onChange={(e) => handleChange(e)}/>

		//                 <input className='form' type='text' name='start_of_tenancy' placeholder='Start_of_Tenancy' onChange={(e) => handleChange(e)}/>
	)
}

const mapStateToProps = ({ reviews }) => {
	return {
		reviews,
	}
}

export default connect(mapStateToProps)(AddReview)
