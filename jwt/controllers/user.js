const User = require('../models/user');
const {v4:uuidv4} = require('uuid')
const {setUser} = require('../service/auth')
async function createUser(req,res) {
    const {name, email, password} = req.body;
    await User.create({
        name, email, password,
    })
    return res.redirect('/login')
}

async function login(req, res)  {
    const {email, password} = req.body;
    const user = await User.findOne({email, password})
    if(!user){
         res.render('login', {error: 'Invalid username or password!'});
    }
    else{
        const token = setUser(user)
        res.cookie('uid', token)
        res.redirect('/todo')
    }
    
}


function logout(req, res){
    res.clearCookie('uid');
    res.redirect('/login')
}

module.exports = {createUser, login, logout}