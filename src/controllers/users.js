import model from "../models";

const {User} = model;

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({where: {email}}, {exclude: ['password']});
        if (!user) {
            return res.status(400).json({status: 400, message: "User not found"});
        }
        const isMatch = await user.password === password;
        if (!isMatch) {
            return res
                .status(400)
                .json({status: 400, message: "Incorrect password"});
        }

        res
            .status(200)
            .json({
                status: 200,
                message: "User logged in successfully",
                data: {user},
            });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message:
                "Could not perform this operation, try again later.",
        });
    }
};

const register = async (req, res) => {
    const {name, lastName, email, password} = req.body;
    console.log("email", email, "password", password)
    try {
        const user = await User.findOne({
            where: {email},
        });
        if (user) {
            return res.status(422).send({message: "User with that email exists"});
        }
        await User.create({
            name,
            lastName,
            email,
            password,
        });
        return res.status(201).send({message: "Account created successfully"});
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message:
                "Could not perform this operation, try again later.",
        });
    }
};

const profile = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findOne({
            where: {id}
        }, {exclude: ['password']});

        if (!user) {
            return res.status(404).send({message: "User not found"});
        }
        return res.status(200).send({
            message: "User profile",
            data: user
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Could not perform this operation, try again later.",
        });
    }
};

export {login, register, profile};
