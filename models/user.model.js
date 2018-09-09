const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  digestedPassword: String
});

mongoose.model('User', userSchema);