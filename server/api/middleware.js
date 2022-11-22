const { User } = require('../db');

const isLoggedIn = async(req, res, next)=> {
  try {

    // console.log(req.headers.authorization);
    console.log('middleware start')
    console.log(req.headers.authorization);
    const user = await User.findByToken(req.headers.authorization);
    req.user = user;
    
    console.log(req.user);
    console.log('middleware done')
    next();
  }
  catch(ex){
    next(ex);
  }
};

module.exports = {
  isLoggedIn
};
