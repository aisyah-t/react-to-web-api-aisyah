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
  .then(response => 
    { console.log(response.body)
      return response.body})
}

export function deleteWidgetApiFunction (widget) {
  console.log ('api delete widget data -----' , widget)
  return request
  .delete(widgetUrl)
  .send(widget)
  .then(response => response.body)
}