'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertyType: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      log: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      bathrooms: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.TEXT
      },
      photos: {
        type: Sequelize.JSON
      },
      amenities: {
        type: Sequelize.TEXT
      },
      constructionYear: {
        type: Sequelize.INTEGER
      },
      condition: {
        type: Sequelize.STRING
      },
      realEstateAgent: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.STRING
      },
      specialFeatures: {
        type: Sequelize.TEXT
      },
      taxes: {
        type: Sequelize.DECIMAL
      },
      legalDocuments: {
        type: Sequelize.TEXT
      },
      priceHistory: {
        type: Sequelize.JSON
      },
      visitorComments: {
        type: Sequelize.TEXT
      },
      ratings: {
        type: Sequelize.JSON
      },
      environmentalFeatures: {
        type: Sequelize.TEXT
      },
      lastUpdated: {
        type: Sequelize.DATE
      },
      saleOrLeaseConditions: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Estates');
  }
};