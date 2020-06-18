const { Model, DataTypes } = require('sequelize');

class Nacionalidade extends Model {
  static init(connection) {
    super.init({
      nacionalidade: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Nacionalidade;