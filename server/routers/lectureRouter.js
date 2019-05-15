const express = require('express');
const lectureRouter = express.Router();
const { body, validationResult } = require('express-validator/check');
const moment = require('moment');
var models = require('../models');

lectureRouter.get('/', function(req, res) {
	models.Lecture.findAll().then( lectures => {
		res.json(lectures);
	});
});

lectureRouter.post('/', [
	body('name')
		.exists()
		.withMessage('Name cannot be empty')
		.isString()
		.withMessage('Name must be string'),

	body('startDate')
		.exists()
		.withMessage('Start date cannot be empty')
		.isString()
		.withMessage('Start date must be string'),

	body('endDate')
		.exists()
		.withMessage('End date be empty')
		.isString()
		.withMessage('End date must be number'),
], function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	createLecture(req, res);
});

function createLecture(req, res) {
	models.Lecture.create({
		name: req.body.name,
		startDate: moment(req.body.startDate).format('YYYY-MM-DD HH:mm:ss'),
		endDate: moment(req.body.endDate).format('YYYY-MM-DD HH:mm:ss'),
		createdAt: new Date(),
		updatedAt: new Date()
	}).then( lecture => {
		res.json(lecture);
	}, error => {
		res.json(error);
	});
}
module.exports = lectureRouter;
