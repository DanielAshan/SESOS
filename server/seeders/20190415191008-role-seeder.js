'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Roles', [{
			name: 'admin',
			title: 'Administrator',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'lecturer',
			title: 'Wykładowca',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'student',
			title: 'Student',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Roles', null, {});
	}
};
