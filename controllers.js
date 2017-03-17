var mongoose = require('mongoose');
mongoose.Promise = Promise; 

var User = require('./db/user_schema');




var createUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  
  console.log("username is " + username);
  console.log("password is " + password);


  User.create({ username: username, password: password }, function(err, user){
    if (err) console.log(err);

    res.send("User added to DB.")
  });


}





module.exports = {
  createUser: createUser
  
}