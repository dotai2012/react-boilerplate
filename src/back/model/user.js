// Google OAuth
// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//   googleID: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   credit: {
//     type: Number,
//     default: 0,
//   },
// });

// const user = mongoose.model('User', userSchema);
// module.exports = user;

// JWT Token

// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = mongoose.Schema({
//   manager: {
//     type: Boolean,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   passwordResetToken: {
//     type: String,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   bonus: {
//     type: Number,
//     required: true,
//   },
//   withdraw: {
//     type: Boolean,
//     required: true,
//   },
//   ref: {
//     type: Array,
//     required: true,
//   },
//   totalRef: {
//     type: Number,
//     required: true,
//   },
// });

// const user = mongoose.model('User', userSchema);
// module.exports = user;
// module.exports.getUserID = (id, callback) => {
//   user.findById(id, callback);
// };
// module.exports.getUser = (email, callback) => {
//   const query = { email };
//   user.findOne(query, callback).exec();
// };
// module.exports.getwithdrawalrequestlist = (query, callback) => {
//   user.find(query, callback).exec();
// };
// module.exports.addUser = (newUser, callback) => {
//   bcrypt.hash(newUser.password, 10, (err, hash) => {
//     newUser.password = hash;
//     newUser.save(callback);
//   });
// };
// module.exports.comparePass = (password, hash, callback) => {
//   bcrypt.compare(password, hash, (err, isMatch) => {
//     callback(null, isMatch);
//   });
// };
// module.exports.Find = (ref, callback) => {
//   const query = { ref };
//   user.find(query, callback).exec();
// };
// module.exports.updateRef = (_id, ref, callback) => {
//   user.findByIdAndUpdate(_id, { $push: { ref }, $inc: { totalRef: 1 } }, callback);
// };
// module.exports.updateInfo = (email, data, callback) => {
//   const query = { email };
//   user.findOneAndUpdate(query, data, callback);
// };
// module.exports.updatePassword = (email, newPassword, callback) => {
//   const query = { email };
//   bcrypt.hash(newPassword, 10, (err, hash) => {
//     user.findOneAndUpdate(query, { password: hash }, callback);
//   });
// };
