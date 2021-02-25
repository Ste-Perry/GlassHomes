import React, {useEffect} from "react";
import {connect} from "react-redux";

const Review = (props) => {
  const review = props.review;

  const stars = () => {
    let starArray = [];
    let remainingStars = 5 - review.rating;
    for (let i = 0; i < review.rating; i++) {
      starArray.push(
        <span style={{color: "gold"}} className="fa fa-star"></span>
      );
    }
    for (let i = 0; i < remainingStars; i++) {
      starArray.push(<span className="fa fa-star"></span>);
    }
    return starArray;
  };

  return (
    <div>
      <section className="articles">
        <div className="column is-8 is-offset-2">
          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">{review.title}</p>
                  <br />
                  <p className="cons">
                    Year of tenancy: {review.year_of_tenancy}
                  </p>
                  <br />
                  <p className="pros">Pros: {review.pros}</p>
                  <br />
                  <p className="cons">Cons: {review.cons}</p>
                  <br />
                  <p className="cons">Comments: {review.comments}</p>
                  <br />
                  Rating: {stars()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (globalState) => {
  return {
    reviews: globalState.reviews,
  };
};

export default connect(mapStateToProps)(Review);
