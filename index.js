const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb://localhost:27017/jwt-server', () => console.log('Database connected successfully'));
require('./models/user.model');
const usersRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

app.use(cors(), bodyParser.json());
app.use('/api', usersRoutes, authRoutes);

const PORT = 8082;
app.listen(PORT, () => console.log(`JWT Server up and running on PORT ${PORT}`));
