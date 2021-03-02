import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Redirect } from 'react-router-dom';

function Search (props) {
  const [address, setAddress] = useState("")
  const [bool, setBool] = useState(false)
  const [addRedirect, setAddRedirect] = useState(false)
  const [propRedirect, setPropRedirect] = useState(false)
  const [propId, setPropId] = useState("")

  useEffect(()=> {
    let addyIndex = address.indexOf(",")
    let addy = address.substr(0, addyIndex)
    if(bool) {
      props.properties.map(property => {
        if(property.address == addy) {
          setPropId(property.id)
          setPropRedirect(true)
          setAddress("")
          
        } else {
          setAddRedirect(true)
          setAddress("")
        }

        // setAddress("")
        return property
      })
    }
  },[address])
 
  const handleChange = (address) => {
    // console.log('change', address)
    setAddress(address)
  };
  
  const handleSelect = (a) => {
    setAddress(a)
    // console.log(address)
    setBool(true)
    geocodeByAddress(a)
    .then(results => getLatLng(results[0]))
    .then(latLng => console.log('Success', latLng))
    .then(() => {return (setBool(false), setAddRedirect(false), setPropRedirect(false))})
    .catch(error => console.error('Error', error));    
  };

  const searchOptions = {
    location: new google.maps.LatLng(-41, 174),
    radius: 100000,
    componentRestrictions: { country: 'nz' },
    types: ['address']
}
  
  
  
  let count = 0
  
    // const [address, setAddress] = useState("")
    return ( 
    <>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="searchbox">
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {/* {loading && <div className ="Loading">Loading...</div>} */}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#F8F8FF', cursor: 'pointer' ,color: 'black' }
                  : { backgroundColor: '#87CEFA', cursor: 'pointer' ,color: 'black'}
                return (
                  <div key={count++}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    
                    <span>{suggestion.description}</span>
                    {/* {setAddress(suggestion.description)} */}
                  </div>
                );
              })}
            </div>
            {/* {console.log(address)} */}
          </div>
        )}
      </PlacesAutocomplete>
      {addRedirect && <Redirect to="/addproperty"/>}
      {propRedirect && <Redirect to={`/property/${propId}`}/>}
      </>
    );
  
}

const mapStateToProps = ({ properties }) => {
	return {
		properties
	}
}

export default connect(mapStateToProps)(Search)