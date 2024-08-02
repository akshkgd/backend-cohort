const express = require('express');
const app = express();
const todos = []
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index', {todos: todos})
})
app.post('/add-task', (req,res)=>{
    let task = {title: req.body.task}
    todos.push(task);
    res.redirect('/')
})


app.listen(8000, ()=>{
    console.log('Server is up')
})