import React, {useEffect} from "react";
import {connect} from "react-redux";

const Review = (props) => {

const review = props.review
  return (
    <div>
      <section className="articles">
        <div className="column is-8 is-offset-2">
          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">{review.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    reviews: globalState.reviews
  }
}

export default connect(mapStateToProps)(Review);
