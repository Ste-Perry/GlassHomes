import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { fetchProperties } from '../actions'
import { checkAuth } from '../actions/auth'
import { logoutUser } from '../actions/auth'


const Home = (props) => {
  // useEffect(() => {
  //   props.dispatch(fetchProperties())
  // }, [])

  useEffect(() => {
    // const confirmSuccess = () => { }
    // props.dispatch(checkAuth(confirmSuccess))
  }, [])

  const logout = () => {
    const confirmSuccess = () => props.ownProps.history.push('/')
    props.dispatch(logoutUser(confirmSuccess))
  }

  return (
    <div >
      <section className="hero is-fullheight is-default is-bold">

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img className='home-image' src='./images/welly-home.jpg' alt="Description" />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <img className='logo' src='/images/default-monochrome.svg' alt='logo'/>

                <h2 className="subtitle is-4">
                  Because tenants should throw stones.
                        </h2>
                <br />
                <div className=''>
                  {props.auth.isAuthenticated &&
                  <>
                  <p className='has-text-centered'><Link className="button is-medium is-info is-outlined" to='/properties'>Properties</Link></p>
                  <br/>
                  <p className='has-text-centered'><Link to='/' className="button is-medium is-info is-outlined" onClick={() => logout()}>Logout</Link></p>
                  </>
                  }
                </div>
                <div className=''>
                  {!props.auth.isAuthenticated &&
                  <>
                <p className="has-text-centered">
                  <Link className="button is-medium is-info is-outlined" to='/login'>Login</Link>
                </p>
                <br></br>
                <p className="has-text-centered">
                  <Link className="button is-medium is-info is-outlined" to='/register'>Register</Link>
                </p>
                </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}


const mapStateToProps = (globalState) => {
  return {
    properties: globalState.properties,
    auth: globalState.auth
  }
}


export default connect(mapStateToProps)(Home)
