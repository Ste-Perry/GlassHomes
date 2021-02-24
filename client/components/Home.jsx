<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function Home(props) {

    
    return (
      <div className="container">
			<h1>home</h1>
      
		</div>
	)
}

// const mapStateToProps = (globalState) => {
// 	return {
// 		meetings: globalState.meetings,
// 	}
// }

export default connect()(Home)
=======
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFruits } from '../actions'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchFruits())
  })

  return (
      <div >

      </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
>>>>>>> 077fe10d364eeb21ff32650908e30d295b9a0b8b
