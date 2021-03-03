import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {
  addReviewAction,
  addReviewWithImage,
  fetchReviews,
  fetchReviewsByPropertyId,
  addReviewWithDefaultImage,
  fetchReviewsWithOffsetAndLimit
} from "../actions/reviews"

function AddReview(props) {
  const propsId = props.propsId;

  useEffect(() => {
    fetchReviews()
    props.dispatch(fetchReviewsByPropertyId(propsId))
  }, [])

  
  let totalReviewScore = 0;
  let ratingLength = props.reviewByProperty.length;

  // console.log(ratingLength)
  const averageRatingCalc = props.reviewByProperty.map(
    (review) => (totalReviewScore += review.rating)
  )

  let averageReviewScore = totalReviewScore/ratingLength
  
  console.log(averageReviewScore)


  const [reviewImage, setReviewImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    comments: "",
    pros: "",
    cons: "",
    rating: "",
    stat_of_tenancy: "",
    end_of_tenancy: "",
  })

  const onChangeFile = (e) => {
    setReviewImage(e.target.files[0]);
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
    e.preventDefault();
    let {
      title,
      comments,
      pros,
      cons,
      rating,
      start_of_tenancy,
      end_of_tenancy,
    } = formData   


    const formImage = new FormData()

    if(reviewImage == null) {
      console.log("woohoo", props.auth.user.id)
      props.dispatch(addReviewWithDefaultImage({
        title: formData.title,
        comments: formData.comments,
        pros: formData.pros,
        cons: formData.cons,
        rating: formData.rating,
        start_of_tenancy: formData.start_of_tenancy,
        end_of_tenancy: formData.end_of_tenancy,
        propsId,
        user_ID: props.auth.user.id,
        time: Date.now()
      }))
      e.target.reset()
      props.dispatch(fetchReviewsWithOffsetAndLimit(props.setOffset.offset, props.setOffset.limit, props.setOffset.id))
      props.setShowState(!props.showState)

    } else {
    formImage.append("img", reviewImage)
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
        user_ID: props.auth.user.id,
        time: Date.now()
      })
      )
      e.target.reset()
      props.dispatch(fetchReviewsWithOffsetAndLimit(props.setOffset.offset, props.setOffset.limit, props.setOffset.id))
      props.setShowState(!props.showState)
    }

    }
    const handleCheck = (e) => {
      e.target.checked ? setFormData({...formData, end_of_tenancy: "ongoing"}) : setFormData({...formData, end_of_tenancy: ""})
      setOngoing(!ongoing)
    }

    const handleWheel = (e) => {
      e.target.blur()
        console.log("scrolling")
      }
  
  const handleClick = (e) => {
    setFormData({...formData, rating: e.target.value})
  }
  const year = new Date().getFullYear();

  const [ongoing, setOngoing] = useState(false)

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
                          onWheel={handleWheel}
													onChange={handleChange}
													value={formData.start_of_tenancy}
												/>
											</label>
										</div>
									</div>

									<div className="field">
										<div className="control">

                      { !ongoing && (
											<label className="column is-6 label is-offset-3 label is-large has-text-centered">
												End of Tenancy
												<input
                        required
													min={formData.start_of_tenancy}
													max={year}
													className="input is-large has-text-centered is-fullwidth"
													placeholder="2020"
													type="number"
													name="end_of_tenancy"
                          autoComplete="end_of_tenancy"
                          onWheel={handleWheel}
													onChange={handleChange}
													value={formData.end_of_tenancy}
												/>
											</label>)}
											<label className="checkbox">
												Ongoing  
												<input className="checkboxtext"
													onChange={handleCheck}
                          type="checkbox"
                          name="end_of_tenancy"
													value="ongoing"
												></input>
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
                          type="text"
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
                        Comments
                        <input
                          required
                          className="input is-large has-text-centered is-fullwidth"
                          placeholder="Comments"
                          type="text"
                          name="comments"
                          autoComplete="comments"
                          onChange={handleChange}
                          value={formData.comments}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="" htmlFor="img">
                      <span className="">Review image </span>
                      <input type="file" name="img" onChange={onChangeFile} />
                    </label>
                  </div>

                  <div className="rating">
                    Rating:
                    <input
                      required
                      onClick={(e) => handleClick(e)}
                      type="radio"
                      id="star5"
                      name="rating"
                      value="5"
                    />
                    <label
                      className="star"
                      htmlFor="star5"
                      title="Amazing"
                      aria-hidden="true"
                    ></label>
                    <input
                      onClick={(e) => handleClick(e)}
                      type="radio"
                      id="star4"
                      name="rating"
                      value="4"
                    />
                    <label
                      className="star"
                      htmlFor="star4"
                      title="Good"
                      aria-hidden="true"
                    ></label>
                    <input
                      onClick={(e) => handleClick(e)}
                      type="radio"
                      id="star3"
                      name="rating"
                      value="3"
                    />
                    <label
                      className="star"
                      htmlFor="star3"
                      title="Ok"
                      aria-hidden="true"
                    ></label>
                    <input
                      onClick={(e) => handleClick(e)}
                      type="radio"
                      id="star2"
                      name="rating"
                      value="2"
                    />
                    <label
                      className="star"
                      htmlFor="star2"
                      title="Bad"
                      aria-hidden="true"
                    ></label>
                    <input
                      onClick={(e) => handleClick(e)}
                      type="radio"
                      id="star1"
                      name="rating"
                      value="1"
                    />
                    <label
                      className="star"
                      htmlFor="star1"
                      title="Terrible"
                      aria-hidden="true"
                    ></label>
                  </div>
                  <br></br>
                  <br></br>
                  <input
                    className="button is-info is-large is-half"
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
  );
}


const mapStateToProps = ({reviews, setOffset, reviewByProperty, auth}) => {
  return {
    reviews,
    setOffset,
    reviewByProperty,
    auth
  }
}

export default connect(mapStateToProps)(AddReview);