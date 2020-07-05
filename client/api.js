import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'



export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function makeWidgetApi (widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(response => response.body)
}

export function updateWidgetApiFunction (widget){
  console.log ('api update widget data -----' , widget)
  return request
  .put(widgetUrl)
  .send(widget)
  .then(response => response.body)
}
