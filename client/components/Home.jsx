import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions'

const Home = (props) => {
  useEffect(() => {
    props.dispatch(fetchProperties())
  }, [])


  return (
    <div >
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <img src="https://place-puppy.com/300x300" alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active"><a>Home</a></li>
                      <li><a href="">Examples</a></li>
                      <li><a href="">Features</a></li>
                      <li><a href="">Team</a></li>
                      <li><a href="">Help</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img src="https://picsum.photos/800/600/?random" alt="Description" />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                  Superhero Scaffolding
                        </h1>
                <h2 className="subtitle is-4">
                  Let this cover page describe a product or service.
                        </h2>
                <br />
                <p className="has-text-centered">
                  <a className="button is-medium is-info is-outlined">
                    Learn more
                            </a>
                </p>
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
    properties: globalState.properties
  }
}


export default connect(mapStateToProps)(Home)
