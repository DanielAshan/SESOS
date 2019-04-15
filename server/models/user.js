'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		university_id: DataTypes.INTEGER,
		els_id: DataTypes.STRING,
		role: DataTypes.INTEGER
	}, {});
	User.associate = function(models) {
		// associations can be defined here
	};
	return User;
};