const express = require('express');
const attendanceRouter = express.Router();
const { body, validationResult } = require('express-validator/check');
const moment = require('moment');
var models = require('../models');

attendanceRouter.get('/', function(req, res) {
	var response = [];
	models.AttendanceRecord.findAll().then( records => {
		res.json(records);
	});
});

attendanceRouter.post('/', [
	body('els_id')
		.exists()
		.withMessage('ELS ID cannot be empty')
		.isString()
		.withMessage('ELS ID must be string'),

	body('classroom')
		.exists()
		.withMessage('Classroom cannot be empty')
		.isString()
		.withMessage('Classroom must be string'),
], function(req, res) {
	console.log(req.body);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log('Error');
		return res.status(422).json({ errors: errors.array() });
	}
	models.Classroom.findOne({ where: {name: req.body.classroom}}).then( classroom => {
		console.log('test');
		console.log(classroom);
		models.Lecture.findOne({ where: { classroom_id: classroom.id }}).then( lecture => {
			createAttendanceRecord(req, res, lecture.id);
		});
	});
});

function createAttendanceRecord(req, res, lecture_id) {
	models.AttendanceRecord.create({
		els_id: req.body.els_id,
		lecture_id: lecture_id,
		createdAt: new Date(),
		updatedAt: new Date()
	}).then( lecture => {
		res.json(lecture);
	}, error => {
		res.json(error);
	});
}
module.exports = attendanceRouter;
