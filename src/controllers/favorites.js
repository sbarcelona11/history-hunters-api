import model from "../models";

const {Favorite} = model;

const getAllFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.findAll();
        return res.status(200).json({
            status: 200,
            data: favorites,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const getFavorite = async (req, res) => {
    const {id} = req.params;
    try {
        const favorite = await Favorite.findOne({where: {id}});
        return res.status(200).json({
            status: 200,
            data: favorite,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const getAllFavoriteForUser = async (req, res) => {
    const {userId} = req.params;

    try {
        const favorites = await Favorite.findAll({where: {userId}});
        return res.status(200).json({
            status: 200,
            data: favorites,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const addFavorite = async (req, res) => {
    const {userId, placeId, eventId} = req.body;
    try {
        const favorite = await Favorite.create({
            userId,
            placeId,
            eventId,
        });
        return res.status(201).json({
            status: 201,
            data: favorite,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const updateFavorite = async (req, res) => {
    const {id} = req.params;
    const {userId, eventId} = req.body;
    try {
        const favorite = await Favorite.findOne({where: {id}});
        if (!favorite) {
            return res.status(404).send({
                message: "Favorite not found.",
            });
        }
        await favorite.update({
            userId: userId || favorite.userId,
            eventId: eventId || favorite.eventId,
        });
        return res.status(200).json({
            status: 200,
            message: "Favorite updated successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const deleteFavorite = async (req, res) => {
    const {id} = req.params;
    try {
        const favorite = await Favorite.findOne({where: {id}});
        if (!favorite) {
            return res.status(404).send({
                message: "Favorite not found.",
            });
        }
        await Favorite.destroy({where: {id}});
        return res.status(200).json({
            status: 200,
            message: "Favorite deleted successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

export {
    getAllFavorites,
    getFavorite,
    getAllFavoriteForUser,
    addFavorite,
    updateFavorite,
    deleteFavorite,
};
