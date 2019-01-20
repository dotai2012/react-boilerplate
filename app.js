const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
require('dotenv').config();
// const passport = require('passport');

// const cookieSession = require('cookie-session');
// const bluebird = require('bluebird');

// const mongoose = require('mongoose');
// const database = require('./src/back/config/database');
// const key = require('./src/back/config/key');

// mongoose.Promise = bluebird;
// mongoose.connect(database.url, { useNewUrlParser: true });
// mongoose.connection.on('connected', () => {
//   console.log('Connected to database');
// });
// mongoose.connection.on('error', (error) => {
//   console.log(error);
// });

const app = express();
const port = process.env.PORT || 3000;

app.use(compression({ level: 9 }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000 * 12,
//   keys: [key.cookie],
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('./src/back/service/auth')(passport);

const api = require('./src/back/route');

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, () => {
  console.log('Server Started');
});
