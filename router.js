var express = require('express')
var path = require('path');
var router = express.Router();
var controller = require('./controllers');




router.get('/public', function(req, res){

  console.log("Launch of server");
  //commented out line also works
  //res.sendFile(path.resolve('./index.html')); 
  res.sendFile(__dirname + '/index.html');
   
});

router.post('/login', controller.createUser);

router.post('/public', function(req, res){
  console.log("inside /public POST");

  console.log(req.body);

});

module.exports = router;