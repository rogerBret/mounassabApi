const Sponsor = require('../models/sponsor');

// Créer un nouveau propriétaire
exports.createSponsor = async (req, res) => {
  try {
    const sponsorData = req.body;
    const sponsor = await Sponsor.create(sponsorData);
    return res.status(201).json(sponsor);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création du propriétaire.' });
  }
};

// Obtenir tous les propriétaires
exports.getAllSponsors = async (req, res) => {
  try {
    const sponsors = await Sponsor.findAll();
    return res.status(200).json(sponsors);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des propriétaires.' });
  }
};

// Obtenir un propriétaire par son ID
exports.getSponsorById = async (req, res) => {
  try {
    const { sponsorId } = req.params;
    const sponsor = await Sponsor.findByPk(sponsorId);
    
    if (!sponsor) {
      return res.status(404).json({ error: 'Propriétaire non trouvé.' });
    }
    
    return res.status(200).json(sponsor);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération du propriétaire.' });
  }
};

// Mettre à jour un propriétaire
exports.updateSponsor = async (req, res) => {
  try {
    const { sponsorId } = req.params;
    const sponsorData = req.body;
    const sponsor = await Sponsor.findByPk(sponsorId);
    
    if (!sponsor) {
      return res.status(404).json({ error: 'Propriétaire non trouvé.' });
    }
    
    // Mettez à jour les attributs du propriétaire avec les données de la requête
    Object.assign(sponsor, sponsorData);
    
    await sponsor.save();
    
    return res.status(200).json(sponsor);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour du propriétaire.' });
  }
};

// Supprimer un propriétaire
exports.deleteSponsor = async (req, res) => {
  try {
    const { sponsorId } = req.params;
    const sponsor = await Sponsor.findByPk(sponsorId);
    
    if (!sponsor) {
      return res.status(404).json({ error: 'Propriétaire non trouvé.' });
    }
    
    await sponsor.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression du propriétaire.' });
  }
};
