import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions/index'

function Property (props) {

    return(
        <>
            <h1>cheese</h1>
            
        </>
    )

}

  const mapStateToProps = ({properties}) => {
    return {
      properties
    }
  }

  export default connect(mapStateToProps)(Property)