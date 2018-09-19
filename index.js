const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://mongo:27017/jwt-server', (e) => {
    console.log(e)
});

if (process.env.RESPONSE_DELAY) {
    console.log(`Running with intentional delay of: ${process.env.RESPONSE_DELAY}s. For removing or changing the 
  delay duration, alter the file'env.list' file sitting on project's root and delete the image 
  created by docker-compose`);
}

const delay = (req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.RESPONSE_DELAY) || 0);
};

require('./models/user.model');
const usersRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

app.use(cors(), bodyParser.json());
app.use('/api', delay, usersRoutes, authRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`JWT Server up and running on PORT ${PORT}`));
