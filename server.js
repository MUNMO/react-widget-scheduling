var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

// This is will send me the file in response for dev mode in express js
app.use("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"dist","index.html"))
})

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});