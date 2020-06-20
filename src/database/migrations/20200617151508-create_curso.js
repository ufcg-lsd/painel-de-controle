'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Curso', { 
      codigo_curso: {
        type: Sequelize.STRING(8),
        primaryKey: true,
        allowNull: false,
      },
      nome_curso: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Curso');
  }
};
