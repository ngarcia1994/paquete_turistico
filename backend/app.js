const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const cors = require('cors')

const errorController = require('./src/controllers/error');

require('dotenv').config();

const app = express();
app.use(cors());

const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const serviceRoutes = require('./src/routes/general');
const authRoutes = require('./src/routes/auth');

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/general', serviceRoutes);
app.use(errorController.get404);

mongoose.connect(process.env.MONGO_URL_CONNEXION).then(result => {
   console.log('connected');
   app.listen(3006);
}).catch(err => {
  console.log(err);
});