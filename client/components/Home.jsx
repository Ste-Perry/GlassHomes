import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions'

const Home = (props) => {
  // useEffect(() => {
  //   props.dispatch(fetchProperties())
  // }, [])

  return (
    <div >
      <section className="hero is-fullheight is-default is-bold">

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
                  GlassHouse
                        </h1>
                <h2 className="subtitle is-4">
                  Because tenants should throw stones.
                        </h2>
                <br />
                <p className="has-text-centered">
                  <Link className="button is-medium is-info is-outlined" to='/properties'>Properties</Link>
                </p>
                <p className="has-text-centered">
                  <Link className="button is-medium is-info is-outlined" to='/reviews'>Reviews</Link>
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
