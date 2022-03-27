const express = require('express')
const router = express.Router()
const workers = require('./workers/workers')

router
    .get('/workers', workers.GET)

module.exports = router 