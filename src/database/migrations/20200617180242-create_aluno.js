'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Aluno', {
      id: {
        type: Sequelize.INTEGER,
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
        unique: true,
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      semestre_situacao: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      id_ingresso: {
        type: Sequelize.INTEGER,
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
      id_cota: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_tipo_escola: {
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
      id_sexo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_estado_civil: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_nacionalidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_pais_origem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_naturalidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_raca: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('Aluno');
  }
};