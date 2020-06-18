const Aluno = require('../models/Aluno');

module.exports = {
  async store(req, res) {
    const { 
      cpf,
      semestre_situacao,
      semestre_ingresso,
      ano_nascimento,
      ano_conclusao_ensino_medio,
      email,
    } = req.body;

    const aluno = await Aluno.create({
      cpf,
      semestre_situacao,
      semestre_ingresso,
      ano_nascimento,
      ano_conclusao_ensino_medio,
      email,
    });

    return res.json(aluno);
  }
}