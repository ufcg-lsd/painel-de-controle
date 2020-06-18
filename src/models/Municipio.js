const { Model, DataTypes } = require('sequelize');

class Municipio extends Model {
  static init(connection) {
    super.init({
      municipio: DataTypes.STRING,
      estado: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Municipio;