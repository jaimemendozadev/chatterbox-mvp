var express = require('express')
var router = express.Router();




router.get('/public', function(req, res){

  console.log("Launch of server");
  //commented out line also works
  //res.sendFile(path.resolve('./index.html')); 
  res.sendFile(__dirname + '/index.html');
   
});

router.post('/login', function(req, res){

  console.log("inside /login POST");
  console.log(req);

});

router.post('/public', function(req, res){
  console.log("inside /public POST");
  console.log(req.body);

});

module.exports = router;