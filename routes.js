const router = require('express').Router()
const controller = require('./controller')

router.get('/', controller.getAll)

router.post('/', controller.getAllNFEs)

router.get('/abc', controller.teste)

module.exports = router
