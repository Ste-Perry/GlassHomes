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
