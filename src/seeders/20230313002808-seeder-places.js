"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const places = [
      {
        userId: 1,
        name: "Fuerte San Miguel",
        description: "Fuerte español del siglo XVIII en Rocha, asociado a leyendas de tesoros escondidos.",
        address: "27101 Rocha, Departamento de Rocha, Uruguay",
        latitude: "33.6893761",
        longitude: "-53.5414999",
        images: JSON.stringify([
          {
            url: "https://s3.amazonaws.com/turismorocha/atractivos/31/med/fuerte-de-san-miguel-036160000-1494875296.jpg"
          },
        ]),
        location: "Rocha, Uruguay",
        type: "Bélicos",
        characteristics: JSON.stringify(["fortaleza", "tesoros", "historia"]),
        score: 7,
        country: "Uruguay",
        region: "Este",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Fortaleza de Santa Teresa",
        description: "Fortaleza en Rocha construida en el siglo XVIII, se rumorea que podría albergar tesoros ocultos.",
        address: "9 km. 303, 27204 Departamento de Rocha, Uruguay",
        latitude: "-33.9723918",
        longitude: "-53.5517037",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fortaleza_ST.jpg"
          },
        ]),
        location: "Rocha, Uruguay",
        type: "Bélicos",
        characteristics: JSON.stringify(["fortaleza", "tesoros", "historia"]),
        score: 9,
        country: "Uruguay",
        region: "Este",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Ciudad Vieja de Colonia del Sacramento",
        description: "Patrimonio de la Humanidad por la UNESCO, se han encontrado monedas antiguas y objetos de valor.",
        address: "Calle Exodo, 70000 Col. del Sacramento, Departamento de Colonia",
        latitude: "-34.4713771,",
        longitude: "-57.8533701",
        images: JSON.stringify([
          {
            url: "https://www.lr21.com.uy/wp-content/uploads/2016/04/puerta-ciudadela-colonia.jpg",
          },
        ]),
        location: "Colonia del Sacramento, Uruguay",
        type: "Cotidianos",
        characteristics: JSON.stringify(["ciudad antigua", "tesoros", "cultura"]),
        score: 4.7,
        country: "Uruguay",
        region: "Suroeste",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Castillo Pittamiglio",
        description: "Castillo en Montevideo construido por Humberto Pittamiglio en el siglo XX, asociado a historias de tesoros ocultos.",
        address: "Rbla. Mahatma Gandhi 633, 11300 Montevideo, Departamento de Montevideo",
        latitude: "-34.9209954",
        longitude: "-56.1524313",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/CastPittamiglio2013.jpg/640px-CastPittamiglio2013.jpg",
          }
        ]),
        location: "Montevideo, Uruguay",
        type: "Otros",
        characteristics: JSON.stringify(["castillo", "tesoros", "arquitectura"]),
        score: 4.4,
        country: "Uruguay",
        region: "Sur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Isla de Flores",
        description: "Isla en el Río Uruguay, escenario de leyendas de tesoros enterrados por piratas.",
        address: "",
        latitude: "-34.9416404",
        longitude: "-55.9313133",
        "images": JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Faro_Isla_de_Flores_y_construcciones._09.jpg/550px-Faro_Isla_de_Flores_y_construcciones._09.jpg"
          },
        ]),
        location: "Río Uruguay, Uruguay",
        type: "Otros",
        characteristics: JSON.stringify(["isla", "tesoros", "leyendas"]),
        score: 9,
        country: "Uruguay",
        region: "Noroeste",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Iglesia de las Carmelitas",
        description: "Iglesia en Montevideo donde se rumorea que hay un tesoro oculto desde la época colonial.",
        address: "Irigoitia 1007, 11700 Montevideo, Departamento de Montevideo",
        latitude: "-34.8646526",
        longitude: "-56.2064282",
        images: JSON.stringify([
          {
            "url": "https://lh5.googleusercontent.com/p/AF1QipNE7M54i7-j4ppv1sKFygOcZ4qTMdEk4GZVfrjo=w408-h544-k-no"
          },
        ]),
        location: "Montevideo, Uruguay",
        type: "Cotidianos",
        characteristics: JSON.stringify(["iglesia", "tesoros", "historia"]),
        score: 4.8,
        country: "Uruguay",
        region: "Sur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Cerro de Montevideo",
        description: "Cerro habitado desde tiempos precolombinos, donde se han encontrado objetos de valor.",
        address: "12800 Montevideo, Montevideo Department",
        latitude: "-34.8885926",
        longitude: "-56.2683553",
        images: JSON.stringify([
          {
            url: "https://lh5.googleusercontent.com/p/AF1QipP6f-OeiIBTsKOwuctsQPrOC-RYottbjqcKded1=w408-h306-k-no"
          },
        ]),
        location: "Montevideo, Uruguay",
        type: "Otros",
        characteristics: JSON.stringify(["cerro", "tesoros", "historia"]),
        score: 8,
        country: "Uruguay",
        region: "Sur",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
      ];
    await queryInterface.bulkInsert("Places", places, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Places", null, {});
  },
};
