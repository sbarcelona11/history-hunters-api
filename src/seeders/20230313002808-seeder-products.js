"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [
      {
        userId: 1,
        restaurantId: 1,
        name: "Café Americano",
        description: "Un café negro clásico preparado con granos de alta calidad.",
        images: JSON.stringify([
          {
            url: "https://i.blogs.es/139e0f/cafe-americano2/1366_2000.jpeg"
          },
        ]),
        type: "Confiteria",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Croissant",
        description: "Un croissant suave y hojaldrado, perfecto para acompañar el café.",
        images: JSON.stringify([
          {
            url: "https://sarahsvegankitchen.b-cdn.net/wp-content/uploads/2024/05/Vegan-Croissants-1.jpg"
          },
        ]),
        type: "Confiteria",
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Cappuccino",
        description: "Café expreso con leche vaporizada y una capa de espuma.",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg"
          }
        ]),
        type: "Confiteria",
        price: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Croissant de Chocolate",
        description: "Un croissant relleno de delicioso chocolate fundido.",
        images: JSON.stringify([
          {
            "url": "https://www.clarin.com/img/2021/01/26/67ABwuTO8_1256x620__2.jpg"
          }
        ]),
        type: "Confiteria",
        price: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": 1,
        restaurantId: 1,
        "name": "Latte Macchiato",
        "description": "Café con leche servido en capas, con una corona de espuma.",
        "images": JSON.stringify([
          {
            "url": "https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg"
          }
        ]),
        "type": "Confiteria",
        price: 240,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "userId": 1,
        restaurantId: 1,
        "name": "Tarta de Frutilla",
        "description": "Tarta fresca con frutillas y crema pastelera.",
        "images": JSON.stringify([
          {
            "url": "https://i.ytimg.com/vi/wElI-ORG5uw/maxresdefault.jpg"
          }
        ]),
        type: "Confiteria",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Brownie de Chocolate",
        description: "Delicioso brownie de chocolate con nueces.",
        images: JSON.stringify([
          {
            url: "https://recetasdecocina.elmundo.es/wp-content/uploads/2016/11/brownie-de-chocolate.jpg"
          }
        ]),
        type: "Confiteria",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Churros con Chocolate",
        description: "Churros crujientes servidos con una taza de chocolate caliente.",
        images: JSON.stringify([
          {
            url: "https://glutenfreeonashoestring.com/wp-content/uploads/2013/05/Fingers-holding-churro-dipping-into-chocolate-sauce-in-jar.jpg"
          }
        ]),
        type: "Confiteria",
        price: 140,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Tostada con Aguacate",
        description: "Tostada de pan integral con aguacate y sal marina.",
        images: JSON.stringify([
          {
            url: "https://i.blogs.es/b29f0c/tostadas-aguacte/1366_2000.jpg"
          }
        ]),
        type: "Confiteria",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Tiramisú",
        description: "Clásico postre italiano con café, queso mascarpone y cacao.",
        images: JSON.stringify([
          {
            url: "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg"
          }
        ]),
        type: "Confiteria",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        restaurantId: 1,
        name: "Té Verde Matcha",
        description: "Bebida a base de té verde en polvo con un sabor suave y vegetal.",
        images: JSON.stringify([
          {
            url: "https://static.eldiario.es/clip/6e1a7d86-f1e4-4057-9a3a-d2f2c3c6ef1e_16-9-discover-aspect-ratio_default_0.jpg"
          }
        ]),
        type: "Confiteria",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ];
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
