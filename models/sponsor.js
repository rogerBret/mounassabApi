'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sponsor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sponsor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    propertiesOwned: DataTypes.INTEGER,
    totalEarnings: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Sponsor',
  });
  return Sponsor;
};