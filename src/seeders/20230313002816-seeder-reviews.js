'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const reviews = [
      {
        userId: 1,
        placeId: 1,
        foundId: 1,
        review: 'This is a review',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        placeId: 1,
        foundId: 1,
        review: 'This is a review',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    await queryInterface.bulkInsert('reviews', reviews, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
