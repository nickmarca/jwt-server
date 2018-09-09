const mongoose = require('mongoose');
const {crypt} = require('./crypto.service');
const User = mongoose.model('User');

const exists = async (email) => {
  const count = await User.count({email});
  return count > 0;
};

const create = async ({username, email, password}) => {
  const digestedPassword = await crypt(password);
  const user = new User({username, email, digestedPassword});
  const sUser = await user.save();
  return {username: sUser.username, email: sUser.email, id: sUser.id};
};

const findOne = async email => {
  return await User.findOne({email: email});
};

module.exports = {
  exists, create, findOne
};