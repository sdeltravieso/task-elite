var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({where: {username:username}}).then((user) => {
      // if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

// passport.deserializeUser(function(id, done) {
//   console.log('deserialize', id);
//   db.User.findById(id.uuid).then(user => {
//     done('err', user);
//   });
// });

passport.deserializeUser(function(id, done) {
    done(null, id);
});

function newfuntion() {
	return false;
}

module.exports = passport;
