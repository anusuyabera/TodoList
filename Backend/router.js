const router = require('express').Router()

router.use('/number', require('./api/number/number.router.js'))

router.use('/', (req, res) => {
    res.send('<h1 style="color:red;">Welcome to To-Do App</h1>')
})

module.exports = router