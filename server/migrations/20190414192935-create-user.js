'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			first_name: {
				type: Sequelize.STRING
			},
			last_name: {
				type: Sequelize.STRING
			},
			username: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			university_id: {
				type: Sequelize.INTEGER
			},
			els_id: {
				type: Sequelize.STRING
			},
			role: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				default: new Date()
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				default: new Date()
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};