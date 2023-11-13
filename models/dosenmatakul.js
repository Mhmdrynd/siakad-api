'use strict';
const {
  Model
} = require('sequelize');
const matakuliah = require('./matakuliah');
module.exports = (sequelize, DataTypes) => {
  class DosenMatakul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  DosenMatakul.init({
    id_dosen: {
      type : DataTypes.INTEGER,
      references : {
        model : 'Dosens',
        key : 'id'
      }
    },
    id_matkul: {
      type : DataTypes.INTEGER,
      references : {
        type : 'MataKuliahs',
        key : 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'DosenMatakul',
  });
  return DosenMatakul;
};