import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget(widget){

  console.log(widget)
  
 return request
 .post(widgetUrl)
 .send(widget)
 .then( response => response.body) // if we wanted to show individual widget use this
   
}