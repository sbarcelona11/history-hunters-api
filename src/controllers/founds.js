import model from "../models";

const {Op} = require("sequelize");
const {Found} = model;

const getAllFounds = async (req, res) => {
    try {
        const events = await Found.findAll();
        return res.status(200).json({
            status: 200,
            data: events,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const getFound = async (req, res) => {
    const {id} = req.params;
    try {
        const event = await Found.findOne({where: {id}});
        return res.status(200).json({
            status: 200,
            data: event,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const getAllFoundsForUser = async (req, res) => {
    const {userId} = req.params;
    try {
        const events = await Found.findAll({where: {userId}});
        return res.status(200).json({
            status: 200,
            data: events,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const addFound = async (req, res) => {
    const {placeId, userId, name, description, date, images, type, region, city, country} = req.body;
    try {
        const event = await Found.create({
            placeId,
            userId,
            name,
            description,
            date,
            images,
            type,
            region,
            city,
            country,
        });
        return res.status(201).json({
            status: 201,
            data: event,
            message: "Object created successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const updateFound = async (req, res) => {
    const {id} = req.params;
    const {placeId, userId, name, description, date, images, type, region, city, country} = req.body;
    try {
        const event = await Found.findOne({where: {id}});
        if (!event) {
            return res.status(404).json({
                status: 404,
                message: "Event not found",
            });
        }
        await Found.update(
            {
                placeId,
                userId,
                name,
                description,
                date,
                images,
                type,
                region,
                city,
                country,
            },
            {where: {id}}
        );
        return res.status(200).json({
            status: 200,
            message: "Object updated successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const deleteFound = async (req, res) => {
    const {id} = req.params;
    try {
        const event = await Found.destroy({where: {id}});
        return res.status(200).json({
            status: 200,
            data: event,
            message: "Object deleted successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

const searchFound = async (req, res) => {
    // Filter by type, dates or region-country-city
    const {
        type = "name",
        name = "",
        elementType = "",
        initialDate,
        endDate,
        region,
        country,
        city,
    } = req.query;

    let query = {};

    if (type && name) {
        query = {name: {[Op.like]: `%${name}%`}};
    }

    if(type && elementType) {
        query = {type: {[Op.like]: `%${elementType}%`}};
    }

    if (type && initialDate && endDate) {
        // query betwen dates
        query = {date: {[Op.between]: [initialDate, endDate]}};
    }

    if (type && region) {
        query = {region: {[Op.like]: `%${region}%`}};
    }

    if (type && country) {
        query = {country: {[Op.like]: `%${country}%`}};
    }

    if (type && city) {
        query = {city: {[Op.like]: `%${city}%`}};
    }

    console.log("#query: ", query);

    try {
        const events = await Found.findAll({where: query});
        return res.status(200).json({
            status: 200,
            data: events,
            message: "Object found successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

export {
    getAllFounds,
    getFound,
    getAllFoundsForUser,
    addFound,
    updateFound,
    deleteFound,
    searchFound,
};
