'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Neighborhood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Neighborhood.init({
    name: DataTypes.STRING,
    long: DataTypes.STRING,
    lat: DataTypes.STRING,
    neighborhoodType: DataTypes.STRING,
    amenities: DataTypes.TEXT,
    crimeRate: DataTypes.STRING,
    localEvents: DataTypes.TEXT,
    attractions: DataTypes.TEXT,
    schools: DataTypes.TEXT,
    photos: DataTypes.JSON,
    transportation: DataTypes.TEXT,
    culturalReferences: DataTypes.TEXT,
    parksAndGreenSpaces: DataTypes.TEXT,
    housing: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Neighborhood',
  });
  return Neighborhood;
};