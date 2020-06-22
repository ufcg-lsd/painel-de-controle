const { Model, DataTypes } = require('sequelize');

class Deficiencia extends Model {
  static init(connection) {
    super.init({
      codigo_deficiencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao_deficiencia: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Deficiencia;