const Tag = require('../models/tag');

// Créer un nouveau tag
exports.createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const tag = await Tag.create({ name });
    return res.status(201).json(tag);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création du tag.' });
  }
};

// Obtenir tous les tags
exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    return res.status(200).json(tags);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des tags.' });
  }
};

// Obtenir un tag par son ID
exports.getTagById = async (req, res) => {
  try {
    const { tagId } = req.params;
    const tag = await Tag.findByPk(tagId);
    
    if (!tag) {
      return res.status(404).json({ error: 'Tag non trouvé.' });
    }
    
    return res.status(200).json(tag);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération du tag.' });
  }
};

// Mettre à jour un tag
exports.updateTag = async (req, res) => {
  try {
    const { tagId } = req.params;
    const { name } = req.body;
    const tag = await Tag.findByPk(tagId);
    
    if (!tag) {
      return res.status(404).json({ error: 'Tag non trouvé.' });
    }
    
    tag.name = name;
    await tag.save();
    
    return res.status(200).json(tag);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour du tag.' });
  }
};

// Supprimer un tag
exports.deleteTag = async (req, res) => {
  try {
    const { tagId } = req.params;
    const tag = await Tag.findByPk(tagId);
    
    if (!tag) {
      return res.status(404).json({ error: 'Tag non trouvé.' });
    }
    
    await tag.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression du tag.' });
  }
};
