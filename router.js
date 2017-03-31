var express = require('express')
var router = express.Router();
var controller = require('./db/controllers.js');


/* deleted '/public' route. will reinstate 
as soon as additional chatroom functionality 
is implemented */

/*
  3/31/17 Update:

  Fixed router to serve index.html file from output folder.
  Side effect: App renders HTML, but doesn't sent data to DB.
   
*/

// router.get('/', function(req, res){

//   console.log("Launch of server");
//   //commented out line also works
//   //res.sendFile(path.resolve('./index.html')); 
//   res.sendFile(__dirname + '/index.html');
   
// });


//Comment out until further notice
//router.post('/login', controller.createUser);

router.post('/', controller.saveTheMessage);

router.get('/feed', controller.getTheFeed);

module.exports = router;