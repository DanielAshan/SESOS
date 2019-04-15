'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Roles', [{
			name: 'admin',
			title: 'Administrator'
		}, {
			name: 'lecturer',
			title: 'Wykładowca'
		}, {
			name: 'student',
			title: 'Student'
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Roles', null, {});
	}
};
