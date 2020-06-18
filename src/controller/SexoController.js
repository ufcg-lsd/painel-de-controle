const Sexo = require('../models/Sexo');

module.exports = {
  async store(req, res) {
    const {
      sexo
    } = req.body;

    const sex = await Sexo.create({ sexo });

    return res.json(sex);
  }
}