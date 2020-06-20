const { Model, DataTypes } = require('sequelize');

class Escola extends Model {
  static init(connection) {
    super.init({
      tipo_escola: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Escola;