'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Aluno', {
      cpf: {
        type: Sequelize.STRING(11),
        primaryKey: true,
        allowNull: false,
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'SituacaoAluno', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      semestre_situacao: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      id_ingresso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Ingresso', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
        allowNull: false,
        references: { model: 'Cota', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_tipo_escola: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Escola', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ano_conclusao_ensino_medio: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Genero', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_estado_civil: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'EstadoCivil', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_nacionalidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Nacionalidade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_pais_origem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'PaisOrigem', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_naturalidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Municipio', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_raca: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Raca', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Aluno');
  }
};