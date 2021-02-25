import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions/index'

function Properties (props) {

    useEffect(() => {
        props.dispatch(fetchProperties())
      }, [])
      
      console.log(props)

    return(
        <>
            <h1 className='title article-title'>Some nice properties</h1>
            <ul>
       
                {props.properties.map(prp => {
                    return(
                        <Link to={`/property/${prp.id}`}>
                        <div className="container">
                        <section className="articles">
                        <div className="column is-8 is-offset-2">
                        <div className="card article">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content has-text-centered">
                                    <p className="title article-title">{prp.address}</p>
                                </div>
                            </div>

                    <li key={prp.id}>Address: {prp.suburb} {prp.address} Bedrooms: {prp.bedrooms} Bathrooms: {prp.bathrooms} Parking spaces: {prp.parking}</li>
                    </div>
                    </div>
                    
                </div>
                </section>
                </div>
                </Link>
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