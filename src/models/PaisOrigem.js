const { Model, DataTypes } = require('sequelize');

class PaisOrigem extends Model {
  static init(connection) {
    super.init({
      país_origem: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = PaisOrigem;