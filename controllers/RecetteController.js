// Appel du modèle
const Recette = require('../chemin/vers/votre/model/Recette.js');

// Afficher toutes les recettes
const getRecettes = (req, res) => {
    Recette.find()
        .then(recettes => res.status(200).json(recettes))
        .catch(err => res.status(404).json({ notFound: 'Recette non trouvée' }));
};

// Export des fonctions
module.exports = { getRecettes };
