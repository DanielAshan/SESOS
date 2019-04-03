var express = require('express');
var server = express();
var port = 3000;
server.get('/', function (req, res){
    res.send('Hello world');
});

server.listen(port, () => {
    console.log('Server listening on ' + port)
});