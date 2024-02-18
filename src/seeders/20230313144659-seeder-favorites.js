'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const favorites = [
      {
        userId: 1,
        placeId: 2,
        foundId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        placeId: 2,
        foundId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }];

      await queryInterface.bulkInsert('favorites', favorites, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorites', null, {});
  }
};
