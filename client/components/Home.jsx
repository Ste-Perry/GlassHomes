import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchProperties())
  })

  
  return (
      <div >
          
      </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    properties: globalState.properties
  }
}


export default connect()(Home)
