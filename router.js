var express = require('express')
var router = express.Router();
var controller = require('./db/controllers.js');


/* deleted '/public' route. will reinstate 
as soon as additional chatroom functionality 
is implemented */
router.get('/', function(req, res){

  console.log("Launch of server");
  //commented out line also works
  //res.sendFile(path.resolve('./index.html')); 
  res.sendFile(__dirname + '/index.html');
   
});


//Comment out until further notice
//router.post('/login', controller.createUser);

router.post('/', controller.saveTheMessage);

router.get('/feed', controller.getTheFeed);

module.exports = router;