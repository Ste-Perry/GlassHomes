import request from 'superagent'

const rootUrl = '/api/v1'

export function getProperties () {
  return request.get(rootUrl + '/properties')
    .then(res => {
      return res.body.properties
    })
}

export function getPropertyById (id) {
  return request.get(rootUrl + '/properties/' + id)
  .then(res => res.body)
}

export function addProperty (){
  return request.post(rootUrl + '/properties')
  .send ({
    suburb:suburb,
    address:address,
    bedrooms:bedrooms,
    bathrooms:bathrooms,
    parking:parking
  })
  .then(res => {
    return res.body
  })
}