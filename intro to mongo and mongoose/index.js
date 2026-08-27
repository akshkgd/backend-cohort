const express = require('express');
const mongoose  = require('mongoose')
const app = express();
app.use(express.urlencoded({extended: true}))

// mongodb connection
mongoose.connect('mongodb+srv://ashish:codekaro123@backend-cohort.9gpqb.mongodb.net/?retryWrites=true&w=majority&appName=backend-cohort/ck-users').then(()=>{
    console.log('db is connected!')
})
// users schema
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email:{type: String, unique: true, required: true},
}, {timestamps: true})
// user model
const User = mongoose.model('users', userSchema)
app.get('/api/users', async(req,res)=>{
    let users = await User.find({});
    return res.json(users)
});

app.get('/api/users/:id', async(req,res)=>{
    let user = await User.findById(req.params.id)
    return res.json(user)
})
app.delete('/api/users/:id', async(req,res)=>{
    let user = await User.findByIdAndDelete(req.params.id)
    return res.json(user)
})

app.patch('/api/users/:id', async(req,res)=>{
    let user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        
    })
    return res.json(user)
})



app.post('/api/users', async(req,res)=>{
    let {name, email} = req.body;
    let data = await User.create({
        name: name,
        email: email
    });
    console.log(data);
    return res.json('new user added!')
})

app.listen(8000, ()=>{
    console.log('server is running...')
})