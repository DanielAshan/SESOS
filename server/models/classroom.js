'use strict';
module.exports = (sequelize, DataTypes) => {
	const Classroom = sequelize.define('Classroom', {
		name: DataTypes.STRING,
		faculty: DataTypes.STRING
	}, {});
	Classroom.associate = function(models) {
		// associations can be defined here
	};
	return Classroom;
};