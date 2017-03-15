const express = require('express');
const path = require('path');
const app = express();

console.log("the path is " + path.join(__dirname, 'output', 'myCode.js'));

//Serve output folder as static content
app.use(express.static(path.join(__dirname, 'output')));

/*In order to launch index.html file on GET /, 
you need to move index.html to the static folder */
app.get('/', function(req, res){
  console.log("Launch of server");
  
});


app.listen(3000, function(){
  console.log("Listening from port 3000");
})
