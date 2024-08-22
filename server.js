const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const auth = require('./auth');

const app = express();

mongoose.connect('mongodb://localhost/git-like-version-control', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Logged in successfully' });
});

app.get('/protected', auth.isLoggedIn, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
