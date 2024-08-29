import model from "../models";

const { Restaurants } = model;

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.findAll();
    return res.status(200).json({
      status: 200,
      data: restaurants,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurants.findOne({ where: { id } });
    return res.status(200).json({
      status: 200,
      data: restaurant,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getAllRestaurantForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const restaurant = await Restaurants.findAll({ where: { userId } });
    return res.status(200).json({
      status: 200,
      data: restaurant,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const addRestaurant = async (req, res) => {
  const { userId, name, address, description, city, country } = req.body;
  try {
    const create = await Restaurants.create({
      userId,
      name,
      address,
      description,
      city,
      country,
    });
    return res.status(201).json({
      status: 201,
      data: create,
      message: "Restaurant added successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { userId, name, address, description, city, country } = req.body;
  try {
    const update = await Restaurants.findOne({ where: { id } });
    if (!update) {
      return res.status(404).send({
        message: "Restaurant not found",
      });
    }
    await Restaurants.update(
      {
        userId,
        name,
        address,
        description,
        city,
        country,
      },
      { where: { id } }
    );
    return res.status(200).json({
      status: 200,
      data: update,
      message: "Restaurant updated successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurants.findOne({ where: { id } });
    if (!restaurant) {
      return res.status(404).send({
        message: "Restaurant not found",
      });
    }
    await Restaurants.destroy({ where: { id } });
    return res.status(200).json({
      status: 200,
      message: "Restaurant deleted successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

export {
  getAllRestaurants,
  getRestaurant,
  getAllRestaurantForUser,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
