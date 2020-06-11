'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      semestre_situacao: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      semestre_ingresso: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      ano_nascimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ano_conclusao_ensino_medio: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('alunos');
  }
};
