const express = require('express');
const app = express();
const users = []
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}));



app.get('/', (req,res)=>{
    let usersCount = users.length;
    res.render('index', {users, usersCount })
})

app.get('/add', (req,res)=>{
    res.render('addUser')
})
app.post('/save-user', (req,res)=>{
    let {name, email, img} = req.body;
    let user = {
        name: name,
        email: email,
        img: img,
    }
    users.push(user);
    res.redirect('/')
})
app.post('/delete', (req,res)=>{
    let {userId} = req.body;
    users.splice(userId, 1);
    res.redirect('/')
})

app.get('*', (req,res)=>{
    res.render('error')
})
app.listen(8000)