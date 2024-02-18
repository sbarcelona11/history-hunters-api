import model from "../models";

const {Comment} = model;

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json({
            status: 200,
            data: comments,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const getComment = async (req, res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findOne({where: {id}});
        return res.status(200).json({
            status: 200,
            data: comment,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const getAllCommentForUser = async (req, res) => {
    const {userId} = req.params;

    try {
        const comments = await Comment.findAll({where: {userId}});
        return res.status(200).json({
            status: 200,
            data: comments,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const addComment = async (req, res) => {
    const {userId, eventId, comment} = req.body;
    try {
        const create = await Comment.create({
            userId,
            eventId,
            comment,
        });
        return res.status(201).json({
            status: 201,
            data: create,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const updateComment = async (req, res) => {
    const {id} = req.params;
    const {userId, eventId, content} = req.body;
    try {
        const comment = await Comment.findOne({where: {id}});
        if (!comment) {
            return res.status(404).send({
                message: "Comment not found",
            });
        }
        await comment.update({
            userId: userId || comment.userId,
            eventId: eventId || comment.eventId,
            content: content || comment.content,
        });
        return res.status(200).json({
            status: 200,
            message: "Comment updated successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const deleteComment = async (req, res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findOne({where: {id}});
        if (!comment) {
            return res.status(404).send({
                message: "Comment not found",
            });
        }
        await comment.destroy();
        return res.status(200).json({
            status: 200,
            message: "Comment deleted successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

export {
    getAllComments,
    getComment,
    getAllCommentForUser,
    addComment,
    updateComment,
    deleteComment,
};
