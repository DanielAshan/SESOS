'use strict';
module.exports = (sequelize, DataTypes) => {
	const AttendanceRecord = sequelize.define('AttendanceRecord', {
		els_ID: DataTypes.STRING
	}, {});
	AttendanceRecord.associate = function(models) {
		// associations can be defined here
	};
	return AttendanceRecord;
};