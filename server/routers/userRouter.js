const express = require('express');
const userRouter = express.Router();
const { body, validationResult } = require('express-validator/check');

var models = require('../models');

userRouter.get('/', function(req, res) {
	models.User.findAll().then( users => {
		res.json(users);
	});
});

userRouter.post('/', [
	body('email')
		.exists()
		.withMessage('Email cannot be empty')
		.isString()
		.withMessage('email must be string'),

	body('els_id')
		.exists()
		.withMessage('ELS ID cannot be empty')
		.isString()
		.withMessage('ELS ID must be string'),

	body('university_id')
		.exists()
		.withMessage('University Id be empty')
		.isNumeric()
		.withMessage('University Id must be number'),
], function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	models.User.create({
		email: req.body.email,
		university_id: req.body.university_id,
		els_id: req.body.els_id,
		username: req.body.username,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		createdAt: new Date(),
		updatedAt: new Date()
	}).then( classroom => {
		res.json(classroom);
	}, error => {
		res.json(error);
	});
		
});
module.exports = userRouter;
