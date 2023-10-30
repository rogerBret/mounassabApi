'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estate.init({
    propertyType: DataTypes.STRING,
    address: DataTypes.STRING,
    log: DataTypes.STRING,
    lat: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    area: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    photos: DataTypes.JSON,
    amenities: DataTypes.TEXT,
    constructionYear: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    realEstateAgent: DataTypes.STRING,
    availability: DataTypes.STRING,
    specialFeatures: DataTypes.TEXT,
    taxes: DataTypes.DECIMAL,
    legalDocuments: DataTypes.TEXT,
    priceHistory: DataTypes.JSON,
    visitorComments: DataTypes.TEXT,
    ratings: DataTypes.JSON,
    environmentalFeatures: DataTypes.TEXT,
    lastUpdated: DataTypes.DATE,
    saleOrLeaseConditions: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Estate',
  });
  return Estate;
};