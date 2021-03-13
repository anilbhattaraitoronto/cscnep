const express = require('express')
const router = express.Router()

const {getLatestPosts } = require('../controllers/postControllers')


router.get('/latest', getLatestPosts)


module.exports = router;