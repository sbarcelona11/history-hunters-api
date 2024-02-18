'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    const users  = [{
        name: 'Sebastian',
        lastName: 'Barcelona',
        address: 'Calle falsa 1234',
        email: 'sbarcelona@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Juan',
        lastName: 'Perez',
        address: 'Calle falsa 123',
        email: 'juan@test.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
