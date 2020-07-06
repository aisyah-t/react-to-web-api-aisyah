import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

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

export function deleteWidget(widgetId) {
  return request
    .del(widgetUrl + widgetId)
    .then(response => {
      return response.body
    })
}

export function getWidget(widgetId) {
  return request
    .get(widgetUrl + widgetId)
    .then(response => {
      return response.body
    })
}

export function updateWidget(widgetId, widget) {
  return request
    .patch(widgetUrl + widgetId)
    .send(widget)
    .then(response => {
      return response.body
    })
}