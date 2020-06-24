import request from 'supertest'

import server from '../../server/server'

jest.mock('../../server/db/db', () => {
  return {
    getWidgets: () => {
      return Promise.resolve([{ id: 55 }, { id: 56 }, { id: 57 }])
    }
  }
})

test('GET /api/v1/widgets', () => {
  return request(server)
    .get('/api/v1/widgets')
    // .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
})

// jest.mock('../../server/db/db', () => {
//   return {
//     deleteWidgets: () => {
//       return Promise.resolve([{ id: 55 }, { id: 56 }, { id: 57 }])
//     }
//   }
// })

// test('DEL /api/v1/widgets', () => {
//   return request(server)
//     .del('/api/v1/widgets')
//     // .expect(200)
//     .then(res => {
//       expect(res.body.length).toBe(3)
//     })
// })
