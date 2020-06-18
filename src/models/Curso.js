const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(connection) {
    super.init({
      codigo_curso: DataTypes.INTEGER,
      nome_curso: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Curso;