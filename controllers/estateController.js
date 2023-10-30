const Estate = require('../models/estate');

// Créer un nouveau bien immobilier
exports.createEstate = async (req, res) => {
  try {
    const estateData = req.body;
    const estate = await Estate.create(estateData);
    return res.status(201).json(estate);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création du bien immobilier.' });
  }
};

// Obtenir tous les biens immobiliers
exports.getAllEstates = async (req, res) => {
  try {
    const estates = await Estate.findAll();
    return res.status(200).json(estates);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des biens immobiliers.' });
  }
};

// Obtenir un bien immobilier par son ID
exports.getEstateById = async (req, res) => {
  try {
    const { estateId } = req.params;
    const estate = await Estate.findByPk(estateId);
    
    if (!estate) {
      return res.status(404).json({ error: 'Bien immobilier non trouvé.' });
    }
    
    return res.status(200).json(estate);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération du bien immobilier.' });
  }
};

// Mettre à jour un bien immobilier
exports.updateEstate = async (req, res) => {
  try {
    const { estateId } = req.params;
    const estateData = req.body;
    const estate = await Estate.findByPk(estateId);
    
    if (!estate) {
      return res.status(404).json({ error: 'Bien immobilier non trouvé.' });
    }
    
    // Mettez à jour les attributs du bien immobilier avec les données de la requête
    Object.assign(estate, estateData);
    
    await estate.save();
    
    return res.status(200).json(estate);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour du bien immobilier.' });
  }
};

// Supprimer un bien immobilier
exports.deleteEstate = async (req, res) => {
  try {
    const { estateId } = req.params;
    const estate = await Estate.findByPk(estateId);
    
    if (!estate) {
      return res.status(404).json({ error: 'Bien immobilier non trouvé.' });
    }
    
    await estate.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression du bien immobilier.' });
  }
};
