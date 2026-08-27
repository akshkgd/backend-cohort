const mongoose = require('mongoose');
require('dotenv').config();


async function connectDB(){
    await mongoose.connect(process.env.mongoURI);
    console.log('db connected!')
}


module.exports = connectDB;