const { Model, DataTypes } = require('sequelize');

class Sexo extends Model {
  static init(connection) {
    super.init({
      sexo: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_sexo', as: 'sexo-aluno' });
  }
}

module.exports = Sexo;