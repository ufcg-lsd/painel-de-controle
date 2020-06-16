const { Model, DataTypes } = require('sequelize');

class AlunoVinculo extends Model {
  static init(connection) {
    super.init({
      cpf: DataTypes.STRING,
      matricula_vinculo: DataTypes.STRING,
      periodo_evasao: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = AlunoVinculo;