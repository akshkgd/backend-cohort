const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
mongoose.connect('mongodb+srv://ashish:codekaro123@backend-cohort.9gpqb.mongodb.net/?appName=backend-cohort').then(()=>{
    console.log('db connected!')
})
// todo schema

const TodoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String},
    isCompleted: {type: Boolean, default: false}
}, {timestamps: true})

const Todo = mongoose.model('todos', TodoSchema)

app.get('/', async(req, res)=>{
    let todos = await Todo.find({isCompleted: false});
    res.render('index', {todos: todos})
})

app.get('/completed', async(req, res)=>{
    let todos = await Todo.find({isCompleted: true});
    res.render('completed', {todos: todos})
})

app.post('/todo', async(req,res)=>{
    let {title} = req.body;
    let data = await Todo.create({
        title: title
    })
    res.redirect('/')
})

app.post('/todo/:id/complete', async(req,res)=>{
    await Todo.findByIdAndUpdate(req.params.id, {
        isCompleted: true,
    })
    res.redirect('/')
})


app.listen(8000, ()=>{
    console.log('sever is running on port 8000!')
})