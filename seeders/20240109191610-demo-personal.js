'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Personals', [
      { name: 'Piano Practice', student:'Sophie',date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { name:'Drawing Practice', student:'Lexi',date: new Date(),createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Personals', null, {});
  },
};