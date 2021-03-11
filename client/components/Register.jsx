import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { loginError, registerUserRequest } from '../actions/auth'

function Register(props) {
  const { auth } = props

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: ''
  })

  useEffect(() => {
    props.dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,

      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let { username, password, confirm_password, first_name, last_name } = formData
    if (confirm_password != password) return props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { props.history.push('/home') }
    props.dispatch(registerUserRequest({ username, password, first_name, last_name, time: Date.now() }, confirmSuccess))
  }

  return (
    <>

      <section className="hero is-info is-medium is-bold" id="hero-image">
        <div className="hero-body"></div>
      </section>

      <section className="articles">
        <div className="column is-8 is-offset-2">
          <div className="container has-text-centered">


            <div className="card article">
              <div className="card-content">


                <div>
                  <h3 className="title has-text-black">Register</h3>
                  <hr className="login-hr"></hr>
                  <p className="subtitle has-text-black">Register to add reviews.</p>
                    <form onSubmit={handleSubmit}>
                      <hr />
                      {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}

                      <div className="field">
                        <div className="control">
                          <label className="column is-6 label is-offset-3 is-large has-text-centered">Username
          <input required
                              className="input is-large has-text-centered"
                              placeholder="Username"
                              type="text"
                              name="username"
                              autoComplete="username"
                              onChange={handleChange}
                              value={formData.username} />
                          </label>
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <label className="column is-6 label is-offset-3 label is-large has-text-centered">First Name
            <input required className="input is-large has-text-centered is-medium" placeholder="First Name" type="text" name="first_name" onChange={handleChange} value={formData.first_name} />
                          </label>
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <label className="column is-6 label is-offset-3 label is-large has-text-centered">Last Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Last Name" type="text" name="last_name" onChange={handleChange} value={formData.last_name} />
                          </label>
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <label className="column is-6 label is-offset-3 label is-large has-text-centered">Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={handleChange} value={formData.password} />
                          </label>
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <label className="column is-6 label is-offset-3 label is-large has-text-centered">Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password} />
                          </label>
                        </div>
                      </div>
                      <br></br>
                      <input className="button is-info is-large is-half" value="Register" type="submit" />
                    <br></br>
                    <br></br>
                    </form>               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)