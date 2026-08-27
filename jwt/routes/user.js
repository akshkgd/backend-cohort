const express = require('express');
const router = express.Router();
const {createUser, login, logout} = require('../controllers/user')

router.post('/', createUser)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router

