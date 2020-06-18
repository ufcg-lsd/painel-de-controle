const { Model, DataTypes } = require('sequelize');

class EstadoCivil extends Model {
  static init(connection) {
    super.init({
      estado_civil: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = EstadoCivil;