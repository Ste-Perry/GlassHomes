import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchReviews} from "../actions/reviews";

import Review from "./Review";

function Reviews(props) {
  useEffect(() => {
    props.dispatch(fetchReviews());
  }, []);

  return (
    <>
      <h1 className="title article-title">Reviews</h1>
      <ul>
        {props.reviews.map(review => {
          return <div className="container">
            <Review key={review.id} review={review}/>
          </div>;
        })}
      </ul>
    </>
  );
}

const mapStateToProps = ({reviews}) => {
  return {
    reviews,
  }
}

export default connect(mapStateToProps)(Reviews);
