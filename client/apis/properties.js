import request from 'superagent'

const rootUrl = '/api/v1'

export function getProperties () {
  return request.get(rootUrl + '/properties')
    .then(res => {
      return res.body.properties
    })
}
