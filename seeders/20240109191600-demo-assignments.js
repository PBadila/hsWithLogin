'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Assignments', [
      { name: 'Pre-Algebra', link: 'https://www.khanacademy.org/profile/me/courses', student:'Sophie',date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { name:'Handwriting', link: 'https://www.gynzy.com/en/blog/interactive-handwriting-lessons', student:'Lexi',date: new Date(),createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Assignments', null, {});
  },
};