const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../helpers/verifyToken');

router.get('/get-user', verifyToken, userController.getUser);
router.get('/verifytoken',verifyToken, userController.verifyToken);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update-user',verifyToken, userController.updateUser);

module.exports = router;