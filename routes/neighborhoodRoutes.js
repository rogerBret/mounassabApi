const express = require('express');
const router = express.Router();
const neighborhoodController = require('../controllers/neighborhoodController');

// Routes pour la gestion des quartiers
router.post('/', neighborhoodController.createNeighborhood);
router.get('/', neighborhoodController.getAllNeighborhoods);
router.get('/:neighborhoodId', neighborhoodController.getNeighborhoodById);
router.put('/:neighborhoodId', neighborhoodController.updateNeighborhood);
router.delete('/:neighborhoodId', neighborhoodController.deleteNeighborhood);

module.exports = router;
