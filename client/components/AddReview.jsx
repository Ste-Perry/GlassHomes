import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addReviewAction } from '../actions/reviews'

function AddReview (props) {

  const [formData, setFormData] = useState({
    title: '',
    comments: '',
    pros: '',
    cons: '',
    rating: '',
    stat_of_tenancy:'',
    end_of_tenancy:''
  })

  useEffect(() => {
    props.dispatch()
  }, [])
  
  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.review]: e.target.value,

      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let { title, comments, pros, cons, rating, year_of_tenancy} = formData
    props.dispatch(addReviewAction({ title, comments, pros, cons, rating, year_of_tenancy }))
  }

    return(
        <>
            <section className="hero is-success is-fullheight has-background-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h3 className="title has-text-black">Reviews</h3>
              <hr className="login-hr"></hr>
              <p className="subtitle has-text-black">Add your Review</p>
              <div className="box">
                <form className="Register form box" onSubmit={handleSubmit}>
                  <hr />
                  
                  
                  <div className="field">
										<div className="control">
                  <label className="column is-8 label is-offset-2 is-medium has-text-centered">Title
                <input required 
                className="input is-medium has-text-centered is-fullwidth" 
                placeholder="Title" 
                type="text" 
                name="title"  
                onChange={handleChange} 
                value={formData.title} />
                  </label>
                  </div>
                  </div>

									<div className="field">
										<div className="control">
                    <label className="column is-8 label is-offset-2 label is-medium has-text-centered">Comments
                    <input required className="input is-medium has-text-centered is-fullwidth" 
                    placeholder="Comments" 
                    type="text" 
                    name="comments" 
                    onChange={handleChange} 
                    value={formData.comments} />
                    </label>
</div>
</div>

                    <div className="field">
										<div className="control">
                    <label className="column is-8 label is-offset-2 label is-medium has-text-centered">Pros
                    <input required className="input is-medium has-text-centered is-fullwidth" 
                    placeholder="Pros" 
                    type="text" 
                    name="pros" 
                    onChange={handleChange} 
                    value={formData.pros} />
                    </label>
                    </div>
                    </div>

                    <div className="field">
										<div className="control">
                    <label className="column is-8 label is-offset-2 label is-medium has-text-centered">Cons
                    <input required className="input is-medium has-text-centered is-fullwidth" 
                    placeholder="Cons" 
                    type="text" 
                    name="cons" 
                    onChange={handleChange} 
                    value={formData.cons} />
                    </label>
                    </div>
                    </div>

                    <div className="field">
										<div className="control">
                    <label className="column is-8 label is-offset-2 label is-medium has-text-centered">Rating
                    <input required className="input is-medium has-text-centered is-fullwidth" 
                    placeholder="Rating" 
                    type="text" 
                    name="rating" 
                    onChange={handleChange} 
                    value={formData.rating} />
                    </label>
                    </div>
                    </div>

                    <div className="field">
										<div className="control">
                    <label className="column is-8 label is-offset-2 label is-medium has-text-centered">Year of Tenancy
                    <input required className="input is-medium has-text-centered is-fullwidth" 
                    placeholder="YoT" 
                    type="text" 
                    name="year_of_tenancy" 
                    onChange={handleChange} 
                    value={formData.year_of_tenancy} />
                    </label>
                    </div>
                    </div>

                  <input className="button is-success is-medium is-half" value="Register" type="submit" />
                </form>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}
            
        

  const mapStateToProps = ({reviews}) => {
    return {
      reviews
    }
  }

  export default connect(mapStateToProps)(AddReview)