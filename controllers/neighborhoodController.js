const Neighborhood = require('../models/neighborhood');

// Créer un nouveau quartier
exports.createNeighborhood = async (req, res) => {
  try {
    const neighborhoodData = req.body;
    const neighborhood = await Neighborhood.create(neighborhoodData);
    return res.status(201).json(neighborhood);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création du quartier.' });
  }
};

// Obtenir tous les quartiers
exports.getAllNeighborhoods = async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.findAll();
    return res.status(200).json(neighborhoods);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des quartiers.' });
  }
};

// Obtenir un quartier par son ID
exports.getNeighborhoodById = async (req, res) => {
  try {
    const { neighborhoodId } = req.params;
    const neighborhood = await Neighborhood.findByPk(neighborhoodId);
    
    if (!neighborhood) {
      return res.status(404).json({ error: 'Quartier non trouvé.' });
    }
    
    return res.status(200).json(neighborhood);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération du quartier.' });
  }
};

// Mettre à jour un quartier
exports.updateNeighborhood = async (req, res) => {
  try {
    const { neighborhoodId } = req.params;
    const neighborhoodData = req.body;
    const neighborhood = await Neighborhood.findByPk(neighborhoodId);
    
    if (!neighborhood) {
      return res.status(404).json({ error: 'Quartier non trouvé.' });
    }
    
    // Mettez à jour les attributs du quartier avec les données de la requête
    Object.assign(neighborhood, neighborhoodData);
    
    await neighborhood.save();
    
    return res.status(200).json(neighborhood);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour du quartier.' });
  }
};

// Supprimer un quartier
exports.deleteNeighborhood = async (req, res) => {
  try {
    const { neighborhoodId } = req.params;
    const neighborhood = await Neighborhood.findByPk(neighborhoodId);
    
    if (!neighborhood) {
      return res.status(404).json({ error: 'Quartier non trouvé.' });
    }
    
    await neighborhood.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression du quartier.' });
  }
};
