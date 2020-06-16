const Sequelize = require('sequelize');

// Arquivo de configuração do banco de dados
const dbConfig = require('../config/database');

// Importação dos models
//const Aluno = require('../models/Aluno');
const SituacaoAluno = require('../models/SituacaoAluno');
const AlunoVinculo = require('../models/AlunoVinculo');
const Ingresso = require('../models/Ingresso');

// Intância da conexão com o postgres através do sequelize
const connection = new Sequelize(dbConfig);

// Conexão dos models a conexão do bd
//Aluno.init(connection);
SituacaoAluno.init(connection);
AlunoVinculo.init(connection);
Ingresso.init(connection);

module.exports = connection;