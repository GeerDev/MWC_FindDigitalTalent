const User = require('../models/User.js');
// const transporter = require("../config/nodemailer");

const UserController = {
    async register(req, res) {
        try {

            const {email, name, sector} = req.body;
            const user = await User.findOne({ email: email })
            if (user) {
                return res.status(400).send({ message: 'Este correo ya existe' });
            }
            const newUser = await User.create({...req.body, image: `https://avatars.dicebear.com/api/avataaars/${name}.svg`, sector: sector.toLowerCase() });

            res.status(201).send({
                newUser
            });
        } catch (error) {
            if (error.name == "ValidationError") {
              let errName = await Object.keys(error.errors)[0]
              res.status(400).send({ message: error.errors[errName].message });
            }
            res.status(500).send({ error, message: 'Hubo un problema al tratar de registrar el usuario' })
        }
    },
    async getUserSector(req, res) {
        try {
          const user = await User.aggregate([
            {
              $match: {
                sector: req.params.sector,
              },
            },
          ]);
          res.send(user);
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .send({ message: "Ha habido un problema al traer el usuario" });
        }
      },
}

module.exports = UserController