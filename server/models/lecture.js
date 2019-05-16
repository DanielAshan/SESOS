'use strict';
module.exports = (sequelize, DataTypes) => {
	const Lecture = sequelize.define('Lecture', {
		name: DataTypes.STRING,
		startDate: DataTypes.DATE,
		endDate: DataTypes.DATE,
		lecturer_id: DataTypes.INTEGER,
		classroom_id: DataTypes.INTEGER
	}, {});
	Lecture.associate = function(models) {
		// associations can be defined here
	};
	return Lecture;
};