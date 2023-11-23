// Appel du modèle
const Recette = require('../models/Recette.js');

// Afficher toutes les recettes
const getRecettes = (req, res) => {
    Recette.find()
        .then(recettes => res.status(200).json(recettes))
        .catch(err => res.status(404).json({ notFound: 'Recette non trouvée' }));
};

// Afficher une recette en fonction de l'id
const getRecetteById = (req, res) => {
    Recette.findById(req.params.id)
        .then(recette => res.status(200).json(recette))
        .catch(err => res.status(404).json({ notFound: 'Recette non trouvée' }));
};

// Créer une nouvelle recette
const createRecette = (req, res) => {
    const nouvelleRecette = new Recette({
        details: req.body.details,
    });

    nouvelleRecette.save()
        .then(recette => res.status(201).json(recette))
        .catch(err => res.status(400).json({ error: 'Impossible de créer la recette' }));
};

// Modifier une recette en fonction de l'id
const updateRecette = (req, res) => {
    Recette.findByIdAndUpdate(req.params.id, { details: req.body.details }, { new: true })
        .then(recette => res.status(200).json(recette))
        .catch(err => res.status(404).json({ notFound: 'Recette non trouvée' }));
};

// Supprimer une recette en fonction de l'id
const deleteRecette = (req, res) => {
    Recette.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(404).json({ notFound: 'Recette non trouvée' }));
};

// Export des fonctions
module.exports = { getRecettes, getRecetteById, createRecette, updateRecette, deleteRecette };
