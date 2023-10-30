const Category = require('../models/category');

/**
 * @swagger
 * components:
 *   schemas:
 *     Categories:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Action
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date of category was added
 *       example:
 *         id: d5fE_asz
 *         name: duplex
 *         author: maison de reve
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
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
