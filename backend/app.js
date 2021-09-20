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

const serviceRoutes = require('./src/routes/service');

app.use('/api/v1/general', serviceRoutes);
app.use(errorController.get404);

// mongoose.connect(process.env.MONGO_URL_CONNEXION).then(result => {
   app.listen(3005);
// }).catch(err => {
//   console.log(err);
//   console.log('ESToy aquí');
// });