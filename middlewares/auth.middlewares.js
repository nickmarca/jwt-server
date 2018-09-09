const {findOne} = require('../services/users.service');
const {compare} = require('../services/crypto.service');
const {sign} = require('../services/jwt.service');

const verifyPassword = async (req, res, next) => {
  const {email, password} = req.body;
  const user = await findOne(email);
  if(user) {
    const match = await compare(password, user.digestedPassword);

    if(match) {
      req.user = {email: user.email, id: user.id, username: user.username};
      return next();
    }
  }

  return res.status(400).json({error: 'Wrong password/email combination'});
};

const signUser = (req, res, next) => {
  req.token = sign(req.user);
  next();
};

module.exports = {
  verifyPassword,
  signUser
};