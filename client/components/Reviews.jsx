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

      <section className="hero is-info is-medium is-bold" id="hero-image">
        <div className="hero-body"></div>
      </section>
       
      <ul>
        <section className="articles">
        <div className="column is-8 is-offset-2">
        <div className="container has-text-centered">
        <div className="card article">
              <div className="card-content">
                
							<div className="column is-12">
              <h3 className="title has-text-black">Reviews</h3>
								<hr className="login-hr"></hr>
                <p className="subtitle has-text-black">Don't be nasty.</p>

        {props.reviews.map(review => {
          return <div>
            
            <Review key={review.id} review={review}/>
               </div>

        })}
        </div>
                    </div>
           </div>
           </div>
            </div>

         </section>

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
