const { Model, DataTypes } = require('sequelize');

class Nacionalidade extends Model {
  static init(connection) {
    super.init({
      nacionalidade: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Nacionalidade;