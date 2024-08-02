const express = require('express');
const app = express();
app.set('view engine', 'ejs');
// middleware
app.use(express.urlencoded({extended: true}));
app.get('/', (req,res)=>{
    res.render('index', {name: 'vipin', age: 26})
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.post('/register', (req, res)=>{
    console.log(req.body)
    res.render('registerSuccess', {name: req.body.name})
})
app.get('*', (req,res)=>{
    res.render('404')
})
app.listen(8000, ()=>{console.log('server is running in port 8000')})
