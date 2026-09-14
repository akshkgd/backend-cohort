const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ashish:codekaro123@backend-cohort.9gpqb.mongodb.net/todos?appName=backend-cohort').then(() => {
    console.log('connected to db')
});

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {type:String, required: true}
}, { timestamps: true })

const User = mongoose.model('users', userSchema)
app.get('/api/users', async (req, res) => {
    let users = await User.create({
    "name": "Ashish",
    "email": "ashish44@gmail.com",
    "password": "123456"
})
    return res.json(users)
});

app.get('/', (req, res) => {
    res.status(204).json({
        success: true,
        message: 'yo bro!',
        data: "secret"
    })
})

app.get('/users', async (req, res) => {
    try {
        let users = await User.deleteOne({email: 'dsjda@gmail.com'})
        res.json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message: 'Not found'
        })
    }
})

app.listen(3000, () => {
    console.log('server is running!')
})