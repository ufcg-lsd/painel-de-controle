const express = require('express');

// Importação de Controllers
//const AlunoController = require('./controller/AlunoController');
const SituacaoAlunoController = require('./controller/SituacaoAlunoController');
const IngressoController = require('./controller/IngressoController');
const AlunoVinculoController = require('./controller/AlunoVinculoController');

const routes = express.Router();

//routes.post('/alunos', AlunoController.store);
routes.post('/alunos-situacao', SituacaoAlunoController.store);
routes.post('/alunos-ingresso', IngressoController.store);
routes.post('/alunos-vinculos', AlunoVinculoController.store);

module.exports = routes;
