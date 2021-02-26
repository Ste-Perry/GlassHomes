import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, addTheProperties } from '../actions/index'

function AddProperty (props) {

  useEffect(() => {
    fetchProperties()
  }, [])
  
  const [formData, setFormData] = useState({
    address: '',
    suburb: '',
    bedrooms: '',
    bathrooms: '',
    parking: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch(addTheProperties({address: formData.address, suburb: formData.suburb, bedrooms: formData.bedrooms, bathrooms: formData.bathrooms, parking: formData.parking}))
    console.log('Data sent')
    e.target.reset()
    props.history.push('/properties')
  }

  const handleChange = (e) => {
    setFormData(currentFormData => {
        console.log(e)
        return {
            ...currentFormData,
            [e.target.name]: e.target.value
        }
    })
}

    return(
        <>
            <Link to='/properties'>back</Link>
            <h1>More Cheese</h1>
            <form onSubmit={handleSubmit}>
                <label>

                    <input className='form' type='text' name='address' placeholder='Address ' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='suburb' placeholder='Suburb ' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='bedrooms' placeholder='Bedrooms ' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='bathrooms' placeholder='Bathrooms ' onChange={(e) => handleChange(e)}/>

                    <input className='form' type='text' name='parking' placeholder='Parking ' onChange={(e) => handleChange(e)}/>

                </label>
                <button type='submit'>Add</button>
            </form>
            
        </>
    )

}

  const mapStateToProps = ({properties}) => {
    return {
      properties
    }
  }

  export default connect(mapStateToProps)(AddProperty)