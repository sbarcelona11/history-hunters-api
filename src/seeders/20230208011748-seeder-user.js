'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    const users  = [{
        name: 'Sebastian',
        lastName: 'Barcelona',
        address: 'Calle falsa 1234',
        email: 'sebastian@test.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Juan',
        lastName: 'Antonaccio',
        address: 'Calle falsa 123',
        email: 'juan@test.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'Mathias',
      lastName: 'Rodriguez',
      address: 'Calle falsa 1234',
      email: 'mathias@test.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    name: 'Nicolas',
    lastName: 'Duarte',
    address: 'Calle falsa 1234',
    email: 'nicolas@test.com',
    password: '123456',
    createdAt: new Date(),
    updatedAt: new Date()
},
  ]
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
