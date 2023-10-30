const City = require('../models/city');

// Créer une nouvelle ville
exports.createCity = async (req, res) => {
  try {
    const cityData = req.body;
    const city = await City.create(cityData);
    return res.status(201).json(city);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création de la ville.' });
  }
};

// Obtenir toutes les villes
exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    return res.status(200).json(cities);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des villes.' });
  }
};

// Obtenir une ville par son ID
exports.getCityById = async (req, res) => {
  try {
    const { cityId } = req.params;
    const city = await City.findByPk(cityId);
    
    if (!city) {
      return res.status(404).json({ error: 'Ville non trouvée.' });
    }
    
    return res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération de la ville.' });
  }
};

// Mettre à jour une ville
exports.updateCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    const cityData = req.body;
    const city = await City.findByPk(cityId);
    
    if (!city) {
      return res.status(404).json({ error: 'Ville non trouvée.' });
    }
    
    // Mettez à jour les attributs de la ville avec les données de la requête
    Object.assign(city, cityData);
    
    await city.save();
    
    return res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour de la ville.' });
  }
};

// Supprimer une ville
exports.deleteCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    const city = await City.findByPk(cityId);
    
    if (!city) {
      return res.status(404).json({ error: 'Ville non trouvée.' });
    }
    
    await city.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression de la ville.' });
  }
};
