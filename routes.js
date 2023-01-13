const router = require('express').Router()
const controller = require('./controller')

router.get('/', controller.getAll)

router.post('/', controller.getAllNFEs)

module.exports = router
