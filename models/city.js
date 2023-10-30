'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    long: DataTypes.STRING,
    lat: DataTypes.STRING,
    population: DataTypes.INTEGER,
    area: DataTypes.DECIMAL,
    primaryLanguage: DataTypes.STRING,
    timeZone: DataTypes.STRING,
    economy: DataTypes.STRING,
    climate: DataTypes.STRING,
    famousMonuments: DataTypes.TEXT,
    history: DataTypes.TEXT,
    events: DataTypes.TEXT,
    publicServices: DataTypes.TEXT,
    photos: DataTypes.JSON,
    weatherData: DataTypes.JSON,
    demographicStatistics: DataTypes.JSON,
    recentEvents: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};