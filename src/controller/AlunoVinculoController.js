const AlunoVinculo = require('../models/AlunoVinculo');
const Curso = require('../models/Curso');
const SituacaoVinculo = require('../models/SituacaoVinculo');

module.exports = {
  async store(req, res) {
    const {
      cpf,
      matricula_vinculo,
      id_curso,
      id_situacao_vinculo,
      periodo_evasao
    } = req.body;

    const aluno_vinculo = await AlunoVinculo.create({
      cpf,
      matricula_vinculo,
      id_curso,
      id_situacao_vinculo,
      periodo_evasao
    });

    return res.json(aluno_vinculo);
  },

  async index(req, res) {
    const { 
      id_aluno_vinc,
      id_curso, 
      id_sit_vinc } = req.params;
    
    const curso = await Curso.findOne({
      where: { codigo_curso: id_curso }
    });

    const sit_vinc = await SituacaoVinculo.findByPk(id_sit_vinc);

    if (!curso || !sit_vinc) {
      return res.status(400).json({ error: 'course or link situation does not exists' })
    }

    const aluno_vinculo = await AlunoVinculo.findByPk(id_aluno_vinc, {
      include: { association: 'sit-vinc' },
      attributes: ['id', 'cpf', 'matricula_vinculo', 'id_situacao_vinculo', 'periodo_evasao']
    });

    if (!aluno_vinculo) {
      return res.status(400).json({ error: 'student bond does not exists' });
    }

    return res.json(aluno_vinculo);
  }
}