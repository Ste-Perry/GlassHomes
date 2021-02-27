import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addReviewAction, addReviewWithImage, fetchReviews } from '../actions/reviews'

function AddReview (props) {

  const propsId = props.propsId

  useEffect(() => {
    fetchReviews()
  }, [])


  const [reviewImage, setReviewImage] = useState(null)


  const [formData, setFormData] = useState({
    title: '',
    comments: '',
    pros: '',
    cons: '',
    rating: '',
    stat_of_tenancy:'',
    end_of_tenancy:''
    })

    const onChangeFile = (e) => {
      setReviewImage(e.target.files[0])
    }

  
  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
        
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formImage = new FormData()
    formImage.append('img', reviewImage)
    props.dispatch(addReviewWithImage(formImage, {title: formData.title, comments: formData.comments, pros: formData.pros, cons: formData.cons, rating: formData.rating, start_of_tenancy: formData.start_of_tenancy, end_of_tenancy: formData.end_of_tenancy, propsId}))

    
    // let { title, comments, pros, cons, rating, start_of_tenancy, end_of_tenancy} = formData
    // props.dispatch(addReviewAction({title, comments, pros, cons, rating, start_of_tenancy, end_of_tenancy, propsId}))
    e.target.reset()
    props.history.push('/reviews')
  }

    return(
        <>
            
            <Link to='/'>back</Link>
            <h1>Add Review</h1>
            <form onSubmit={handleSubmit}>
                <label>

                    <input className='form' type='text' name='title' placeholder='Title ' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='pros' placeholder='Pros ' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='cons' placeholder='cons ' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='comments' placeholder='Comments' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='rating' placeholder='Rating' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='start_of_tenancy' placeholder='Start_of_Tenancy' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='end_of_tenancy' placeholder='End_of_Tenancy' onChange={(e) => handleChange(e)}/>

                </label>
                
                <label className="" htmlFor="img">
                  <span className="">Review image </span>
                   <input type="file" name="img" onChange={onChangeFile} />
               </label>
                <button type='submit'>Add</button>
            </form>
            
    </>
  )
}
            
        

  const mapStateToProps = ({reviews}) => {
    return {
      reviews
    }
  }

  export default connect(mapStateToProps)(AddReview)