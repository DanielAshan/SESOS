const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

//Routers
const classroomRouter = require('./routers/classroomRouter');
const userRouter = require('./routers/userRouter');
const registerRouter = require('./routers/registerRouter');
const lectureRouter = require('./routers/lectureRouter');
const attendanceRouter = require('./routers/attendanceRouter');

server.use(cors());
server.use(bodyParser.json());

server.use('/classroom', classroomRouter);
server.use('/user', userRouter);
server.use('/register', registerRouter);
server.use('/lecture', lectureRouter);
server.use('/attendance', attendanceRouter);
server.get('/', function (req, res){
	res.send('Hello world');
});

server.listen(port, () => {
	console.log('Server listening on ' + port);
});
