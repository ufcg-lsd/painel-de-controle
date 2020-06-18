const { Model, DataTypes } = require('sequelize');

class Raca extends Model {
  static init(connection) {
    super.init({
      raça: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Raca;