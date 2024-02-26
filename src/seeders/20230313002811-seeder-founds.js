"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const founds = [
          {
            userId: 1,
            placeId: 1,
            name: "Moneda de plata colonial",
            description: "Moneda de plata acuñada durante la época colonial española en Uruguay.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://numismatica.bcu.gub.uy/wp-content/uploads/2021/12/img-3035.png"
              },
            ]),
            type: "Cotidianos",
            region: "Sur",
            city: "Montevideo",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 2,
            name: "Espada de época",
            description: "Espada utilizada por soldados en la época de los fuertes españoles en Uruguay.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://zorrilla.com.uy/wp-content/uploads/2021/11/86_1-47-Plateria1.jpg"
              }
            ]),
            type: "Bélicos",
            region: "Este",
            city: "Rocha",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 3,
            name: "Anillo de oro",
            description: "Anillo de oro encontrado en un sitio arqueológico en Colonia del Sacramento.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://media.cnnchile.com/sites/4/2021/07/Captura-de-Pantalla-2021-07-12-a-las-15.00.13.jpg"
              },
            ]),
            type: "Otros",
            region: "Suroeste",
            city: "Colonia del Sacramento",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 4,
            name: "Jarro de cerámica antiguo",
            description: "Jarro de cerámica utilizado en la vida cotidiana durante la colonización española en Uruguay.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://museos.gub.uy/media/k2/items/cache/491a4a0327b47b32bd3778bab121ebe0_L.jpg"
              },
            ]),
            type: "Cotidianos",
            region: "Sur",
            city: "Montevideo",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 5,
            name: "Casco de soldado",
            description: "Casco de soldado español encontrado en un fuerte en San Carlos, Maldonado.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://aammeu.files.wordpress.com/2020/11/fb_img_1582729267206.jpg"
              },
            ]),
            type: "Bélicos",
            region: "Este",
            city: "San Carlos",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 6,
            name: "Candelabro de bronce",
            description: "Candelabro de bronce utilizado en ceremonias religiosas en la Iglesia de las Carmelitas en Montevideo.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://cloud10.todocoleccion.online/antiguedades/tc/2022/11/04/14/372402564.jpg"
              },
            ]),
            type: "Cotidianos",
            region: "Sur",
            city: "Montevideo",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 7,
            name: "Botella de vidrio antigua",
            description: "Botella de vidrio utilizada en el siglo XVIII encontrada en un sitio arqueológico en Ciudad del Plata, San José.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://laanticuaria.cl/cdn/shop/files/734_1024x1024.jpg?v=1684158291"
              },
            ]),
            type: "Cotidianos",
            region: "Suroeste",
            city: "Ciudad del Plata",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 7,
            name: "Cañón de hierro",
            description: "Fragmento de un cañón de hierro utilizado en las fortificaciones españolas en el Cerro de Montevideo.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://i2.wp.com/www.visionmaritima.com.uy/wp-content/uploads/2017/09/PIEZA-CA%C3%91ON.jpeg?fit=580%2C387&ssl=1"
              },
            ]),
            type: "Bélicos",
            region: "Sur",
            city: "Montevideo",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            placeId: 1,
            name: "Reloj de bolsillo antiguo",
            description: "Reloj de bolsillo antiguo encontrado en una excavación en el Fuerte San Juan Bautista en Colonia.",
            date: "2023-06-15",
            images: JSON.stringify([
              {
                url: "https://http2.mlstatic.com/D_NQ_NP_751829-MLU71805855172_092023-O.webp"
              },
            ]),
            type: "Otros",
            region: "Oeste",
            city: "Colonia",
            country: "Uruguay",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ];
        await queryInterface.bulkInsert("founds", founds, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("founds", null, {});
    },
};
