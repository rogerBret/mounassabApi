const User = require('../models/user');

// Créer un nouvel utilisateur
exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.create(userData);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur.' });
  }
};

// Obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
};

// Obtenir un utilisateur par son ID
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur.' });
  }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = req.body;
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    
    // Mettez à jour les attributs de l'utilisateur avec les données de la requête
    Object.assign(user, userData);
    
    await user.save();
    
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur.' });
  }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    
    await user.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur.' });
  }
};
