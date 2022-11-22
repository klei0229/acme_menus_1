const { User } = require('../db');

const isLoggedIn = async(req, res, next)=> {
  try {

    // console.log(req.headers.authorization);
    const user = await User.findByToken(req.headers.authorization);
    req.user = user;
    
    next();
  }
  catch(ex){
    next(ex);
  }
};

module.exports = {
  isLoggedIn
};
