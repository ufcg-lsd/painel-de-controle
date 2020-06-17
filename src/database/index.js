const Sequelize = require('sequelize');

// Arquivo de configuração do banco de dados
const dbConfig = require('../config/database');

// Importação dos models
//const Aluno = require('../models/Aluno');
const SituacaoAluno = require('../models/SituacaoAluno');
const AlunoVinculo = require('../models/AlunoVinculo');
const Ingresso = require('../models/Ingresso');
const Cota = require('../models/Cota');
const Escola = require('../models/Escola');
const Sexo = require('../models/Sexo');
const EstadoCivil = require('../models/EstadoCivil');
const Nacionalidade = require('../models/Nacionalidade');
const PaisOrigem = require('../models/PaisOrigem');
const Municipio = require('../models/Municipio');
const Raca = require('../models/Raca');
const Curso = require('../models/Curso');
const SituacaoVinculo = require('../models/SituacaoVinculo');

// Intância da conexão com o postgres através do sequelize
const connection = new Sequelize(dbConfig);

// Conexão dos models a conexão do bd
//Aluno.init(connection);
SituacaoAluno.init(connection);
AlunoVinculo.init(connection);
Ingresso.init(connection);
Cota.init(connection);
Escola.init(connection);
Sexo.init(connection);
EstadoCivil.init(connection);
Nacionalidade.init(connection);
PaisOrigem.init(connection);
Municipio.init(connection);
Raca.init(connection)
Curso.init(connection);
SituacaoVinculo.init(connection);

AlunoVinculo.associate(connection.models);

module.exports = connection;