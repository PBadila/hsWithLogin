'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Affirmations', [
      { affirm: 'I am brilliant.', student: 'Sophie', date:new Date(), createdAt: new Date(), updatedAt: new Date() },
      { affirm: 'I am a Multiplication Master.', student: 'Lexi', date:new Date(), createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Affirmations', null, {});
  },
};