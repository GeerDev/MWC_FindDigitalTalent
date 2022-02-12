const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/', UserController.register);
// router.put('/', UserController.completingRegistration)
// router.get('/', UserController.getAllUsers);

module.exports = router;