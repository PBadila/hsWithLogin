'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Practices', [
      { name: 'Division', student:'Sophie',date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { name:'Multiplication', student:'Lexi',date: new Date(),createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Practices', null, {});
  },
};