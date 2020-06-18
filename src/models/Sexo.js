const { Model, DataTypes } = require('sequelize');

class Sexo extends Model {
  static init(connection) {
    super.init({
      sexo: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Sexo;