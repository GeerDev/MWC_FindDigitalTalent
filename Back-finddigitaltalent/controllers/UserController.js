const User = require('../models/User.js');
const transporter = require("../config/nodemailer");

const UserController = {
    async register(req, res) {
        try {

            const {email, name, sector} = req.body;
            const user = await User.findOne({ email: email })
            if (user) {
                return res.status(400).send({ message: 'Este correo ya existe' });
            }
            const newUser = await User.create({...req.body, image: `https://avatars.dicebear.com/api/avataaars/${name}.svg`, sector: sector.toLowerCase() });

            res.status(201).send({ newUser, message: `Usuario creado con éxito` });
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
          res.status(200).send({user, message: `Usuarios del sector ${req.params.sector} traidos con éxito`});
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .send({ message: "Ha habido un problema al traer el usuario" });
        }
      },
      async sendEmail(req, res) {
        try {
            await transporter.sendMail({
                to: req.body.email,
                subject: `Lo conseguiste ${req.body.name}`,
                html: `Enhorabuena ${req.body.name} Digital Talent Barcelona quiere contactar contigo`
            })
            res.status(201).send({ message: "Correo enviado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error, message: 'Ha habido un problema al mandar el correo' })
        }
    },
}

module.exports = UserController