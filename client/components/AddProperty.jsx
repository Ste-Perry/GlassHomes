import React, {useEffect, useState } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, addTheProperties, addPropertiesWithImage, addPropertiesWithDefaultImage } from '../actions/index'
import { checkAuth } from '../actions/auth'
import AddPropertyModal from './AddPropertyModalBulma'


function AddProperty (props) {

  useEffect(() => {
    props.dispatch(fetchProperties())
  }, [])
  
  //for adding image
  const [propImage, setPropImage] = useState(null)

  const [formData, setFormData] = useState({
    address: '',
    suburb: '',
    bedrooms: '',
    bathrooms: '',
    parking: ''
  })


  const onChangeFile = (e) => {
    setPropImage(e.target.files[0])
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()

    //for adding image
    const formImage = new FormData()

    if(propImage == null) {
        props.dispatch(addPropertiesWithDefaultImage({address: formData.address, suburb: formData.suburb, bedrooms: formData.bedrooms, bathrooms: formData.bathrooms, parking: formData.parking}))
        e.target.reset()
      } else {
      formImage.append('img', propImage)
      props.dispatch(addPropertiesWithImage(formImage, {address: formData.address, suburb: formData.suburb, bedrooms: formData.bedrooms, bathrooms: formData.bathrooms, parking: formData.parking}))
      e.target.reset()
    }
  }

  const handleChange = (e) => {
    setFormData(currentFormData => {
        // console.log(e)
        return {
            ...currentFormData,
            [e.target.name]: e.target.value
        }
    })
}

useEffect(() => {
  const confirmSuccess = () => { }
  props.dispatch(checkAuth(confirmSuccess))
}, [])

    return(
        <>
            <Link to='/properties'>back</Link>
            <div className=''>
            {props.auth.isAuthenticated &&
            <form onSubmit={handleSubmit}>
                <label>
                  <br/>
                  <br/>
                  <div className="propertyadd">
                    <label className="propertyform">
                      Address
                    <input className='form' 
                    type='text' 
                    name='address' 
                    placeholder='Address ' 
                    onChange={(e) => handleChange(e)}/>
                  
                    <br/>
                  <br/>
                  </label>
                  </div>
                    <input className='form' 
                    type='text' name='suburb' 
                    placeholder='Suburb ' 
                    onChange={(e) => handleChange(e)}/>
                    <br/>
                    <br/>
                    <input className='form' 
                    type='text' name='bedrooms' 
                    placeholder='Bedrooms ' 
                    onChange={(e) => handleChange(e)}/>
                    <br/>
                    <br/>
                    <input className='form' 
                    type='text' 
                    name='bathrooms' 
                    placeholder='Bathrooms ' 
                    onChange={(e) => handleChange(e)}/>
                    <br/>
                    <br/>
                    <input className='form' 
                    type='text' 
                    name='parking' 
                    placeholder='Parking ' 
                    onChange={(e) => handleChange(e)}/>
                    <br/>
                    <br/>
                </label>
                <label className="" htmlFor="img">
                  <span className="">Property image </span>
                   <input type="file" name="img" onChange={onChangeFile} />
               </label>
               <br/>
                  <br/>
                <button type='submit'>Add</button>
            </form>
              }
              </div>
              <div className=''>
              {!props.auth.isAuthenticated &&
              <>
              <br/>
              <br/>
              <Route path="/" component={AddPropertyModal} />
              </>
              }
            </div>
            {props.propertyById.id && (
                <Redirect to={`/property/${props.propertyById.id}`} />
              )}
        </>
    )

}

  const mapStateToProps = (globalState) => {
    return {
      properties: globalState.properties,
      auth: globalState.auth,
      propertyById: globalState.propertyById
    }
  }

  export default connect(mapStateToProps)(AddProperty)