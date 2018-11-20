import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(resp => {
      return resp.body
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

export function appendWidget (widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(res => {
      return res.body
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
