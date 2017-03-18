//why do I have to require the DB inside the schema?
const db = require('./db.js');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
 
var UsersSchema = new Schema({
    username: {type: String, unique: true, lowercase: true},
    password: String,
});



UsersSchema.pre('save', function(next) {
  
  //user is a specific instance of user model
  const user = this;
  
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }


    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }      
      user.password = hash;
      next();
    });
  });

});


var MessagesSchema = new Schema({
    username: {type: String, unique: true, lowercase: true},
    password: String,
});





module.exports = mongoose.model('User', UsersSchema );
