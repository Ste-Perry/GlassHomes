import React, {useEffect, useState } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties, addTheProperties, addPropertiesWithImage, addPropertiesWithDefaultImage } from '../actions/index'
import { checkAuth } from '../actions/auth'
import AddPropertyModal from './AddPropertyModalBulma'
import Adverts from './Adverts'


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
        props.dispatch(addPropertiesWithDefaultImage({
          address: formData.address, suburb: formData.suburb, bedrooms: formData.bedrooms, 
          bathrooms: formData.bathrooms, parking: formData.parking, time: new Date()}))
          e.target.reset()
      } else {
      formImage.append('img', propImage)
      props.dispatch(addPropertiesWithImage(formImage,{
          address: formData.address, suburb: formData.suburb, bedrooms: formData.bedrooms, 
          bathrooms: formData.bathrooms, parking: formData.parking, time: new Date()}))
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
          <div className="column is-8 is-offset-2">
          <Adverts side="left" />
					<Adverts side="right" />
        <div className="container has-text-centered">
          <div className="card article">
            <div className="card-content"></div>
            <Link to='/properties'>back</Link>
            
            <div className='property-page'>
            {props.auth.isAuthenticated &&
            <div>
              <br/>
              <h3 className="title has-text-black">Add a Property</h3>
            <form onSubmit={handleSubmit}>

              <hr/>
            <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        Address
                        <br/>
                        <input
                          required
                          className="input is-large has-text-centered is-fullwidth"
                          placeholder="Address"
                          type="text"
                          name="address"
                          onChange={(e) => handleChange(e)}/>
                      </label>
                    </div>
                  </div>
                <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        Suburb
                        <br/>
                        <input
                          required
                          className="input is-large has-text-centered is-fullwidth"
                          placeholder="Suburb"
                          type="text"
                          name="suburb"
                          onChange={(e) => handleChange(e)}/>
                      </label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        Bedrooms
                        <br/>
                        <input
                          required
                          className="input is-large has-text-centered is-fullwidth"
                          placeholder="Bedrooms"
                          type="number"
                          name="bedrooms"
                          onChange={(e) => handleChange(e)}/>
                      </label>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        Bathrooms
                        <br/>
                        <input
                          required
                          className="input is-large has-text-centered is-fullwidth"
                          placeholder="Bathrooms"
                          type="number"
                          name="bathrooms"
                          onChange={(e) => handleChange(e)}/>
                      </label>
                    </div>
                  </div>
               
               
                <div className="field">
                    <div className="control">
                      <label className="column is-6 label is-offset-3 label is-large has-text-centered">
                        Parking
                        <br/>
                        <input
                          required
                          className="input is-large has-text-centered is-fullwidth"
                          placeholder="Parking"
                          type="number"
                          name="parking"
                          onChange={(e) => handleChange(e)}/>
                      </label>
                    </div>
                  </div>
                  
               

                <label className="" htmlFor="img">
                  <span className="">Property image </span>
                   <input type="file" name="img" onChange={onChangeFile} />
               </label>
               <br/>

               <br/>
                <button className="button is-medium is-info is-outlined" type='submit'>Add</button>

            </form>
            </div>
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
              <br/>
              <br/>
              </div>
              </div>
              </div>
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