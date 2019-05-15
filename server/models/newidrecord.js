'use strict';
module.exports = (sequelize, DataTypes) => {
	const NewIDRecord = sequelize.define('NewIDRecord', {
		els_id: DataTypes.STRING,
		classroom_id: DataTypes.INTEGER
	}, {});
	NewIDRecord.associate = function(models) {
		// associations can be defined here
	};
	return NewIDRecord;
};