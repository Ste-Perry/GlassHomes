import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PlacesAutocomplete from './Search'

import {logoutUser} from '../actions/auth'
import { fetchProperties } from '../actions'

function Nav ({auth, logout, fetchHouses}) {

  const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible(currentBurgerState => {
      return !currentBurgerState
    })
  }

  useEffect(()=> {
    fetchHouses()
  },[])

  

    return <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span onClick={toggleBurger} className={`navbar-burger burger ${burgerVisible ? 'is-active': ''}`} data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${burgerVisible ? "is-active" : ''}`}>
          <div className="navbar-end">
            { auth.isAuthenticated
              ? (<>
                  {/* <Link to='/histories' className="navbar-item is-large" >All Meetings</Link>
                  <Link to='/meeting' className="navbar-item is-large" >New Meeting </Link> */}
                  <Link to='/' className="navbar-item is-large" onClick={() => logout()}>Logout</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/home'>Home</Link>
                  </>
                )
              : (
                <>
                <Link onClick={toggleBurger} className="navbar-item" to='/home'>Home</Link>
                  <Link onClick={toggleBurger} className="navbar-item is-large" to='/login'>Login</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/register'>Register</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/properties'>Properties</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/reviews'>Reviews</Link>
                  
                </>
              )
            }
            <PlacesAutocomplete />
            
          </div>
        </div>
      </div>
    </nav>
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      const confirmSuccess = () => ownProps.history.push('/')
      dispatch(logoutUser(confirmSuccess))
    },
    fetchHouses: () => dispatch(fetchProperties())
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)