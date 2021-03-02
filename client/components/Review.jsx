import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteReviews, fetchReviewsWithOffsetAndLimit } from '../actions/reviews'
import { incrementingTheHelpfulScore } from '../actions/reviews'

const Review = (props) => {
  const review = props.review;
  const reviewId = props.review.id
  const isAdmin = props.auth.user.is_admin

  const isUserId = props.auth.user.id

  const isReviewUserId = props.reviewByProperty.map(
    review => {
      return review.user_ID
    }
  )

  const stars = () => {
    let starArray = [];
    let remainingStars = 5 - review.rating;
    for (let i = 0; i < review.rating; i++) {
      starArray.push(
        <span style={{ color: "gold" }} className="fa fa-star"></span>
      );
    }
    for (let i = 0; i < remainingStars; i++) {
      starArray.push(<span className="fa fa-star"></span>);
    }
    return starArray;
  };

  const [showImg, setShowImg] = useState(false);

  let count = 0

  const handleUpdate = (id, e) => {

      e.preventDefault()
      alert('Updated!')

  }

  const handleDelete = (id, e) => {
    if (confirm("Are you sure you want to delete this review?")) {
      e.preventDefault()
      props.dispatch(
        deleteReviews(id)
      )
      alert('Deleted!')
      props.dispatch(fetchReviewsWithOffsetAndLimit(props.setOffset.offset, props.setOffset.limit, props.setOffset.id))
    } else {
      alert('Not deleted')
    }
  }


  // const [helpfulScore, setHelpfulScore] = useState(0)
  const handleHelpfulButtonClick = () => {
    console.log(review)
    props.dispatch(incrementingTheHelpfulScore(review.helpful_score + 1, review.id, review.property_ID))
    props.refresh()
}

return (

  <div key={review.id}>
    <div className="card article">
      <div className="card-content">
        <div className="media">
          <div className="media-content has-text-centered">
            <p className="title article-title">{review.title}</p>
            <br />
            <p className="years_of_tenancy">
              Years of tenancy: {review.start_of_tenancy} -{" "}
              {review.end_of_tenancy}
            </p>
            <br />
            <div className="icon-text has-text-success">
              <i className="fa fa-check-square"></i>
              <span> Pros:</span>
            </div>
            <p>{review.pros}</p>
            <br />
            <div className="icon-text has-text-danger">
              <i className="fa fa-ban"></i>
              <span> Cons:</span>
            </div>
            <p>{review.cons}</p>
            <br />
            <p className="comments">Comments: {review.comments}</p>
            <br />
              Rating: {stars()}
            <br />
            <br />
            
            {review.img && (
              <button
                onClick={() => setShowImg(!showImg)}
                className="button is-success"
              >
                See Home Pics
              </button>
            )}
            <br />
            <br />
            {showImg && (
              <img className="review-img" alt="uh oh!" src={review.img} />
            )}
            <br />
            <button onClick={() => handleHelpfulButtonClick(review.helpful_score)} className="button is-info">Helpful</button>
            <p className=''>Helpful Score: {review.helpful_score}</p>
            {isAdmin &&
              <button className='button is-danger' onClick={(e) => handleDelete(reviewId, e)} >Delete</button>
            }

             { (isUserId == review.user_ID) && (

                     <>
                        <button className='button is-warning' onClick={(e)=> handleUpdate(reviewId, e)} >Update</button>
                        <button className='button is-danger' onClick={(e)=> handleDelete(reviewId, e)} >Delete</button>
                    </>

           

                  )
                }
            

          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
  </div>



)

  

}
const mapStateToProps = (globalState) => {
  return {
    reviews: globalState.reviews,
    auth: globalState.auth,
    setOffset: globalState.setOffset,
    reviewByProperty: globalState.reviewByProperty
  };
};

export default connect(mapStateToProps)(Review);
