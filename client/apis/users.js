import request from 'superagent'

const rootUrl = '/api/v1/users'

export function getUsers () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}
