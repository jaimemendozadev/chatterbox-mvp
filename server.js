const express = require('express');
const path = require('path');
const app = express();
const router = require('./router')
const bodyparser = require('body-parser');



//support parsing of application/json type post data
app.use(bodyparser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyparser.urlencoded({ extended: true }));



//Serve output folder as static content

//Still not sure why this commented out line doesn't work
//app.use(express.static(path.join(__dirname, 'output')));
app.use('/output', express.static(__dirname + '/output') );
app.use(router);







app.listen(3000, function(){
  console.log("Listening from port 3000");
})
