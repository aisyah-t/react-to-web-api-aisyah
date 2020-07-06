import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets() {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget(widget) {
  // console.log(widget)
  return request
    .post(widgetUrl)
    .send(widget)
    .then(response => {
      return response.body
    })
}

export function deleteWidget(widgetId) {
  console.log(widgetId) //Getting the right widget ID but need to figure out the rest of the function
  return request
    .del(widgetUrl + widgetId)
    // .get(widgetUrl)
    .then(response => {
      console.log(response)
      // return response
    })
}