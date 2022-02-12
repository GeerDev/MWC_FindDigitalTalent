const User = require('../models/User.js');
// const transporter = require("../config/nodemailer");

const UserController = {
    async register(req, res) {
        try {

            const {email, name} = req.body;
            const user = await User.findOne({ email: email })
            if (user) {
                return res.status(400).send({ message: 'Este correo ya existe' });
            }
            const newUser = await User.create({...req.body, image: `https://avatars.dicebear.com/api/avataaars/${name}.svg` });

            res.status(201).send({
                newUser
            });
        } catch (error) {
            console.error(error.name)
            if (error.name == "ValidationError") {
              let errName = await Object.keys(error.errors)[0]
              res.status(400).send(error.errors[errName].message);
            }
            res.status(500).send({ error, message: 'Hubo un problema al tratar de registrar el usuario' })
        }
    },
}

module.exports = UserController