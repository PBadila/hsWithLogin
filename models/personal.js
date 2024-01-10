'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personal.init({
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    student: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Personal',
  });
  return Personal;
};