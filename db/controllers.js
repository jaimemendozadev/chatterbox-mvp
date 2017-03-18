var User = require('./schema.js');


var createUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  res.send("User created in DB.");

  //uncomment once testing is done 
 
  // var user_instance = new User({ username: username, password: password });
  // user_instance.save(function(err, result){
  //     if (err) { console.log(err); 
  //     } else {
  //       res.send("User created in DB.");
  //     }
  // });


}

var saveTheMessage = function(req, res) {
  var username = req.body.username;
  var message = req.body.message;
  var date = req.body.date;

}

module.exports = {
  createUser: createUser,
  saveTheMessage: saveTheMessage
}