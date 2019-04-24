const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());
const port = 3000;

//Routers
const classroomRouter = require('./routers/classroomRouter');

server.use('/classroom', classroomRouter);
server.get('/', function (req, res){
	res.send('Hello world');
});

server.listen(port, () => {
	console.log('Server listening on ' + port);
});
