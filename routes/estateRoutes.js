const express = require('express');
const router = express.Router();
const estateController = require('../controllers/estateController');

// Routes pour la gestion des biens immobiliers
router.post('/', estateController.createEstate);
router.get('/', estateController.getAllEstates);
router.get('/:estateId', estateController.getEstateById);
router.put('/:estateId', estateController.updateEstate);
router.delete('/:estateId', estateController.deleteEstate);

module.exports = router;
