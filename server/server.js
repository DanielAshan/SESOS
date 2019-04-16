const express = require('express');
const server = express();
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
