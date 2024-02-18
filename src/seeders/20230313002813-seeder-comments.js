"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const comments = [
      {
        userId: 1,
        placeId: 1,
        foundId: 1,
        comment: "This is a comment",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        placeId: 1,
        foundId: 1,
        comment: "This is a comment",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("comments", comments, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
