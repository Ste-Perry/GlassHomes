import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchProperties, updateTheProperties} from "../actions/index";
import {getPropertyById} from "../apis/properties";
import Reviews from "./Reviews";
import PropertyReviews from "./PropertyReviews";
import AddReview from './AddReview'
function Property(props) {
  const [formData, setFormData] = useState({
    address: "",
    suburb: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
  });

  const handleUpdateSubmit = (id, e) => {
    e.preventDefault();
    console.log(e);
    props.dispatch(
      updateTheProperties(id, {
        address: formData.address,
        suburb: formData.suburb,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        parking: formData.parking,
      })
    );
    console.log("updated data");
  };

  const handleUpdateChange = (e) => {
    setFormData((currentFormData) => {
      console.log(e);
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [singleProperty, setSingleProperty] = useState(null);

  const propertyId = props.match.params.id;

  const findSingleProperty = () => {
    if (propertyId) {
      getPropertyById(propertyId).then((singProperty) => {
        setSingleProperty(singProperty);
      });
    }
  };

  useEffect(() => {
    findSingleProperty();
  }, [props.match.params.id]);

  useEffect(() => {
    findSingleProperty();
  }, [JSON.stringify(props.properties)]);

  const [show, setShow] = useState(false)

  return (
    <>
      {singleProperty && (
        <>
          {/* <Link to='/properties'>Back</Link> */}

          <section className="hero is-info is-medium is-bold" id="hero-image">
            <div className="hero-body"></div>
          </section>

          <div>
            <section className="articles">
              <div className="column is-8 is-offset-2">
                <div className="card article">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content has-text-centered">
                        <p className="title article-title">
                          Details for flat {singleProperty.address}
                        </p>
                      </div>
                    </div>
                    <div className="content article-body">
                      <div className="icon-text">
                        <i
                          style={{color: "grey"}}
                          className="fa fa-map-marker"
                        ></i>
                        <span> Suburb: {singleProperty.suburb}</span>
                      </div>
                      <div className="icon-text">
                        <i style={{color: "grey"}} className="fa fa-home"></i>
                        <span> Address: {singleProperty.address}</span>
                      </div>
                      <div className="icon-text">
                        <i style={{color: "grey"}} className="fa fa-bed"></i>
                        <span> Bedrooms: {singleProperty.bedrooms}</span>
                      </div>
                      <div className="icon-text">
                        <i style={{color: "grey"}} className="fa fa-bath"></i>
                        <span> Bathrooms: {singleProperty.bathrooms}</span>
                      </div>
    												<div className=""><span><img src={singleProperty.img} alt="image of property"/></span></div>


                      <form onSubmit={(e) => handleUpdateSubmit(propertyId, e)}>
                        <label>
                          <input
                            className="form"
                            type="text"
                            name="address"
                            placeholder="Address"
                            onChange={(e) => {
                              handleUpdateChange(e);
                            }}
                          />

                          <input
                            className="form"
                            type="text"
                            name="suburb"
                            placeholder="Suburb"
                            onChange={(e) => {
                              handleUpdateChange(e);
                            }}
                          />
                          <input
                            className="form"
                            type="text"
                            name="bedrooms"
                            placeholder="Bedrooms"
                            onChange={(e) => {
                              handleUpdateChange(e);
                            }}
                          />

                          <input
                            className="form"
                            type="text"
                            name="bathrooms"
                            placeholder="Bathrooms"
                            onChange={(e) => {
                              handleUpdateChange(e);
                            }}
                          />

                          <input
                            className="form"
                            type="text"
                            name="parking"
                            placeholder="Parking"
                            onChange={(e) => {
                              handleUpdateChange(e);
                            }}
                          />
                        </label>
                        <button type="submit">Update</button>
                      </form>


                      
                      <h3 className="has-text-centered">Reviews</h3>

                      <div>
                        <button  className="button is-large is-fullwidth is-success" onClick={() => setShow(!show)}>Add Review</button>
                        {show && (
                          <>
                            <AddReview showState={show} setShowState={setShow}  propsId={singleProperty.id} />
                          </>
                        )}
                      </div>

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
  );
}

const mapStateToProps = ({properties}) => {
  return {
    properties,
  };
};

export default connect(mapStateToProps)(Property);
