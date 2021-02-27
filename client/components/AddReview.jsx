import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {addReviewAction, fetchReviews} from "../actions/reviews";

function AddReview(props) {
  const propsId = props.propsId;

  useEffect(() => {
    fetchReviews();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    comments: "",
    pros: "",
    cons: "",
    rating: "",
    stat_of_tenancy: "",
    end_of_tenancy: "",
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
    let {
      title,
      comments,
      pros,
      cons,
      rating,
      start_of_tenancy,
      end_of_tenancy,
    } = formData;
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
    );
    e.target.reset();
    props.history.push("/reviews");
  };

const handleClick = (e) => {
  setFormData({...formData, rating: e.target.value})
}

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

                  <div class="rating">
                    <input onClick={(e) => handleClick(e)} type="radio" id="star5" name="rating" value = "5" />
                    <label 
                      class="star"
                      for="star5"
                      title="Awesome"
                      aria-hidden="true"
                    ></label>
                    <input onClick={(e) => handleClick(e)}  type="radio" id="star4" name="rating" value="4" />
                    <label
                      class="star"
                      for="star4"
                      title="Great"
                      aria-hidden="true"
                    ></label>
                    <input onClick={(e) => handleClick(e)}  type="radio" id="star3" name="rating" value="3" />
                    <label
                      class="star"
                      for="star3"
                      title="Very good"
                      aria-hidden="true"
                    ></label>
                    <input onClick={(e) => handleClick(e)} type="radio" id="star2" name="rating" value="2" />
                    <label
                      class="star"
                      for="star2"
                      title="Good"
                      aria-hidden="true"
                    ></label>
                    <input onClick={(e) => handleClick(e)} type="radio" id="star1" name="rating" value="1" />
                    <label
                      class="star"
                      for="star1"
                      title="Bad"
                      aria-hidden="true"
                    ></label>
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

    //                 <input className='form' type='text' name='end_of_tenancy' placeholder='End_of_Tenancy' onChange={(e) => handleChange(e)}/>

    //             </label>
    //             <button type='submit'>Add</button>
    //         </form>
    //          */}
    // {/* </> */}
  );
}

const mapStateToProps = ({reviews}) => {
  return {
    reviews,
  };
};

export default connect(mapStateToProps)(AddReview);
