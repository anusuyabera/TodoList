const router = require('express').Router()
const numberController = require('./number.controller')

router.get('/square', numberController.square)
router.get('/findsquare', numberController.findSquare)
router.get('/cube', numberController.cube)
//router.get('/findsquare', numberController.palindrome)
router.get('/findsquare', numberController.postSquare)
//router.get('/findsquare', numberController.deleteSquare)

module.exports = router