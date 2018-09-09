const router = require('express').Router();
const userService = require('../services/users.service');

router.post('/users', async (req, res) => {
  const {username, password, email} = req.body;
  const exists = await userService.exists(email);

  if(exists) {
    return res.status(409).json({
      error: 'This email is already being used'
    });
  }

  const user = await userService.create({username, password, email});
  res.json({user});
});

module.exports = router;