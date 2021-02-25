import React, {useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

function Search (props) {
  const [address, setAddress] = useState("")
 
  const handleChange = (address) => {
    // console.log(address)
    setAddress(address)
  };
  
  const handleSelect = (a) => {
    setAddress(a)
    console.log(a)
    geocodeByAddress(a)
    .then(results => getLatLng(results[0]))
    .then(latLng => console.log('Success', latLng))
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
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#C0C0C0', cursor: 'pointer' ,color: 'black'}
                  : { backgroundColor: '#C0C0C0', cursor: 'pointer' ,color: 'black'}
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
    );
  
}
export default Search