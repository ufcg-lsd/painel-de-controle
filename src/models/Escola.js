const { Model, DataTypes } = require('sequelize');

class Escola extends Model {
  static init(connection) {
    super.init({
      nome_escola: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Escola;