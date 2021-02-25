import React, {useEffect} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'


import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Home from './Home'
import Properties from './Properties'
import Review from './Review'
import Reviews from './Reviews'

import {checkAuth} from '../actions/auth'
import Property from './Property'
import AddReview from './AddReview'

function App ({auth, dispatch}) {
  
  useEffect(() => {

    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

    return (
        <div className="container has-text-centered">

          <Route path="/" component={Nav} />

          <div className=''>
            {!auth.isAuthenticated &&
              <Route exact path="/" component={Login} />
            }
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home}/>

          </div>
          <div>
          <Route path='/property/:id' component={Property}/>
          <Route path='/properties' component={Properties}/>
          <Route path='/addreview' component={AddReview}/>
          <Route path='/review' component={Review}/>
          <Route path='/reviews' component={Reviews}/>

          </div>
          
        </div>
    )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}


export default connect(mapStateToProps) (App)
