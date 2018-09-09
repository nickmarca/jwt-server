const router = require('express').Router();
const {verifyPassword, signUser} = require('../middlewares/auth.middlewares');

router.post('/signin', verifyPassword, signUser, (req, res) => {
  const {user, token} = req;
  res.json({user, token});
});

module.exports = router;