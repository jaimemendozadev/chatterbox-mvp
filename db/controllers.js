var User = require('./schema.js');


var createUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  
  console.log("username is " + username);
  console.log("password is " + password);


  var user_instance = new User({ username: username, password: password });
  user_instance.save(function(err, result){
      if (err) { console.log(err); 
      } else {
        res.send("User created in DB.");

      }

      
  });


}

module.exports = {
  createUser: createUser
}