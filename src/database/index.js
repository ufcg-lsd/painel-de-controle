const Sequelize = require('sequelize');

// Arquivo de configuração do banco de dados
const dbConfig = require('../config/database');

// Importação dos models
const Aluno = require('../models/Aluno');

// Intância da conexão com o postgres através do sequelize
const connection = new Sequelize(dbConfig);

// Conexão dos models a conexão do bd
Aluno.init(connection);

module.exports = connection;