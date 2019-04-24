/* eslint-disable indent */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classrooms', [{
      name: 'E3',
      faculty: 'WEEIA',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'E4',
      faculty: 'WEEIA',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Classrooms', null, {});
	}
};
