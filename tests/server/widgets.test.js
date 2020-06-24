import request from "supertest"

import server from "../../server/server"

jest.mock("../../server/db/db", () => {
  return {
    getWidgets: () => {
      return Promise.resolve([{ id: 55 }, { id: 56 }, { id: 57 }])
    },
    saveWidget: () => {
      // What do I want to resolve?
      return Promise.resolve([11])
    },
  }
})

test("GET /api/v1/widgets", () => {
  return (
    request(server)
      .get("/api/v1/widgets")
      // .expect(200)
      .then((res) => {
        expect(res.body.length).toBe(3)
      })
  )
})

test("POST /api/v1/widgets", () => {
  return request(server)
    .post("/api/v1/widgets")
    .send({
      id: 11,
      name: "Ben",
      price: 55,
      mfg: "Parents",
      inStock: 11,
      rating: 110,
    })
    .expect(200)
    .then((res) => {
      // expect what?
      expect(res.body.length).toBe(3)
    })
})

// Ross's new and improved way of testing

// jest.mock('../../server/db/db', () => ({
//   getWidgets: jest.fn(),
//   saveWidget: jest.fn(),
// }))

// const widgetsDB = require('../../server/db/db')

// test('/succeessfully adds new widget', () => {
//   let expected = 'Authentication successful.'
//   // // Mock getWidgets to return false
//   // widgetsDB.getWidgets.mockImplementation(name => Promise.resolve(false))
//   // Mock saveWidget to work (resolve)
//   widgetsDB.saveWidget.mockImplementation((name, price, mfg, inStock, rating) => Promise.resolve())
//   return request(server).post('/api/v1/widgets')
//   .expect(200)
//   .then(res => {
//     let actual = res.body.message
//     expect(actual).toEqual(expected)
//   })
// })
