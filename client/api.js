import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets () {
  console.log("API received GET request")
  return request
    .get(widgetUrl)
    .then(response => response.body)
    .catch(err => console.log(err))

}

export function saveWidget (widget) {
  console.log("API received POST request")
  return request.post(widgetUrl)
  .send(widget)
  .then(response => response.body)
  .catch(err => console.log(err))
}

export function deleteWidget (widgetId) {
  console.log("API received DEL request")
  return request.del(`${widgetUrl}${widgetId}`)
  .then(response => response.body)
  .catch(err => console.log(err))
}

export function updateWidget (widgetId, widget) {
  console.log("api.js received update request")
  return request.patch(`${widgetUrl}${widgetId}`)
  .send(widget)
  .then(response => response.body)
  .catch(err => console.log(err))
}