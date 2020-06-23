const path = require('path')
const express = require('express')

const widgets = require('./routes/widgets')
const savewid = require('./routes/savewid')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/widgets', widgets)
server.use('/api/v1/savewid', savewid)

module.exports = server
