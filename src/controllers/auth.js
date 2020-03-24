const jwt = require('jsonwebtoken')
const { auth } = require('../config')

let Auth = {}

Auth.getToken = async (req, res, next) => {

  const user = req.body.user
  const password = req.body.password

  if (!(user == auth.user & password == auth.password)) {
    return res.status(401).json({error: "Invalid user or password."})
  }

  var token = jwt.sign({ id: user }, auth.secret);

  res.status(200).json({
      token: token
    });
  };


module.exports = Auth
