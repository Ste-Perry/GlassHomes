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

export function addProperty (properties){
  return request.post(rootUrl + '/properties')
  .send ( properties )
  .then(res => {
    return res.body
  })
}

export function deleteProperty (id) {
  return request.delete(rootUrl + '/properties/' + id)
  .then(res => {
    return res.body
  })
}

export function updateProperty (id, property) {
  return request.patch(rootUrl + '/properties/' + id)
  .send(property)
  .then(res => {
    return res.body
  })
}