const express = require('express');
const router = express.Router();
const actionController = require('../controllers/actionController');

// Routes pour la gestion des actions
router.post('/', actionController.createAction);
router.get('/', actionController.getAllActions);
router.get('/:actionId', actionController.getActionById);
router.put('/:actionId', actionController.updateAction);
router.delete('/:actionId', actionController.deleteAction);

module.exports = router;
