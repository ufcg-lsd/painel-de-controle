const { Model, DataTypes } = require('sequelize');

class AlunoVinculo extends Model {
  static init(connection) {
    super.init({
      cpf: DataTypes.STRING,
      matricula_vinculo: DataTypes.STRING,
      id_curso: DataTypes.INTEGER,
      id_situacao_vinculo: DataTypes.INTEGER,
      periodo_evasao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'curso' });
    this.belongsTo(models.SituacaoVinculo, { foreignKey: 'id_situacao_vinculo', as: 'sit-vinc' })
  }
}

module.exports = AlunoVinculo;