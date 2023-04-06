const express = require('express')
const router = express.Router()
const fromController = require('../controller')

router.post('/register', fromController.createForm)

module.exports = router;
