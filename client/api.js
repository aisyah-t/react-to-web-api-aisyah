import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addNewWidget(widget) {
  console.log(widget)
  return request.post(widgetUrl)
  .send(widget)
  .then(response => response.body)
}

export function deleteWidget(widgetId) {
  return request.del(widgetUrl + '/' + widgetId)
  .then(response => response.body)
}

export function updateWidget(widget) {
  delete widget.showUpdate
  // console.log(widget)
  return request.put(widgetUrl)
  .send(widget)
  .then(response => response.body)
}

