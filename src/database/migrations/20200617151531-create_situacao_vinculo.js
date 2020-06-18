'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SituacaoVinculo', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao_situacao: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }  
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SituacaoVinculo');
  }
};
