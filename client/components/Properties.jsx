import React, {useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions/index'

function Properties (props) {

    console.log(props)
    useEffect(() => {
        props.dispatch(fetchProperties())
      }, [])
  
    return(
        <>
            <h1>cheese</h1>

            <ul>
                {props.properties.map(prp => {
                    return(
                        <div class="container">
                        
                        <section class="articles">
                        <div class="column is-8 is-offset-2">
                        <div class="card article">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content has-text-centered">
                                    <p class="title article-title">{prp.address}</p>
                                </div>
                            </div>

                    <li key={prp.id}>Address: {prp.suburb} {prp.address} Bedrooms: {prp.bedrooms} Bathrooms: {prp.bathrooms} Parking spaces: {prp.parking}</li>
                    </div>
                    </div>
                </div>
                </section>
                </div>
                    )
                })}
            </ul>

            


        </>
    )

}

  const mapStateToProps = ({properties}) => {
    return {
      properties
    }
  }

  export default connect(mapStateToProps)(Properties)