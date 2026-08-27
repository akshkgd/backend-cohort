const express = require('express');
const app = express();
const connectDB = require("./config/db")
const userRouter = require('./routes/user');
const logger = require('./middlewares/logger')
app.use(express.urlencoded({extended:true}));

connectDB()

// app.use()
app.use('/api/users',logger, userRouter)

app.use( (req,res)=>{
    res.send('404')
})


app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})