'use strict';
const {
  Model
} = require('sequelize');
// const jadwalMatkulController = require('../controller/jadwalMatkulController');
module.exports = (sequelize, DataTypes) => {
  class JadwalMataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JadwalMataKuliah.belongsTo(models.MataKuliah,{foreignKey : 'id_matkul' })
    }
  }
  JadwalMataKuliah.init({
    id_matkul: {
      type : DataTypes.INTEGER,
      references : {
        model : 'MataKuliahs',
        key : 'id'
      }
    },
    hari: DataTypes.STRING,
    jam: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JadwalMataKuliah',
  });
  return JadwalMataKuliah;
};