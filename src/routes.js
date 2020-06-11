const express = require('express');

// Importação de Controllers
const AlunoController = require('./controller/AlunoController');

const routes = express.Router();

routes.post('/alunos', AlunoController.store);

module.exports = routes;
