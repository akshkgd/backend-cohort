const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret  = process.env.jwtSecret;

function setUser(user){
    return jwt.sign({
      id: user._id, name:user.name, email:user.email
    }, secret, {
      expiresIn: '1m'
    })
}
// expiresIn: '30m'  '1h'  '1d' '30d', 

function getUser(token){
  if(!token) return null;
    try {
      return jwt.verify(token, secret)
    } catch (error) {
        return null;
    }
  
}


module.exports = {setUser, getUser}