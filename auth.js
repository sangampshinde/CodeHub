const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Mock user data
const users = [
  {
    id: 1,
    username: 'john',
    password: bcrypt.hashSync('password', 10),
  },
];

passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find((user) => user.username === username);
    if (!user) {
      return done(null, false);
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return done(null, false);
    }
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, (link unavailable));
});

passport.deserializeUser((id, done) => {
  const user = users.find((user) => (link unavailable) === id);
  done(null, user);
});

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({ message: 'Please login first' });
};

module.exports = { isLoggedIn, passport };