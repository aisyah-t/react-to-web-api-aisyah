import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets() {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget(widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(response => {
      return response.body
    })
}