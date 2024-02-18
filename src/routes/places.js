import express from "express";

const placesRouter = express.Router();
import {
    getAllPlaces,
    getPlace,
    getAllPlacesForUser,
    addPlace,
    updatePlace,
    deletePlace,
    searchPlace,
    searchPlaceMultiple,
} from "../controllers/places.js";

placesRouter.get("/", getAllPlaces);
placesRouter.get("/:id", getPlace);
placesRouter.get("/user/:userId", getAllPlacesForUser);
placesRouter.get("/search/key", searchPlace);
placesRouter.get("/search/multi", searchPlaceMultiple);
placesRouter.post("/add", addPlace);
placesRouter.put("/update/:id", updatePlace);
placesRouter.delete("/delete/:id", deletePlace);


export default placesRouter;
