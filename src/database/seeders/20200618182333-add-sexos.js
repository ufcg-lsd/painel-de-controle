'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sexo', [
      { sexo: 'Feminino' },
      { sexo: 'Masculino' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sexo', null, {});
  }
};
