import express from "express";

const restaurantsRouter = express.Router();
import {
    getAllRestaurants,
    getRestaurant,
    getAllRestaurantForUser,
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
} from "../controllers/restaurants";

restaurantsRouter.get("/", getAllRestaurants);
restaurantsRouter.get("/:id", getRestaurant);
restaurantsRouter.get("/user/:userId", getAllRestaurantForUser);
restaurantsRouter.post("/add", addRestaurant);
restaurantsRouter.put("/update/:id", updateRestaurant);
restaurantsRouter.delete("/delete/:id", deleteRestaurant);


export default restaurantsRouter;
