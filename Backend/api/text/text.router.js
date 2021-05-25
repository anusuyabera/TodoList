const router = require('express').Router()
const numberController = require('./text.controller')

router.get('/reverse', textController.reverse)
module.exports = router