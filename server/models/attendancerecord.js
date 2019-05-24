'use strict';
module.exports = (sequelize, DataTypes) => {
	const AttendanceRecord = sequelize.define('AttendanceRecord', {
		els_id: DataTypes.STRING,
		lecture_id: DataTypes.INTEGER
	}, {});
	AttendanceRecord.associate = function(models) {
		// associations can be defined here
	};
	return AttendanceRecord;
};