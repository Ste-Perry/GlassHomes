import request from 'superagent'

const rootUrl = '/api/v1/properties'

export function getProperties () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.properties
    })
}

export function getPropertyById (id) {
  return request.get(rootUrl + '/' + id)
  .then(res => res.body)
}

export function addProperty (properties){
  return request.post(rootUrl)
  .send ( properties )
  .then(res => {
    return res.body
  })
}

export function deleteProperty (id) {
  return request.delete(rootUrl + '/' + id)
  .then(res => {
    return res.body
  })
}

export function updateProperty (id, property) {
  return request.patch(rootUrl + '/' + id)
  .send(property)
  .then(res => {
    return res.body
  })
}

export function addImageProp (formData) {
  return request.post(rootUrl + '/image')
    .send(formData)
    .then(res => {
      return res.text
    })
}

export function getPropertyAvgScore (id){
  return request.get(rootUrl + "/property/" + id)
  .then(res => res.body)
}


export function getPropertyWithRating (sort){
  return request.get(rootUrl + "/sort/" + sort)
  .then(res => res.body)
}

// export function updatePropertyAvgScore (id, avg_score){
//   return request.patch(rootUrl + "/property/" + id)
//   .send(id, avg_score )
//   .then(res => res.body)
// }