var express = require('express');
var classroomRouter = express.Router();

var models = require('../models');

classroomRouter.get('/', function(req, res) {
	// console.log(models.Classroom);
	models.Classroom.findAll().then( classrooms => {
		res.json(classrooms);
	});
});

module.exports = classroomRouter;
