const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes pour la gestion des utilisateurs
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
