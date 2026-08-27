const express = require('express');
const mongoose = require('mongoose')
const app = express();
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const checkAuth = require('./middlewares/checkAuth')


// routes
const todoRouter = require('./routes/todo')
const userRouter = require('./routes/user')
const staticRouter = require('./routes/static')


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
connectDB();


// todo schema



app.use('/todo', checkAuth,  todoRouter);
app.use('/user', userRouter);
app.use('/', staticRouter);


app.listen(8000, ()=>{
    console.log('sever is running on port 8000!')
})