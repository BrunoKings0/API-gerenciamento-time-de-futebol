const express = require('express')
const router = express.Router()
const controller = require('../controllers/teams')
const check = require('../middlewares/auth')

router.get('/', controller.getAll)

router.get('/:teamId', controller.getById)

router.post('/', check.verifyToken , controller.create)

router.patch('/:teamId', check.verifyToken  , controller.update)

router.delete('/:teamId', check.verifyToken  , controller.delete)

module.exports = router
