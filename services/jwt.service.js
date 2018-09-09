const {jwtSecret} = require('../environment/environment');
const jwt = require('jsonwebtoken');

const sign = user => {
  return jwt.sign({user}, jwtSecret, {expiresIn: '30d'});
};

const verify = token => {
  return jwt.verify(token, jwtSecret);
};

module.exports = {
  sign, verify
};

