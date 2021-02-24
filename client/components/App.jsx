import React, {useEffect} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'


import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Home from './Home'


import {checkAuth} from '../actions/auth'

function App ({auth, dispatch}) {
  
  useEffect(() => {

    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

    return (
      // <Router>
        <div className="container has-text-centered">

          <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
            {!auth.isAuthenticated &&
              <Link to='/register' className="">
                <h1 className="title is-1">Glass House</h1>
              </Link>}
              {auth.isAuthenticated &&
              <Link to='/home' className="">
                <h1 className="title is-1">Glass House</h1>
              </Link>}
              <Route path="/" component={Nav} />
            </div>
          </div>

          <div className=''>
            {!auth.isAuthenticated &&
              <Route exact path="/" component={Login} />
            }
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home}/>
            {/* <Route path="/meeting" component={Meeting} />
            <Route path="/history" component={History} />
            <Route path="/histories" component={Histories} /> */}
          </div>

        </div>
      // </Router>
    )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}


export default connect(mapStateToProps) (App)
