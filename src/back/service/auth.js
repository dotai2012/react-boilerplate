// Google Oauth

// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const key = require('../../back/config/key');
// const User = require('../model/user');

// module.exports = (passport) => {
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
//   passport.deserializeUser((id, done) => {
//     User.findById(id).then((user) => {
//       done(null, user);
//     });
//   });
//   passport.use(new GoogleStrategy({
//     clientID: key.clientID,
//     clientSecret: key.clientSecret,
//     callbackURL: '/api/user/auth/google/callback',
//   }, async (accessToken, refreshToken, profile, done) => {
//     const existUser = await User.findOne({ googleID: profile.id });
//     if (existUser) {
//       done(null, existUser);
//     } else {
//       const newUser = new User({
//         googleID: profile.id,
//       });
//       const user = await newUser.save();
//       done(null, user);
//     }
//   }));
// };

// JWT Token Auth
// const jwtStrategy = require('passport-jwt').Strategy;
// const extractJwt = require('passport-jwt').ExtractJwt;
// const user = require('../model/user');
// const config = require('../config/database');

// module.exports = (passport) => {
//   const opts = {};
//   opts.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme('jwt');
//   opts.secretOrKey = config.secret;
//   passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
//     user.getUserID(jwt_payload._id, (err, user) => {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         return done(null, user);
//       }
//       return done(null, false);
//     });
//   }));
// };
