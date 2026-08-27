const Todo = require('../models/todo')

async function getTodos(req, res) {
    let todos = await Todo.find({isCompleted: false, createdBy:req.user._id});
    res.render('index', {todos: todos})
}   

async function createTodo(req,res) {
    let {title} = req.body;
    let data = await Todo.create({
        title: title,
        createdBy: req.user._id
    })
    res.redirect('/todo')
}

async function markCompleted(req,res) {
    await Todo.findByIdAndUpdate(req.params.id, {
        isCompleted: true,
    })
    res.redirect('/todo')
}

module.exports = {getTodos, createTodo, markCompleted}