const express = require('express');

// Importação de Controllers
const AlunoController = require('./controller/AlunoController');
const AlunoVinculoController = require('./controller/AlunoVinculoController');
const SituacaoAlunoController = require('./controller/SituacaoAlunoController');
const IngressoController = require('./controller/IngressoController');
const CotaController = require('./controller/CotaController');
const EscolaController = require('./controller/EscolaController');
const SexoController = require('./controller/SexoController');
const EstadoCivilController = require('./controller/EstadoCivilController');
const NacionalidadeController = require('./controller/NacionalidadeController');
const PaisOrigemController = require('./controller/PaisOrigemController');
const MunicipioController = require('./controller/MunicipioController');
const RacaController = require('./controller/RacaController');
const CursoController = require('./controller/CursoController');
const SituacaoVinculoController = require('./controller/SituacaoVinculoController');

const routes = express.Router();

routes.post('/alunos', AlunoController.store);
routes.post('/alunos-vinculos', AlunoVinculoController.store);
routes.post('/alunos-situacao', SituacaoAlunoController.store);
routes.post('/ingresso', IngressoController.store);
routes.post('/cota', CotaController.store);
routes.post('/escola', EscolaController.store);
routes.post('/sexo', SexoController.store);
routes.post('/estado-civil', EstadoCivilController.store);
routes.post('/nacionalidade', NacionalidadeController.store);
routes.post('/pais-origem', PaisOrigemController.store);
routes.post('/municipio', MunicipioController.store);
routes.post('/raca', RacaController.store);
routes.post('/curso', CursoController.store);
routes.post('/situacao-vinculo', SituacaoVinculoController.store);

// rota para teste de vinculo de aluno e aluno
routes.get('/alunos-vinculos/:cpf/:id_curso/:id_sit_vinc', AlunoVinculoController.index);
routes.get('/alunos/:cpf', AlunoController.index);

// remoção de um aluno
routes.delete('/alunos/:cpf', AlunoController.remove);

// listagem por consulta sql
routes.get('/alunos', AlunoController.list);

module.exports = routes;
