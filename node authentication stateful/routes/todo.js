const express = require('express');
const router = express.Router();
const {getTodos, createTodo, markCompleted} = require('../controllers/todo')

router.get('/', getTodos)
router.post('/', createTodo)
router.post('/:id/complete', markCompleted)



module.exports = router

