const jwt = require('jsonwebtoken')
const { auth } = require('../config')

let Check = {}

Check.verifyToken = (req, res, next) => {
  let token = req.headers["x-auth-token"];
/*
  if (!token) {
    return res.status(404).json({
      error: "Invalid token."
    });
  }
  */

  jwt.verify(token, auth.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: "Invalid token."
      });
    }
    //req.userName = decoded.name;
    next();
  })
}


module.exports = Check