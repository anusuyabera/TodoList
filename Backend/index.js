const express = require('express')
const app = express()

app.use('/', require('./router'))

const http = require('http').Server(app)
http.listen('80', () => {
    console.log('API running on 80 port!')
})

module.exports = app