const express = require('express');
const router = express.Router();
const sponsorController = require('../controllers/sponsorController');

// Routes pour la gestion des propriétaires
router.post('/', sponsorController.createSponsor);
router.get('/', sponsorController.getAllSponsors);
router.get('/:sponsorId', sponsorController.getSponsorById);
router.put('/:sponsorId', sponsorController.updateSponsor);
router.delete('/:sponsorId', sponsorController.deleteSponsor);

module.exports = router;
