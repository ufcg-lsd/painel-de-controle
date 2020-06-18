const { Model, DataTypes } = require('sequelize');

class AlunoVinculo extends Model {
  static init(connection) {
    super.init({
      cpf: DataTypes.STRING,
      matricula_vinculo: DataTypes.STRING,
      periodo_evasao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'curso-id' });
    this.belongsTo(models.SituacaoVinculo, { foreignKey: 'id_situacao_vinculo', as: 'sit-vinc-id' });
  }
}

module.exports = AlunoVinculo;