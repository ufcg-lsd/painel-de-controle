const { Model, DataTypes } = require('sequelize');

class Cota extends Model {
  static init(connection) {
    super.init({
      descricao_cota: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Cota;