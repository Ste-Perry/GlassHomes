import React, { useEffect } from "react";
import { connect } from "react-redux";

const Review = (props) => {
  const review = props.review;

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
    return starArray
  };

  return (
    <div key={review.id}  >
    
          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">{review.title}</p>
                  <br />
                  <p className="years_of_tenancy">
                    Years of tenancy: {review.start_of_tenancy} - {review.end_of_tenancy}
                  </p>
             
                  <br />
                  <div className="icon-text has-text-success"><i className="fa fa-check-square"></i><span> Pros:</span></div>
                  <p>{review.pros}</p>
                  <br />
                  <div className="icon-text has-text-danger"><i className="fa fa-ban"></i><span> Cons:</span></div>
                  <p>{review.cons}</p>
                  <br />
                  <p className="comments">Comments: {review.comments}</p>
                  <br />
                  Rating: {stars()}
                  <br />
                  <br />
                  <button class="button is-info">Helpful</button>

                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
        
    //   </section>
    // </div>
  );
};
const mapStateToProps = (globalState) => {
  return {
    reviews: globalState.reviews,
  };
};

export default connect(mapStateToProps)(Review);
