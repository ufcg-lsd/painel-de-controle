const { Model, DataTypes } = require('sequelize');

class SituacaoAluno extends Model {
  static init(connection) {
    super.init({
      descricao_situacao: DataTypes.STRING,
    }, {
      sequelize: connection,
    })
  }
} 

module.exports = SituacaoAluno;