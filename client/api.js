import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

//superagent is an API consumer, it uses API to communicate between client side and gets request from server
//client side requires different protocols for server
//aresponse.body = actions request on body of webpage

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function saveWidget(widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(response => response.body)
}

export function updateWidget(widget) {
  return request
    .put(widgetUrl)
    .update(widget)
    .then(response => response.body)
}

export function deleteWidget(widget) {
  return request
    .get(widgetUrl)
    .del(widget)
    .then(response => response.body)
}