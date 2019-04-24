'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Classrooms', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			faculty: {
				type: Sequelize.STRING
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
		return queryInterface.dropTable('Classrooms');
	}
};