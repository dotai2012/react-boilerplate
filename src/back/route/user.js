// Google OAuth

// const express = require('express');
// const passport = require('passport');

// const router = express.Router();

// const { checkAuth } = require('../service/helper');
// const {
//   Authenticate, Logout, GetInfo, GoogleCallback,
// } = require('../controller/user');

// router.get('/auth', Authenticate);
// router.get(
//   '/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/',
//   }),
//   GoogleCallback,
// );
// router.get('/logout', Logout);
// router.get('/info', checkAuth, GetInfo);

// JWT Token

// const express = require('express');

// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const User = require('../model/user');
// const database = require('../config/database');
// const passport = require('passport');

// router.post('/register', (req, res) => {
//   const {
//     name, email, password, bonus,
//   } = req.body;
//   const newUser = new User({
//     name,
//     email,
//     password,
//     address: '0x0000000000000000',
//     manager: false,
//     withdraw: false,
//     totalRef: 0,
//     ref: [],
//     bonus,
//   });
//   User.addUser(newUser, (err) => {
//     if (err) {
//       res.json({ success: false, msg: 'Failed to create user', debug: err });
//     } else {
//       res.json({ success: true, msg: 'Created user' });
//     }
//   });
// });

// router.post('/authenticate', (req, res) => {
//   const { email, password } = req.body;
//   User.getUser(email, (err, userFound) => {
//     if (err) throw err;
//     if (!userFound) {
//       return res.json({ success: false, msg: 'User not found' });
//     }
//     User.comparePass(password, userFound.password, (err, isMatch) => {
//       if (err) throw err;
//       if (isMatch) {
//         const token = jwt.sign(userFound.toJSON(), database.secret, {
//           expiresIn: 60400, // 1 Week
//         });
//         res.json({
//           success: true,
//           msg: 'User found',
//           token: `JWT ${token}`,
//           user: {
//             id: userFound._id,
//             name: userFound.name,
//             email: userFound.email,
//             manager: userFound.manager,
//           },
//         });
//       } else {
//         return res.json({ success: false, msg: 'Wrong password' });
//       }
//     });
//   });
// });
// router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.json({ user: req.user });
// });

// router.post('/updateref', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { _id, ref } = req.body;
//   User.Find(ref, (err, refFound) => {
//     const { length } = refFound;
//     if (length === 0) {
//       User.updateRef(_id, ref, (err, result) => {
//         if (err) throw err;
//         res.json({ success: true, msg: 'Updated ref elements', result });
//       });
//     } else {
//       res.json({ success: false, msg: 'Duplicate ref' });
//     }
//   });
// });

// router.post('/updatename', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { email, name } = req.body;
//   const data = { name };
//   User.updateInfo(email, data, (err, result) => {
//     if (err) throw err;
//     res.json({ success: true, msg: 'Updated name element', result });
//   });
// });

// router.post('/withdrawalrequestlist', passport.authenticate('jwt', { session: false }), (req, res) => {
//   User.getwithdrawalrequestlist({ withdraw: true }, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// router.post('/withdrawalrequest', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { email, withdraw } = req.body;
//   const data = { withdraw };
//   User.updateInfo(email, data, (err, result) => {
//     if (err) throw err;
//     res.json({ success: true, msg: 'Withdrawal request was sent', result });
//   });
// });

// router.post('/paycomplete', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { email } = req.body;
//   const data = { ref: [], withdraw: false, bonus: 0 };
//   User.updateInfo(email, data, (err, result) => {
//     if (err) throw err;
//     res.json({ success: true, msg: 'Pay completed, reset ref list and withdraw state', result });
//   });
// });

// router.post('/updateaddress', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { email, address } = req.body;
//   const data = { address };
//   User.updateInfo(email, data, (err, result) => {
//     if (err) throw err;
//     res.json({ success: true, msg: 'Updated address element', result });
//   });
// });

// router.post('/updatepassword', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { email, password } = req.body;
//   User.updatePassword(email, password, (err, result) => {
//     if (err) throw err;
//     res.json({ success: true, msg: 'Updated password element', result });
//   });
// });
module.exports = router;
