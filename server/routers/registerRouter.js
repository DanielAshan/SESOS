const express = require('express');
const registerRouter = express.Router();
const { body, validationResult } = require('express-validator/check');

var models = require('../models');

registerRouter.post('/', [
	body('els_id')
		.exists()
		.withMessage('ELS ID cannot be empty')
		.isString()
		.withMessage('ELS ID must be string'),

	body('classroom_id')
		.exists()
		.withMessage('Classrom id cannot be empty')
		.isNumeric()
		.withMessage('Classrom id must be string'),
], function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	models.NewIDRecord.create({
		els_id: req.body.els_id,
		classroom_id: req.body.classroom_id,
		createdAt: new Date(),
		updatedAt: new Date()
	}).then( newel => {
		res.json(newel);
	}, error => {
		res.json(error);
	});
		
});
module.exports = registerRouter;
