const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(connection) {
    super.init({
      cpf: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      semestre_situacao: DataTypes.STRING,
      semestre_ingresso: DataTypes.STRING,
      ano_nascimento: DataTypes.INTEGER,
      ano_conclusao_ensino_medio: DataTypes.INTEGER,
      email: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Aluno;