import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function saveWidget (widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(response => response.body)
}

export function deleteWidget (id) {
  return request
  .delete(`${widgetUrl}/${id}`)
  .then(response => response)
}


