const userSessionId = new Map();

function setUser(id, user){
    userSessionId.set(id, user);
}


function getUser(id){
  const user =  userSessionId.get(id);
  return user;
}


module.exports = {setUser, getUser}