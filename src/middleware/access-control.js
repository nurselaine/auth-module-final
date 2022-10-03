'use strict';


module.exports = (capability) => {

  return (req, res, next) => {
    try{
      console.log(`access control function`);
      console.log(req.user.capabilities);
      if (req.user.capabilities.includes(capability)) {
        next();
      } else {
        next('Access Denied');
      }
    } catch (e) {
      next('Access Denied');
    }
  };
};