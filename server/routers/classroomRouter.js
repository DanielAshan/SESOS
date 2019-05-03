const express = require('express');
const classroomRouter = express.Router();
const { body, validationResult } = require('express-validator/check');

var models = require('../models');

classroomRouter.get('/', function(req, res) {
	// console.log(models.Classroom);
	models.Classroom.findAll().then( classrooms => {
		res.json(classrooms);
	});
});

classroomRouter.post('/', [
	body('name')
		.exists()
		.withMessage('Classroom name cannot be empty')
		.isString()
		.withMessage('Classroom name must be string'),

	body('faculty')
		.exists()
		.withMessage('Faculty name cannot be empty')
		.isString()
		.withMessage('Faculty name must be string'),
], function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	models.Classroom.create({
		name: req.body.name,
		faculty: req.body.faculty,
		createdAt: new Date(),
		updatedAt: new Date()
	}).then( classroom => {
		res.json(classroom);
	}, error => {
		res.json(error);
	});
		
});
module.exports = classroomRouter;
