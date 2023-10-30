const Category = require('../models/category');

// Créer une nouvelle catégorie
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const category = await Category.create({ name, description });
    console.log(category);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création de la catégorie.' });
  }
};

// Obtenir toutes les catégories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des catégories.' });
  }
};

// Obtenir une catégorie par son ID
exports.getCategoryById = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByPk(categoryId);
    
    if (!category) {
      return res.status(404).json({ error: 'Catégorie non trouvée.' });
    }
    
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération de la catégorie.' });
  }
};

// Mettre à jour une catégorie
exports.updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;
    const category = await Category.findByPk(categoryId);
    
    if (!category) {
      return res.status(404).json({ error: 'Catégorie non trouvée.' });
    }
    
    category.name = name;
    category.description = description;
    await category.save();
    
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour de la catégorie.' });
  }
};

// Supprimer une catégorie
exports.deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByPk(categoryId);
    
    if (!category) {
      return res.status(404).json({ error: 'Catégorie non trouvée.' });
    }
    
    await category.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression de la catégorie.' });
  }
};
