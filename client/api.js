import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'
const deleteurl = 'http://localhost:3000/api/v1/widgets/delete/'
const saveWidget = 'http://localhost:3000/api/v1/savewid/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}
export function saveWid(data) {

   return request
    .post(saveWidget)
    .send(data)
    .then(response => response.body)
  
}

export function deletewid(data) {
console.log("trying to delete widget")
console.log(data)
  return request
   .post(deleteurl)
   .send({data})
   .then(response => response.body)
 
}
export function editwid(data) {

  return request
   .post(saveWidget)
   .send(data)
   .then(response => response.body)
 
}