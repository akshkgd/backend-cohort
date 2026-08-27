const express = require('express');
const router = express.Router();


router.get('/register', (req,res)=>{
    return res.render('register')
})

router.get('/login', (req,res)=>{
    return res.render('login', {error:null})
})



module.exports = router

