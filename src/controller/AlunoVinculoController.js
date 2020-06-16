const AlunoVinculo = require('../models/AlunoVinculo');

module.exports = {
  async store(req, res) {
    const {
      cpf,
      matricula_vinculo,
      periodo_evasao
    } = req.body;

    const aluno_vinculo = await AlunoVinculo.create({
      cpf,
      matricula_vinculo,
      periodo_evasao
    });

    return res.json(aluno_vinculo);
  }
}