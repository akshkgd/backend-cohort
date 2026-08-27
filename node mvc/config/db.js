const mongoose = require('mongoose');
require('dotenv').config();
const mongose = require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected!')
}

module.exports = connectDB;