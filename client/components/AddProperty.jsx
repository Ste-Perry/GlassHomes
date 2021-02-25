import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions/index'

function AddProperty (props) {
  
  const [formData, setFormData] = useState({
    address: '',
    suburb: '',
    bedrooms: '',
    bathrooms: '',
    parking: ''
  })
    return(
        <>
            <h1></h1>
            
        </>
    )

}

  const mapStateToProps = ({properties}) => {
    return {
      properties
    }
  }

  export default connect(mapStateToProps)(AddProperty)