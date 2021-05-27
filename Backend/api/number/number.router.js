const router = require('express').Router()
const numberController = require('./number.controller')

router.get('/square', numberController.square)
router.get('/cube', numberController.cube)
// router.get('/palindrome', numberController.palindrome)

module.exports = router