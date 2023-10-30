'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Neighborhoods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      neighborhoodType: {
        type: Sequelize.STRING
      },
      amenities: {
        type: Sequelize.TEXT
      },
      crimeRate: {
        type: Sequelize.STRING
      },
      localEvents: {
        type: Sequelize.TEXT
      },
      attractions: {
        type: Sequelize.TEXT
      },
      schools: {
        type: Sequelize.TEXT
      },
      photos: {
        type: Sequelize.JSON
      },
      transportation: {
        type: Sequelize.TEXT
      },
      culturalReferences: {
        type: Sequelize.TEXT
      },
      parksAndGreenSpaces: {
        type: Sequelize.TEXT
      },
      housing: {
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
    await queryInterface.dropTable('Neighborhoods');
  }
};