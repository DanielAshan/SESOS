/* eslint-disable indent */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classrooms', [{
      name: 'E3',
      faculty: 'WEEIA',
    },{
      name: 'E4',
      faculty: 'WEEIA'
    }], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Classrooms', null, {});
	}
};
