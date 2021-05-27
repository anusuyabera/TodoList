const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoDB = 'mongodb+srv://admin:npvVvx8l9EriCVe4index @cluster0.pbcnm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    poolSize: 50,
    useNewUrlParser: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000
})
mongoose.Promise = global.Promise;

mongoose.connection
    .on('connected', function() {
        console.log('Mongoose default connection connected')
    })
    .on('error', function(err) {
        console.log('Mongoose default connection error: ' + err)
    })
    .on('disconnected', function() {
        console.log('Mongoose default connection disconnected')
    })

// if the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

app.use('/', require('./router'))

const http = require('http').Server(app)
http.listen('100', () => {
    console.log('API running on 100 port!')
})

module.exports = app