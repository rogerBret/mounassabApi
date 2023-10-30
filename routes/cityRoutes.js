const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Routes pour la gestion des villes
router.post('/', cityController.createCity);
router.get('/', cityController.getAllCities);
router.get('/:cityId', cityController.getCityById);
router.put('/:cityId', cityController.updateCity);
router.delete('/:cityId', cityController.deleteCity);

module.exports = router;
