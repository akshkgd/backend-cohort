const express = require('express');
const users = require('./users.json')
const app = express();
const fs = require('fs')
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))

app.get('/users', (req, res)=>{
    res.render('users', {users})
    // fetch the data from database depending on req and send that json to the req
    
})
app.get('/users/:id', (req,res)=>{
    let id = Number(req.params.id);
    let user = users.find((user)=> user.id === id);
    res.render('user', {user})
})

app.get('/api/users', (req,res)=>{
    return res.json(users)
})
app.post('/api/users', (req,res)=>{
    let user = req.body;
    users.push({id: users.length + 1 , ...user});
    fs.writeFile('./users.json', JSON.stringify(users), (err, data)=>{
        return res.json('user added!')
    })
    
})

app.route('/api/users/:id')
.get((req,res)=>{
    let id = Number(req.params.id);
    let user = users.find((user)=> user.id === id);
    let accessToken = req.headers['access-token'];
    console.log(accessToken)
    if(accessToken == 123456789){
        return res.json(user)
    }
    else{
        return res.json('not a valid access token!')
    }
    
}).patch((req, res)=>{
     // modify users data
     return res.json('edit status pending...')
}).delete((req,res)=>{
    // delete users data
    return res.json('delete status pending...')
})


app.listen(8000, ()=>{
    console.log('server is up!')
})