const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(connection) {
    super.init({
      cpf: DataTypes.STRING,
      nome: DataTypes.STRING,
      semestre_situacao: DataTypes.STRING,
      semestre_ingresso: DataTypes.STRING,
      ano_nascimento: DataTypes.INTEGER,
      ano_conclusao_ensino_medio: DataTypes.INTEGER,
      email: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Aluno;