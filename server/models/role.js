'use strict';
module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define('Role', {
		name: DataTypes.STRING,
		title: DataTypes.STRING
	}, {});
	Role.associate = function(models) {
		// associations can be defined here
	};
	return Role;
};