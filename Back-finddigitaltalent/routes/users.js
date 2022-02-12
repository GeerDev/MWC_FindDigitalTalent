const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/', UserController.register);
router.get('/:sector', UserController.getUserSector);
router.post('/sendEmail', UserController.sendEmail);

module.exports = router;