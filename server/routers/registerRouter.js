const express = require('express');
const registerRouter = express.Router();
const { body, validationResult } = require('express-validator/check');

var models = require('../models');

function findById (classroom) {

}
registerRouter.get('/', function (req, res) {
	var response = [];
	models.NewIDRecord.findAll().then( newIDRecords => {
		models.Classroom.findAll().then(classrooms => {
			newIDRecords.forEach(record => {
				var classroom = classrooms.find( item => item.id  == record.classroom_id);	
				response.push({
					id: record.id,
					classroom: classroom.name,
					els_id: record.els_id,
					createdAt: record.createdAt	
				});				
			});
			res.json(response);
		});
	});	
	
});


registerRouter.post('/', [
	body('els_id')
		.exists()
		.withMessage('ELS ID cannot be empty')
		.isString()
		.withMessage('ELS ID must be string'),

	body('classroom')
		.exists()
		.withMessage('Classrom cannot be empty')
		.isString()
		.withMessage('Classrom must be string'),
], function(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	models.Classroom.findOne({ where: {name: req.body.classroom}}).then( classroom => {
		if (classroom != null) {
			models.NewIDRecord.create({
				els_id: req.body.els_id,
				classroom_id: classroom.id,
				createdAt: new Date(),
				updatedAt: new Date()
			}).then( newidrecord => {
				res.json(newidrecord);
			}, error => {
				res.json(error);
			});
		} else {
			res.json('Classroom not found');
		}
	});		
});

module.exports = registerRouter;
