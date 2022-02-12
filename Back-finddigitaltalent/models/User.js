const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatorio']
    },
    country: {
        type: String,
        required: [true, 'El pais es obligatorio']
    },
    cityOfResidence: {
        type: String,
        required: [true, 'La ciudad de residencia es obligatorio']
    },
    image: String

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;