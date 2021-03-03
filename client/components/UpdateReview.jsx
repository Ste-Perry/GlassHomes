import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchReviewsWithOffsetAndLimit, updateReviewAction} from '../actions/reviews'

function updateReview(props) {
  const review = props.review;

  
  const [formData, setFormData] = useState({
    title: review.title,
    comments: review.comments,
    pros: review.pros,
    cons: review.cons,
    rating: review.rating,
    start_of_tenancy: review.start_of_tenancy,
    end_of_tenancy: review.end_of_tenancy,
    property_ID: review.property_ID,
    user_ID: props.auth.user.id,
    time: Date.now()
  });
  
  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setEditing(!props.editing)
    props.dispatch(updateReviewAction(review.id, formData))
    props.dispatch(fetchReviewsWithOffsetAndLimit(props.setOffset.offset, props.setOffset.limit, props.setOffset.id ))
    // setRefreshPage(true)
  };

  const handleClick = (e) => {
    setFormData({...formData, rating: e.target.value});
  };

  const [ongoing, setOngoing] = useState(false);

  const handleCheck = (e) => {
    e.target.checked
      ? setFormData({...formData, end_of_tenancy: "ongoing"})
      : setFormData({...formData, end_of_tenancy: ""});
    setOngoing(!ongoing);
  };

  console.log(formData);
  const year = new Date().getFullYear();

  return (
    <>
      <div key={review.id}>
        {/* <div className="card article"> */}
        <div className="card-content">
          <div className="media">
            <div className="media-content has-text-centered">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <div className="control">
                    <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                      Title
                      <input
                        type="text"
                        name="title"
                        required
                        className="input is-large has-text-centered is-fullwidth"
                        placeholder={review.title}
                        value={formData.title}
                        onChange={handleChange}
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
                        type="number"
                        required
                        name="start_of_tenancy"
                        className="input is-large has-text-centered is-fullwidth"
                        placeholder={review.start_of_tenancy}
                        value={formData.start_of_tenancy}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                {!ongoing && (
                  <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        End of Tenancy
                        <input
                          required
                          name="end_of_tenancy"
                          className="input is-large has-text-centered is-fullwidth"
                          placeholder={review.end_of_tenancy}
                          value={formData.end_of_tenancy}
                          onChange={handleChange}
                          min={formData.start_of_tenancy}
                          max={year}
                          type="number"
                        />
                      </label>
                    </div>
                  </div>
                )}

                <label className="checkbox">
                  Ongoing
                  <input
                    className="checkboxtext"
                    onChange={handleCheck}
                    type="checkbox"
                    name="end_of_tenancy"
                    value="ongoing"
                  ></input>
                </label>

                <div className="field">
                  <div className="control">
                    <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                      Pros
                      <input
                        className="input is-large has-text-centered is-fullwidth"
                        placeholder={review.pros}
                        value={formData.pros}
                        onChange={handleChange}
                        type="text"
                        name="pros"

                      />
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                      Cons
                      <input
                        className="input is-large has-text-centered is-fullwidth"
                        placeholder={review.cons}
                        value={formData.cons}
                        onChange={handleChange}
                        name="cons"
                        type="text"
                      />
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                      Comments
                      <input
                        className="input is-large has-text-centered is-fullwidth"
                        placeholder={review.comments}
                        value={formData.comments}
                        onChange={handleChange}
                        name="comments"
                        type="text"
                      />
                    </label>
                  </div>
                </div>

                <div className="rating">
                  Rating:
                  <input
                    required
                    onClick={(e) => handleClick(e)}
                    type="radio"
                    id="star5"
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
                    value="1"
                  />
                  <label
                    className="star"
                    htmlFor="star1"
                    title="Terrible"
                    aria-hidden="true"
                  ></label>
                </div>
                <input
                  className="button is-success"
                  value="Submit Changes"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({reviews, auth, setOffset}) => {
  return {
    reviews,
    auth,
    setOffset
  };
};

export default connect(mapStateToProps)(updateReview);
