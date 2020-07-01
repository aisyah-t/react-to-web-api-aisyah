import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets () {
  console.log("API received GET request")
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function saveWidget (widget) {
  console.log("API received POST request")
  return request.post(widgetUrl)
  .send(widget)
  .then(response => response.body)
}

export function deleteWidget (widgetId) {
  console.log("API received DEL request")
  return request.del(`${widgetUrl}${widgetId}`)
  .then(response => response.body)
}