"use strict";

const products = require('../models/products');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const restaurants = [
          {
            userId: 1,
            name: "Restaurante La Perdiz",
            address: "18 de Julio 1234",
            description: "Restaurante La Perdiz es un restaurante de comida tradicional uruguaya, ubicado en el corazón de Montevideo",
            city: "Montevideo",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            name: "Cafeteria La Pasiva",
            address: "18 de Julio 1234",
            description: "Cafeteria La Pasiva es un restaurante de comida tradicional uruguaya, ubicado en el corazón de Montevideo",
            city: "Montevideo",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            name: "Cafeteria La madrileña",
            address: "18 de Julio 1234",
            description: "Cafeteria La madrileña es un restaurante de comida tradicional uruguaya, ubicado en el corazón de Montevideo",
            city: "Montevideo",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ];
        await queryInterface.bulkInsert("restaurants", restaurants, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("restaurants", null, {});
    },
};
