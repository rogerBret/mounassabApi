
const Action = require('../models/action');

// Créer une nouvelle action
exports.createAction = async (req, res) => {
  try {
    const { name, description } = req.body;
    const action = await Action.create({ name, description });
    return res.status(201).json(action);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création de l\'action.' });
  }
};

// Obtenir toutes les actions
exports.getAllActions = async (req, res) => {
  try {
    const actions = await Action.findAll();
    return res.status(200).json(actions);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des actions.' });
  }
};

// Obtenir une action par son ID
exports.getActionById = async (req, res) => {
  try {
    const { actionId } = req.params;
    const action = await Action.findByPk(actionId);
    
    if (!action) {
      return res.status(404).json({ error: 'Action non trouvée.' });
    }
    
    return res.status(200).json(action);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération de l\'action.' });
  }
};

// Mettre à jour une action
exports.updateAction = async (req, res) => {
  try {
    const { actionId } = req.params;
    const { name, description } = req.body;
    const action = await Action.findByPk(actionId);
    
    if (!action) {
      return res.status(404).json({ error: 'Action non trouvée.' });
    }
    
    action.name = name;
    action.description = description;
    await action.save();
    
    return res.status(200).json(action);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'action.' });
  }
};

// Supprimer une action
exports.deleteAction = async (req, res) => {
  try {
    const { actionId } = req.params;
    const action = await Action.findByPk(actionId);
    
    if (!action) {
      return res.status(404).json({ error: 'Action non trouvée.' });
    }
    
    await action.destroy();
    
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression de l\'action.' });
  }
};
