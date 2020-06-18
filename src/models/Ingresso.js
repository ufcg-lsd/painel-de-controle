const { Model, DataTypes } = require('sequelize');

class Ingresso extends Model {
  static init(connection) {
    super.init({
      descricao_ingresso: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Ingresso;