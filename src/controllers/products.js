import model from "../models";
const { Products } = model;

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    return res.status(200).json({
      status: 200,
      data: products,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getAllProductsForUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const products = await Products.findAll({ where: { userId } });
    return res.status(200).json({
      status: 200,
      data: products,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const addProduct = async (req, res) => {
  const { userId, restaurantId, name, description, images, type, price } = req.body;
  try {
    const place = await Products.create({
      userId,
      restaurantId,
      name,
      description,
      images,
      type,
      price,
    });
    return res.status(201).json({
      status: 201,
      data: place,
      message: "Product created successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { userId, restaurantId, name, description, images, type, price } = req.body;
  try {
    const product = await Products.findOne({ where: { id } });
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }
    await Products.update(
      {
        userId,
        restaurantId,
        name,
        description,
        images,
        type,
        price,
      },
      { where: { id } }
    );
    return res.status(200).json({
      status: 200,
      message: "Products updated successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findOne({ where: { id } });
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }
    await Products.destroy({ where: { id } });
    return res.status(200).json({
      status: 200,
      message: "Product deleted successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findOne({ where: { id } });
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      status: 200,
      data: product,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

export {
  getAllProducts,
  getProduct,
  getAllProductsForUser,
  addProduct,
  updateProduct,
  deleteProduct,
};
