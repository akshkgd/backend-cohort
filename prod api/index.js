const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashish:codekaro123@backend-cohort.9gpqb.mongodb.net/todos?appName=backend-cohort').then(() => {
    console.log('db connected!')
})

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
}, { timestamps: true })


const Use = mongoose.model('users', UserSchema)

app.get('/v1/users', async (req, res) => {
    let users = await User.find({}).select('name email');
    res.status(200).json({
        success: true,
        data: users
    })
})


app.get('/test', async (req, res) => {
    try {
        let users = await User.find({});
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            
        })
    }
})





app.get('/createuser', async (req, res) => {
    let user = User.create({
        name: 'Minal',
        email: 'minal111@gmail.com',
        password: 123456
    })

    res.status(201).json({
        success: true,
        data: user
    })
})






app.listen(3000, () => {
    console.log('server is running ')
})