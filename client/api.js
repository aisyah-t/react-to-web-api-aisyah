import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget(widget){
  
 return request
 .post(widgetUrl)
 .send(widget)
 .then( response => req.body) // if we wanted to show individual widget use this
   
}

export function delWidget(id) {
  return request.delete(`/api/v1/widgets/${id}`)
  .then(res => res)
  .cathch(errorHandler('DELETE', '/api/v1/widgets/:id'))
}