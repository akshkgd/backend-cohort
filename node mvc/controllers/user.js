const express = require('express');
const User = require('../models/User');


async function getUsers(req, res){
    const users = await User.find({});
    res.json(users)
}


async function createUser(req,res){
    const {name, email, age} = req.body;
    
    const user = await User.create({
        name,
        email, 
        age
    })
    res.status(201).json(user)
}


module.exports = {getUsers, createUser}