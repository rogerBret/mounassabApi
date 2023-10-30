'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      population: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.DECIMAL
      },
      primaryLanguage: {
        type: Sequelize.STRING
      },
      timeZone: {
        type: Sequelize.STRING
      },
      economy: {
        type: Sequelize.STRING
      },
      climate: {
        type: Sequelize.STRING
      },
      famousMonuments: {
        type: Sequelize.TEXT
      },
      history: {
        type: Sequelize.TEXT
      },
      events: {
        type: Sequelize.TEXT
      },
      publicServices: {
        type: Sequelize.TEXT
      },
      photos: {
        type: Sequelize.JSON
      },
      weatherData: {
        type: Sequelize.JSON
      },
      demographicStatistics: {
        type: Sequelize.JSON
      },
      recentEvents: {
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
    await queryInterface.dropTable('Cities');
  }
};