import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginAdmin from './LoginAdmin'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Home from './Home'
import Properties from './Properties'
import Review from './Review'
import Reviews from './Reviews'
import Footer from './Footer'

import AdminPortal from './AdminPortal'

import { checkAuth } from '../actions/auth'
import Property from './Property'
import AddReview from './AddReview'
import AddProperty from './AddProperty'
import AddPropertyModal from './AddPropertyModalBulma'

function App({ auth, dispatch }) {

  const isAdmin = auth.user.is_admin
  
  useEffect(() => {

    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <>
      {/* <div className="container has-text-centered"> */}

      <Route path="/" component={Nav} />

      <div className=''>
        {!auth.isAuthenticated &&
          <Route exact path="/" component={Home} />
        }
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />

        {/* <Route path='/loginadmin' component={LoginAdmin} /> */}


        {auth.isAuthenticated && isAdmin && (
          <>
          <Route path='/adminportal' component={AdminPortal} />
          <Route exact path="/" component={Home} />
          </>
        ) 
        }
      </div>
      <div>
        <Route path='/property/:id' component={Property} />
        <Route path='/properties' component={Properties} />
        <Route path='/addreview' component={AddReview} />
        <Route path='/review' component={Review} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/addproperty' component={AddProperty} />
        <Route path='/addpropertymodal' component={AddPropertyModal}/>

      </div>

      <Footer />
    </>

  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}


export default connect(mapStateToProps)(App)
