import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchReviews} from "../actions/reviews";
import Review from "./Review";

function Reviews(props) {

  console.log(props.propertyId)
  useEffect(() => {
    props.dispatch(fetchReviews());
  }, []);


  
  return (
    <>

        {props.reviews.map(review => {
          return <div>
            <Review keys={review.id} review={review}/>
          </div>;
        })}

    </>

  );
}

const mapStateToProps = ({reviews}) => {
  return {
    reviews,
  }
}

export default connect(mapStateToProps)(Reviews);
