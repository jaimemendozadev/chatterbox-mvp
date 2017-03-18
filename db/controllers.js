var User = require('./user-schema.js');
var PublicCRMsg = require('./public-chat-schema.js');


var createUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  res.send("User created in DB.");
 
  var user_instance = new User({ username: username, password: password });
  user_instance.save(function(err, result){
      if (err) { console.log(err); 
      } else {
        res.send("User created in DB.");
      }
  });


}

var saveTheMessage = function(req, res) {
  var message = req.body.message;
  var date = req.body.date;
  var username = req.body.username;

  var public_chat_msg = new PublicCRMsg({ message: message, date: date, username: username});
  public_chat_msg.save(function(err, result){
      if (err) { console.log(err); 
      } else {
        res.send("User created in DB.");
      }
  });

  User.find({username: username}, function(err, person) {
    if(err) {
      console.log(err);
    } else {
      console.log("the person is " + person);
      person.timeline.push(public_chat_msg);
      res.send("Msg append to username's timeline.")
    }
  });


  



  
}

module.exports = {
  createUser: createUser,
  saveTheMessage: saveTheMessage
}