var express = require('express');
var app = express();
var fs = require ('fs');
app.use(express.logger());

var buf = new Buffer(100);

fs.readFile('index.html', function read (err, data){
    if(err){ 
       throw err;
    }

    buf = data;
});

app.get('/', function(request, response) {
    response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
