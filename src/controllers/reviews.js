import model from "../models";

const {Review} = model;

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        return res.status(200).json({
            status: 200,
            data: reviews,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
}

const getReview = async (req, res) => {
    const {id} = req.params;
    try {
        const review = await Review.findOne({where: {id}});
        return res.status(200).json({
            status: 200,
            data: review,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
}

const getAllReviewForUser = async (req, res) => {
    const {userId} = req.params;

    try {
        const reviews = await Review.findAll({where: {userId}});
        return res.status(200).json({
            status: 200,
            data: reviews,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
}

const addReview = async (req, res) => {
    const {userId, placeId, foundId, review, rating} = req.body;
    try {
        const create = await Review.create({
            userId,
            placeId,
            foundId,
            review,
            rating,
        });
        return res.status(201).json({
            status: 201,
            data: create,
            message: "Review added successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
}

const updateReview = async (req, res) => {
    const {id} = req.params;
    const {userId, placeId, foundId, review, rating} = req.body;
    try {
        const update = await Review.findOne({where: {id}});
        if (!update) {
            return res.status(404).send({
                message: "Review not found",
            });
        }
        await Review.update(
            {
                userId,
                placeId,
                foundId,
                review,
                rating,
            },
            {where: {id}}
        );
        return res.status(200).json({
            status: 200,
            data: update,
            message: "Review updated successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
}

const deleteReview = async (req, res) => {
    const {id} = req.params;
    try {
        const review = await Review.findOne({where: {id}});
        if (!review) {
            return res.status(404).send({
                message: "Review not found",
            });
        }
        await Review.destroy({where: {id}});
        return res.status(200).json({
            status: 200,
            message: "Review deleted successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
}

export {
    getAllReviews,
    getReview,
    getAllReviewForUser,
    addReview,
    updateReview,
    deleteReview,
};
