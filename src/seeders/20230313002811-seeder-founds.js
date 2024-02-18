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
                url: "https://scontent.fmvd1-1.fna.fbcdn.net/v/t45.5328-4/423905215_7230404743708875_3704515622719266129_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=anNn-M9vcbwAX98iGN6&_nc_ht=scontent.fmvd1-1.fna&oh=00_AfAuXPVTchyZG6dzM9KtOqvunO1UHdyWrw0mI_Dw7bR_bw&oe=65D6F826"
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
                url: "https://scontent.fmvd1-1.fna.fbcdn.net/v/t39.30808-6/295525296_710641983347207_1016462951496201802_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=sskY6GPq0K0AX8mAH1L&_nc_ht=scontent.fmvd1-1.fna&oh=00_AfCEX3aQR-01fCAFfG6ttmpSaMbZkt7Z_Mmb_SuhFzb23w&oe=65D6EB3E"
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
