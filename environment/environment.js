const prod = require('./environment.prod');
let env;

const common = {
  jwtSecret: '0011235jwtsecret'
};

if(process.env.NODE_ENV === 'production') {
   env = {...common, ...prod};
} else {
  env = common;
}

module.exports = env;