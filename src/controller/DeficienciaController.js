const Deficiencia = require('../models/Deficiencia');

module.exports = {
  async store(req, res) {
    const {
      descricao_deficiencia
    } = req.body;

    const deficiencia = await Deficiencia.create({
      descricao_deficiencia
    });

    return res.json(deficiencia);
  }
}