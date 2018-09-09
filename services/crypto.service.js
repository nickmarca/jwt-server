const bcrypt = require('bcrypt');

const crypt = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if(err) {
        return reject(err);
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if(err) {
          return reject(err);
        }

        return resolve(hash);
      });
    });
  });
};

const compare = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
      if(err) {
        return reject(err);
      }
      resolve(isMatch);
    });
  });
};

module.exports = {
  crypt,
  compare
};