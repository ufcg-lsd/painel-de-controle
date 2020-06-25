const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(connection) {
    super.init({
      codigo_curso: {
        type: DataTypes.STRING(8),
        primaryKey: true,
      },
      nome_curso: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.AlunoVinculo, { foreignKey: 'id_curso', as: 'curso-vinculo' });
  }
}

module.exports = Curso;