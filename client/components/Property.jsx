import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions/index'
import { getPropertyById } from '../apis/properties'
import PropertyReviews from './PropertyReviews'
function Property (props) {

    // useEffect(() => {
    //     props.dispatch(fetchProperties())
    // }, [])

    const [singleProperty, setSingleProperty] = useState(null)

    const propertyId = props.match.params.id

    const findSingleProperty = () => {
        if(propertyId) {
            getPropertyById(propertyId)
            .then(singProperty => {
                setSingleProperty(singProperty)
            })
        }
    }

    useEffect(() => {
        findSingleProperty()
    }, [props.match.params.id])

    return(
        <>
            { singleProperty && (
            <>
            <Link to='/properties'>Back</Link>
                <section className="hero is-info is-medium is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                            Cheese
                            </h1>
                        </div>
                    </div>
                </section>

            <div className="container">
                <section className="articles">
                    <div className="column is-8 is-offset-2">
                        <div className="card article">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title">Details for flat {singleProperty.address}</p>
                                    </div>
                                </div>
                                <div className="content article-body">
                                    <p>Suburb: {singleProperty.suburb}</p>
                                    <p>Address: {singleProperty.address}</p>
                                    <p>Number of bedrooms: {singleProperty.bedrooms}</p>
                                    <p>Number of bathrooms: {singleProperty.bathrooms}</p>
                                    <h3 className="has-text-centered">Reviews</h3>
                                    <PropertyReviews propertyId={singleProperty.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
             </div>
            </>
        )}
            
        </>
    )

}

  const mapStateToProps = ({properties}) => {
    return {
      properties
    }
  }

  export default connect(mapStateToProps)(Property)